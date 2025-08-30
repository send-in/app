// #region imports
import { 
    createContext,
    ReactNode
} from "react"
// #endregion

export const AuthContext = createContext({})

export function AuthProvider({
    children
}:{
    children: ReactNode
}) {

    return (
        <AuthContext.Provider value={{
        }}>
            {children}
        </AuthContext.Provider>
    )
}