import Head from "next/head"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = ({
    title,
    navbar = true,
    footer = true,
    children
}: {
    title?: string,
    navbar?: boolean,
    footer?: boolean,
    children: React.ReactNode
}) => {
    return (
        <div>
            <Head>
                <title>{
                    title ? `${title} | Next.js + TypeScript + TailwindCSS + Eslint + Prettier` : "Next.js + TypeScript + TailwindCSS + Eslint + Prettier"
                }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main className="flex flex-col flex-1 w-full min-h-screen h-full">
                {/* Add your navbar here */}
                {navbar ? <Navbar /> : null}

                {children}

                {/* Add your footer here */}
                {footer ? <Footer /> : null}
            </main>
        </div>
    )
}