import React from "react";
import type { ReactNode } from "react";
import {
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useBeanQueryContext } from "./providers/BeanQueryProvider";
import Logo from "./icons/Logo";
import AddBeanButton from "./buttons/AddBeanButton";
import AddBeanIconButton from "./buttons/AddBeanIconButton";
import ColorModeIconButton from "./buttons/ColorModeIconButton";

const HeaderGrid = (): ReactNode => {
  const bg = useColorModeValue("white", "gray.800");
  const { setBeanQuery } = useBeanQueryContext();
  const onClick = (): void => {
    setBeanQuery({
      searchText: "",
      country: "",
    });
  };
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
        <Link to="/beans" onClick={onClick}>
          <Center>
            <HStack h="4.5rem">
              <Logo />
              <Heading fontSize="28px">Beans</Heading>
            </HStack>
          </Center>
        </Link>
      </GridItem>
      <GridItem>
        <HStack h="4.5rem" justify="flex-end">
          <Show above="sm">
            <SearchInput />
          </Show>
          <Show above="md">
            <Stack direction="row" spacing={4}>
              <AddBeanButton />
            </Stack>
          </Show>
          <Show below="md">
            <AddBeanIconButton />
          </Show>
          <ColorModeIconButton />
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default HeaderGrid;
