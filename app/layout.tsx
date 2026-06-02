// #region imports
import "@/globals.css"
import type { Metadata } from "next"
import { Mada } from "next/font/google"
import { Footer, Navbar } from "@/components"
import { EventsProvider, PortalProvider } from "@/context"
// #endregion

export const metadata: Metadata = {
	title: "SendIn",
	description: "Schedule LinkedIn Outreach. At Scale.",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/icon192.png",
		apple: "/icon512.png",
	},
}

const mada = Mada({
	subsets: ["latin"],
})

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => (
	<html lang="en">
		<body
			className={`
				${mada.className}
				antialiased
				max-h-screen
				tracking-tighter
			`}
		>
			<EventsProvider>
				<PortalProvider>
					<Navbar/>
					{children}
					<Footer />
				</PortalProvider>
			</EventsProvider>
		</body>
	</html>
)

export default RootLayout