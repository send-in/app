"use server"

// #region imports
import { redirect } from "next/navigation"
import { _POST } from "@/lib/api/utils"
import {_AUTH_URL} from "@/constants"
// #endregion
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