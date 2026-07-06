// src/app/page.tsx

export default function Dashboard() {
  return (
    <div className="relative">
      {/* Decorative blurred blobs, echoing the Studio Cami visual language */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="pointer-events-none absolute top-10 left-56 w-72 h-72 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="pointer-events-none absolute top-32 right-0 w-96 h-96 rounded-full bg-orange-500/25 blur-3xl" />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 h-40" />
        <div className="glass rounded-2xl p-6 h-40" />
        <div className="glass rounded-2xl p-6 h-40" />
      </div>
    </div>
  )
}
