import React from "react";
import { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import {
  Flex,
  Heading,
  Divider,
  Box,
  Stack,
  Text,
  StackDivider,
  Link as ChakraLink,
  Show,
} from "@chakra-ui/react";
import DeleteRecipeButton from "./buttons/DeleteRecipeButton";
import EditRecipeButton from "./buttons/EditRecipeButton";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  recipe: Recipe;
}
const RecipeInfo = ({ recipe }: Props): ReactNode => {
  const formatDuration = (duration: string): string => {
    const date = new Date(duration);
    const hours = String(date.getUTCHours());
    const minutes = String(date.getUTCMinutes());
    const seconds = String(date.getUTCSeconds());
    return `${hours}h ${minutes}min ${seconds}sec`;
  };
  const formatDate = (target: string): string => {
    const date = new Date(target);
    const year = String(date.getUTCFullYear());
    const month = String(date.getUTCMonth());
    const day = String(date.getUTCDay());
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      <Box h="60px" justifyContent="">
        <ChakraLink
          color="gray.400"
          as={ReactRouterLink}
          to={`/beans/${recipe.bean_id}`}
          fontWeight="bold"
          position="relative"
          top="40px"
        >
          {"<< "}Back to previous page
        </ChakraLink>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="20px"
        mb="20px"
      >
        <Heading size="xl">{recipe.title}</Heading>
        <Flex justify="flex-end">
          <EditRecipeButton id={recipe.id} />
          <DeleteRecipeButton recipe={recipe} />
        </Flex>
      </Flex>
      <Divider mb={5} />
      <Flex direction={{ base: "column", md: "row" }}>
        <Stack divider={<StackDivider />} spacing="4" flex={2} mr={4}>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Title
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.title}
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Grind Size
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.grind}
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Bean Quantity
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.bean_quantity}g
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Water Tempereture
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.tempereture}°C
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Water Quantity
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.water_quantity}g
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Duration
            </Heading>
            <Text pt="2" fontSize="md">
              {formatDuration(recipe.duration)}
            </Text>
          </Box>
        </Stack>
        <Stack divider={<StackDivider />} spacing="4" flex={3} mr={4}>
          <Box>
            <Show below="md">
              <Divider my="16px"></Divider>
            </Show>
            <Heading size="sm" textTransform="uppercase">
              Created At
            </Heading>
            <Text pt="2" fontSize="md">
              {formatDate(recipe.created_at)}
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Updated At
            </Heading>
            <Text pt="2" fontSize="md">
              {formatDate(recipe.updated_at)}
            </Text>
          </Box>
          <Box>
            <Heading size="sm" textTransform="uppercase">
              Note
            </Heading>
            <Text pt="2" fontSize="md">
              {recipe.note}
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default RecipeInfo;
