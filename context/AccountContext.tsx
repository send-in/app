// #region imports
import {
    createContext,
    ReactNode,
	useState
} from "react"
// #endregion

export interface AccountProps {
	account: string
	picture: string

	login: Function
	logout: Function
}

export const AccountContext = createContext<AccountProps>(
	{} as AccountProps
)

export function AuthProvider({
    children
}:{
    children: ReactNode
}) {

	const [account, setAccount] = useState<string>("")
	const [picture, setPicture] = useState<string>(
		"/profile.svg"
	)

	const login = () => {
		const account = fetch
	}

	const logout = () => {

	}

    return (
        <AccountContext.Provider value={{
			account,
			picture,

			login,
			logout
        }}>
            {children}
        </AccountContext.Provider>
    )
}
