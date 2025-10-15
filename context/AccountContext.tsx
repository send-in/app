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


    return (
        <AccountContext.Provider value={{
			account,
			picture,
        }}>
            {children}
        </AccountContext.Provider>
    )
}
