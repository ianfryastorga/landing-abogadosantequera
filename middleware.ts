import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener la URL actual
  const url = request.nextUrl.clone();
  
  // Configurar headers de seguridad importantes
  const response = NextResponse.next();
  
  // Agregar headers de seguridad
  const securityHeaders = {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    // Agregar política de Content-Security-Policy para Google Ads
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://tpc.googlesyndication.com https://pagead2.googlesyndication.com https://adservice.google.com https://adservice.google.cl;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net;
      frame-src 'self' https://www.google.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://www.youtube-nocookie.com;
      object-src 'none';
      base-uri 'none';
    `.replace(/\s+/g, ' ').trim()
  };
  
  // Aplicar headers de seguridad
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Headers específicos para Google Ads
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  // Permitir que el caché almacene recursos estáticos
  if (url.pathname.startsWith('/_next/static') || 
      url.pathname.startsWith('/images/') || 
      url.pathname.startsWith('/fonts/') || 
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.ico')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    // Para el resto de recursos, permitir caché pero revalidar
    response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
  }
  
  return response;
}

// Configuración para aplicar el middleware a todas las rutas
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next/static (static files)
     * 3. /_next/image (image optimization files)
     * 4. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}; 