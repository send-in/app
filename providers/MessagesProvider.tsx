"use client"

// #region imports
import {
	createContext,
	useContext
} from "react"
// #endregion

export interface Message {
	id: string
	name: string
	picture: string

	profile: string
	company: string
	timezone: string
	template?: string
	message?: string

	scheduleTime: string
	createdAt: string
	isSent: boolean
}

export interface MessagesRequestProps {
	data: Message[]

	response?: string
	success: boolean
}

const MessagesContext = createContext<MessagesRequestProps | undefined>(undefined)

export const MessagesProvider = ({
	value,
	children,
}: {
	value: MessagesRequestProps
	children: React.ReactNode
}) => {
	return (
		<MessagesContext.Provider
			value={value}
		>
			{children}
		</MessagesContext.Provider>
	)
}

export const useMessages = () => {
	const context = useContext(
		MessagesContext
	)

	if (context === undefined) {
		return {
			data: [],
			response: "Messages: No context provider found",
			success: false
		}
	}

	return context
}
