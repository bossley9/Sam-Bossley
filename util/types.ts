export type FeedMeta = {
  desc: string
  href: string
  image?: string
  items?: {
    date?: string
    desc?: string
    href: string
    id?: string
    tags?: string[]
    title: string
  }[]
  title: string
}

export type ThoughtMeta = {
  date: string
  desc: string
  id: string
  image?: string
  lastUpdated: string
  tags: string[]
  title: string
}

export type Thought = ThoughtMeta & { content: string }

export type LogMeta = {
  date: string
  desc: string
  id: string
  image?: string
  lastUpdated: string
  title: string
}

export type Log = LogMeta & { content: string }
