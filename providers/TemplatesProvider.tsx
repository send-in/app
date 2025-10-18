"use client"

// #region imports
import {
	createContext,
	useContext
} from "react"
// #endregion

export interface Template {
	id: string
	title: string
	message?: string
}

export interface TemplatesRequestProps {
	data: Template[]

	response?: string
	success: boolean
}

const TemplatesContext = createContext<TemplatesRequestProps | undefined>(undefined)

export function TemplatesProvider({
	value,
	children,
}: {
	value: TemplatesRequestProps
	children: React.ReactNode
}) {
	return (
		<TemplatesContext.Provider
			value={value}
		>
			{children}
		</TemplatesContext.Provider>
	)
}

export function useTemplates() {
	const context = useContext(
		TemplatesContext
	)

	if (context === undefined) {
		return {
			data: [],
			response: "Templates: No context provider found",
			success: false
		}
	}

	return context
}
