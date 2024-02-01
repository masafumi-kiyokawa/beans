import React from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useRecipesContext } from "./contexts/RecipesProvider";
import type { Recipe } from "./types/Recipe";

const RecipeDetail = (): ReactNode => {
  const { id } = useParams();
  const { recipes } = useRecipesContext();

  const recipe = recipes.find((recipe: Recipe) => recipe.id === id);
  if (recipe === undefined) return <div>Not Found</div>;

  return <div>{recipe.title}</div>;
};

export default RecipeDetail;
