import React from 'react';
import type { ReactNode } from 'react';
import { Button, Text, useDisclosure } from '@chakra-ui/react';
import AddBeanDrawer from '../AddBeanDrawer';
import PlusIcon from '../icons/PlusIcon';

const AddBeanButton = (): ReactNode => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                leftIcon={<PlusIcon />}
                onClick={onOpen}
                variant="outline"
                boxShadow="base"
                alignItems="center"
            >
                <Text>Add Bean</Text>
            </Button>
            <AddBeanDrawer isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default AddBeanButton;
