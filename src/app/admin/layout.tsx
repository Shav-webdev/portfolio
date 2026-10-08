import { AdminSidebar } from "@/features/admin/ui/AdminSidebar"
import { AdminTopbar } from "@/features/admin/ui/AdminTopbar"
import { NAV_ITEMS } from "@/features/admin/config/nav"
import { headers } from "next/headers"

async function getPageTitle() {
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") ?? ""
  const match = NAV_ITEMS.find((item) => {
    if (item.href === "/admin") return pathname === "/admin"
    return pathname.startsWith(item.href)
  })
  return match?.label ?? "Admin"
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const title = await getPageTitle()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AdminTopbar title={title} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
