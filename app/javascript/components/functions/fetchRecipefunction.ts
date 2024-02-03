import axios from "axios";
import type { Recipe } from "../types/Recipe";

export const fetchRecipeFunction = async (id: string) => {
  try {
    const response = await axios.get<Recipe>(`/api/recipes/${id}`);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe.");
  }
};
