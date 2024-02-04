import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { type ReactNode } from 'react';
import { CircleFlag } from 'react-circle-flags';
import { useNavigate } from 'react-router-dom';
import Scrollbar from './Scrollbar';
import countries from '../data/countries';

interface Props {
    selectedCountry: string;
    onSelectCountry: (country: string) => void;
}

const NavGrid = ({ selectedCountry, onSelectCountry }: Props): ReactNode => {
    const navigate = useNavigate();
    return (
        <Scrollbar>
            <Box>
                <Heading fontSize="xl">Countries</Heading>
                {countries.map((country) => (
                    <Flex key={country.code} my={4} align="center">
                        <Box h={8} w={8}>
                            <CircleFlag
                                countryCode={country.code.toLowerCase()}
                            />
                        </Box>
                        <Box flex={1} ml={4}>
                            <Button
                                whiteSpace="nomal"
                                textAlign="left"
                                variant="link"
                                fontWeight={
                                    country.name === selectedCountry
                                        ? 'bold'
                                        : 'nomal'
                                }
                                onClick={(): void => {
                                    onSelectCountry(country.name);
                                    navigate('/beans');
                                }}
                            >
                                {country.name}
                            </Button>
                        </Box>
                    </Flex>
                ))}
            </Box>
        </Scrollbar>
    );
};

export default NavGrid;
