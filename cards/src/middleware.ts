import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  if(path === '/'){
    return NextResponse.redirect(new URL('/yugioh', request.url));
  }
}
 
// Matcher Config
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)'
  ]
}