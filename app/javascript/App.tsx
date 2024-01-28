import React, { useState } from "react";
import type { ReactNode } from "react";
import { Grid, Show, GridItem, Flex, Heading, Button } from "@chakra-ui/react";
import BeansGrid from "./components/BeansGrid";
import HeaderGrid from "./components/HeaderGrid";
import NavGrid from "./components/NavGrid";

export interface BeanQuery {
  country: string;
  searchText: string;
}
const App = (): ReactNode => {
  const [beanQuery, setBeanQuery] = useState<BeanQuery>({} as BeanQuery);
  const resetBeanQuery: () => void = () => {
    setBeanQuery({ country: "", searchText: "" });
  };
  return (
    <>
      <HeaderGrid
        onSearch={(searchText) => {
          setBeanQuery({ ...beanQuery, searchText });
        }}
      />
      <Grid
        templateAreas={{ base: `"main"`, md: `"nav main"` }}
        gridTemplateColumns={{ base: "1fr", md: "300px 1fr" }}
      >
        <Show above="md">
          <GridItem area={"nav"} position="sticky" top="6.5rem">
            <NavGrid
              selectedCountry={beanQuery.country}
              onSelectCountry={(country) => {
                setBeanQuery({ ...beanQuery, country });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Flex
            h="4.5rem"
            justifyContent="space-between"
            alignItems="center"
            mx={5}
            mt={5}
            p={1}
          >
            <Heading fontSize="2xl">{beanQuery.country} Beans</Heading>
            <Button size="sm" onClick={resetBeanQuery}>
              Reset
            </Button>
          </Flex>
          <BeansGrid beanQuery={beanQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
