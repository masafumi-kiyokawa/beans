import axios from "axios";
import type { Bean } from "../types/Bean";
import type { BeanQuery } from "../types/BeanQuery";

interface FetchResponce {
  count: number;
  results: Bean[];
}

export const fetchBeansFunction = async (beanQuery: BeanQuery) => {
  try {
    const response = await axios.get<FetchResponce>("/api/beans", {
      params: {
        country: beanQuery.country,
        search_text: beanQuery.searchText,
      },
    });
    console.log(response.data.results);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch beans.");
  }
};
