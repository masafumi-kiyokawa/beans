import { ReactNode, createContext, useContext, useState } from "react";
import { BeanQuery } from "../types/BeanQuery";

interface BeanQueryContextType {
  beanQuery: BeanQuery;
  setBeanQuery: React.Dispatch<React.SetStateAction<BeanQuery>>;
}

export const BeanQueryContext = createContext<BeanQueryContextType | undefined>(
  undefined
);

export function useBeanQueryContext() {
  const beanQueryContext = useContext(BeanQueryContext);

  if (beanQueryContext === undefined) {
    throw new Error("useBeanQueryContext must be used with a BeanQueryContext");
  }

  return beanQueryContext;
}

interface Props {
  children: ReactNode;
}

export const BeanQueryProvider = ({ children }: Props) => {
  const [beanQuery, setBeanQuery] = useState<BeanQuery>({
    country: "",
    searchText: "",
  });
  return (
    <BeanQueryContext.Provider value={{ beanQuery, setBeanQuery }}>
      {children}
    </BeanQueryContext.Provider>
  );
};
