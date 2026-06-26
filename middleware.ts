// #region imports
import {
	NextResponse
} from "next/server"

import type {
	NextRequest
} from "next/server"

import { _AUTH_KEY, _ONBOARDING_KEY } from "./constants"
// #endregion

export function middleware(
	request: NextRequest
) {
	const isAuthenticated = 
        request.cookies.get(_AUTH_KEY)
	const isOnboarded = 
        request.cookies.get(_ONBOARDING_KEY)?.value === "true"

	const requestHeaders = new Headers(
		request.headers
	)

	const {
		pathname,
		searchParams
	} = request.nextUrl

    requestHeaders.set("x-pathname", pathname)
    requestHeaders.set("x-search", searchParams.toString() || "")

    if (!pathname.includes("auth") && !isAuthenticated){
        request.nextUrl.pathname = "/auth"
		return NextResponse.redirect(request.nextUrl)
	}

    if(!pathname.includes("auth") && !isOnboarded){
        request.nextUrl.pathname = "/onboarding"
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
		"/auth",
		"/profile",
		"/templates",
		"/onboarding/:path",
		"/templates",
		"/connections",
		"/subscription"
	],
}
