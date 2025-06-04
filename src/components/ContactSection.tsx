"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const webhookUrl = "https://discord.com/api/webhooks/1379840222413717714/IuCV6JCmcRUdwTETx2drKX2wTLRbtKrEEF5wkNUB4cIhmZ26Ynvs135MUtwGVQ5LMcMa"
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "",
          embeds: [
            {
              title: "Novo Contato do Portfólio",
              description: `**Nome:** ${formData.name}\n**Email:** ${formData.email}\n**Mensagem:** ${formData.message}`,
              color: 3066993, 
            },
          ],
        }),
      });
      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Erro ao enviar mensagem", error)
    }

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset do estado de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-gray-400 text-sm mb-2">&gt; ./connect</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Entre em</span> <span className="text-white">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-[#0f0]/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="terminal p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-[#0f0]">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#0f0] mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">aureliusnavi7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-[#0f0] mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Localização</h4>
                    <p className="text-gray-400">Teresina, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#0f0] mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefone</h4>
                    <p className="text-gray-400">+55 (86) 99406-9611</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Conecte-se comigo</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/aureliusn12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/aureliusnavi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5586994069611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0f0]/10 flex items-center justify-center text-[#0f0] hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="terminal p-6">
            <h3 className="text-xl font-bold mb-6 text-[#0f0]">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  spellCheck={false}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-[#0f0]/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0f0] focus:ring-1 focus:ring-[#0f0]/50 transition-all duration-300 resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#0f0]/10 text-[#0f0] rounded-md hover:bg-[#0f0]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-[#0f0]/10 border border-[#0f0]/30 rounded-md text-[#0f0] text-center">
                  Mensagem enviada com sucesso!
                </div>
              )}

              {submitError && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-500 text-center">
                  Erro ao enviar mensagem. Tente novamente.
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
