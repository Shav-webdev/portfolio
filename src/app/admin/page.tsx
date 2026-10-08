import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { desc } from "drizzle-orm"
import { PostsList } from "@/features/admin/ui/PostsList"
import Link from "next/link"

export default async function AdminPage() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt))

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Blog Admin</h1>
          <Link
            href="/admin/new"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            New Post
          </Link>
        </div>
        <PostsList posts={allPosts} />
      </div>
    </div>
  )
}
