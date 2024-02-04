import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Heading,
    Flex,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import RecipeForm from './RecipeForm';
import BeanInfo from './BeanInfo';
import { fetchBeanFunction } from './functions/fetchBeanFunction';
import RecipesList from './RecipesList';
import EditBean from './EditBean';

const BeanDetail = (): ReactNode => {
    const [tabIndex, setTabIndex] = useState(0);
    const { id } = useParams();
    const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['bean', id],
        queryFn: async () => fetchBeanFunction(id),
    });
    const handleTabsChange = (index: number): void => {
        setTabIndex(index);
        localStorage.setItem('activeTab', String(index));
    };

    useEffect(() => {
        const activeTab = localStorage.getItem('activeTab');
        if (activeTab !== null) {
            setTabIndex(parseInt(activeTab));
        } else {
            setTabIndex(0);
        }
    }, [data]);

    if (isError) return <div>Error</div>;
    if (isLoading) return <div>Loading...</div>;
    if (data === undefined) return <div>error</div>;

    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                mx={5}
                mt={20}
                px="16px"
            >
                <Heading fontSize="3xl">{data?.name}</Heading>
            </Flex>
            <Tabs
                p="16px"
                colorScheme="white"
                index={tabIndex}
                onChange={handleTabsChange}
            >
                <TabList>
                    <Tab>Bean Info</Tab>
                    <Tab>Recipes List</Tab>
                    <Tab>Add Recipe</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel pr={0}>
                        <Routes>
                            <Route
                                path="/edit"
                                element={
                                    <EditBean bean={data} refetch={refetch} />
                                }
                            />
                            <Route
                                path="/*"
                                element={<BeanInfo bean={data} />}
                            />
                        </Routes>
                    </TabPanel>
                    <TabPanel pr={0}>
                        <RecipesList beanId={data.id} />
                    </TabPanel>
                    <TabPanel pr={0}>
                        <RecipeForm beanId={data.id} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default BeanDetail;
