// src/components/layouts/Sidebar.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Calendar, Image, FileText, Folder,
  BarChart3, Bell, Link2, Sparkles, Download, Settings, LogOut
} from 'lucide-react'
import { useAuth } from '@/lib/auth'

// Each href matches a real folder in src/app so no link 404s.
const navigation = [
  { name: 'Dashboard', href: '/', icon: BarChart3 },
  { name: 'Calendrier', href: '/calendrier', icon: Calendar },
  { name: 'Visuels', href: '/visuels', icon: Image },
  { name: 'Rédaction', href: '/redaction', icon: FileText },
  { name: 'Outils', href: '/outils', icon: Sparkles },
  { name: 'Ressources', href: '/ressources', icon: Folder },
  { name: 'Analyse', href: '/analyse', icon: BarChart3 },
  { name: 'Veille', href: '/veille', icon: Bell },
  { name: 'Liens & bio', href: '/liens', icon: Link2 },
  { name: 'Exports', href: '/exports', icon: Download },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <aside className="glass w-64 flex flex-col h-screen border-r-0 rounded-none">
      <div className="px-6 py-7 border-b border-white/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <h1 className="font-heading text-base font-bold text-foreground">
              Tableau de bord
            </h1>
            <p className="text-xs text-muted-foreground tracking-wide">par Studio Cami</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
        {navigation.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 ${
                isActive
                  ? 'bg-primary-soft text-primary font-medium'
                  : 'text-muted-foreground hover:bg-white/60 hover:text-foreground'
              }`}
            >
              <Icon className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-sm">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/50 p-4 space-y-3">
        {user && (
          <div className="px-3 py-2 bg-white/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Connectée</p>
            <p className="text-sm font-medium truncate">{user.email}</p>
          </div>
        )}

        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/60 hover:text-foreground text-sm transition-colors">
            <Settings className="w-4 h-4" />
            <span>Réglages</span>
          </button>
          <button
            onClick={() => signOut()}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-primary-soft hover:text-primary text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sortir</span>
          </button>
        </div>
      </div>
    </aside>
  )
}