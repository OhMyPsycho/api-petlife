import { minLength, object, string } from "valibot";

export const CharacterCreateSchema = object({
    body: object({
        name: string([minLength(1, 'name is required')]),
    })
});