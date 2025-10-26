"use server"

// #region imports
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
// #endregion

export const logout = async() => {
	const store = await cookies()
	const cookie = store.get("sendin_auth")

	if(cookie)
		store.delete("sendin_auth")

	redirect("/auth")
}

export const login = async() => {
	const store = await cookies()
	const cookie = store.get("sendin_auth")

	try{
		const res = await fetch("http://localhost:8000")
		console.log(res?.ok)
	}
	catch(e){
		return redirect("/404")
	}

	if(!cookie)
		return redirect("http://localhost:8000")

	redirect("/dashboard")
}
