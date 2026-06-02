// #region imports
import {
	NextResponse
} from "next/server"

import type {
	NextRequest
} from "next/server"

import { _AUTH_KEY } from "./constants"
// #endregion

export function middleware(
	request: NextRequest
) {
	const isAuthenticated = request.cookies.get(_AUTH_KEY)
	const requestHeaders = new Headers(
		request.headers
	)

    console.log(isAuthenticated)

	const {
		pathname,
		searchParams
	} = request.nextUrl

    requestHeaders.set("x-pathname", pathname)
    requestHeaders.set("x-search", searchParams.toString() || "")

    if (
        (
            pathname.includes("profile") ||
            pathname.includes("dashboard") ||
            pathname.includes("connections") ||
            pathname.includes("templates")
        ) &&
        !isAuthenticated
	){
        request.nextUrl.pathname = "/auth"
		return NextResponse.redirect(request.nextUrl)
	}
    
	return NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})
}


export const config = {
	matcher: [
		"/",
		"/profile",
		"/templates",
		"/auth",
		"/onboarding/:path",
		"/templates",
		"/connections"
	],
}
