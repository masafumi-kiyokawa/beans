import React, { useEffect } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
  Box,
  Text,
  Input,
  HStack,
  useNumberInput,
  Center,
  InputGroup,
  InputRightAddon,
  Divider,
  Flex,
  Heading,
  Show,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useForm, Controller } from "react-hook-form";
import type { Recipe } from "./types/Recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { recipeValidationSchema } from "../validation/recipeVaildationSchema";
import grind_sizes from "../data/grind_sizes";

interface Props {
  recipe: Recipe;
}

const EditRecipe = ({ recipe }: Props): ReactNode => {
  const {
    getInputProps: getBeanQuantityInputProps,
    getIncrementButtonProps: getBeanQuantityIncrementButtonProps1,
    getDecrementButtonProps: getBeanQuantityDecrementButtonProps1,
    valueAsNumber: beanQuantityValueAsNumber,
  } = useNumberInput({
    step: 0.1,
    defaultValue: recipe.bean_quantity,
    min: 5,
    max: 50,
    precision: 1,
  });

  useEffect(() => {
    setValue("bean_quantity", beanQuantityValueAsNumber);
  }, [beanQuantityValueAsNumber]);

  const beanQuantityInput = getBeanQuantityInputProps();
  const beanQuantityInc = getBeanQuantityIncrementButtonProps1();
  const beanQuantityDec = getBeanQuantityDecrementButtonProps1();

  const {
    getInputProps: getTemperetureInputProps,
    getIncrementButtonProps: getTemperetureIncrementButtonProps1,
    getDecrementButtonProps: getTemperetureDecrementButtonProps1,
    valueAsNumber: temperetureValueAsNumber,
  } = useNumberInput({
    step: 1,
    defaultValue: recipe.tempereture,
    min: 0,
    max: 100,
    precision: 0,
  });

  useEffect(() => {
    setValue("tempereture", temperetureValueAsNumber);
  }, [temperetureValueAsNumber]);

  const temperetureInput = getTemperetureInputProps();
  const temperetureInc = getTemperetureIncrementButtonProps1();
  const temperetureDec = getTemperetureDecrementButtonProps1();

  const {
    getInputProps: getWaterQuantityInputProps,
    getIncrementButtonProps: getWaterQuantityIncrementButtonProps1,
    getDecrementButtonProps: getWaterQuantityDecrementButtonProps1,
    valueAsNumber: waterQuantityValueAsNumber,
  } = useNumberInput({
    step: 10,
    defaultValue: recipe.water_quantity,
    min: 50,
    max: 1000,
    precision: 0,
  });

  useEffect(() => {
    setValue("water_quantity", waterQuantityValueAsNumber);
  }, [waterQuantityValueAsNumber]);

  const waterQuantityInput = getWaterQuantityInputProps();
  const waterQuantityInc = getWaterQuantityIncrementButtonProps1();
  const waterQuantityDec = getWaterQuantityDecrementButtonProps1();

  const navigate = useNavigate();

  const formatDuration = (duration: string): string => {
    const date = new Date(duration);
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Recipe>({
    mode: "onChange",
    resolver: zodResolver(recipeValidationSchema),
  });
  const onSubmit = (data: Recipe): void => {
    axios
      .put(`/api/recipes/${recipe.id}`, { recipe: data })
      .then((res) => {
        navigate(`/recipes/${res.data?.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onCancel = () => {
    navigate(`/recipes/${recipe.id}`);
  };
  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex justifyContent="space-between" alignItems="center" mt={20} mb={5}>
        <Heading fontSize="3xl">{recipe.title}</Heading>
        <Flex justify="flex-end">
          <Show above="sm">
            <Button variant="outline" mr={4} onClick={onCancel} w="105px">
              Cancel
            </Button>
            <Button type="submit" variant="solid" w="105px">
              Submit
            </Button>
          </Show>
        </Flex>
      </Flex>
      <Divider mb={5} />
      <Stack spacing="24px">
        <Box>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Controller
              name="title"
              control={control}
              defaultValue={recipe.title}
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
            <FormLabel htmlFor="bean_quantity">Bean Quantity</FormLabel>{" "}
            <HStack maxW="240px">
              <InputGroup>
                <Button {...beanQuantityInc} mr={5}>
                  +
                </Button>
                <Controller
                  name="bean_quantity"
                  control={control}
                  defaultValue={Number(recipe.bean_quantity)}
                  render={({ field }) => (
                    <Input
                      {...field}
                      {...beanQuantityInput}
                      id="bean_quantity"
                    />
                  )}
                />
                <InputRightAddon>
                  <Center w="10px">g</Center>
                </InputRightAddon>
                <Button {...beanQuantityDec} ml={5}>
                  -
                </Button>
              </InputGroup>
            </HStack>
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
              defaultValue={recipe.grind}
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
              defaultValue={formatDuration(recipe.duration)}
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
            <FormLabel htmlFor="tempereture">Water Tempereture</FormLabel>
            <Controller
              name="tempereture"
              control={control}
              defaultValue={recipe.tempereture}
              render={({ field }) => (
                <HStack maxW="240px">
                  <InputGroup>
                    <Button {...temperetureInc} mr={5}>
                      +
                    </Button>
                    <Input {...field} {...temperetureInput} id="tempereture" />
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
              defaultValue={recipe.water_quantity}
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
            defaultValue={recipe.note}
            render={({ field }) => (
              <Textarea {...field} id="note" h={200} maxW="45em" />
            )}
          />
          {errors.note && <Text>{errors.note?.message}</Text>}
        </Box>
      </Stack>
      <Show below="sm">
        <Flex mt="24px" justify="flex-start">
          <Button variant="outline" mr={4} onClick={onCancel} w="105px">
            Cancel
          </Button>
          <Button type="submit" w="105px">
            Submit
          </Button>
        </Flex>
      </Show>
    </form>
  );
};

export default EditRecipe;
