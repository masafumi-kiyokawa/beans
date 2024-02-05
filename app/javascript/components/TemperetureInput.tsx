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

const TemperetureInput = forwardRef(
    ({ defaultValue, value, onChange }: Props, ref) => {
        const {
            getInputProps,
            getIncrementButtonProps,
            getDecrementButtonProps,
        } = useNumberInput({
            step: 1,
            min: 0,
            max: 100,
            precision: 0,
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
                        <Center w="10px">°C</Center>
                    </InputRightAddon>
                    <Button {...dec} ml={5}>
                        -
                    </Button>
                </InputGroup>
            </HStack>
        );
    },
);

TemperetureInput.displayName = 'TemperetureInput';
export default TemperetureInput;
