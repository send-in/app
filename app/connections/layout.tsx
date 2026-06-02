// #region imports
import { ReactNode } from "react"
import { headers } from "next/headers"
import { parseQueryParams } from "@/utils"
// #endregion

const ConnectionsLayout = async ({
    connections,
	options,
}: Readonly<{
    connections: ReactNode
    options: ReactNode
}>) => {
	const headersList = await headers()
	const query = headersList.get("x-search")
	const { ids } = parseQueryParams(query || "")

	return (
        !!ids?.length ?
        options :
        connections
	)
}

export default ConnectionsLayout
