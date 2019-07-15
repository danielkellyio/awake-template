export default {
  getPost(slug) {
    const { data, content } = require(`~/content/posts/${slug}.md`).default
    return {
      ...data,
      content
    }
  },
  async getLatestPosts(axios) {
    const posts = await axios.$get('api/posts.json')
    return posts
  }
}
