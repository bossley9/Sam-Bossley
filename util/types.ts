export type ThoughtMeta = {
  id: string
  title: string
  date: string
  lastUpdated: string
  tags: string[]
}

export type Thought = ThoughtMeta & { content: string }
