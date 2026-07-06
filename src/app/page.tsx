// src/app/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { Card } from '@/components/ui/card'
import { Sparkles, TrendingUp } from 'lucide-react'

const quickActions = [
  { href: '/redaction', label: '✍️ Rédiger' },
  { href: '/calendrier', label: '📅 Calendrier' },
  { href: '/studio-visuel', label: '🎨 Visuel' },
  { href: '/outils', label: '🛠️ Outils' },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ totalPosts: 0, thisWeek: 0 })

  // Load real stats only when Supabase is configured and a user is signed in.
  // Otherwise the dashboard just shows zeros — it never blocks on loading.
  useEffect(() => {
    if (!supabase || !user) return
    let active = true

    supabase
      .from('posts')
      .select('created_at')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (!active || error || !data) return
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
        setStats({
          totalPosts: data.length,
          thisWeek: data.filter(
            (p) => new Date(p.created_at as string).getTime() > weekAgo
          ).length,
        })
      })

    return () => {
      active = false
    }
  }, [user])

  const displayName = user?.email?.split('@')[0] ?? 'Utilisateur'

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Bienvenue, {displayName}</h1>
        <p className="text-gray-400">Gérez votre présence sur les réseaux sociaux</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/50 border-gray-800 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Posts totaux</p>
              <p className="text-3xl font-bold">{stats.totalPosts}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Cette semaine</p>
              <p className="text-3xl font-bold">{stats.thisWeek}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Agents actifs</p>
              <p className="text-3xl font-bold">2</p>
              <p className="text-xs text-gray-500 mt-1">Il y a 2h</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gray-900/50 border-gray-800 p-6">
        <h2 className="text-lg font-bold mb-4">Actions rapides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors text-center"
            >
              <p className="text-sm font-medium">{action.label}</p>
            </a>
          ))}
        </div>
      </Card>
    </div>
  )
}
