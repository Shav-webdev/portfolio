"use client"

import { useState } from "react"
import type { Post } from "@/lib/db/schema"
import { createPost, updatePost } from "@/features/blog/actions"

type Props = { post?: Post }

export function PostEditor({ post }: Props) {
  const [title, setTitle] = useState(post?.title ?? "")
  const [slug, setSlug] = useState(post?.slug ?? "")
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "")
  const [content, setContent] = useState(post?.content ?? "")
  const [tags, setTags] = useState(post?.tags.join(", ") ?? "")
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? "")
  const [published, setPublished] = useState(post?.published ?? false)
  const [generating, setGenerating] = useState(false)
  const [aiTopic, setAiTopic] = useState("")
  const [aiProjectUrl, setAiProjectUrl] = useState("")
  const [saving, setSaving] = useState(false)

  function deriveSlug(value: string) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  async function handleGenerate() {
    if (!aiTopic) return
    setGenerating(true)
    try {
      const res = await fetch("/api/ai/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic, projectUrl: aiProjectUrl }),
      })
      const data = await res.json()
      setTitle(data.title ?? "")
      setSlug(data.slug ?? "")
      setExcerpt(data.excerpt ?? "")
      setContent(data.content ?? "")
      setTags(data.tags?.join(", ") ?? "")
    } finally {
      setGenerating(false)
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const data = {
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || null,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      published,
    }
    if (post) {
      await updatePost(post.id, data)
    } else {
      await createPost(data)
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* AI generation panel */}
      <div className="border rounded-md p-4 bg-muted/30 space-y-3">
        <p className="text-sm font-medium">Generate with AI</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            value={aiTopic}
            onChange={(e) => setAiTopic(e.target.value)}
            placeholder="Topic or title idea"
            className="border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            value={aiProjectUrl}
            onChange={(e) => setAiProjectUrl(e.target.value)}
            placeholder="Project URL (optional)"
            className="border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button
          type="button"
          onClick={handleGenerate}
          disabled={generating || !aiTopic}
          className="text-sm border rounded px-3 py-1.5 hover:bg-muted transition-colors disabled:opacity-50"
        >
          {generating ? "Generating…" : "Generate"}
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (!post) setSlug(deriveSlug(e.target.value))
          }}
          required
          className="w-full border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="w-full border rounded px-3 py-2 text-sm bg-background font-mono focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={2}
          className="w-full border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Cover Image URL</label>
        <input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          placeholder="https://..."
          className="w-full border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Tags (comma-separated)</label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="react, typescript, nextjs"
          className="w-full border rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Content (Markdown)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={20}
          className="w-full border rounded px-3 py-2 text-sm bg-background font-mono focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="published"
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="rounded"
        />
        <label htmlFor="published" className="text-sm font-medium">Publish immediately</label>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? "Saving…" : post ? "Save changes" : "Create post"}
        </button>
        <a href="/admin/blog" className="px-4 py-2 rounded-md text-sm border hover:bg-muted transition-colors">
          Cancel
        </a>
      </div>
    </form>
  )
}
