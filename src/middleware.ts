import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

const isProtectedRoute = createRouteMatcher(['/user(.*)', '/premium/manage(.*)']);
