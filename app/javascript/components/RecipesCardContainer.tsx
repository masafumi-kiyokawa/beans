import { Box } from "@chakra-ui/react";
import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const RecipesCardContainer = ({ children }: Props): ReactNode => {
  return (
    <Box mb={5} mx={5}>
      {children}
    </Box>
  );
};

export default RecipesCardContainer;
