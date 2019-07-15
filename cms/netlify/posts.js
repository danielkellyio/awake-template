export default {
  getPost(slug) {
    const { data, content } = require(`~/content/posts/${slug}.md`).default
    return {
      ...data,
      content
    }
  },
  async getLatestPosts() {
    const posts = await import('~/static/api/posts.json')
    return posts.default
  }
}
