import React from "react";
import type { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
import useBeans from "../hooks/useBeans";
import BeanCard from "./BeansCard";
import BeansCardContainer from "./BeansCardContainer";
import BeansCardSkeleton from "./BeansCardSkeleton";
import type { BeanQuery } from "../App";

interface Props {
  beanQuery: BeanQuery;
}

const BeansGrid = ({ beanQuery }: Props): ReactNode => {
  const { data, error, isLoading } = useBeans(beanQuery);
  const skeletons = [1, 2, 3];

  if (error) return <Text>{error}</Text>;
  return (
    <>
      {isLoading &&
        skeletons.map((skeletons) => (
          <BeansCardContainer key={skeletons}>
            <BeansCardSkeleton />
          </BeansCardContainer>
        ))}
      {data.map((bean) => (
        <BeansCardContainer key={bean.id}>
          <BeanCard bean={bean} />
        </BeansCardContainer>
      ))}
    </>
  );
};

export default BeansGrid;
