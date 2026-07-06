// src/app/page.tsx

export default function Dashboard() {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-4">
        Studio Cami IA
      </p>

      <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
        Bienvenue sur Social Hub
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Votre espace pour gérer votre présence sur les réseaux sociaux — pensé
        pour être simple, clair et rassurant. Choisissez une section dans le
        menu de gauche pour commencer.
      </p>

      <div className="flex flex-wrap gap-2">
        {['Épuré', 'Rassurant', 'Sans jargon'].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
