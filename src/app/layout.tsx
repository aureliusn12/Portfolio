import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aurelius Navi | Desenvolvedor & Hacker",
  description: "Portfólio pessoal de Aurelius Navi - Desenvolvedor Full Stack e entusiasta de segurança",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}
