"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { posts, type NewPost } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function requireAuth() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
}

export async function createPost(data: Omit<NewPost, "id" | "createdAt" | "updatedAt">) {
  await requireAuth()
  const [post] = await db.insert(posts).values(data).returning()
  revalidatePath("/blog")
  revalidatePath("/admin")
  redirect(`/admin/blog/${post.id}`)
}

export async function updatePost(
  id: string,
  data: Partial<Omit<NewPost, "id" | "createdAt" | "updatedAt">>,
) {
  await requireAuth()
  await db
    .update(posts)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath(`/blog/${data.slug}`)
  revalidatePath("/admin")
}

export async function deletePost(id: string) {
  await requireAuth()
  await db.delete(posts).where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath("/admin")
  redirect("/admin/blog")
}

export async function togglePublished(id: string, published: boolean) {
  await requireAuth()
  await db.update(posts).set({ published, updatedAt: new Date() }).where(eq(posts.id, id))
  revalidatePath("/blog")
  revalidatePath("/admin")
}
