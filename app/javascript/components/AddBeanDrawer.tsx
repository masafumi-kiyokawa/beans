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
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";
import countries from "../data/countries";
import roast_levels from "../data/roast_levels";
import { Controller, useForm } from "react-hook-form";
import { validationSchema } from "../validation/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Bean } from "./types/Bean";
import { useBeansContext } from "./contexts/BeansProvider";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddBeanDrawer = ({ isOpen, onClose }: Props) => {
  const { beans, setBeans } = useBeansContext();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Bean>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: Bean): void => {
    console.log(data);
    axios
      .post("/api/beans", data)
      .then((res) => {
        setBeans([...beans, res.data]);
        onClose();
        reset();
        navigate(`/beans/${res.data?.id}`);
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
      });
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent zIndex={2} overflowY="auto">
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add a new Bean</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="name"
                        placeholder="Please enter bean name"
                      />
                    )}
                  />
                  {errors.name && (
                    <Text fontSize="sm" color="red">
                      {errors.name?.message as ReactNode}
                    </Text>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={!!errors.country}>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select {...field} id="country">
                        <option value=""></option>
                        {countries.map(
                          (country): ReactNode => (
                            <option key={country.code} value={country.name}>
                              {country.name}
                            </option>
                          )
                        )}
                      </Select>
                    )}
                  />
                  {errors.country && (
                    <Text fontSize="sm" color="red">
                      {errors.country?.message as ReactNode}
                    </Text>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormLabel htmlFor="variety">Variety</FormLabel>
                <Controller
                  name="variety"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="variety"
                      placeholder="Please enter bean variety"
                    />
                  )}
                />
                {errors.variety && <Text>{errors.variety?.message}</Text>}
              </Box>
              <Box>
                <FormLabel htmlFor="process">Process</FormLabel>
                <Controller
                  name="process"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="process"
                      placeholder="Please enter bean process"
                    />
                  )}
                />
                {errors.process && <Text>{errors.process?.message}</Text>}
              </Box>
              <Box>
                <FormControl isInvalid={!!errors.roast_level}>
                  <FormLabel htmlFor="roast_level">Roast Level</FormLabel>
                  <Controller
                    name="roast_level"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select {...field} id="roast_level">
                        <option value=""></option>
                        {roast_levels.map(
                          (value): ReactNode => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          )
                        )}
                      </Select>
                    )}
                  />
                  {errors.roast_level && (
                    <Text fontSize="sm" color="red">
                      {errors.roast_level?.message as ReactNode}
                    </Text>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormLabel htmlFor="producer">Producer</FormLabel>
                <Controller
                  name="producer"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="producer"
                      placeholder="Please enter bean producer"
                    />
                  )}
                />
                {errors.producer && <Text>{errors.producer?.message}</Text>}
              </Box>
              <Box>
                <FormLabel htmlFor="roaster">Roaster</FormLabel>
                <Controller
                  name="roaster"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="roaster"
                      placeholder="Please enter bean roaster"
                    />
                  )}
                />
                {errors.roaster && <Text>{errors.roaster?.message}</Text>}
              </Box>
              <Box>
                <FormLabel htmlFor="note">Note</FormLabel>
                <Controller
                  name="note"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Textarea {...field} id="note" />}
                />
                {errors.note && <Text>{errors.note?.message}</Text>}
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default AddBeanDrawer;
