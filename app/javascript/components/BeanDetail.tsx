import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBeansContext } from "./contexts/BeansProvider";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import { Bean } from "./types/Bean";
import useBeans from "../hooks/useBeans";

const BeanDetail = () => {
  const { id } = useParams();
  const { beans, setBeans } = useBeansContext();
  const bean = beans.find((bean: Bean) => bean.id === id);
  if (bean === undefined) return <div>Error</div>;
  return (
    <>
      <Heading fontSize="2xl">{bean.name}</Heading>
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
            <p>Recipes</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BeanDetail;
