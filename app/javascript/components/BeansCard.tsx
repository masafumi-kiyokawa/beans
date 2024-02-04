import React from "react";
import type { ReactNode } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  Flex,
  Divider,
  Show,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import type { Bean } from "./types/Bean";

interface Props {
  bean: Bean;
}

const BeanCard = ({ bean }: Props): ReactNode => {
  return (
    <Card>
      <CardHeader pb={0}>
        <ChakraLink
          as={ReactRouterLink}
          to={`/beans/${bean.id}`}
          fontSize="2xl"
          fontWeight="bold"
        >
          {bean.name}
        </ChakraLink>
      </CardHeader>

      <CardBody>
        <Flex direction={{ base: "column", lg: "row" }}>
          <Stack divider={<StackDivider />} spacing="4" flex={2} mr={4}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Country
              </Heading>
              <Text pt="2" fontSize="sm">
                {bean.country}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Variety & Process
              </Heading>
              <Text pt="2" fontSize="sm">
                {bean.variety} {bean.process}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Roast Level
              </Heading>
              <Text pt="2" fontSize="sm">
                {bean.roast_level}
              </Text>
            </Box>
          </Stack>
          <Box flex={3} mr={4}>
            <Show below="lg">
              <Divider my="16px"></Divider>
            </Show>
            <Heading size="xs" textTransform="uppercase">
              Note
            </Heading>
            <Text pt="2" fontSize="sm" whiteSpace="pre-wrap">
              {bean.note}
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BeanCard;
