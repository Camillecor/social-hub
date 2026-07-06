// src/app/layout.tsx

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import { AuthProvider } from '@/lib/auth'
import { Sidebar } from '@/components/layouts/Sidebar'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tableau de bord — Social Hub',
  description: 'Community Manager & Web Designer Dashboard — Studio Cami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${grotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-app-gradient text-foreground antialiased">
        <AuthProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto relative">
              <div className="p-8 md:p-12 relative z-10">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
