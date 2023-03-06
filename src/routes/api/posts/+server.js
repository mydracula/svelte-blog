import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'


export const GET = async () => {
  const posts = await fetchPosts({ limit: -1 })
  return json(posts)
}