// #region imports
import "@/globals.css"
import { Mada } from "next/font/google"
import type { Metadata } from "next"
import { Logo } from "@/icons"
// #endregion

export const metadata: Metadata = {
	title: "boardly",
	description: "boardly.io collaborative meet",
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
				{children}
				<div
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
				</div>
			</body>
		</html>
	)
}
