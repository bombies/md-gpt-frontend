"use client"

import {FC, Fragment, useEffect} from "react";
import GenericInput from "@/app/components/input/GenericInput";
import {Spacer} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import {fetcher} from "@/app/api/utils";
import {Patient} from "@prisma/client";
import {Spinner} from "@nextui-org/spinner";

const FetchPatients = (userId?: string) => {
    return useSWR(userId && `/api/users/${userId}/patients`, fetcher<Patient[]>)
}

const PatientsGrid: FC = () => {
    const session = useSession()
    const router = useRouter()
    const {data: patients, isLoading: patientsLoading} = FetchPatients(session.data?.user?.id)

    useEffect(() => {
        if (session.status !== "loading" && !session.data)
            router.push("/")
    })

    return (
        <Fragment>
            <GenericInput
                id="patient_search"
                placeholder="Search for a patient..."
                label="Search"
            />
            <Spacer y={6}/>
            <div className="grid grid-cols-3">
                {
                    patientsLoading ?
                        <Spinner size="md"/>
                        :
                        (
                            patients?.length ?
                                <h3>You have no patients...</h3>
                                :
                                <Fragment/>
                        )
                }
            </div>
        </Fragment>
    )
}

export default PatientsGrid