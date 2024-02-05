import React, { forwardRef } from 'react';
import {
    useNumberInput,
    Button,
    Input,
    Center,
    HStack,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react';

interface Props {
    defaultValue: number;
    value: number;
    onChange: (valueAsNumber: number) => void;
}

const BeanQuantityInput = forwardRef(
    ({ defaultValue, value, onChange }: Props, ref) => {
        const {
            getInputProps,
            getIncrementButtonProps,
            getDecrementButtonProps,
        } = useNumberInput({
            step: 0.1,
            min: 5,
            max: 50,
            precision: 1,
            defaultValue,
            value,
            onChange: (_valueAsString, valueAsNumber) => {
                onChange(valueAsNumber);
            },
        });

        const inc = getIncrementButtonProps();
        const dec = getDecrementButtonProps();
        const input = getInputProps();
        return (
            <HStack maxW="240px">
                <InputGroup>
                    <Button {...inc} mr={5}>
                        +
                    </Button>
                    <Input {...input} />
                    <InputRightAddon>
                        <Center w="10px">g</Center>
                    </InputRightAddon>
                    <Button {...dec} ml={5}>
                        -
                    </Button>
                </InputGroup>
            </HStack>
        );
    },
);

BeanQuantityInput.displayName = 'BeanQuantityInput';
export default BeanQuantityInput;
