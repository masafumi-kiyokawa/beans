import { Grid, Show, GridItem } from "@chakra-ui/react";
import BeansGrid from "./components/BeansGrid";
import HeaderGrid from "./components/HeaderGrid";
import NavGrid from "./components/NavGrid";
import { useState } from "react";

export interface BeanQuery {
  country: string;
  searchText: string;
}
const App = () => {
  const [beanQuery, setBeanQuery] = useState<BeanQuery>({} as BeanQuery);
  return (
    <>
      <HeaderGrid
        onSearch={(searchText) => setBeanQuery({ ...beanQuery, searchText })}
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
          <BeansGrid beanQuery={beanQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
