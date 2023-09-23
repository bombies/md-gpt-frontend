"use client"

import {Dispatch, FC, SetStateAction} from "react";
import GenericModal from "@/app/components/GenericModal";
import ConsultationChat from "@/app/patients/[id]/components/consultations/ConsultationChat";
import {Button, Divider} from "@nextui-org/react";

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
            <Divider className="my-6"/>
            <div className="flex gap-4 justify-end">
                <Button
                    variant="shadow"
                    color="primary"
                >
                    Save Consultation
                </Button>
                <Button
                    variant="flat"
                    color="danger"
                    onPress={() => setModalOpen(false)}
                >
                    Forget
                </Button>
            </div>
        </GenericModal>
    )
}

export default NewConsultationModal