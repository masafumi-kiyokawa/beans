import React from "react";
import type { ReactNode } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import type { Bean } from "../hooks/useBeans";

interface Props {
  bean: Bean;
}

const BeanCard = ({ bean }: Props): ReactNode => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{bean.name}</Heading>
      </CardHeader>

      <CardBody display="flex">
        <Stack divider={<StackDivider />} spacing="4" flex={1} mr={4}>
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
        <Box flex={1} mr={4}>
          <Heading size="xs" textTransform="uppercase">
            Note
          </Heading>
          <Text pt="2" fontSize="sm">
            {bean.note}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default BeanCard;
