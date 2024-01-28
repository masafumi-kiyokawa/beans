import React from "react";
import type { ReactNode } from "react";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import PlusIcon from "./PlusIcon";
import AddBeanDrawer from "./AddBeanDrawer";

const AddBeanButton = (): ReactNode => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<PlusIcon />}
        onClick={onOpen}
        variant="outline"
        boxShadow="base"
        alignItems="center"
      >
        <Text>Add bean</Text>
      </Button>
      <AddBeanDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddBeanButton;
