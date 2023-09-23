"use client"

import {FC, Fragment, useState} from "react";
import {Button} from "@nextui-org/react";
import NewConsultationModal from "@/app/patients/[id]/components/consultations/NewConsultationModal";

const NewConsultationButton: FC = () => {
    const [modal, setModalOpen] = useState(false)

    return (
        <Fragment>
            <NewConsultationModal
                modalOpen={modal}
                setModalOpen={setModalOpen}
            />
            <Button
                variant="light"
                color="primary"
                onPress={() => setModalOpen(true)}
            >
                New Consultation
            </Button>
        </Fragment>
    )
}

export default NewConsultationButton