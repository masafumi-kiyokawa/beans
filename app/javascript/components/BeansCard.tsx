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
import { Bean } from "../hooks/useBeans";

interface Props {
  bean: Bean;
}

const BeanCard = ({ bean }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{bean.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
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
      </CardBody>
    </Card>
  );
};

export default BeanCard;
