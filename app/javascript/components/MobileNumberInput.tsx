import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import type { ReactNode } from "react";

const MobileNumberInput = (): ReactNode => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.1,
      defaultValue: 16.0,
      min: 5,
      max: 50,
      precision: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export default MobileNumberInput;
