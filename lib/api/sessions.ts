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
// #endregion

export interface IAuthResponse {
  access_token?: string
}

export const login = async () => {
    redirect(`${_AUTH_URL}/linkedin`)
}

export const logout = async () => {
    await _POST(
        `${_AUTH_URL}/logout`, {},
        { withAuth: true},
    )
    
    redirect("/")
}