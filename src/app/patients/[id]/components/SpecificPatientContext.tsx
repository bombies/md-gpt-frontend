"use client"

import {FC, Fragment} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import BackIcon from "@/app/components/icons/BackIcon";
import useSWR from "swr";
import {fetcher} from "@/app/patients/components/PatientsGrid";
import {Patient} from "@prisma/client";
import {Spacer} from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";

type Props = {
    patientId: string
}

const FetchPatient = (doctorId?: string, patientId?: string) => {
    return useSWR(`/api/users/${doctorId}/patients/${patientId}`, fetcher<Patient>)
}

const SpecificPatientContext: FC<Props> = ({patientId}) => {
    const {data: session} = useSession()
    const router = useRouter()
    const {data: patient, isLoading: patientIsLoading} = FetchPatient(session?.user?.id, patientId)

    return (
        <div className="p-16">
            <div
                className="flex gap-4 hover:text-primary cursor-pointer transition-fast"
                onClick={() => router.push("/patients")}
            >
                <BackIcon/>
                View All Products
            </div>
            <Spacer y={6}/>
            {
                patientIsLoading ?
                    <Spinner size="lg"/>
                    :
                    <Fragment>
                        <h3 className="text-3xl font-semibold">{patient?.firstName} {patient?.lastName}</h3>
                    </Fragment>
            }
        </div>
    )
}

export default SpecificPatientContext