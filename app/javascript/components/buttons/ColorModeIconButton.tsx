import React from 'react';
import type { ReactNode } from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeIconButton = (): ReactNode => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="outline"
            aria-label="Toggle Dark Mode"
            boxShadow="base"
        />
    );
};

export default ColorModeIconButton;
