import React from 'react';
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import type { Bean } from './types/Bean';
import roastLevels from '../data/roast_levels';
import countries from '../data/countries';
import { beanValidationSchema } from '../validation/beanValidationSchema';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AddBeanDrawer = ({ isOpen, onClose }: Props): ReactNode => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Bean>({
        mode: 'onChange',
        resolver: zodResolver(beanValidationSchema),
    });
    const onSubmit = (data: Bean): void => {
        axios
            .post<Bean>('/api/beans', { bean: data })
            .then((res) => {
                onClose();
                reset();
                localStorage.removeItem('activeTab');
                navigate(`/beans/${res.data.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent zIndex={2} overflowY="auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Add a new Bean
                    </DrawerHeader>
                    <DrawerBody mb={2}>
                        <Stack spacing="14px">
                            <Box>
                                <FormControl isInvalid={errors.name != null}>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="name"
                                                placeholder="Please enter bean name"
                                            />
                                        )}
                                    />
                                    {errors.name != null && (
                                        <Text fontSize="sm" color="red">
                                            {errors.name.message as ReactNode}
                                        </Text>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isInvalid={errors.country != null}>
                                    <FormLabel htmlFor="country">
                                        Country
                                    </FormLabel>
                                    <Controller
                                        name="country"
                                        control={control}
                                        defaultValue="Japan"
                                        render={({ field }) => (
                                            <Select {...field} id="country">
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
                                            {
                                                errors.country
                                                    .message as ReactNode
                                            }
                                        </Text>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormLabel htmlFor="variety">Variety</FormLabel>
                                <Controller
                                    name="variety"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="variety"
                                            placeholder="Please enter bean variety"
                                        />
                                    )}
                                />
                                {errors.variety != null && (
                                    <Text>{errors.variety.message}</Text>
                                )}
                            </Box>
                            <Box>
                                <FormLabel htmlFor="process">Process</FormLabel>
                                <Controller
                                    name="process"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="process"
                                            placeholder="Please enter bean process"
                                        />
                                    )}
                                />
                                {errors.process != null && (
                                    <Text>{errors.process.message}</Text>
                                )}
                            </Box>
                            <Box>
                                <FormControl
                                    isInvalid={errors.roast_level != null}
                                >
                                    <FormLabel htmlFor="roast_level">
                                        Roast Level
                                    </FormLabel>
                                    <Controller
                                        name="roast_level"
                                        control={control}
                                        defaultValue="Medium"
                                        render={({ field }) => (
                                            <Select {...field} id="roast_level">
                                                {roastLevels.map(
                                                    (value): ReactNode => (
                                                        <option
                                                            key={value}
                                                            value={value}
                                                        >
                                                            {value}
                                                        </option>
                                                    ),
                                                )}
                                            </Select>
                                        )}
                                    />
                                    {errors.roast_level != null && (
                                        <Text fontSize="sm" color="red">
                                            {
                                                errors.roast_level
                                                    .message as ReactNode
                                            }
                                        </Text>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl
                                    isInvalid={errors.producer != null}
                                >
                                    <FormLabel htmlFor="producer">
                                        Producer
                                    </FormLabel>
                                    <Controller
                                        name="producer"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="producer"
                                                placeholder="Please enter bean producer"
                                            />
                                        )}
                                    />
                                    {errors.producer != null && (
                                        <Text>{errors.producer.message}</Text>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isInvalid={errors.roaster != null}>
                                    <FormLabel htmlFor="roaster">
                                        Roaster
                                    </FormLabel>
                                    <Controller
                                        name="roaster"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="roaster"
                                                placeholder="Please enter bean roaster"
                                            />
                                        )}
                                    />
                                    {errors.roaster != null && (
                                        <Text>{errors.roaster.message}</Text>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isInvalid={errors.note != null}>
                                    <FormLabel htmlFor="note">Note</FormLabel>
                                    <Controller
                                        name="note"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Textarea {...field} id="note" />
                                        )}
                                    />
                                    {errors.note != null && (
                                        <Text>{errors.note.message}</Text>
                                    )}
                                </FormControl>
                            </Box>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                    </DrawerFooter>
                </form>
            </DrawerContent>
        </Drawer>
    );
};

export default AddBeanDrawer;
