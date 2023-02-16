import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const isUserRoute = (pathname) => {
  return pathname.startsWith('/users');
};

const isApiRoute = (pathname) => {
  return pathname.startsWith('/api');
};

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const req = request;
  const session = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = request.nextUrl;

  // You could also check for any property on the session object,
  // like role === "admin" or name === "John Doe", etc.
  if (isUserRoute(pathname) && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // protect api route with x-api-key
  const key = req.headers.get('x-api-key');

  if (isApiRoute(pathname) && !(process.env.JWT_SECRET === key)) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
  }

  // If user is authenticated, continue.
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/users/:path*', '/api/users/:path*', '/api/yuanshen/:path*'],
};
