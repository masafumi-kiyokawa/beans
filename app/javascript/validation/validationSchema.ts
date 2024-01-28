import { z } from "zod";
import countries from "../data/countries";
import roast_levels from "../data/roast_levels";

const allowedCountries = countries.map((country) => country.name);

export const validationSchema = z.object({
  name: z
    .string()
    .min(4, "Name must contain at least 4 charactors.")
    .max(40, "Name must cotain 40 charactors or less."),
  country: z
    .string()
    .min(1, "Country name is required.")
    .refine(
      (value) => allowedCountries.includes(value),
      "County name is invalid."
    ),
  variety: z.string(),
  process: z.string(),
  roast_level: z
    .string()
    .min(1, "Roast level is required.")
    .refine((value) => roast_levels.includes(value), {
      message: "Roast level is invalid.",
    }),
  producer: z.string(),
  roaster: z.string(),
  note: z.string(),
});
