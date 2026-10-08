import type { Post } from "@/lib/db/schema"
import Link from "next/link"

type Props = { posts: Post[] }

export function BlogList({ posts }: Props) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground">No articles yet. Check back soon.</p>
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <time className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
