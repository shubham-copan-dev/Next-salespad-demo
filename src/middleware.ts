import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest, token: string) {
  console.log("hello", request);
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/profile/:path*"],
};
