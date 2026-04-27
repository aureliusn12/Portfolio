import type { PersonalInfo } from "@/types"

// FIX: all fields now aligned with Red Team / pentest objective
export const personalInfo: PersonalInfo = {
  name: "Aurelius Navi",
  title: "Red Team & Pentest | Engenharia de Software",
  description:
    "Graduando em Engenharia de Software com foco em segurança ofensiva — pentest, Red Team e desenvolvimento seguro. Open to Work.",
  email: "aureliusnavi7@gmail.com",
  github: "https://github.com/aureliusn12",
  linkedin: "https://linkedin.com/in/aureliusnavi",
  bio: {
    title: "Segurança Ofensiva & Desenvolvimento",
    paragraph1:
      "Graduando em Engenharia de Software na iCEV com foco em segurança ofensiva. Atuo como estagiário de Ciência de Dados na Fadex (Python, automação, APIs Twilio) e exploro ativamente pentest web, análise de vulnerabilidades e ferramentas de Red Team.",
    paragraph2:
      "Em julho de 2024, atuei como tradutor técnico no Hub Investe Piauí, conectando empresas do setor apícola a investidores de seis países. Inglês avançado (Wizard by Pearson, 6 anos). Busco estágio ou trainee em cibersegurança, pentest ou Red Team.",
    mainTechs: ["Kali Linux", "Python", "Burp Suite", "Nmap", "OWASP"],
  },
}
