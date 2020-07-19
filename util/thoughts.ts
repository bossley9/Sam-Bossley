import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ThoughtMeta, Thought } from 'util/types'

const dir = path.join(process.cwd(), 'thoughts')

export const getThoughtMetas = () => {
  const filenames = fs.readdirSync(dir)
  const thoughtMetas = filenames.map((filename) => {
    const id = filename.replace(/\.md/, '')

    const fullPath = path.join(dir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const res = matter(fileContents)

    return {
      id,
      ...res.data,
    } as ThoughtMeta
  })

  return thoughtMetas.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  )
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

export const getThought = (id: string) => {
  const fullPath = path.join(dir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const res = matter(fileContents)

  return {
    id,
    ...res.data,
    content: res.content,
  } as Thought
}
