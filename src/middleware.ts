import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { device, browser, os, isBot } = userAgent(request);
  const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || 'unknown';
  const url = request.nextUrl.pathname;

  // Pour l'instant, on logge dans la console serveur
  // Dans une version finale, on enverrait ça vers une base de données
  console.log(`[TRACKING] ${new Date().toISOString()} | IP: ${ip} | Path: ${url} | Bot: ${isBot} | Device: ${device.type || 'desktop'} | Browser: ${browser.name} | OS: ${os.name}`);

  // On peut aussi ajouter des headers personnalisés pour que l'app sache si c'est un bot
  const response = NextResponse.next();
  response.headers.set('x-visitor-bot', isBot ? '1' : '0');
  
  return response;
}

// Configurer les routes à tracker
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|img).*)',
  ],
};
