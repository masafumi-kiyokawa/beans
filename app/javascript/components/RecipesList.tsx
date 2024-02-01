import React, { memo, useEffect, useState } from "react";
import type { ReactNode } from "react";
import axios, { CanceledError } from "axios";
import type { Recipe } from "./types/Recipe";
import { Flex, Heading, Text } from "@chakra-ui/react";
import RecipesCard from "./RecipesCard";
import RecipesCardContainer from "./RecipesCardContainer";
import { useRecipesContext } from "./contexts/RecipesProvider";

interface Props {
  beanId: string;
}

interface FetchResponce {
  count: number;
  results: Recipe[];
}

const RecipesList = memo(({ beanId }: Props): ReactNode => {
  const { recipes, setRecipes } = useRecipesContext();
  const [error, setError] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<FetchResponce>("/api/recipes", {
        params: { bean_id: beanId },
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
  }, [beanId]);

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
