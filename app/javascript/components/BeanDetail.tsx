import React from "react";
import type { ReactNode } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import RecipeForm from "./RecipeForm";
import BeanInfo from "./BeanInfo";
import { useQuery } from "@tanstack/react-query";
import { fetchBeanFunction } from "./functions/fetchBeanFunction";
import RecipesList from "./RecipesList";
import EditBean from "./EditBean";

const BeanDetail = (): ReactNode => {
  const { id } = useParams();
  if (id === undefined) return <div>error</div>;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["bean", id],
    queryFn: () => fetchBeanFunction(id),
  });
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
      <Tabs p="16px" colorScheme="white">
        <TabList>
          <Tab>Bean Info</Tab>
          <Tab>Recipes List</Tab>
          <Tab>Add Recipe</Tab>
        </TabList>
        <TabPanels>
          <TabPanel pr={0}>
            <Routes>
              <Route path="/edit" element={<EditBean bean={data} />} />
              <Route path="/*" element={<BeanInfo bean={data} />} />
            </Routes>
          </TabPanel>
          <TabPanel>
            <RecipesList beanId={data.id} />
          </TabPanel>
          <TabPanel>
            <RecipeForm beanId={data.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BeanDetail;
