import React from "react";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const BeansCardContainer = ({ children }: Props): ReactNode => {
  return (
    <Box mb={5} mx={5}>
      {children}
    </Box>
  );
};

export default BeansCardContainer;
