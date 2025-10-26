"use client"

// #region imports
import {
	createContext,
	useContext
} from "react"
// #endregion

export interface Connection {
	id: string
	firstName: string
	lastName: string
	picture: string
	publicId: string
	bio: string
	timezone?: string
}

export interface ConnectionsRequestProps {
	data: Connection[]

	response?: string
	success: boolean
}

const ConnectionsContext = createContext<ConnectionsRequestProps | undefined>(undefined)

export function ConnectionsProvider({
	value,
	children,
}: {
	value: ConnectionsRequestProps
	children: React.ReactNode
}) {
	return (
		<ConnectionsContext.Provider
			value={value}
		>
			{children}
		</ConnectionsContext.Provider>
	)
}

export function useConnections() {
	const context = useContext(
		ConnectionsContext
	)

	if (context === undefined) {
		return {
			data: [],
			response: "Connections: No context provider found",
			success: false
		}
	}

	return context
}
