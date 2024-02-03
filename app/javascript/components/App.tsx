import React from "react";
import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Grid, Show, GridItem, Box } from "@chakra-ui/react";
import BeanDetail from "./BeanDetail";
import BeansGrid from "./BeansGrid";
import NavGrid from "./NavGrid";
import RecipeDetail from "./RecipeDetail";
import { useBeanQueryContext } from "./providers/BeanQueryProvider";
import HeaderGrid from "./HeaderGrid";

const App = (): ReactNode => {
  const { beanQuery, setBeanQuery } = useBeanQueryContext();
  return (
    <Box maxW="1440px" mx="auto">
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
            <Route path="beans/:id/*" element={<BeanDetail />} />
            <Route path="beans/*" element={<BeansGrid />} />
            <Route path="recipes/:id/*" element={<RecipeDetail />} />
          </Routes>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
