import React from "react";
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
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import grind_sizes from "../data/grind_sizes";
import MobileNumberInput from "./MobileNumberInput";

interface Props {
  bean_id: string | undefined;
}

const RecipeForm = ({ bean_id }: Props): ReactNode => {
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
    <form action="post" onSubmit={handleSubmit(onSubmit)}>
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
        <MobileNumberInput />
      </Box>
      <Box>
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
    </form>
  );
};

export default RecipeForm;
