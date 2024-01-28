import React from "react";
import type { ReactNode } from "react";
import {
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "./Logo";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import HamburgerIcon from "./HamburgerIcon";
import PlusIcon from "./PlusIcon";
import AddBeanButton from "./AddBeanButton";
import AddBeanDrawer from "./AddBeanDrawer";

interface Props {
  onSearch: (searchText: string) => void;
}
const HeaderGrid = ({ onSearch }: Props): ReactNode => {
  const bg = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateColumns="150px 1fr"
      h="4.5rem"
      gap={0}
      px={4}
      boxShadow="sm"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      w="full"
      bg={bg}
    >
      <GridItem>
        <Center>
          <HStack h="4.5rem">
            <Logo />
            <Heading fontSize="28px">Beans</Heading>
          </HStack>
        </Center>
      </GridItem>
      <GridItem>
        <HStack h="4.5rem" justifyContent="space-between">
          <SearchInput onSearch={onSearch} />
          <Show above="sm">
            <Stack direction="row" spacing={4}>
              <AddBeanButton />
            </Stack>
            <ColorModeSwitch />
          </Show>
          <Show below="sm">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<PlusIcon />} onClick={onOpen}>
                  Add Bean
                </MenuItem>
                <AddBeanDrawer isOpen={isOpen} onClose={onClose} />
                <MenuItem
                  icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                  onClick={toggleColorMode}
                >
                  {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default HeaderGrid;
