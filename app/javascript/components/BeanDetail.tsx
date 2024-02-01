import React from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useBeansContext } from "./contexts/BeansProvider";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import type { Bean } from "./types/Bean";
import RecipeForm from "./RecipeForm";
import BeanInfo from "./BeanInfo";
import RecipesList from "./RecipesList";

const BeanDetail = (): ReactNode => {
  const { id } = useParams();
  const { beans, error } = useBeansContext();
  if (error) return <div>Error</div>;
  const bean = beans.find((bean: Bean) => bean.id === id);
  if (bean === undefined) return <div>Not Found</div>;

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
        <Heading fontSize="2xl">{bean?.name}</Heading>
      </Flex>
      <Tabs m={5}>
        <TabList>
          <Tab>Bean Info</Tab>
          <Tab>Recipes List</Tab>
          <Tab>Add Recipe</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BeanInfo bean={bean} />
          </TabPanel>
          <TabPanel>
            <RecipesList beanId={bean.id} />
          </TabPanel>
          <TabPanel>
            <RecipeForm beanId={bean.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BeanDetail;
