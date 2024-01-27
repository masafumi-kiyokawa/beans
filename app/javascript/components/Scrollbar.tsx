import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Scrollbar = ({ children }: Props) => {
  return (
    <Container position="sticky" top="6.5rem">
      <Box h="85vh" overflowY="scroll" pt={4} pb={8} pl={8} pr={4}>
        {children}
      </Box>
    </Container>
  );
};

export default Scrollbar;
