type Skill = {
  title: string
  tools: Array<string>
}

type Career = {
  image: string
  href: string
  company: string
  date: string
  title: string
  infoList: Array<string>
}

type Project = {
  id: number
  title: string
  image: Array<string>
  description: string
  website: string
  source: string
  backend?: string
  stack: Array<string>
}

type NavItem = {
  name: string
  href: string
}

export type {
  Skill,
  Career,
  Project,
  NavItem
}
