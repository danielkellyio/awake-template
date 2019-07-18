import { chunk } from 'lodash'
export default {
  gottenCount: 0,
  gottenPage: 0,

  getOne(slug) {
    const { data, content } = require(`~/content/posts/${slug}.md`).default
    return {
      ...data,
      content
    }
  },
  async getByNumber(
    axios,
    number,
    filter = (post) => {
      return post
    }
  ) {
    this.gottenPage++
    const posts = await this.getByPage(axios, this.gottenPage)
    const filtered = posts.filter(filter)
    let numbered = chunk(filtered, number)[0]
    if (numbered.length < number) {
      try {
        const more = await this.getByNumber(
          axios,
          number - numbered.length,
          filter
        )
        numbered = numbered.concat(more)
      } catch {
        return numbered
      }
    }
    return numbered
  },
  async getByPage(
    axios,
    page,
    filter = (post) => {
      return post
    }
  ) {
    const posts = await axios.$get(`api/pagination/page-${page}.json`)
    return posts.filter(filter)
  },
  async getAll(axios) {
    const posts = await axios.$get('api/posts.json')
    return posts
  }
}
