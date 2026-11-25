import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { desc } from "drizzle-orm"
import { PostsList } from "@/features/admin/ui/PostsList"
import Link from "next/link"


export default async function AdminBlogPage() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt))

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          {allPosts.length} post{allPosts.length !== 1 ? "s" : ""} total ·{" "}
          {allPosts.filter((p) => p.published).length} published
        </p>
        <Link
          href="/admin/blog/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          New Post
        </Link>
      </div>
      <PostsList posts={allPosts} />
    </div>
  )
}