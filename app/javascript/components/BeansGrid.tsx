import React, { useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import useBeans from "../hooks/useBeans";
import BeanCard from "./BeansCard";
import BeansCardContainer from "./BeansCardContainer";
import BeansCardSkeleton from "./BeansCardSkeleton";
import { useBeanQueryContext } from "./contexts/BeanQueryProvider";
import { useBeansContext } from "./contexts/BeansProvider";

const BeansGrid = (): ReactNode => {
  const { beanQuery, setBeanQuery } = useBeanQueryContext();
  const { beans, setBeans } = useBeansContext();
  const { data, error, isLoading } = useBeans(beanQuery);
  const skeletons = [1, 2, 3];

  useEffect(() => {
    setBeans(data);
  }, [data]);

  if (error) return <Text>{error}</Text>;
  return (
    <>
      <Flex
        h="4.5rem"
        justifyContent="space-between"
        alignItems="center"
        mx={5}
        mt={5}
        p={1}
      >
        <Heading fontSize="2xl">{beanQuery.country} Beans</Heading>
      </Flex>
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
