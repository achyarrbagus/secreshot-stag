import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("token");
  const url = new URL(request.url);
  const pathname = url.pathname;
  const isCmsRoute = pathname.startsWith("/cms");

  if (isCmsRoute && pathname === "/cms" && auth) {
    return NextResponse.redirect(new URL("/cms/dashboard", request.url));
  } else if (isCmsRoute && pathname === "/cms/dashboard" && !auth) {
    return NextResponse.redirect(new URL("/cms", request.url));
  }
}

export const config = {
  matcher: ["/cms/:path*", "/cms/dashboard/:path*"],
};
