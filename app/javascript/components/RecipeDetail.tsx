import React from "react";
import type { ReactNode } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeFunction } from "./functions/fetchRecipefunction";
import EditRecipe from "./EditRecipe";
import RecipeInfo from "./RecipeInfo";
import { Box } from "@chakra-ui/react";

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
    <Box p="16px">
      <Routes>
        <Route path="/edit" element={<EditRecipe recipe={data} />} />
        <Route path="/*" element={<RecipeInfo recipe={data} />} />
      </Routes>
    </Box>
  );
};

export default RecipeDetail;
