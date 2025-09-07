import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(
	request: NextRequest
) {

	const {
		pathname
	} = request.nextUrl

    const response = NextResponse.next()
    response.headers.set("x-pathname", pathname)


	if (pathname==="/" || pathname==="/board"){
		request.nextUrl.pathname = "/dashboard"
		return NextResponse.redirect(request.nextUrl)
	}
}


// export const config = {
// 	matcher: ["/"],
// }
