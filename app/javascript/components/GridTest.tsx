import { Grid, GridItem, Show } from "@chakra-ui/react";
import HeaderGrid from "./HeaderGrid";
import BeansGrid from "./BeansGrid";
import NavGrid from "./NavGrid";

const GridTest = () => {
  return (
    <div>
      <HeaderGrid />
      <Grid
        templateAreas={{ base: `"main"`, md: `"nav main"` }}
        gridTemplateColumns={{ base: "1fr", md: "300px 1fr" }}
      >
        <Show above="md">
          <GridItem area={"nav"} position="sticky" top="6.5rem">
            <NavGrid />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <BeansGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default GridTest;
