// #region imports
import {
	NextResponse
} from "next/server"

import type {
	NextRequest
} from "next/server"
// #endregion

export function middleware(
	request: NextRequest
) {

	const jwt = request.cookies.get("sendin_auth")
	const requestHeaders = new Headers(
		request.headers
	)

	const {
		pathname,
		searchParams
	} = request.nextUrl

    requestHeaders.set("x-pathname", pathname)
    requestHeaders.set("x-search", searchParams.toString() || "")

	if (
		pathname === "/auth" && !!jwt
	){
		request.nextUrl.pathname = "/dashboard"
		return NextResponse.redirect(request.nextUrl)
	}

	if (
		pathname !== "/auth"
	){
		if(!jwt){
			request.nextUrl.pathname = "/auth"
			return NextResponse.redirect(request.nextUrl)
		}

		request.nextUrl.pathname = pathname
		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		})
	}
}


export const config = {
	matcher: [
		"/dashboard",
		"/profile",
		"/auth",
		"/onboarding/:path",
		"/templates",
		"/connections"
	],
}
