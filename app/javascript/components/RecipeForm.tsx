import React, { type ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import grindSizes from '../data/grind_sizes';
import { recipeValidationSchema } from '../validation/recipeVaildationSchema';
import type { Recipe } from './types/Recipe';
import BeanQuantityInput from './BeanQuantityInput';
import TemperetureInput from './TemperetureInput';
import WaterQuantityInput from './WaterQuantityInput';

interface Props {
    beanId: string | undefined;
}

const RecipeForm = ({ beanId }: Props): ReactNode => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Recipe>({
        mode: 'onChange',
        resolver: zodResolver(recipeValidationSchema),
    });
    const onSubmit = async (data: Recipe): Promise<void> => {
        try {
            await axios
                .post<Recipe>('/api/recipes', { bean_id: beanId, recipe: data })
                .then((res) => {
                    reset();
                    navigate(`/recipes/${res.data.id}`);
                });
        } catch {
            throw new Error('Failed to create bean.');
        }
    };
    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex
                h="4.5rem"
                justifyContent="space-between"
                alignItems="center"
                mt={5}
            >
                <Heading fontSize="2xl">Add a new Recipe</Heading>
                <Button type="submit" variant="solid" w="105px">
                    Submit
                </Button>
            </Flex>
            <Divider mb={5} />
            <Stack spacing="14px" mr="16px">
                <Box>
                    <FormControl isInvalid={errors.title != null}>
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="title"
                                    placeholder="Please enter recipe title"
                                    maxW="45em"
                                />
                            )}
                        />
                        {errors.title != null && (
                            <Text fontSize="sm" color="red">
                                {errors.title.message as ReactNode}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.grind != null}>
                        <FormLabel htmlFor="grind">Grind Size</FormLabel>
                        <Controller
                            name="grind"
                            control={control}
                            defaultValue="Medium"
                            render={({ field }) => (
                                <Select {...field} id="grind" maxW="240px">
                                    {grindSizes.map(
                                        (value): ReactNode => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ),
                                    )}
                                </Select>
                            )}
                        />
                        {errors.grind != null && (
                            <Text fontSize="sm" color="red">
                                {errors.grind.message as ReactNode}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.bean_quantity != null}>
                        <FormLabel htmlFor="bean_quantity">
                            Bean Quantity
                        </FormLabel>
                        <Controller
                            name="bean_quantity"
                            control={control}
                            defaultValue={16.0}
                            render={({ field }) => (
                                <BeanQuantityInput
                                    defaultValue={16.0}
                                    {...field}
                                />
                            )}
                        />
                        {errors.bean_quantity != null && (
                            <Text fontSize="sm" color="red">
                                {errors.bean_quantity.message as ReactNode}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.tempereture != null}>
                        <FormLabel htmlFor="tempereture">
                            Water Tempeleture
                        </FormLabel>
                        <Controller
                            name="tempereture"
                            control={control}
                            defaultValue={90}
                            render={({ field }) => (
                                <TemperetureInput
                                    {...field}
                                    defaultValue={90}
                                />
                            )}
                        />
                        {errors.tempereture != null && (
                            <Text fontSize="sm" color="red">
                                {errors.tempereture.message as ReactNode}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.water_quantity != null}>
                        <FormLabel htmlFor="water_quantity">
                            Water Quantity
                        </FormLabel>
                        <Controller
                            name="water_quantity"
                            control={control}
                            defaultValue={250}
                            render={({ field }) => (
                                <WaterQuantityInput
                                    defaultValue={250}
                                    {...field}
                                />
                            )}
                        />
                        {errors.water_quantity != null && (
                            <Text fontSize="sm" color="red">
                                {errors.water_quantity.message as ReactNode}
                            </Text>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isInvalid={errors.duration != null}>
                        <FormLabel htmlFor="duration">Duration</FormLabel>
                        <Controller
                            name="duration"
                            control={control}
                            defaultValue="00:03:00"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="duration"
                                    placeholder="Please enter duration"
                                    type="time"
                                    step="1"
                                    maxW="240px"
                                />
                            )}
                        />
                        {errors.duration != null && (
                            <Text fontSize="sm" color="red">
                                {errors.duration.message as ReactNode}
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
                            defaultValue=""
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    id="note"
                                    h={200}
                                    maxW="45em"
                                />
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
        </form>
    );
};

export default RecipeForm;
