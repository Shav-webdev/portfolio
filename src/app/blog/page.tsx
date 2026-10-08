import type { Metadata } from "next"
import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { eq, desc } from "drizzle-orm"
import { Navigation } from "@/components/navigation"
import { BlogList } from "@/features/blog/ui/BlogList"

export const metadata: Metadata = {
  title: "Blog — Shavarsh Abrahamyan",
  description: "Technical articles on React, Next.js, TypeScript, and software engineering.",
}

export default async function BlogPage() {
  const published = await db
    .select()
    .from(posts)
    .where(eq(posts.published, true))
    .orderBy(desc(posts.createdAt))

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground mb-10">
          Articles on React, Next.js, TypeScript, and things I build.
        </p>
        <BlogList posts={published} />
      </main>
    </div>
  )
}
