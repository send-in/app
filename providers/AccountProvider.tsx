"use client"

// #region imports
import {
	createContext,
	useContext
} from "react"
// #endregion

export interface Account {
	profile: string
	name: string
	email: string
	picture: string
	timezone: string

	li_at: string
	ua: string
}

export interface AccountRequestProps {
	data: Account

	response?: string
	success: boolean
}

const AccountContext = createContext<AccountRequestProps | undefined>(undefined)

export function AccountProvider({
	value,
	children,
}: {
	value: AccountRequestProps
	children: React.ReactNode
}) {
	return (
		<AccountContext.Provider
			value={value}
		>
			{children}
		</AccountContext.Provider>
	)
}

export function useAccount() {
	const context = useContext(
		AccountContext
	)

	if (context === undefined) {
		return {
			data: null,
			response: "Account: No context provider found",
			success: false
		}
	}

	return context
}
