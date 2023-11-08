import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src/_events')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { data, content } = matter(fileContents)

  type Items = Record<string, string>

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      items[field] = content
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (typeof data[field] !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      if (post1.date && post2.date) {
        return post1.date > post2.date ? -1 : 1
      } else if (post1.date && !post2.date) {
        return -1
      } else if (!post1.date && post2.date) {
        return 1
      } else {
        return 0
      }
    })

  return posts
}
