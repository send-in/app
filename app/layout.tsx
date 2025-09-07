// #region imports
import "@/globals.css"
import { Mada } from "next/font/google"
import type { Metadata } from "next"
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
				`}
			>
				{children}
			</body>
		</html>
	)
}
