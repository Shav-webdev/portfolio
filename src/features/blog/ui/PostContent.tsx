import type { Post } from "@/lib/db/schema"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import Link from "next/link"

type Props = { post: Post }

export function PostContent({ post }: Props) {
  return (
    <article>
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
      >
        ← All articles
      </Link>

      <time className="text-xs text-muted-foreground block mb-2">
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      <p className="text-muted-foreground mb-4">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-lg mb-8 object-cover max-h-72"
        />
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
