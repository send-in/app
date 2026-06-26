"use server"

// #region imports
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

import { _POST } from "@/lib/api"
import {_AUTH_URL, _ONBOARDING_KEY} from "@/constants"
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

export const onboarded = async () => {
    const store = await cookies()
    store.set(
        _ONBOARDING_KEY,
        "true",
        {
            path: "/",
            httpOnly: false,
            sameSite: "lax"
        }
    )
}