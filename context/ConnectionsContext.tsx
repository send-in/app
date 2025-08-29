// #region imports
import { 
    createContext,
    ReactNode
} from "react"

// #endregion

export const ConnectionContext = createContext({})

export function ConnectionProvider({
    children
}:{
    children: ReactNode
}) {

    return (
        <ConnectionContext.Provider value={{
        }}>
            {children}
        </ConnectionContext.Provider>
    )
}