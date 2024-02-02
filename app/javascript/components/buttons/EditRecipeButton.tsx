import React from "react";
import { Button, IconButton, Show, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import EditIcon from "../icons/EditIcon";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}

const EditRecipeButton = ({ id }: Props): ReactNode => {
  const navigate = useNavigate();
  const onClick = (): void => {
    navigate(`/recipes/${id}/edit`);
  };
  return (
    <>
      <Show above="sm">
        <Button
          leftIcon={<EditIcon />}
          variant="outline"
          boxShadow="base"
          alignItems="center"
          mx={4}
          onClick={onClick}
          w="105px"
        >
          <Text>Edit</Text>
        </Button>
      </Show>
      <Show below="sm">
        <IconButton
          icon={<EditIcon />}
          variant="outline"
          aria-label="Delete the Recipe"
          boxShadow="base"
          mx={2}
          onClick={onClick}
        />
      </Show>
    </>
  );
};

export default EditRecipeButton;
