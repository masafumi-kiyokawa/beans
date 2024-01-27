import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const BeansCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <SkeletonText noOfLines={1} spacing="6" skeletonHeight="8" />
        <SkeletonText mt="36px" noOfLines={7} spacing="6" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default BeansCardSkeleton;
