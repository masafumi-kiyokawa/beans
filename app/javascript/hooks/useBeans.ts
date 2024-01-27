import { BeanQuery } from "../App";
import useData from "./useData";

export interface Bean {
  id: string;
  name: string;
  country: string;
  variety: string;
  process: string;
  producer: string;
  roaster: string;
  roast_level: string;
  note: string;
}

const useBeans = (beanQuery: BeanQuery) =>
  useData<Bean>(
    "/api/beans",
    {
      params: {
        country: beanQuery.country,
        search_text: beanQuery.searchText,
      },
    },
    [beanQuery]
  );

export default useBeans;
