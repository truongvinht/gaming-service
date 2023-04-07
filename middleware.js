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
  const { pathname } = request.nextUrl;

  // You could also check for any property on the session object,
  if (isUserRoute(pathname)) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
  }

  // protect api route with x-api-key
  if (isApiRoute(pathname)) {
    const key = req.headers.get('x-api-key');
    if (!(process.env.JWT_SECRET === key)) {
      return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    }
  }

  // If user is authenticated, continue.
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/users/:path*', '/api/users/:path*', '/api/yuanshen/:path*'],
};
