import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Aurelius Navi | Red Team & Pentest | Engenharia de Software",
  description:
    "Graduando em Engenharia de Software com foco em segurança ofensiva — Red Team, Pentest e desenvolvimento seguro. Teresina, Brasil. Disponível para estágio e oportunidades remotas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.aureliusnavi.me",
    siteName: "Aurelius Navi",
    title: "Aurelius Navi | Red Team & Pentest",
    description:
      "Engenharia de Software com foco em segurança ofensiva. Pentest, Red Team, automação em Python, Linux. Open to Work.",
    images: [
      {
        url: "https://www.aureliusnavi.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aurelius Navi — Red Team & Pentest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelius Navi | Red Team & Pentest",
    description:
      "Engenharia de Software com foco em segurança ofensiva — Pentest, Red Team, Python, Linux.",
    images: ["https://www.aureliusnavi.me/og-image.png"],
  },
  alternates: {
    canonical: "https://www.aureliusnavi.me",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "pentest",
    "red team",
    "cibersegurança",
    "segurança ofensiva",
    "engenharia de software",
    "Kali Linux",
    "Python",
    "OWASP",
    "CTF",
    "Teresina",
    "estágio",
  ],
  authors: [{ name: "Aurelius Navi", url: "https://www.aureliusnavi.me" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={jetbrainsMono.variable}>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}
