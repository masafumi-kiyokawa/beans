import React from "react";
import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderGrid from "./components/HeaderGrid";
import { useBeanQueryContext } from "./components/providers/BeanQueryProvider";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import BeansGrid from "./components/BeansGrid";
import NavGrid from "./components/NavGrid";
import BeanDetail from "./components/BeanDetail";
import RecipeDetail from "./components/RecipeDetail";

const App = (): ReactNode => {
  const { beanQuery, setBeanQuery } = useBeanQueryContext();
  return (
<<<<<<< HEAD
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
=======
    <div className="grid md:grid-cols-2">
      <div className="md:col-span-2 bg-blue-200">Content A</div>

      <div className="md:col-span-1 lg:w-200 bg-green-200 hidden md:block">
        Content B
      </div>

      <div className="md:col-span-1 lg:flex- bg-yellow-200">Content C</div>
    </div>
>>>>>>> 160b883dfffc778a8ea174f45156c9da3bf12da9
  );
};

export default App;
