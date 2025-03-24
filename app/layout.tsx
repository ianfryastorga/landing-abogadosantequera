import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Bootstrap CSS importado en el componente ClientBootstrap

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antequera Abogados | Servicios Legales de Excelencia',
  description: 'Bufete de abogados especializado en derecho civil, penal, familiar, laboral, corporativo y tributario. Soluciones jurídicas efectivas en Santiago.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
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
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 