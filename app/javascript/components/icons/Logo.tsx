import React from "react";
import type { ReactNode } from "react";
import { Icon } from "@chakra-ui/react";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = (): ReactNode => {
  return <Icon as={GiCoffeeBeans} color="yellow.900" w={8} h={8} />;
};

export default Logo;
