import axios, { CanceledError } from "axios";
import React, { memo, useContext, useEffect, useState } from "react";
import { Recipe } from "./types/Recipe";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import RecipesCard from "./RecipesCard";
import RecipesCardContainer from "./RecipesCardContainer";
import { log } from "console";
import useRecipe from "./hooks/useRecipe";
import { RecipesContext, useRecipesContext } from "./contexts/RecipesProvider";

interface Props {
  bean_id: string;
}

interface FetchResponce {
  count: number;
  results: Recipe[];
}

const RecipesList = memo(({ bean_id }: Props) => {
  const { recipes, setRecipes } = useRecipesContext();
  const [error, setError] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<FetchResponce>("/api/recipes", {
        params: { bean_id: bean_id },
        signal: controller.signal,
      })
      .then((res) => {
        setRecipes(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [bean_id]);

  if (error) return <Text>{error}</Text>;
  if (recipes.length === 0) return <Text>Not Found</Text>;

  return (
    <>
      <Flex
        h="4.5rem"
        justifyContent="space-between"
        alignItems="center"
        mx={5}
        mt={5}
        p={1}
      >
        <Heading fontSize="2xl">Recipes</Heading>
      </Flex>
      {isLoading && "Is Loading..."}
      {recipes.map((recipe) => (
        <RecipesCardContainer key={recipe?.id}>
          <RecipesCard recipe={recipe} />
        </RecipesCardContainer>
      ))}
    </>
  );
});

export default RecipesList;
