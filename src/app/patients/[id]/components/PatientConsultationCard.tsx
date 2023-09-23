import {FC} from "react";
import GenericCard from "@/app/components/GenericCard";
import {PatientConsultationWithMessages} from "@/app/api/users/types";

type Props = {
    consultation: PatientConsultationWithMessages
}

const PatientConsultationCard: FC<Props> = ({consultation}) => {
    return (
        <GenericCard classNames={{
            base: "hover:!border-primary border-1 transition-faster"
        }}>
            <h3>{consultation.createdAt.toDateString()}</h3>
        </GenericCard>
    )
}

export default PatientConsultationCard