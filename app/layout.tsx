import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

// Mejorar metadata para SEO
export const metadata: Metadata = {
  title: 'Antequera Abogados | Bufete de Abogados en Santiago, Chile',
  description: 'Servicios legales profesionales en derecho civil, laboral, corporativo, tributario, inmobiliario, penal, familia y administrativo. Consulta con nuestros especialistas.',
  keywords: 'abogados, bufete, derecho, asesoría legal, santiago, chile, derecho civil, derecho laboral, derecho tributario',
  authors: [{ name: 'Antequera Abogados' }],
  category: 'Legal',
  openGraph: {
    title: 'Antequera Abogados | Servicios Legales Profesionales',
    description: 'Asesoría legal especializada en Santiago, Chile. Expertos en múltiples áreas del derecho con enfoque personalizado.',
    url: 'https://antequera-abogados.cl',
    siteName: 'Antequera Abogados',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antequera Abogados | Servicios Legales',
    description: 'Asesoría legal personalizada para particulares y empresas en Santiago, Chile.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Etiqueta para Google Search Console */}
        <meta name="google-site-verification" content="tu-codigo-de-verificacion" />
        
        {/* Etiqueta para evitar problemas con Google Ads */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        {/* Precargar recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Agregar hreflang para indicar versiones en diferentes idiomas */}
        <link rel="alternate" hrefLang="es" href="https://antequera-abogados.cl" />
        <link rel="alternate" hrefLang="en" href="https://antequera-abogados.cl/en" />
        <link rel="canonical" href="https://antequera-abogados.cl" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Google Analytics - Colocar tu ID de GA */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Google Ads - Colocar tu ID de Google Ads */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Google Ads Conversion Tracking Script */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
} 