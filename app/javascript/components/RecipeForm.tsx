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
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
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
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Recipe>({
    mode: "onChange",
    resolver: zodResolver(recipeValidationSchema),
  });
  const onSubmit = async (data: Recipe) => {
    try {
      await axios
        .post("/api/recipes", { bean_id: beanId, recipe: data })
        .then((res) => {
          console.log(res.data);
          reset();
          navigate(`/recipes/${res.data?.id}`);
        });
    } catch {
      throw new Error("Failed to create bean.");
    }
  };
  return (
    <Box>
      <Flex
        h="4.5rem"
        justifyContent="space-between"
        alignItems="center"
        mt={5}
      >
        <Heading fontSize="2xl">Add a new Recipe</Heading>
      </Flex>
      <Divider mb={5} />
      <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    maxW="45em"
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
                      <InputRightAddon>
                        <Center w="10px">g</Center>
                      </InputRightAddon>
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
                  <Select {...field} id="grind" maxW="240px">
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
                    maxW="240px"
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
                      <Input
                        {...field}
                        {...temperetureInput}
                        id="tempereture"
                      />
                      <InputRightAddon>
                        <Center w="10px">°C</Center>
                      </InputRightAddon>
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
                      <InputRightAddon>
                        <Center w="10px">g</Center>
                      </InputRightAddon>
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
              render={({ field }) => (
                <Textarea {...field} id="note" h={200} maxW="45em" />
              )}
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
            <Button type="submit" variant="solid">
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default RecipeForm;
