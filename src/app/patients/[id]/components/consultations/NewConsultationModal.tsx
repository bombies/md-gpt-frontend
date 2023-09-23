"use client"

import {Dispatch, FC, SetStateAction} from "react";
import GenericModal from "@/app/components/GenericModal";
import ConsultationChat from "@/app/patients/[id]/components/consultations/ConsultationChat";

type Props = {
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const NewConsultationModal: FC<Props> = ({modalOpen, setModalOpen}) => {
    return (
        <GenericModal
            title="New Consultation"
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            size="3xl"
        >
            <ConsultationChat/>
        </GenericModal>
    )
}

export default NewConsultationModal