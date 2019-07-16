export default {
  getPost(slug) {
    const { data, content } = require(`~/content/posts/${slug}.md`).default
    return {
      ...data,
      content
    }
  },
  async getPostsByPage(axios, page) {
    const posts = await axios.$get(`api/pagination/page-${page}.json`)
    return posts
  },
  async getLatestPosts(axios) {
    const posts = await axios.$get('api/posts.json')
    return posts
  }
}
