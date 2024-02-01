import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Bean } from "../types/Bean";
import { useBeanQueryContext } from "./BeanQueryProvider";
import axios, { CanceledError } from "axios";

interface BeansContextType {
  beans: Bean[];
  setBeans: React.Dispatch<React.SetStateAction<Bean[]>>;
  error: string | any;
  setError: React.Dispatch<React.SetStateAction<string | any>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BeansContext = createContext<BeansContextType | undefined>(
  undefined
);

export function useBeansContext(): BeansContextType {
  const beansContext = useContext(BeansContext);

  if (beansContext === undefined) {
    throw new Error("useBeansContext must be used with a BeansContext");
  }

  return beansContext;
}

interface Props {
  children: ReactNode;
}

interface FetchResponce {
  count: number;
  results: Bean[];
}

export const BeansProvider = ({ children }: Props): ReactNode => {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [error, setError] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);

  const { beanQuery } = useBeanQueryContext();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<FetchResponce>("/api/beans", {
        params: {
          country: beanQuery.country,
          search_text: beanQuery.searchText,
        },
      })
      .then((res) => {
        setBeans(res.data.results);
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
  }, [beanQuery]);

  return (
    <BeansContext.Provider
      value={{ beans, setBeans, error, setError, isLoading, setIsLoading }}
    >
      {children}
    </BeansContext.Provider>
  );
};
