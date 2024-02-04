import React from 'react';
import {
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Show,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TrashIcon from '../icons/TrashIcon';
import type { Bean } from '../types/Bean';

interface Props {
    bean: Bean;
}

const DeleteBeanButton = ({ bean }: Props): ReactNode => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteSubmit = (): void => {
        axios
            .delete(`/api/beans/${bean.id}`)
            .then(() => {
                navigate(`/beans`);
                onClose();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Show above="sm">
                <Button
                    leftIcon={<TrashIcon />}
                    variant="outline"
                    boxShadow="base"
                    alignItems="center"
                    color="red"
                    borderColor="red"
                    w="105px"
                    onClick={onOpen}
                >
                    <Text>Delete</Text>
                </Button>
            </Show>
            <Show below="sm">
                <IconButton
                    icon={<TrashIcon />}
                    variant="outline"
                    aria-label="Delete the Bean"
                    boxShadow="base"
                    color="red"
                    borderColor="red"
                    onClick={onOpen}
                />
            </Show>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirmation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure to delete {bean.name}?</Text>
                        <Text>Related recipes will also be deleted.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="solid"
                            colorScheme="red"
                            onClick={handleDeleteSubmit}
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DeleteBeanButton;
