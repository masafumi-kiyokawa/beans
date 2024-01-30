import React, { useState } from "react";
import type { ReactNode } from "react";
import { Recipe } from "./types/Recipe";
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
  bean_id: string | undefined;
}

const RecipeForm = ({ bean_id }: Props): ReactNode => {
  const {
    getInputProps: getBeanQuantityInputProps,
    getIncrementButtonProps: getBeanQuantityIncrementButtonProps1,
    getDecrementButtonProps: getBeanQuantityDecrementButtonProps1,
  } = useNumberInput({
    step: 0.1,
    defaultValue: 16.0,
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
    step: 0.1,
    defaultValue: 16.0,
    min: 5,
    max: 50,
    precision: 1,
  });

  const temperetureInput = getTemperetureInputProps();
  const temperetureInc = getTemperetureIncrementButtonProps1();
  const temperetureDec = getTemperetureDecrementButtonProps1();

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
      .post("/api/recipes", { bean_id: bean_id, recipe: data })
      .then((res) => {
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
            <HStack maxW="320px">
              <InputGroup>
                <Button {...beanQuantityInc} mr={5}>
                  +
                </Button>
                <Controller
                  name="bean_quantity"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Input {...field} {...beanQuantityInput} />
                      <InputRightAddon>g</InputRightAddon>
                    </>
                  )}
                />
                <Button {...beanQuantityDec} ml={5}>
                  -
                </Button>
              </InputGroup>
            </HStack>
          </FormControl>

          {errors.bean_quantity && (
            <Text fontSize="sm" color="red">
              {errors.bean_quantity?.message as ReactNode}
            </Text>
          )}
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
              defaultValue=""
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
            <FormLabel htmlFor="tempeleture">Water Tempeleture</FormLabel>
            <HStack maxW="320px">
              <InputGroup>
                <Button {...inc1} mr={5}>
                  +
                </Button>
                <Controller
                  name="tempeleture"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Input {...field} {...input1} />
                      <InputRightAddon>°C</InputRightAddon>
                    </>
                  )}
                />
                <Button {...dec1} ml={5}>
                  -
                </Button>
              </InputGroup>
            </HStack>
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="water_quantity">Title</FormLabel>
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
          <FormLabel htmlFor="note">Note</FormLabel>
          <Controller
            name="note"
            control={control}
            defaultValue=""
            render={({ field }) => <Textarea {...field} id="note" />}
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
