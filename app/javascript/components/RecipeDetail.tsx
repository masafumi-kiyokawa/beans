import React from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeFunction } from "./functions/fetchRecipefunction";
import { Flex, Heading } from "@chakra-ui/react";

const RecipeDetail = (): ReactNode => {
  const { id } = useParams();
  if (id === undefined) return <div>error</div>;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeFunction(id),
  });
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>error</div>;

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
        <Heading fontSize="3xl">{data.title}</Heading>
      </Flex>
    </>
  );
};

export default RecipeDetail;
