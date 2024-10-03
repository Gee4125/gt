import { clerkMiddleware } from "@clerk/nextjs/server";

// Export the middleware function
const middleware = clerkMiddleware();

export default middleware;

// Configure the paths to apply middleware
export const config = {
  matcher: [
    // Exclude Next.js internals and static files (e.g., CSS, JS, images)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Apply middleware to all routes except SignIn and SignUp pages
    '/((?!Signin|Signup).*)',
    
    // Apply middleware to all API routes
    '/(api|trpc)(.*)',
  ],
};
