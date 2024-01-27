import { Button } from "@chakra-ui/react";
import BeanIcon from "./BeanIcon";
import PlusIcon from "./PlusIcon";

const AddButton = () => {
  return (
    <Button
      leftIcon={<PlusIcon />}
      colorScheme="gray"
      variant="outline"
      boxShadow="base"
    >
      Add Bean
    </Button>
  );
};

export default AddButton;
