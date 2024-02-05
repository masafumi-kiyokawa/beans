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
    HStack,
    Divider,
    Flex,
    Heading,
    Show,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import type { Recipe } from './types/Recipe';
import { recipeValidationSchema } from '../validation/recipeVaildationSchema';
import grindSizes from '../data/grind_sizes';
import BeanQuantityInput from './BeanQuantityInput';
import WaterQuantityInput from './WaterQuantityInput';
import TemperetureInput from './TemperetureInput';

interface Props {
    recipe: Recipe;
    refetch: () => void;
}

const EditRecipe = ({ recipe, refetch }: Props): ReactNode => {
    const navigate = useNavigate();

    const formatDuration = (duration: string): string => {
        const date = new Date(duration);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Recipe>({
        mode: 'onChange',
        resolver: zodResolver(recipeValidationSchema),
    });
    const onSubmit = (data: Recipe): void => {
        axios
            .put<Recipe>(`/api/recipes/${recipe.id}`, { recipe: data })
            .then((res) => {
                refetch();
                navigate(`/recipes/${res.data.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const onCancel = (): void => {
        navigate(`/recipes/${recipe.id}`);
    };
    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                mt="80px"
                mb="20px"
            >
                <Heading size="xl">{recipe.title}</Heading>
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
                        <Button type="submit" variant="solid" w="105px">
                            Submit
                        </Button>
                    </Show>
                </Flex>
            </Flex>
            <Divider mb={5} />
            <Stack spacing="14px">
                <Box>
                    <FormControl isInvalid={errors.title != null}>
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue={recipe.title}
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
                                {errors.title?.message as ReactNode}
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
                            defaultValue={recipe.grind}
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
                        </FormLabel>{' '}
                        <HStack maxW="240px">
                            <Controller
                                name="bean_quantity"
                                control={control}
                                defaultValue={Number(recipe.bean_quantity)}
                                render={({ field }) => (
                                    <BeanQuantityInput
                                        defaultValue={recipe.bean_quantity}
                                        {...field}
                                    />
                                )}
                            />
                        </HStack>
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
                            Water Tempereture
                        </FormLabel>
                        <Controller
                            name="tempereture"
                            control={control}
                            defaultValue={recipe.tempereture}
                            render={({ field }) => (
                                <TemperetureInput
                                    {...field}
                                    defaultValue={recipe.tempereture}
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
                            defaultValue={recipe.water_quantity}
                            render={({ field }) => (
                                <WaterQuantityInput
                                    defaultValue={recipe.water_quantity}
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
                            defaultValue={formatDuration(recipe.duration)}
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
                            defaultValue={recipe.note}
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

export default EditRecipe;
