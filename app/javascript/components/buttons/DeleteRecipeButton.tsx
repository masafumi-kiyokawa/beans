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
import type { Recipe } from '../types/Recipe';

interface Props {
    recipe: Recipe;
}

const DeleteRecipeButton = ({ recipe }: Props): ReactNode => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteSubmit = (): void => {
        axios
            .delete(`/api/recipes/${recipe.id}`)
            .then(() => {
                navigate(`/beans/${recipe.bean_id}`);
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
                    aria-label="Delete the Recipe"
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
                        <Text>Are you sure to delete {recipe.title}?</Text>
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

export default DeleteRecipeButton;
