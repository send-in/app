// #region imports
import { ReactNode } from "react"
import { getCookie } from "@/server"

import {
	MessagesRequestProps,
	MessagesProvider
} from "@/providers"

// #endregion

const layout = async({
    children,
}: Readonly<{
    children: ReactNode,
}>) => {

	const response = await fetch(
		"http://localhost:8000/messages",
		{
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Cookie": `sendin_auth=${await getCookie("sendin_auth")}`
			},
  			cache: "no-store",
		}
	)

  	const messages: MessagesRequestProps = await response.json()

	return (
		<main>

			<MessagesProvider
				value={messages}
			>
				{children}
			</MessagesProvider>

		</main>
	)
}

export default layout
