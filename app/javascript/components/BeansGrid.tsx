import React from 'react';
import type { ReactNode } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import BeanCard from './BeansCard';
import BeansCardContainer from './BeansCardContainer';
import BeansCardSkeleton from './BeansCardSkeleton';
import { useBeanQueryContext } from './providers/BeanQueryProvider';
import { fetchBeansFunction } from './functions/fetchBeansFuction';

const BeansGrid = (): ReactNode => {
    const { beanQuery } = useBeanQueryContext();
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['beans', beanQuery],
        queryFn: async () => fetchBeansFunction(beanQuery),
    });
    const skeletons = [1, 2, 3];

    if (isError) return <Text>{error.message}</Text>;
    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                mx={5}
                mt={20}
                mb={5}
                px="16px"
            >
                <Heading fontSize="3xl">{beanQuery.country} Beans</Heading>
            </Flex>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <BeansCardContainer key={skeleton}>
                        <BeansCardSkeleton />
                    </BeansCardContainer>
                ))}
            {data?.results.map((bean) => (
                <BeansCardContainer key={bean.id}>
                    <BeanCard bean={bean} />
                </BeansCardContainer>
            ))}
        </>
    );
};

export default BeansGrid;
