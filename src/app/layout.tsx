// src/app/layout.tsx

import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { AuthProvider } from '@/lib/auth'
import { Sidebar } from '@/components/layouts/Sidebar'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Social Hub',
  description: 'Community Manager & Web Designer Dashboard — Studio Cami IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <AuthProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <div className="p-8 md:p-12">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
