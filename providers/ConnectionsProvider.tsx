"use client"

// #region imports
import {
	createContext,
	useContext
} from "react"

import { getCookie } from "@/server"
// #endregion

export interface Connection {
	id: string
	firstName: string
	lastName: string
	picture: string
	publicId: string
	bio: string

	country?: string
	company?: string
}

export interface ConnectionsRequestProps {
	connections: Connection[]
	options?: Connection[]
	response?: string
	success: boolean
}

const ConnectionsContext = createContext<ConnectionsRequestProps | undefined>(undefined)

export const ConnectionsProvider = ({
	value,
	children,
}: {
	value: ConnectionsRequestProps
	children: React.ReactNode
}) => {
	return (
		<ConnectionsContext.Provider
			value={value}
		>
			{children}
		</ConnectionsContext.Provider>
	)
}

export const useConnections = () => {
	const context = useContext(
		ConnectionsContext
	)

	if (context === undefined) {
		return {
			connections: [],
			options: [],
			response: "Connections: No context provider found",
			success: false
		}
	}

	return context
}
