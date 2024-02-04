import React from 'react';
import type { ReactNode } from 'react';
import {
    Box,
    Divider,
    Flex,
    HStack,
    Heading,
    Show,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react';
import type { Bean } from './types/Bean';
import DeleteBeanButton from './buttons/DeleteBeanButton';
import EditBeanButton from './buttons/EditBeanButton';

interface Props {
    bean: Bean;
}

const BeanInfo = ({ bean }: Props): ReactNode => (
    <Box>
        <HStack
            h="4.5rem"
            alignItems="center"
            mt={5}
            justifyContent="space-between"
        >
            <Heading fontSize="2xl">Bean Info</Heading>
            <Flex justify="flex-end">
                <EditBeanButton id={bean.id} />
                <DeleteBeanButton bean={bean} />
            </Flex>
        </HStack>
        <Divider mb={5} />
        <Flex direction={{ base: 'column', lg: 'row' }}>
            <Stack divider={<StackDivider />} spacing="4" flex={2} mr={4}>
                <Box>
                    <Heading size="xs" textTransform="uppercase">
                        Name
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {bean.name}
                    </Text>
                </Box>
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
                        Variety
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {bean.variety}
                    </Text>
                </Box>
                <Box>
                    <Heading size="xs" textTransform="uppercase">
                        Process
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {bean.process}
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
            <Stack divider={<StackDivider />} spacing="4" flex={3} mr={4}>
                <Box>
                    <Show below="lg">
                        <Divider my="16px" />
                    </Show>
                    <Heading size="xs" textTransform="uppercase">
                        Producer
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {bean.producer}
                    </Text>
                </Box>
                <Box>
                    <Heading size="xs" textTransform="uppercase">
                        Roaster
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {bean.roaster}
                    </Text>
                </Box>
                <Box flex={1} mr={4}>
                    <Heading size="xs" textTransform="uppercase">
                        Note
                    </Heading>
                    <Text pt="2" fontSize="sm" whiteSpace="pre-wrap">
                        {bean.note}
                    </Text>
                </Box>
            </Stack>
        </Flex>
    </Box>
);

export default BeanInfo;
