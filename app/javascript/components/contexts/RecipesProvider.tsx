import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Recipe } from "../types/Recipe";
import axios, { CanceledError } from "axios";

interface RecipesContextType {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

export const RecipesContext = createContext<RecipesContextType | undefined>(
  undefined
);

export function useRecipesContext() {
  const recipesContext = useContext(RecipesContext);

  if (recipesContext === undefined) {
    throw new Error("useRecipesContext must be used with a RecipesContext");
  }

  return recipesContext;
}

interface Props {
  children: ReactNode;
}

export const RecipesProvider = ({ children }: Props): ReactNode => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
