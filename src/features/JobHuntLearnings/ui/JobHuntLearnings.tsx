export function JobHuntLearnings() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What it taught me</h2>
        <ul className="space-y-3 text-muted-foreground leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>
              Agent UX lives or dies on streaming. Pub/sub between the agent and the SSE layer
              decouples the long-running run from the request that opened the stream, so reloading
              the page doesn&apos;t kill the job.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>
              Keep the data layer (Nest + Postgres) and the LLM layer (Python FastAPI) on either
              side of a small, typed HTTP boundary &mdash; it makes both sides much easier to evolve.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>
              A LangGraph ReAct agent with a hard tool-call ceiling and translated error messages
              is dramatically more pleasant than raw exceptions bubbling into the UI.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>
              Tilt + Helm + k3d gives you a production-shaped local environment without a real
              cluster. Worth the upfront setup for any project with &gt; 2 services.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
