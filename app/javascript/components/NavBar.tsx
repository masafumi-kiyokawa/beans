import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import BeanIcon from "./BeanIcon";
import AddButton from "./AddButton";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" paddingRight="20px" gap={4}>
      <Logo w={8} h={8} />
      <Heading size="lg" fontSize="36px">
        Beans
      </Heading>
      <SearchInput onSearch={onSearch} />
      <Stack direction="row" spacing={4} mt="4px">
        <AddButton />
      </Stack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
