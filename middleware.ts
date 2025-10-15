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
    const response = NextResponse.next()
	const { pathname } = request.nextUrl

    response.headers.set("x-pathname", pathname)

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
		return NextResponse.next()
	}
}


export const config = {
	matcher: [
		"/dashboard",
		"/profile",
		"/auth",
		"/onboarding",
		"/templates",
		"/connections"
	],
}
