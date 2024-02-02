import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {},
  colors: {
    beans: "#5f370e",
  },
});

export default theme;
