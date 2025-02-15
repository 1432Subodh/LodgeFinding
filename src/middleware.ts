import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const publicPath = ['/login', '/lodge']
    const isPublicPath = publicPath.includes(path)
    const token = request.cookies.get("token")?.value || "";

    if(isPublicPath && token){

        return NextResponse.redirect(new URL('/', request.url))
    }
    
    // If user is not logged in and tries to access protected pages, redirect to login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Allow the request to continue if conditions are met
    return NextResponse.next();
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login' , '/user/profile', '/admin/dashboard'],
}