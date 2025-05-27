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

export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
}
