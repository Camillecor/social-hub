// src/app/layout.tsx

import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/auth'
import { Sidebar } from '@/components/layouts/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Social Hub',
  description: 'Community Manager & Web Designer Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
        <AuthProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <div className="p-8">
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}