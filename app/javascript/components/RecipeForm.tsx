import React from "react";
import type { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recipeValidationSchema } from "../validation/recipeVaildationSchema";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Stack,
  Text,
  Textarea,
  useNumberInput,
} from "@chakra-ui/react";
import grind_sizes from "../data/grind_sizes";

interface Props {
  beanId: string | undefined;
}

const RecipeForm = ({ beanId }: Props): ReactNode => {
  const {
    getInputProps: getBeanQuantityInputProps,
    getIncrementButtonProps: getBeanQuantityIncrementButtonProps1,
    getDecrementButtonProps: getBeanQuantityDecrementButtonProps1,
  } = useNumberInput({
    step: 0.1,
    defaultValue: 16,
    min: 5,
    max: 50,
    precision: 1,
  });

  const beanQuantityInput = getBeanQuantityInputProps();
  const beanQuantityInc = getBeanQuantityIncrementButtonProps1();
  const beanQuantityDec = getBeanQuantityDecrementButtonProps1();

  const {
    getInputProps: getTemperetureInputProps,
    getIncrementButtonProps: getTemperetureIncrementButtonProps1,
    getDecrementButtonProps: getTemperetureDecrementButtonProps1,
  } = useNumberInput({
    step: 1,
    defaultValue: 90,
    min: 0,
    max: 100,
    precision: 0,
  });

  const temperetureInput = getTemperetureInputProps();
  const temperetureInc = getTemperetureIncrementButtonProps1();
  const temperetureDec = getTemperetureDecrementButtonProps1();

  const {
    getInputProps: getWaterQuantityInputProps,
    getIncrementButtonProps: getWaterQuantityIncrementButtonProps1,
    getDecrementButtonProps: getWaterQuantityDecrementButtonProps1,
  } = useNumberInput({
    step: 10,
    defaultValue: 250,
    min: 50,
    max: 1000,
    precision: 0,
  });

  const waterQuantityInput = getWaterQuantityInputProps();
  const waterQuantityInc = getWaterQuantityIncrementButtonProps1();
  const waterQuantityDec = getWaterQuantityDecrementButtonProps1();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Recipe>({
    mode: "onChange",
    resolver: zodResolver(recipeValidationSchema),
  });
  const onSubmit = (data: Recipe): void => {
    axios
      .post("/api/recipes", { beanId, recipe: data })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form action="post" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing="24px">
        <Box>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="title"
                  placeholder="Please enter recipe title"
                />
              )}
            />
            {errors.title && (
              <Text fontSize="sm" color="red">
                {errors.title?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.bean_quantity}>
            <FormLabel htmlFor="bean_quantity">Bean Quantity</FormLabel>
            <Controller
              name="bean_quantity"
              control={control}
              defaultValue={16.0}
              render={({ field }) => (
                <HStack maxW="240px">
                  <InputGroup>
                    <Button {...beanQuantityInc} mr={5}>
                      +
                    </Button>
                    <Input
                      {...field}
                      {...beanQuantityInput}
                      id="bean_quantity"
                    />
                    <InputRightAddon>g</InputRightAddon>
                    <Button {...beanQuantityDec} ml={5}>
                      -
                    </Button>
                  </InputGroup>
                </HStack>
              )}
            />
            {errors.bean_quantity && (
              <Text fontSize="sm" color="red">
                {errors.bean_quantity?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.grind}>
            <FormLabel htmlFor="grind">Grind Size</FormLabel>
            <Controller
              name="grind"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select {...field} id="grind">
                  <option value=""></option>
                  {grind_sizes.map(
                    (value): ReactNode => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    )
                  )}
                </Select>
              )}
            />
            {errors.grind && (
              <Text fontSize="sm" color="red">
                {errors.grind?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.duration}>
            <FormLabel htmlFor="duration">Duration</FormLabel>
            <Controller
              name="duration"
              control={control}
              defaultValue="00:03:00"
              render={({ field }) => (
                <Input
                  {...field}
                  id="duration"
                  placeholder="Please enter duration"
                  type="time"
                  step="1"
                />
              )}
            />
            {errors.duration && (
              <Text fontSize="sm" color="red">
                {errors.duration?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.tempereture}>
            <FormLabel htmlFor="tempereture">Water Tempeleture</FormLabel>
            <Controller
              name="tempereture"
              control={control}
              defaultValue={100}
              render={({ field }) => (
                <HStack maxW="240px">
                  <InputGroup>
                    <Button {...temperetureInc} mr={5}>
                      +
                    </Button>
                    <Input {...field} {...temperetureInput} id="tempereture" />
                    <InputRightAddon>°C</InputRightAddon>
                    <Button {...temperetureDec} ml={5}>
                      -
                    </Button>
                  </InputGroup>
                </HStack>
              )}
            />
            {errors.tempereture && (
              <Text fontSize="sm" color="red">
                {errors.tempereture?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.water_quantity}>
            <FormLabel htmlFor="water_quantity">Water Quantity</FormLabel>
            <Controller
              name="water_quantity"
              control={control}
              defaultValue={250}
              render={({ field }) => (
                <HStack maxW="240px">
                  <InputGroup>
                    <Button {...waterQuantityInc} mr={5}>
                      +
                    </Button>
                    <Input
                      {...field}
                      {...waterQuantityInput}
                      id="water_quantity"
                    />
                    <InputRightAddon>g</InputRightAddon>
                    <Button {...waterQuantityDec} ml={5}>
                      -
                    </Button>
                  </InputGroup>
                </HStack>
              )}
            />
            {errors.water_quantity && (
              <Text fontSize="sm" color="red">
                {errors.water_quantity?.message as ReactNode}
              </Text>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormLabel htmlFor="note">Note</FormLabel>
          <Controller
            name="note"
            control={control}
            defaultValue=""
            render={({ field }) => <Textarea {...field} id="note" h={200} />}
          />
          {errors.note && <Text>{errors.note?.message}</Text>}
        </Box>
        <Box mt={3}>
          <Button
            variant="outline"
            mr={3}
            onClick={() => {
              reset();
            }}
          >
            Clear
          </Button>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default RecipeForm;
