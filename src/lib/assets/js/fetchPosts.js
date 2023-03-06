import { dev } from '$app/environment'

const fetchPosts = async ({ offset = 0, limit = 10, category = '' }) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob(`$lib/posts/*.md`))
      .map(async ([path, page]) => {
        const { metadata } = await page()
        const slug = path.split('/').pop().split('.').shift()
        return { ...metadata, slug }
      })
  )

  console.log(dev, 'devdev');
  if (!dev) posts = posts.filter(post => post.draft !== true)

  let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  if (category) {
    sortedPosts = posts.filter(post => post.categories.includes(category))
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }

  if (limit && limit != -1 && limit < sortedPosts.length) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  const finalPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    categories: post.categories,
  }))

  return finalPosts
}

export default fetchPosts
