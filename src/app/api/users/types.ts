import {z} from "zod";

export type AddPatientDto = {
    firstName: string,
    lastName: string
}

export const addPatientDtoSchema = z.object({
    firstName: z.string(),
    lastName: z.string()
})