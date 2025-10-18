"use server"

// #region imports
import { cookies } from "next/headers"
// #endregion

export const getCookie = async (name: string) => {
	const store = await cookies()
	const cookie = store.get(name)
    return cookie
}
