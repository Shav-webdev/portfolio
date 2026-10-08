import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAdminRoute = pathname.startsWith("/admin")
  const isLoginPage = pathname === "/admin/login"

  if (isAdminRoute && !isLoginPage && !req.auth) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  const response = NextResponse.next()
  response.headers.set("x-pathname", pathname)
  return response
})

export const config = {
  matcher: ["/admin/:path*"],
}
