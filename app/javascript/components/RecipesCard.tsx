import React from "react";
import type { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Link as ChakraLink,
  Box,
  Heading,
  Stack,
  StackDivider,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  recipe: Recipe;
}

const RecipesCard = ({ recipe }: Props): ReactNode => {
  const formatDuration = (duration: string): string => {
    const date = new Date(duration);
    const hours = String(date.getUTCHours());
    const minutes = String(date.getUTCMinutes());
    const seconds = String(date.getUTCSeconds());
    return `${hours}h ${minutes}min ${seconds}sec`;
  };
  return (
    <Card>
      <CardHeader pb={0}>
        <ChakraLink
          as={ReactRouterLink}
          to={`/recipes/${recipe.id}`}
          fontSize="2xl"
          fontWeight="bold"
        >
          {recipe.title}
        </ChakraLink>
      </CardHeader>
      <CardBody>
        <Flex>
          <Stack divider={<StackDivider />} spacing="4" flex={2} mr={4}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Grind Size & Quantity
              </Heading>
              <Text pt="2" fontSize="sm">
                {recipe.grind} {recipe.bean_quantity}g
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Water Tempereture & Quantity
              </Heading>
              <Text pt="2" fontSize="sm">
                {recipe.tempereture}°C {recipe.water_quantity}g
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Duration
              </Heading>
              <Text pt="2" fontSize="sm">
                {formatDuration(recipe.duration)}
              </Text>
            </Box>
          </Stack>
          <Box flex={3} mr={4}>
            <Heading size="xs" textTransform="uppercase">
              Note
            </Heading>
            <Text pt="2" fontSize="sm">
              {recipe.note}
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default RecipesCard;
