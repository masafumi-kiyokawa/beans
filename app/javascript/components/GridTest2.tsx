import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const GridTest2 = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        bg="orange.300"
        area={"header"}
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1000"
      >
        Header
      </GridItem>
      <GridItem
        pl="2"
        bg="pink.300"
        area={"nav"}
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1000"
      >
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default GridTest2;
