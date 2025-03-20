import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Bootstrap CSS importado en el componente ClientBootstrap

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antequera Abogados | Servicios Legales de Excelencia',
  description: 'Bufete de abogados especializado en derecho civil, penal, familiar, laboral, corporativo y tributario. Soluciones jurídicas efectivas en Santiago.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 