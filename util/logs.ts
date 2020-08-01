import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { LogMeta } from 'util/types'

const dir = path.join(process.cwd(), 'log')

const strEndsWith = (str: string, substr: string): boolean => {
  return str.indexOf(substr) === str.length - substr.length
}

export const getLogMetas = () => {
  const filenames = fs.readdirSync(dir).filter((i) => strEndsWith(i, '.md'))

  const logMetas = filenames.map((filename) => {
    const id = filename.replace(/\.md/, '')

    const fullPath = path.join(dir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const res = matter(fileContents)

    return {
      id,
      ...res.data,
    } as LogMeta
  })

  return logMetas.sort((a, b) => a.title.localeCompare(b.title))
}
