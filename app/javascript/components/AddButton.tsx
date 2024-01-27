import { Button } from "@chakra-ui/react";
import BeanIcon from "./BeanIcon";

const AddButton = () => {
  return (
    <Button
      leftIcon={<BeanIcon w={4} h={4} />}
      colorScheme="gray"
      variant="outline"
      boxShadow="base"
    >
      Add Bean
    </Button>
  );
};

export default AddButton;
