const techStack = [
  { group: "Web",      items: ["Next.js 16", "React 19", "Tailwind CSS", "NextAuth", "TypeScript"] },
  { group: "API",      items: ["NestJS 11", "Drizzle ORM", "PostgreSQL", "pgvector", "JWT"] },
  { group: "Agent",    items: ["Python", "FastAPI", "LangGraph", "ReAct", "Redis pub/sub"] },
  { group: "AI Core",  items: ["Python", "FastAPI", "Gemini 2.5 Flash", "Embeddings", "SSE streaming"] },
  { group: "Infra",    items: ["Helm umbrella chart", "k3d", "Tilt", "Docker", "pnpm workspaces"] },
]

export function JobHuntTechStack() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tech stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((g) => (
          <div key={g.group} className="rounded-xl border border-border bg-muted/30 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{g.group}</p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
