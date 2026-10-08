import { PostEditor } from "@/features/admin/ui/PostEditor"

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">New Post</h1>
        <PostEditor />
      </div>
    </div>
  )
}
