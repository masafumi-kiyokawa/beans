import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Scrollbar = ({ children }: Props) => {
  return (
    <Container position="sticky" top="6.5rem">
      <Box h="85vh" overflowY="scroll" p="8">
        {children}
      </Box>
    </Container>
  );
};

export default Scrollbar;
