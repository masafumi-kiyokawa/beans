import {
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    useColorMode,
    useDisclosure,
    Flex,
} from '@chakra-ui/react';
import React from 'react';
import type { ReactNode } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import AddBeanDrawer from '../AddBeanDrawer';
import HamburgerIcon from '../icons/HamburgerIcon';
import PlusIcon from '../icons/PlusIcon';

const HamburgerMenu = (): ReactNode => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList w="300px">
                <Flex flex={1}>
                    <MenuItem icon={<PlusIcon />} onClick={onOpen} flex={1}>
                        Add Bean
                    </MenuItem>
                    <AddBeanDrawer isOpen={isOpen} onClose={onClose} />
                    <MenuItem
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        onClick={toggleColorMode}
                        flex={1}
                    >
                        {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </MenuItem>
                </Flex>
            </MenuList>
        </Menu>
    );
};

export default HamburgerMenu;
