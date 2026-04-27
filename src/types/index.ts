export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  github: string
  linkedin: string
  bio: {
    title: string
    paragraph1: string
    paragraph2: string
    mainTechs: string[]
  }
}

export interface Skill {
  name: string
  icon: any
  items: string[]
}

// FIX: demo and github are nullable — avoids forcing "#" placeholder links
export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string | null
  demo?: string | null
  status?: "live" | "wip" | "concept"
}
