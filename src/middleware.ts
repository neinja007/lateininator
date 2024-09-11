import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
});

const isProtectedRoute = createRouteMatcher(['/user(.*)']);
