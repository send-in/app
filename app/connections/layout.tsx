// #region imports
import { ReactNode } from "react"
import {
	ConnectionsProvider,
	ConnectionsRequestProps
} from "@/providers/ConnectionsProvider"
import { getCookie } from "@/server"
import { headers } from "next/headers"
import { parseQueryParams } from "@/utils"
// #endregion

const layout = async ({
    connections,
	options,
}: Readonly<{
    connections: ReactNode
    options: ReactNode
}>) => {

	const headersList = await headers()

	const query = headersList.get("x-search")
	const search = parseQueryParams(query || "")

	let network: ConnectionsRequestProps = {
		data: [],
		response: "",
		success: false,
	}

	try {
		const response = await fetch(
			"http://localhost:8000/connections",
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
		network = await response.json()
	}
	catch(e){
		console.log("no messages found", e)
	}

	return (
		<main>
			<ConnectionsProvider
				value={network}
			>
				{
					!!search?.ids?.length ?
					options :
					connections
				}
			</ConnectionsProvider>
		</main>
	)
}

export default layout
