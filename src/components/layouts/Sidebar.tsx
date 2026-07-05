// src/components/layouts/Sidebar.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Calendar, Image, FileText, Folder,
  BarChart3, Bell, Link2, Sparkles, Settings, LogOut
} from 'lucide-react'
import { useAuth } from '@/lib/auth'

const navigation = [
  { name: 'Dashboard', href: '/', icon: BarChart3 },
  { name: 'Calendrier', href: '/calendrier', icon: Calendar },
  { name: 'Studio visuel', href: '/studio-visuel', icon: Image },
  { name: 'Rédaction', href: '/redaction', icon: FileText },
  { name: 'Outils', href: '/outils', icon: Sparkles },
  { name: 'Bibliothèque', href: '/bibliotheque', icon: Folder },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Veille', href: '/veille', icon: Bell },
  { name: 'Liens & bio', href: '/liens-bio', icon: Link2 },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <aside className="w-64 bg-gray-900/50 border-r border-gray-800 flex flex-col h-screen">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Social Hub</h1>
            <p className="text-xs text-gray-500">Community Manager</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-gray-800 p-4 space-y-4">
        {user && (
          <div className="px-3 py-2 bg-gray-800/30 rounded-lg">
            <p className="text-xs text-gray-500">Connecté</p>
            <p className="text-sm font-medium truncate">{user.email}</p>
          </div>
        )}

        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800/50 text-sm transition-colors">
            <Settings className="w-4 h-4" />
            <span>Paramètres</span>
          </button>
          <button
            onClick={() => signOut()}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-red-900/20 hover:text-red-400 text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
    </aside>
  )
}