"use client"

import {FC, Fragment, useCallback, useEffect, useMemo, useState} from "react";
import GenericInput from "@/app/components/input/GenericInput";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Button, Spacer} from "@nextui-org/react";
import ConsultationMessage from "@/app/patients/[id]/components/consultations/ConsultationMessage";
import SendIcon from "@/app/components/icons/SendIcon";

export type Message = {
    role: "system" | "user",
    content: string,
}

const ConsultationChat: FC = () => {
    const [messages, setMessages] = useState<Message[]>([{
        role: "system",
        content: "Hey there! I'm here to help you properly diagnose patients 😀. Any observations you've made please tell them mto me, as well as any additional details."
    }])
    const {register, handleSubmit, reset} = useForm()

    const addMessage = useCallback((message: Message) => {
        setMessages(prev => [
            ...prev,
            message
        ])
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const message: Message = {
            role: "user",
            content: data.consultation_chat
        }

        addMessage(message)
        reset()
    }

    const messageElements = useMemo(() => messages.map((message, i) => (
        <ConsultationMessage key={i} role={message.role} content={message.content}/>
    )), [messages])

    return (
        <Fragment>
            <div className="w-full space-y-3">
                {messageElements}
            </div>
            <Spacer y={6}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <GenericInput
                    register={register}
                    id="consultation_chat"
                    placeholder="Enter something..."
                    endContent={(
                        <Button
                            isIconOnly
                            type="submit"
                            variant="shadow"
                            color="primary"
                        >
                            <SendIcon/>
                        </Button>
                    )}
                />
            </form>
        </Fragment>

    )
}

export default ConsultationChat