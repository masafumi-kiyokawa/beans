import { Icon } from "@chakra-ui/react";
import { BiSolidCoffeeBean } from "react-icons/bi";

interface Props {
  w: number;
  h: number;
}

const BeanIcon = ({ w, h }: Props) => {
  return <Icon as={BiSolidCoffeeBean} w={w} h={h} />;
};

export default BeanIcon;
