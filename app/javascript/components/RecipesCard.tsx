import React from "react";
import type { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  recipe: Recipe;
}
const RecipesCard = ({ recipe }: Props): ReactNode => {
  return (
    <Card variant="outline">
      <CardHeader>
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
        <Text>{recipe.note}</Text>
      </CardBody>
    </Card>
  );
};

export default RecipesCard;
