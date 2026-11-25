import { auth } from "@/lib/auth"
import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic({
  defaultHeaders: {
    "anthropic-workspace-id": process.env.ANTHROPIC_WORKSPACE_ID ?? "",
  },
})

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return new Response("Unauthorized", { status: 401 })

  const { topic, projectUrl, keywords } = await req.json()

  const prompt = `Write a technical blog post for a software engineer's portfolio.

Topic: ${topic}
${projectUrl ? `Project URL: ${projectUrl}` : ""}
${keywords?.length ? `Keywords to cover: ${keywords.join(", ")}` : ""}

Return a JSON object with exactly these fields:
- title: a concise, compelling title
- slug: URL-friendly slug (lowercase, hyphens)
- excerpt: 1-2 sentence summary (max 200 chars)
- content: full article in Markdown (include code examples, headings, use GFM)
- tags: array of 3-5 relevant tags (lowercase)

Return only valid JSON, no markdown fences.`

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  })

  const text = message.content[0].type === "text" ? message.content[0].text : ""

  try {
    const parsed = JSON.parse(text)
    return Response.json(parsed)
  } catch {
    return new Response("Failed to parse AI response", { status: 500 })
  }
}
