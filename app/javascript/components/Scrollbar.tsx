import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Scrollbar = ({ children }: Props) => {
  return (
    <Box h="85vh" overflowY="scroll" p="4">
      {children}
    </Box>
  );
};

export default Scrollbar;
