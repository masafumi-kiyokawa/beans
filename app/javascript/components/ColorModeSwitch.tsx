import {
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="outline"
      aria-label="Toggle Dark Mode"
      mt="4px"
      boxShadow="base"
    />
  );
};

export default ColorModeSwitch;
