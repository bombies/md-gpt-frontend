"use client"

import {FC, Fragment, useMemo} from "react";
import {PatientConsultationWithMessages} from "@/app/api/users/types";
import PatientConsultationCard from "@/app/patients/[id]/components/PatientConsultationCard";
import GenericCard from "@/app/components/GenericCard";
import NewConsultationButton from "@/app/patients/[id]/components/consultations/NewConsultationButton";
import {Spacer} from "@nextui-org/react";

type Props = {
    consultations: PatientConsultationWithMessages[]
}

const PatientConsultationGrid: FC<Props> = ({consultations}) => {
    const cards = useMemo(() => consultations.map(consultation => (
        <PatientConsultationCard
            key={consultation.id}
            consultation={consultation}
        />
    )), [consultations])

    return (
        <Fragment>
            <div className="flex gap-4">
                <h3 className="text-2xl font-semibold self-center">Consultations</h3>
                <NewConsultationButton/>
            </div>
            <Spacer y={6} />
            {consultations.length ?
                <div className="grid grid-cols-3 tablet:grid-cols-1">
                    {cards}
                </div>
                :
                <GenericCard className="w-96">
                    <h3 className="font-semibold text-xl">There are no consultations...</h3>
                </GenericCard>
            }
        </Fragment>
    )
}

export default PatientConsultationGrid