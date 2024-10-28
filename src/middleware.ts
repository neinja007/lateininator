import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) await auth.protect();
});

const isProtectedRoute = createRouteMatcher(['/user(.*)', '/premium/manage(.*)']);
