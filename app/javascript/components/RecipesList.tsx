import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Recipe } from "./types/Recipe";
import { Text } from "@chakra-ui/react";

interface Props {
  bean_id: string;
}

interface FetchResponce {
  count: number;
  results: Recipe[];
}

const RecipesList = ({ bean_id }: Props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<FetchResponce>("/api/recipes", {
        params: { bean_id: bean_id },
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

  return <div>{recipes.length}</div>;
};

export default RecipesList;
