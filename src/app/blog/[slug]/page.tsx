import type { Metadata } from "next"

export const dynamic = "force-dynamic"

import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { eq, and } from "drizzle-orm"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PostContent } from "@/features/blog/ui/PostContent"


type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const [post] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.published, true)))

  if (!post) return {}
  return { title: `${post.title} — Shavarsh Abrahamyan`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const [post] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.published, true)))

  if (!post) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 max-w-3xl mx-auto px-6 py-12">
        <PostContent post={post} />
      </main>
    </div>
  )
}
