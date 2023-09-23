import './globals.scss'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Providers from "@/app/components/Providers";
import {getServerSession} from 'next-auth';
import authService from "@/app/api/auth/[...nextauth]/service";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'MD-GPT',
    description: 'A web based diagnosis assistant.',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authService.authOptions);

    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers session={session}>
            {children}
        </Providers>
        </body>
        </html>
    )
}
