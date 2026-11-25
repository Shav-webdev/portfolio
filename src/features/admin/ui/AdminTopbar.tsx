"use client"

import { signOut } from "next-auth/react"
import { LogOut, ExternalLink } from "lucide-react"
import Link from "next/link"

type Props = { title: string }

export function AdminTopbar({ title }: Props) {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background shrink-0">
      <h1 className="text-base font-semibold">{title}</h1>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View site
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign out
        </button>
      </div>
    </header>
  )
}