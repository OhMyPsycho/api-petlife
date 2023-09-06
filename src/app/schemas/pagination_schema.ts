import { Input, coerce, number, object, string, withDefault } from "valibot";

export const PaginationSchema = object({
    query: object({
        page: withDefault(coerce(number(), Number), 1),
        limit: withDefault(coerce(number(), Number), 2)
    })
});

export type paginationInput = Input<typeof PaginationSchema>