import React from 'react';
import {
    Stack,
    FormControl,
    FormLabel,
    Select,
    Textarea,
    Button,
    Box,
    Text,
    Input,
    Divider,
    Flex,
    HStack,
    Heading,
    Show,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import roastLevels from '../data/roast_levels';
import { beanValidationSchema } from '../validation/beanValidationSchema';
import type { Bean } from './types/Bean';
import countries from '../data/countries';

interface Props {
    bean: Bean;
    refetch: () => void;
}

const EditBean = ({ bean, refetch }: Props): ReactNode => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Bean>({
        mode: 'onChange',
        resolver: zodResolver(beanValidationSchema),
    });
    const onSubmit = (data: Bean): void => {
        axios
            .patch<Bean>(`/api/beans/${bean.id}`, { bean: data })
            .then((res) => {
                refetch();
                navigate(`/beans/${res.data.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const onCancel = (): void => {
        navigate(`/beans/${bean.id}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <HStack
                h="4.5rem"
                alignItems="center"
                mt={5}
                justifyContent="space-between"
            >
                <Heading fontSize="2xl">Bean Info</Heading>
                <Flex justify="flex-end">
                    <Show above="sm">
                        <Button
                            variant="outline"
                            mr={4}
                            onClick={onCancel}
                            w="105px"
                        >
                            Cancel
                        </Button>
                        <Button type="submit" w="105px">
                            Submit
                        </Button>
                    </Show>
                </Flex>
            </HStack>
            <Divider mb={5} />
            <Stack spacing="14px" mr="16px">
                <Box>
                    <FormControl isInvalid={errors.name != null}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={bean.name}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="name"
                                    maxW="45em"
                                    placeholder="Please enter bean name"
                                />
                            )}
                        />
                        {errors.name != null && (
                            <Text fontSize="sm" color="red">
                                {errors.name.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.country != null}>
                        <FormLabel htmlFor="country">Country</FormLabel>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue={bean.country}
                            render={({ field }) => (
                                <Select {...field} id="country" maxW="45em">
                                    {countries.map(
                                        (country): ReactNode => (
                                            <option
                                                key={country.code}
                                                value={country.name}
                                            >
                                                {country.name}
                                            </option>
                                        ),
                                    )}
                                </Select>
                            )}
                        />
                        {errors.country != null && (
                            <Text fontSize="sm" color="red">
                                {errors.country.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormLabel htmlFor="variety">Variety</FormLabel>
                    <Controller
                        name="variety"
                        control={control}
                        defaultValue={bean.variety}
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="variety"
                                maxW="45em"
                                placeholder="Please enter bean variety"
                            />
                        )}
                    />
                    {errors.variety != null && (
                        <Text fontSize="sm" color="red">
                            {errors.variety.message}
                        </Text>
                    )}
                </Box>
                <Box>
                    <FormLabel htmlFor="process">Process</FormLabel>
                    <Controller
                        name="process"
                        control={control}
                        defaultValue={bean.process}
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="process"
                                maxW="45em"
                                placeholder="Please enter bean process"
                            />
                        )}
                    />
                    {errors.process != null && (
                        <Text fontSize="sm" color="red">
                            {errors.process.message}
                        </Text>
                    )}
                </Box>
                <Box>
                    <FormControl isInvalid={errors.roast_level != null}>
                        <FormLabel htmlFor="roast_level">Roast Level</FormLabel>
                        <Controller
                            name="roast_level"
                            control={control}
                            defaultValue={bean.roast_level}
                            render={({ field }) => (
                                <Select {...field} id="roast_level" maxW="12em">
                                    {roastLevels.map(
                                        (value, index): ReactNode => (
                                            <option key={index} value={value}>
                                                {value}
                                            </option>
                                        ),
                                    )}
                                </Select>
                            )}
                        />
                        {errors.roast_level != null && (
                            <Text fontSize="sm" color="red">
                                {errors.roast_level.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.producer != null}>
                        <FormLabel htmlFor="producer">Producer</FormLabel>
                        <Controller
                            name="producer"
                            control={control}
                            defaultValue={bean.producer}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="producer"
                                    maxW="45em"
                                    placeholder="Please enter bean producer"
                                />
                            )}
                        />
                        {errors.producer != null && (
                            <Text fontSize="sm" color="red">
                                {errors.producer.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.roaster != null}>
                        <FormLabel htmlFor="roaster">Roaster</FormLabel>
                        <Controller
                            name="roaster"
                            control={control}
                            defaultValue={bean.roaster}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="roaster"
                                    maxW="45em"
                                    placeholder="Please enter bean roaster"
                                />
                            )}
                        />
                        {errors.roaster != null && (
                            <Text fontSize="sm" color="red">
                                {errors.roaster.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.note != null}>
                        <FormLabel htmlFor="note">Note</FormLabel>
                        <Controller
                            name="note"
                            control={control}
                            defaultValue={bean.note}
                            render={({ field }) => (
                                <Textarea {...field} id="note" maxW="45em" />
                            )}
                        />
                        {errors.note != null && (
                            <Text fontSize="sm" color="red">
                                {errors.note.message}
                            </Text>
                        )}
                    </FormControl>
                </Box>
            </Stack>
            <Show below="sm">
                <Flex mt="24px" justify="flex-start">
                    <Button
                        variant="outline"
                        mr={4}
                        onClick={onCancel}
                        w="105px"
                    >
                        Cancel
                    </Button>
                    <Button type="submit" w="105px">
                        Submit
                    </Button>
                </Flex>
            </Show>
        </form>
    );
};

export default EditBean;
