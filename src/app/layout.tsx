import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { StructuredData, getProfilePageSchema } from "@/features/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shavarsh Abrahamyan - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
  keywords: ["portfolio", "developer", "full-stack", "web development"],
  authors: [{ name: "Shavarsh Abrahamyan" }],
  creator: "Shavarsh Abrahamyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Shav-webdev.github.io/portfolio",
    title: "Shavarsh Abrahamyan - Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills",
    siteName: "Shavarsh Abrahamyan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shavarsh Abrahamyan - Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills",
    creator: "@your-twitter",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <StructuredData data={getProfilePageSchema()} id="ProfilePage" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
