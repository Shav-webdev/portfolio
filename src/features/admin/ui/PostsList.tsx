"use client"

import type { Post } from "@/lib/db/schema"
import { togglePublished, deletePost } from "@/features/blog/actions"
import Link from "next/link"

type Props = { posts: Post[] }

export function PostsList({ posts }: Props) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground text-sm">No posts yet. Create your first one.</p>
  }

  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between border rounded-md px-4 py-3 bg-card"
        >
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{post.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {new Date(post.createdAt).toLocaleDateString()} ·{" "}
              <span className={post.published ? "text-green-500" : "text-yellow-500"}>
                {post.published ? "Published" : "Draft"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 ml-4 shrink-0">
            <button
              onClick={() => togglePublished(post.id, !post.published)}
              className="text-xs border rounded px-2 py-1 hover:bg-muted transition-colors"
            >
              {post.published ? "Unpublish" : "Publish"}
            </button>
            <Link
              href={`/admin/blog/${post.id}`}
              className="text-xs border rounded px-2 py-1 hover:bg-muted transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                if (confirm("Delete this post?")) deletePost(post.id)
              }}
              className="text-xs border border-destructive text-destructive rounded px-2 py-1 hover:bg-destructive/10 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
