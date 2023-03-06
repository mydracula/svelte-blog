export const load = async ({ fetch, url }) => {
  const page = {
    current: 0,
    sticky: [],
    catlist: [],
    posts: []
  }
  return {
    page,
  }
}
