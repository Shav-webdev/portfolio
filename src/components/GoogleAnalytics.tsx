"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import Script from "next/script"
import { getGeneratedPublicUserId } from "@/lib/utils"
import { Analytics, GA_MEASUREMENT_ID } from "@/lib/GoogleAnalytics"

const BASE_PATH = "/portfolio"

const GoogleAnalytics = () => {
  const pathname = usePathname()
  const prevPathname = useRef<string | null>(null)

  // Send page_view on every client-side route change (SPA navigation).
  // Skip only the very first run (initial load → config already sends that pageview).
  useEffect(() => {
    if (pathname == null || pathname === "" || typeof window === "undefined") return
    const pagePath = pathname === "/" ? BASE_PATH : `${BASE_PATH}${pathname}`

    if (prevPathname.current === null) {
      prevPathname.current = pathname
      return
    }
    if (prevPathname.current === pathname) return
    prevPathname.current = pathname

    Analytics.sendPageView(pagePath)
  }, [pathname])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Generating userId for public users by Fingerprint
    // and passing generated userId to GA
    const t = setTimeout(() => {
      getGeneratedPublicUserId().then((id) => {
        Analytics.addUserIdToGADataLayer(id)
      })
    }, 2500)
    return () => clearTimeout(t)
  }, [])

  if (!GA_MEASUREMENT_ID) return null

  return (
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
  )
}

export default GoogleAnalytics

