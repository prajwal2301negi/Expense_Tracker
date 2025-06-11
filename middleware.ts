import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  // matcher: [
  //   // Skip Next.js internals and all static files, unless found in search params
  //   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  //   // Always run for API routes
  //   '/(api|trpc)(.*)',
  // ],

  // matcher: ['/((?!_next/image|_next/static|favicon.ico).*)'],
   matcher: [
    // Apply Clerk middleware to everything in /app/*
    '/((?!.*\\..*|_next).*)', // excludes static files
    '/',                      // root route
    '/(api|trpc)(.*)',        // API routes
    '/app/(.*)'               // 💥 This line ensures app actions get the auth context
  ],

};