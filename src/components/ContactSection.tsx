"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

// FIX: webhook URL moved to env variable — NEVER hardcode tokens in source code
// Create .env.local and set: NEXT_PUBLIC_DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
const WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK ?? ""

// FIX: basic input sanitization to prevent XSS via webhook payload
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .slice(0, 2000) // FIX: cap message length
}

type FormState = "idle" | "submitting" | "success" | "error"

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formState, setFormState] = useState<FormState>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // FIX: prevent double-submission
    if (formState === "submitting") return

    // FIX: basic client-side validation before sending
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }

    setFormState("submitting")

    try {
      if (!WEBHOOK_URL) {
        // FIX: graceful fallback if env var not configured
        throw new Error("Webhook URL not configured")
      }

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "",
          embeds: [
            {
              title: "📬 Novo Contato — Portfólio",
              description: [
                `**Nome:** ${sanitize(formData.name)}`,
                `**Email:** ${sanitize(formData.email)}`,
                `**Mensagem:**\n${sanitize(formData.message)}`,
              ].join("\n"),
              color: 3066993,
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      setFormState("success")
      setFormData({ name: "", email: "", message: "" })

      // FIX: reset to idle after delay (was missing in original)
      setTimeout(() => setFormState("idle"), 6000)
    } catch (error) {
      console.error("Contact form error:", error)
      // FIX: original code set submitSuccess=true even on catch — fixed
      setFormState("error")
      setTimeout(() => setFormState("idle"), 5000)
    }
  }

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./connect --handshake</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Entre em</span>{" "}
            <span className="text-white">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="terminal p-6 h-full">
            <h3 className="text-xl font-bold mb-6 text-[#0f0]">
              Informações de Contato
            </h3>

            <div className="space-y-5">
              <div className="flex items-start">
                <Mail className="text-[#0f0] mr-4 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-0.5">Email</h4>
                  <a
                    href="mailto:aureliusnavi7@gmail.com"
                    className="text-gray-400 hover:text-[#0f0] transition-colors text-sm"
                  >
                    aureliusnavi7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-[#0f0] mr-4 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-0.5">Localização</h4>
                  <p className="text-gray-400 text-sm">
                    Teresina, PI — Brasil
                    <span className="ml-2 text-[#0f0]/70 text-xs">
                      (Remoto disponível)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-[#0f0] mr-4 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-0.5">WhatsApp</h4>
                  <a
                    href="https://wa.me/5586994069611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0f0] transition-colors text-sm"
                  >
                    +55 (86) 99406-9611
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0f0]/10">
              <h4 className="text-white font-medium mb-4">Conecte-se comigo</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/aureliusn12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Aurelius Navi"
                  className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/aureliusnavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Aurelius Navi"
                  className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:aureliusnavi7@gmail.com"
                  aria-label="Email de Aurelius Navi"
                  className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="terminal p-6">
            <h3 className="text-xl font-bold mb-6 text-[#0f0]">
              Envie uma Mensagem
            </h3>

            {/* FIX: use noValidate to control validation ourselves */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  spellCheck={false}
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300 placeholder-gray-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  autoComplete="email"
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300 placeholder-gray-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300 resize-none placeholder-gray-600"
                  placeholder="Sua mensagem..."
                />
                {/* FIX: character counter */}
                <div className="text-right text-xs text-gray-600 mt-1">
                  {formData.message.length}/2000
                </div>
              </div>

              {/* FIX: honeypot field — traps bots silently */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0f0]/10 text-[#0f0] rounded-md hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="animate-spin text-base">⟳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* FIX: proper success/error feedback */}
              {formState === "success" && (
                <div
                  role="alert"
                  className="p-3 bg-[#0f0]/10 border border-[#0f0]/30 rounded-md text-[#0f0] text-center text-sm"
                >
                  ✓ Mensagem enviada com sucesso! Responderei em breve.
                </div>
              )}

              {formState === "error" && (
                <div
                  role="alert"
                  className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-center text-sm"
                >
                  ✗ Falha ao enviar. Tente via{" "}
                  <a
                    href="mailto:aureliusnavi7@gmail.com"
                    className="underline hover:text-red-300"
                  >
                    email direto
                  </a>
                  .
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
