import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Briefcase,
  Wrench,
  User,
  Mail,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  disabled?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban, disabled: true },
  { label: "Portfolio", href: "/admin/portfolio", icon: Briefcase, disabled: true },
  { label: "Skills", href: "/admin/skills", icon: Wrench, disabled: true },
  { label: "Experience", href: "/admin/experience", icon: User, disabled: true },
  { label: "Contact", href: "/admin/contact", icon: Mail, disabled: true },
]
