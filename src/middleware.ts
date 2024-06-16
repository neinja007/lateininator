import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}
	clerkMiddleware({ publishableKey: 'pk_test_cmVuZXdpbmctZWVsLTMzLmNsZXJrLmFjY291bnRzLmRldiQ' });
}

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};
