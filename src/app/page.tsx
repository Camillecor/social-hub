// src/app/page.tsx

'use client'

import { Card } from '@/components/ui/card'
import { Sparkles, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Bienvenue, Utilisateur</h1>
        <p className="text-gray-400">Gérez votre présence sur les réseaux sociaux</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/50 border-gray-800 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Posts totaux</p>
              <p className="text-3xl font-bold">0</p>
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
              <p className="text-3xl font-bold">0</p>
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
          <a
            href="/redaction"
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors text-center"
          >
            <p className="text-sm font-medium">✍️ Rédiger</p>
          </a>
          <a
            href="/calendrier"
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors text-center"
          >
            <p className="text-sm font-medium">📅 Calendrier</p>
          </a>
          <a
            href="/studio-visuel"
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors text-center"
          >
            <p className="text-sm font-medium">🎨 Visuel</p>
          </a>
          <a
            href="/outils"
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors text-center"
          >
            <p className="text-sm font-medium">🛠️ Outils</p>
          </a>
        </div>
      </Card>
    </div>
  )
}
