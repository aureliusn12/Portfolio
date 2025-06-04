"use client"

import MatrixBackground from "@/components/MatrixBackground"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
