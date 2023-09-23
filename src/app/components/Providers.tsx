"use client"

import {NextUIProvider} from "@nextui-org/react";
import {Session} from "next-auth";
import {ThemeProvider} from "next-themes";
import React, {FC} from "react";
import {SessionProvider} from "next-auth/react";

type Props = React.PropsWithChildren & {
    session: Session | null;
}

const Providers: FC<Props> = ({children, session}) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </ThemeProvider>
        </NextUIProvider>
    )
}

export default Providers