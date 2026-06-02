"use server"

// #region imports
import { redirect } from "next/navigation"
import { _POST } from "@/lib/api/utils"

import {
	_AUTH_URL,
} from "@/constants"
// #endregion

export interface IAuthResponse {
	id: string
	name: string
	email: string
	profile: string
	picture: string
	timezone: string
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

	if (!res.success) {
		return {
			success: false,
			error:
				res.error ??
				"Unable to sign in.",
		}
	}

	// Cookie is already set by Go
	return res
}

export const signup = async (
	name: string,
	email: string,
	profile?: string,
	picture?: string,
	timezone?: string,
	userAgent?: string,
) => {

	const res = await _POST<IAuthResponse>(
		`${_AUTH_URL}/signup`,
		{},
		{
			body: JSON.stringify({
				name,
				email,
				profile,
				picture,
				timezone,
				userAgent,
			}),
		},
	)

	if (!res.success) {
		return {
			success: false,
			error:
				res.error ??
				"Could not create account.",
		}
	}

	// Cookie is already set by Go
	return res
}

export const logout = async () => {
	await _POST(
		`${_AUTH_URL}/logout`,
		{},
		{
			withAuth: true,
		},
	)

	redirect("/")
}