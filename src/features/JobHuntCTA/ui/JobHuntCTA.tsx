import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function JobHuntCTA() {
  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Want the deep dive?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          The full source &mdash; web, API, agent, ai-core and Helm charts &mdash; lives on GitHub.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a
              href="https://github.com/Shav-webdev/job-hunt-copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              github.com/Shav-webdev/job-hunt-copilot
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
