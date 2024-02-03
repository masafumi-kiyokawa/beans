import axios from "axios";
import type { Bean } from "../types/Bean";

export const fetchBeanFunction = async (id: string) => {
  try {
    const response = await axios.get<Bean>(`/api/beans/${id}`);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch bean.");
  }
};
