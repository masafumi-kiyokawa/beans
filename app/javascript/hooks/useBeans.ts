import { useBeansContext } from "../components/contexts/BeansProvider";
import { Bean } from "../components/types/Bean";
import { BeanQuery } from "../components/types/BeanQuery";
import useData from "./useData";

const useBeans = (beanQuery: BeanQuery) => {
  const { data, error, isLoading } = useData<Bean>(
    "/api/beans",
    {
      params: {
        country: beanQuery.country,
        search_text: beanQuery.searchText,
      },
    },
    [beanQuery]
  );

  console.log("api called");
  return { data, error, isLoading };
};

export default useBeans;
