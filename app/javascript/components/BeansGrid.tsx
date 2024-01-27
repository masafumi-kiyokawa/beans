import { Text } from "@chakra-ui/react";
import useBeans from "../hooks/useBeans";
import BeanCard from "./BeansCard";
import BeansCardContainer from "./BeansCardContainer";
import BeansCardSkeleton from "./BeansCardSkeleton";

const BeansGrid = () => {
  const { beans, error, isLoading, setBeans, setError } = useBeans();
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
      {beans.map((bean) => (
        <BeansCardContainer key={bean.id}>
          <BeanCard bean={bean} />
        </BeansCardContainer>
      ))}
    </>
  );
};

export default BeansGrid;
