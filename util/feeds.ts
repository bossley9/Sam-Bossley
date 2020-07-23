import fs from 'fs'
import path from 'path'
import { FeedMeta } from 'util/types'
import { APP_BASE_URL } from 'constants/strings'

export const genFeed = (meta: FeedMeta) => {
  const { desc, href, image, items = [], title } = meta
  const link = `${APP_BASE_URL}${href}`
  const feedHref = `/feeds${href}.xml`
  const feedUrl = path.join(process.cwd(), `public${feedHref}`)
  const filepath = path.dirname(feedUrl)

  if (!fs.existsSync(filepath)) fs.mkdirSync(filepath, { recursive: true })

  fs.writeFileSync(
    feedUrl,
    `
    <rss version="2.0">
      <channel>
        <title>${title}</title> 
        <link>${link}</link>
        <description>${desc}</description> 
        <language>en-us</language>
        <pubDate>${new Date().toUTCString()}</pubDate>
        ${
          image
            ? `
        <image>
          <url>${image}</url>
          <title>${title}</title>
          <link>${link}</link>
        </image>
              `
            : ''
        }
        ${items
          .map((item) => {
            const { date, desc, href, id, tags, title } = item
            return `
        <item>
          <title>${title}</title>
          <link>${APP_BASE_URL}${href}</link>
          ${
            desc
              ? `
          <description>${desc}</description>
                `
              : ''
          }
          ${
            date
              ? `
          <pubDate>${new Date(date).toUTCString()}</pubDate>
                `
              : ''
          }
          ${
            id
              ? `
          <guid>${id}</guid>
                `
              : ''
          }
          ${
            tags
              ? tags
                  .map(
                    (tag) => `
          <category>${tag}</category>
                            `
                  )
                  .join('')
              : ''
          }
        </item>
                 `
          })
          .join('')}
      </channel>
    </rss>
    `
  )

  return feedHref
}
