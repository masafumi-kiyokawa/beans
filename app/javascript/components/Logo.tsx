import { Icon } from "@chakra-ui/react";
import { GiCoffeeBeans } from "react-icons/gi";

interface Props {
  w: number;
  h: number;
}

const Logo = ({ w, h }: Props) => {
  return <Icon as={GiCoffeeBeans} color="yellow.900" w={w} h={h} />;
};

export default Logo;
