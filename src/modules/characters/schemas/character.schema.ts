import { z } from "zod"

export const CharacterSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.string(),
    species: z.string(),
    image: z.string()
})

export type Character = z.infer<typeof CharacterSchema>