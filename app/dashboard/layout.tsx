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

	let messages: MessagesRequestProps = {
		data: [],
		response: "",
		success: false,
	}

	try {
		const response = await fetch(
			"http://localhost:8000/messages",
			{
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					"Cookie": `sendin_auth=${await getCookie("sendin_auth")}`
				},
				next: {
					revalidate: 0,
				}
			}
		)
		messages = await response.json()
	}
	catch(e){
		console.log("no messages found", e)
	}

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
