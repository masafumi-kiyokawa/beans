import React from "react";
import type { ReactNode } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import PlusIcon from "./PlusIcon";
import countries from "../data/countries";
import { type Bean } from "../hooks/useBeans";
import { useForm } from "react-hook-form";

const AddButton = (): ReactNode => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Bean>();
  const onSubmit = (data: Bean): void => {
    console.log(data);
  };

  return (
    <form
      onSubmit={() => {
        handleSubmit(onSubmit);
      }}
    >
      <Button
        leftIcon={<PlusIcon />}
        onClick={onOpen}
        variant="outline"
        boxShadow="base"
        alignItems="center"
      >
        <Text>Add bean</Text>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex={2}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add a new Bean</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Please enter bean name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <FormErrorMessage>Name is required</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="country">Select Country</FormLabel>
                  <Select
                    id="country"
                    defaultValue=""
                    {...register("country", { required: true })}
                  >
                    <option value=""></option>
                    {countries.map(
                      (country): ReactNode => (
                        <option key={country.code} value="{country.name}">
                          {country.name}
                        </option>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormLabel htmlFor="variety">Variety</FormLabel>
                <Input
                  id="variety"
                  placeholder="Please enter bean variety"
                  {...register("variety")}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="process">Process</FormLabel>
                <Input
                  id="process"
                  placeholder="Please enter bean process"
                  {...register("process")}
                />
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="roast_level">
                    Select Roast Level
                  </FormLabel>
                  <Select
                    id="roast_level"
                    defaultValue=""
                    {...register("roast_level", { required: true })}
                  >
                    <option value=""></option>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Medium Dark">Medium Dark</option>
                    <option value="Dark">Dark</option>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormLabel htmlFor="producer">Producer</FormLabel>
                <Input
                  id="producer"
                  placeholder="Please enter bean producer"
                  {...register("producer")}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="roaster">Roaster</FormLabel>
                <Input
                  id="roaster"
                  placeholder="Please enter bean roaster"
                  {...register("roaster")}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="note">Note</FormLabel>
                <Textarea id="note" {...register("note")} />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button type="submit" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </form>
  );
};

export default AddButton;
