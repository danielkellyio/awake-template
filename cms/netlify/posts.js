import { chunk } from 'lodash'
class Posts {
  constructor(axios) {
    this.gottenPage = 0
    this.axios = axios
  }
  getOne(slug) {
    const { data, content } = require(`~/content/posts/${slug}.md`).default
    return {
      ...data,
      content
    }
  }
  async getByNumber(number, filter = false, firstTime = true) {
    if (!filter) {
      filter = (post) => {
        return post
      }
    }
    if (firstTime) {
      this.reset()
    }
    this.gottenPage++
    const posts = await this.getByPage(this.gottenPage)
    const filtered = posts.filter(filter)
    let numbered = chunk(filtered, number)[0]
    if (numbered.length < number) {
      try {
        const more = await this.getByNumber(
          number - numbered.length,
          filter,
          false
        )
        numbered = numbered.concat(more)
      } catch {
        return numbered
      }
    }
    return numbered
  }
  async getByPage(page, filter = false) {
    if (!filter) {
      filter = (post) => {
        return post
      }
    }
    const posts = await this.axios.$get(`api/posts/page-${page}.json`)
    return posts.filter(filter)
  }
  static async getAll() {
    const posts = await this.axios.$get('api/posts.json')
    return posts
  }
  reset() {
    this.gottenPage = 0
  }
}
export default Posts
