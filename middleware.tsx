import { clerkMiddleware } from "@clerk/nextjs/server";

// Correctly export the middleware function
const middleware = clerkMiddleware();

export default middleware;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/((?!Signin|Signup).*)',
    '/(api|trpc)(.*)',
  ],
};
