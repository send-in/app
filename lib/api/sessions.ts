"use server"

// #region imports
import { redirect } from "next/navigation"
import { _POST } from "@/lib/api/utils"

import {
    _ACCESS_KEY,
	_AUTH_KEY,
	_AUTH_URL,
    _COOKIE_SECURE,
} from "@/constants"
import { cookies } from "next/headers"
// #endregion

export interface IAuthResponse {
  access_token?: string
}

const _setAuthToken = async (
    token: string
) => {
    try {
        const store = await cookies()
        if (token) {
            store.set(
                _ACCESS_KEY,
                token,
                {
                    secure: _COOKIE_SECURE,
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true,
                    sameSite: "lax",
                    path: "/",
                }
            )
    
            store.set(
                _AUTH_KEY,
                "true",
                {
                    path: "/",
                    secure: _COOKIE_SECURE,
                    sameSite: "lax",
                }
            )
        }
    }
    catch(e){}
}

const _deleteAuthToken = async () => {
    try{
        const store = await cookies()
        store.delete(_ACCESS_KEY)
        store.delete(_AUTH_KEY)
    }
    catch(e){}
}

export const login = async () => {
	const res = await _POST<IAuthResponse>(
		`${_AUTH_URL}/login`,
		{},
		{
			body: JSON.stringify({
				email: "vishnu.shon@example.com",
			}),
		},
	)

    const token = res.data?.access_token

	if (!res.success || !token) {
		return {
			success: false,
			error:
				res.error ??
				"Unable to sign in. Check your email and password.",
		}
	}

    try {
		await _setAuthToken(token)
	} catch (e) {
		return {
			success: false,
			error:
				e instanceof Error
					? e.message
					: "Could not save your session. Try again or use another browser.",
		}
	}

    redirect("/")
}

export const logout = async () => {
	await _POST(
		`${_AUTH_URL}/logout`,{},
		{
			withAuth: true,
		},
	)

    await _deleteAuthToken()
	redirect("/")
}