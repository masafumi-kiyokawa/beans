import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BeansCardContainer = ({ children }: Props) => {
  return <Box m={5}>{children}</Box>;
};

export default BeansCardContainer;
