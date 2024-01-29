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
  Button,
  Text,
} from "@chakra-ui/react";
import type { Bean } from "./types/Bean";
import PlusIcon from "./PlusIcon";

const BeanDetail = (): ReactNode => {
  const { id } = useParams();
  const { beans, error } = useBeansContext();
  const bean = beans.find((bean: Bean) => bean.id === id);
  if (error) return <div>Error</div>;
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
          <Tab>Info</Tab>
          <Tab>Recipes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Info</p>
          </TabPanel>
          <TabPanel>
            <Button
              leftIcon={<PlusIcon />}
              variant="outline"
              boxShadow="base"
              alignItems="center"
            >
              <Text>Add Recipe</Text>
            </Button>
            <p>Recipes</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BeanDetail;
