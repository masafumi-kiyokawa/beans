import { Box, Heading, Text, Wrap } from "@chakra-ui/react";
import useBeans from "../hooks/useBeans";
import BeanCard from "./BeansCard";
import BeansCardContainer from "./BeansCardContainer";
import BeansCardSkeleton from "./BeansCardSkeleton";
import { BeanQuery } from "../App";
import { Container } from "postcss";

interface Props {
  beanQuery: BeanQuery;
}

const BeansGrid = ({ beanQuery }: Props) => {
  const { data, error, isLoading } = useBeans(beanQuery);
  const skeletons = [1, 2, 3];

  if (error) return <Text>{error}</Text>;
  return (
    <>
      <Box h="3.5rem" m={5} display="flex" alignItems="flex-end">
        <Heading fontSize="2xl">{beanQuery.country} Beans</Heading>
      </Box>
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
