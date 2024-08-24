import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, request) => {
  if (auth().userId === null) {
    if (forSignedInUsers(request)) {
      return NextResponse.redirect(new URL('/account/sign-in', request.url));
    }
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
});

const forSignedInUsers = createRouteMatcher(['/account/redirect', '/account/manage']);
