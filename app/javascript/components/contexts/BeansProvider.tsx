import { ReactNode, createContext, useContext, useState } from "react";
import { Bean } from "../types/Bean";

interface BeansContextType {
  beans: Bean[];
  setBeans: React.Dispatch<React.SetStateAction<Bean[]>>;
}

export const BeansContext = createContext<BeansContextType | undefined>(
  undefined
);

export function useBeansContext() {
  const beansContext = useContext(BeansContext);

  if (beansContext === undefined) {
    throw new Error("useBeansContext must be used with a BeansContext");
  }

  return beansContext;
}

interface Props {
  children: ReactNode;
}

export const BeansProvider = ({ children }: Props) => {
  const [beans, setBeans] = useState<Bean[]>([]);

  return (
    <BeansContext.Provider value={{ beans, setBeans }}>
      {children}
    </BeansContext.Provider>
  );
};
