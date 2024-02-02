import { useDisclosure, IconButton } from "@chakra-ui/react";
import React from "react";
import type { ReactNode } from "react";
import AddBeanDrawer from "../AddBeanDrawer";
import PlusIcon from "../icons/PlusIcon";

const AddBeanIconButton = (): ReactNode => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<PlusIcon />}
        onClick={onOpen}
        variant="outline"
        aria-label="Add a new Bean"
        boxShadow="base"
      />
      <AddBeanDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddBeanIconButton;
