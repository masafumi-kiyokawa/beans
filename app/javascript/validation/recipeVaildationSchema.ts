import { z } from 'zod';
import grindSizes from '../data/grind_sizes';

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

export const recipeValidationSchema = z.object({
    title: z
        .string()
        .min(4, 'Title must contain at least 4 charactors.')
        .max(40, 'Title must cotain 40 charactors or less.'),
    bean_quantity: z
        .number({ invalid_type_error: 'Bean quantity is required.' })
        .gte(5.0, 'Bean quantity must be greater than 5.0.')
        .lte(50.0, 'Bean quantity must be greater than 50.0.')
        .refine((value) => value !== undefined, 'Bean quantity is required.'),
    grind: z
        .string()
        .min(1, 'Grind size is required.')
        .refine(
            (value) => grindSizes.includes(value),
            'Grind size is invalid.',
        ),
    duration: z
        .string()
        .refine((value) => timeRegex.test(value), 'Invalid time format.'),
    tempereture: z
        .number({ invalid_type_error: 'Tempereture is required.' })
        .gte(0, 'Water tempereture must be greater than 0.')
        .lte(100, 'Water tempereture must be greater than 100.')
        .refine(
            (value) => value !== undefined,
            'Water tempereture is required.',
        ),
    water_quantity: z
        .number({ invalid_type_error: 'Water quantity is required.' })
        .gte(50, 'Water quantity must be greater than 50.')
        .lte(1000, 'Water quantity must be greater than 1000.')
        .refine((value) => value !== undefined, 'Water quantity is required.'),
    note: z.string().max(800, 'Note must cotain 800 charactors or less.'),
});
