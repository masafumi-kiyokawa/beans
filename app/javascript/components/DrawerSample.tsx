import React from "react";
import { useForm } from "react-hook-form";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  FormLabel,
  Textarea,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerSample = ({ isOpen, onClose }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const firstField = React.useRef();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input id="username" placeholder="Please enter user name" />
            </Box>

            <Box>
              <FormLabel htmlFor="url">Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>http://</InputLeftAddon>
                <Input type="url" id="url" placeholder="Please enter domain" />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </Box>

            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Select id="owner" defaultValue="segun">
                <option value="segun">Segun Adebayo</option>
                <option value="kola">Kola Tioluwani</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor="desc">Description</FormLabel>
              <Textarea id="desc" />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSample;
