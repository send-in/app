// #region imports
import { ReactNode } from "react"

import {
	Connection,
	ConnectionsProvider,
	ConnectionsRequestProps
} from "@/providers"

import { getCookie } from "@/server"
import { headers } from "next/headers"
import { parseQueryParams } from "@/utils"
// #endregion

const fetchConnections = async (): Promise<{
	data: Connection[],
	response: string,
	success: boolean
} | undefined> => {
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
		const result = await response.json()
		return result
	}
	catch(e){
		console.log("no messages found", e)
	}
}

const fetchOptions = async (ids: string[]): Promise<{
	data: Connection[],
	response: string,
	success: boolean
} | undefined> => {
	try {
		const response = await fetch(
			"http://localhost:8000/connections",
			{
				method: "POST",
				credentials: "include",
				body: JSON.stringify({ ids }),
				headers: {
					"Content-Type": "application/json",
					"Cookie": `sendin_auth=${await getCookie("sendin_auth")}`
				},
				next: {
					revalidate: 0,
				}
			}
		)
		const result = await response.json()
		return result
	}
	catch(e){
		console.log("no messages found", e)
	}
}

const layout = async ({
    connections,
	options,
}: Readonly<{
    connections: ReactNode
    options: ReactNode
}>) => {

	const headersList = await headers()

	const query = headersList.get("x-search")
	const { ids } = parseQueryParams(query || "")

	const result = await fetchConnections()
	let value: ConnectionsRequestProps = {
		connections: result?.data || [],
		options: [],
		response: result?.response || "",
		success: result?.success ||  false,
	}

	if(Array.isArray(ids)){
		const result = await fetchOptions(ids)
		value.options = result?.data || []
	}

	return (
		<main>
			<ConnectionsProvider
				value={value}
			>
				{
					!!ids?.length ?
					options :
					connections
				}
			</ConnectionsProvider>
		</main>
	)
}

export default layout
