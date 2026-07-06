// src/app/page.tsx

export default function Dashboard() {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold tracking-[0.15em] uppercase text-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Studio Cami IA
      </span>

      <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.15]">
        Communiquez sur les{' '}
        <span className="inline-block bg-primary text-white px-3 rounded-lg -rotate-1">
          réseaux sociaux
        </span>
      </h1>

      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
        Votre espace pour piloter votre présence en ligne — pensé pour être
        simple, clair et rassurant. Choisissez une section dans le menu de
        gauche pour commencer.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold transition-colors shadow-sm">
          Commencer maintenant
        </button>
        <button className="px-6 py-3 rounded-full bg-surface border border-border hover:bg-muted text-foreground font-medium transition-colors">
          Voir le calendrier
        </button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Simple · Rapide · Sans jargon
      </p>
    </div>
  )
}
