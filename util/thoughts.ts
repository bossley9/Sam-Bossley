import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ThoughtMeta } from 'util/types'

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
      ...res.data,
    } as ThoughtMeta
  })

  return thoughtsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getThoughtIds = () => {
  const filenames = fs.readdirSync(dir)

  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md/, ''),
      },
    }
  })
}

export const getThoughtData = (id: string) => {
  const fullPath = path.join(dir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const res = matter(fileContents)

  return {
    id,
    ...res.data,
    content: res.content,
  } as ThoughtMeta & { content: string }
}
