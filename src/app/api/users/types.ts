import {z} from "zod";
import {ConsultationMessage, Patient, PatientConsultation} from "@prisma/client";

export type AddPatientDto = {
    firstName: string,
    lastName: string
}

export type PatientWithConsultations = Patient & {
    consultations?: PatientConsultationWithMessages[]
}

export type PatientConsultationWithMessages = PatientConsultation & {
    messages: ConsultationMessage[]
}

export const addPatientDtoSchema = z.object({
    firstName: z.string(),
    lastName: z.string()
})