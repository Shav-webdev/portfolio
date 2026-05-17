import { Radio, Database, Brain, GitBranch } from "lucide-react"

const stages = [
  { label: "Browser",          note: "Next.js dashboard / chat",             color: "#60a5fa" },
  { label: "API (Nest)",       note: "auth · cvs · jobs · applications",     color: "#a78bfa" },
  { label: "Agent (Py)",       note: "LangGraph + Gemini",                   color: "#f472b6" },
  { label: "AI Core (Py)",     note: "parse · score · cover letters",        color: "#34d399" },
  { label: "Postgres + Redis", note: "data + pub/sub",                       color: "#fbbf24" },
]

export function JobHuntArchitecture() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Architecture</h2>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {stages.map((s, i) => (
            <div key={s.label} className="flex md:flex-col items-center gap-3 md:gap-2 md:flex-1">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold text-sm shadow"
                style={{ background: s.color }}
              >
                {i + 1}
              </div>
              <div className="md:text-center">
                <p className="text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mx-2" />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-sm text-muted-foreground leading-relaxed">
          <div className="flex gap-3">
            <Radio className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              Agent → Redis pub/sub → FastAPI SSE → Next API proxy → browser. Tool events stream live
              so users see <code className="text-foreground">tool_start</code>,{" "}
              <code className="text-foreground">tool_end</code>, and{" "}
              <code className="text-foreground">llm_chunk</code> as they happen.
            </p>
          </div>
          <div className="flex gap-3">
            <Database className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              Drizzle schema with users / cvs / jobs / applications and proper relations. pgvector
              is enabled so semantic search can ride on the same Postgres.
            </p>
          </div>
          <div className="flex gap-3">
            <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              LangGraph ReAct agent with a hard 10-tool-call ceiling and typed,
              user-facing translations of Gemini error codes (quota, 4xx, 5xx, timeouts).
            </p>
          </div>
          <div className="flex gap-3">
            <GitBranch className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              Helm umbrella chart with four subcharts plus a Tilt live-update loop &mdash; one
              command brings the whole stack up on k3d.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
