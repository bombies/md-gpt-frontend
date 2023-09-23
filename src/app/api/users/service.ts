import prisma from "@/app/libs/prisma";
import {AddPatientDto, addPatientDtoSchema} from "@/app/api/users/types";
import {Either, respond} from "@/app/api/utils";
import {Patient} from "@prisma/client";
import {NextResponse} from "next/server";

class UserService {

    public async fetchPatients(userId: string) {
        return prisma.patient.findMany({
            where: {
                doctorId: userId
            }
        });
    }

    public async fetchPatient(patientId: string): Promise<Either<Patient, NextResponse>> {
        const patient = await prisma.patient.findUnique({
            where: {
                id: patientId
            }
        })

        if (!patient)
            return new Either<Patient, NextResponse>(undefined, respond({
                message: `there is no patient with ID: ${patientId}`
            }))

        return new Either<Patient, NextResponse>(patient)
    }

    public async createPatient(userId: string, dto: AddPatientDto): Promise<Either<Patient, NextResponse>> {
        const bodyValidated = addPatientDtoSchema.safeParse(dto)
        if (!bodyValidated.success)
            return new Either<Patient, NextResponse>(undefined, respond({
                message: "Invalid body!",
                validationErrors: bodyValidated,
                status: 400
            }))

        const doctor = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!doctor)
            return new Either<Patient, NextResponse>(undefined, respond({
                message: `Could not find a doctor with ID: ${userId}`,
                status: 404
            }))

        const createdPatient = await prisma.patient.create({
            data: {
                ...dto,
                doctorId: userId
            }
        })

        return new Either<Patient, NextResponse>(createdPatient)
    }
}

const userService = new UserService()
export default userService