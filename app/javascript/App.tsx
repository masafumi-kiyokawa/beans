import React from "react";
import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderGrid from "./components/HeaderGrid";
import { useBeanQueryContext } from "./components/contexts/BeanQueryProvider";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import BeansGrid from "./components/BeansGrid";
import NavGrid from "./components/NavGrid";
import BeanDetail from "./components/BeanDetail";
import RecipeDetail from "./components/RecipeDetail";

const App = (): ReactNode => {
  const { beanQuery, setBeanQuery } = useBeanQueryContext();
  return (
    <>
      <HeaderGrid />
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
          <Routes>
            <Route path="/beans" element={<BeansGrid />} />
            <Route path="/beans/:id" element={<BeanDetail />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
