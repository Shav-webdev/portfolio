"use server"

import { db } from "@/lib/db"
import { posts, type NewPost } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(data: Omit<NewPost, "id" | "createdAt" | "updatedAt">) {
  const [post] = await db.insert(posts).values(data).returning()
  revalidatePath("/blog")
  revalidatePath("/admin")
  redirect(`/admin/blog/${post.id}`)
}

export async function updatePost(
  id: string,
  data: Partial<Omit<NewPost, "id" | "createdAt" | "updatedAt">>,
) {
  await db
    .update(posts)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath(`/blog/${data.slug}`)
  revalidatePath("/admin")
}

export async function deletePost(id: string) {
  await db.delete(posts).where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath("/admin")
  redirect("/admin/blog")
}

export async function togglePublished(id: string, published: boolean) {
  await db.update(posts).set({ published, updatedAt: new Date() }).where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath("/admin")
}
