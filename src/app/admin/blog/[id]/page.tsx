import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import { PostEditor } from "@/features/admin/ui/PostEditor"


type Props = { params: Promise<{ id: string }> }

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const [post] = await db.select().from(posts).where(eq(posts.id, id))

  if (!post) notFound()

  return (
    <div className="max-w-4xl">
      <PostEditor post={post} />
    </div>
  )
}
