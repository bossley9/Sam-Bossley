import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type ThoughtMatter = {
  date: string
}

const dir = path.join(process.cwd(), 'thoughts')

export const getThoughtsData = () => {
  const filenames = fs.readdirSync(dir)
  const thoughtsData = filenames.map((filename) => {
    const id = filename.replace(/\.md/, '')

    const fullPath = path.join(dir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const res = matter(fileContents)

    return {
      id,
      ...(res.data as ThoughtMatter),
    }
  })

  return thoughtsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getThought = (thought: string) => {
  return thought
}
