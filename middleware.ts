import { NextResponse } from 'next/server';

export function middleware(request : any) {
  const url = request.nextUrl.clone();

  const isPrivateRoute = url.pathname === '/payment-success' || url.pathname === '/kbz-pwa';
  if (!isPrivateRoute) return NextResponse.next();

  const key = url.searchParams.get('key');

  if (key !== process.env.NEXT_PUBLIC_PRIVATE_KEY) {
    // Redirect to home and clear query params
    const redirectUrl = new URL('/', request.url); // '/' + current origin
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/payment-success', '/kbz-pwa'],
};