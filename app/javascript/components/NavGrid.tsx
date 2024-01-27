import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Scrollbar from "./Scrollbar";
import { CircleFlag } from "react-circle-flags";
import countries from "../data/countries";

interface Props {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
}

const NavGrid = ({ selectedCountry, onSelectCountry }: Props) => {
  return (
    <Scrollbar>
      <Heading fontSize="lg">Countries</Heading>
      {countries.map((country) => (
        <Flex my={4} align="center">
          <Box h={8} w={8}>
            <CircleFlag countryCode={country.code.toLowerCase()} />
          </Box>
          <Box flex={1} ml={4}>
            <Button
              whiteSpace="nomal"
              textAlign="left"
              variant="link"
              fontWeight={country.name === selectedCountry ? "bold" : "nomal"}
              onClick={() => onSelectCountry(country.name)}
            >
              {country.name}
            </Button>
          </Box>
        </Flex>
      ))}
    </Scrollbar>
  );
};

export default NavGrid;
