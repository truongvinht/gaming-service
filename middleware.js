import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log('token');
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
)


// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    const req = request;
    const session = await getToken({ req, secret: process.env.JWT_SECRET });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect(new URL('/auth/login', request.url));

    console.log('next');
    // If user is authenticated, continue.
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/users/:path*',
}