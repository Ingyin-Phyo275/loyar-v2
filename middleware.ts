import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const isPrivateRoute =
    url.pathname === "/payment" || url.pathname === "/kbz-pwa";

  if (!isPrivateRoute) return NextResponse.next();

  const data = url.searchParams.get("data");
  const iv = url.searchParams.get("iv");

  // redirect if missing
  if (!data || !iv) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/payment", "/kbz-pwa"],
};