import React from "react";
import { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import { Flex, Heading, Divider } from "@chakra-ui/react";
import { data } from "autoprefixer";
import DeleteRecipeButton from "./buttons/DeleteRecipeButton";
import EditRecipeButton from "./buttons/EditRecipeButton";

interface Props {
  recipe: Recipe;
}
const RecipeInfo = ({ recipe }: Props): ReactNode => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mx={5}
        mt={20}
        mb={5}
        px="16px"
      >
        <Heading fontSize="3xl">{recipe.title}</Heading>
        <Flex justify="flex-end">
          <EditRecipeButton id={recipe.id} />
          <DeleteRecipeButton recipe={recipe} />
        </Flex>
      </Flex>
      <Divider mb={5} />
    </>
  );
};

export default RecipeInfo;
