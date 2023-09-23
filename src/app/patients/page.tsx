"use client"

import {FC} from "react";
import {useSession} from "next-auth/react";

const PatientsPage: FC = () => {
    const session = useSession()

    return (
        <main className="p-16">
            <h1 className="text-5xl font-bold">Welcome back, <span className="text-primary capitalize">{session.data?.user?.firstName}</span></h1>
        </main>
    )
}

export default PatientsPage