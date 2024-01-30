import { z } from "zod";
import grind_sizes from "../data/grind_sizes";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

export const recipeValidationSchema = z.object({
  title: z
    .string()
    .min(4, "Title must contain at least 4 charactors.")
    .max(40, "Title must cotain 40 charactors or less."),
  bean_quantity: z
    .number({ required_error: "Bean Quantity is required" })
    .gte(5.0, "Bean quantity must be greater than or equal to 5.")
    .lte(50.0, "Bean quantity must be less than or equal to 50."),
  grind: z
    .string()
    .min(1, "Grind is required.")
    .max(5)
    .refine((value) => grind_sizes.includes(value), "Grind size is invalid."),
  duration: z
    .string()
    // .min(1, "Duration is required.")
    .refine((value) => timeRegex.test(value), "Invalid time format."),
  tempereture: z
    .number()
    .gte(0, "Water tempeleture must be greater than or equal to 0.")
    .lte(100, "Water tempeleture must be less than or equal to 100.")
    .refine((value) => value !== undefined, "Water tempeleture is required."),
  water_quantity: z
    .number()
    .gte(100, "Water quantity must be greater than or equal to 0.")
    .lte(500, "Water quantity must be less than or equal to 100.")
    .refine((value) => value !== undefined, "Water quantity is required."),
  note: z.string(),
});
