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
