// #region imports
import "@/globals.css"

import type { Metadata } from "next"
import { Mada } from "next/font/google"

import { getCookie } from "@/server"
import { Logo } from "@/icons"
import { Footer } from "@/components"
import {
	AccountProvider,
	AccountRequestProps
} from "@/providers"
// #endregion

export const metadata: Metadata = {
	title: "SendIn",
	description: "Schedule LinkedIn Outreach. At Scale.",
	icons:{
		icon: "/favicon.ico",
		shortcut: "/icon192.png",
		apple: "/icon512.png",
	}
}

const mada = Mada({
	subsets: ["latin"],
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode,
}>) {

	const cookie = await getCookie("sendin_auth")
	const response = await fetch(
		`http://localhost:8000/accounts?name=${cookie?.value}`,
		{
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Cookie": `sendin_auth=${cookie}`
			},
			cache: "no-store",
		}
	)

	const account: AccountRequestProps = await response.json()

	return (
		<html
			lang="en"
		>
			<body
				className={`
					${mada.className}
					antialiased
					max-h-screen
					tracking-tighter
				`}
			>
				<AccountProvider
					value={account}
				>
					{children}
				</AccountProvider>

				<aside
					className="
						w-screen h-screen fixed z-50 top-0 items-center justify-center bg-white p-10
						flex flex-col mobile:hidden gap-10
					"
				>
					<Logo
						className="fill-blue-100"
						size={100}
					/>

					<p
						className="text-5xl font-mada tracking-tighter text-blue-100 font-medium text-center p-2"
					>
						We are working on a mobile version
					</p>
				</aside>

				<Footer/>
			</body>
		</html>
	)
}
