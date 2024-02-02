import React, { memo } from "react";
import type { ReactNode } from "react";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import RecipesCard from "./RecipesCard";
import RecipesCardContainer from "./RecipesCardContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipesFunction } from "./functions/fetchRecipesFunction";

interface Props {
  beanId: string;
}

const RecipesList = memo(({ beanId }: Props): ReactNode => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["recipes", beanId],
    queryFn: () => fetchRecipesFunction(beanId),
  });

  if (isError) return <Text>{error.message}</Text>;
  if (data === undefined) return <Text>Not Found</Text>;

  return (
    <Box>
      <Flex
        h="4.5rem"
        justifyContent="space-between"
        alignItems="center"
        mt={5}
      >
        <Heading fontSize="2xl">Recipes</Heading>
      </Flex>
      <Divider mb={5} />
      {isLoading && "Is Loading..."}
      {data.results.map((recipe) => (
        <RecipesCardContainer key={recipe?.id}>
          <RecipesCard recipe={recipe} />
        </RecipesCardContainer>
      ))}
    </Box>
  );
});

export default RecipesList;
