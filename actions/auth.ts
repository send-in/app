"use server"

// #region imports
import { 
	cookies
} from "next/headers"

import { 
	redirect
} from "next/navigation"
// #endregion
 
export async function logout() {
	const store = await cookies()
	store.delete("sendin_auth")

	redirect("/login")
}

export async function login() {
	const store = await cookies()
	const cookie = store.get("sendin_auth")

	if(!cookie){
		redirect("https://www.vishnushon.com")
	}
}