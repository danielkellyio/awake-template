import { chunk } from 'lodash'
class Categories {
  constructor(axios) {
    this.slug = 'category'
    this.slugPlural = 'categories'
    this.pretty = 'Category'
    this.plural = 'Categories'

    this.gottenPage = 0
    this.axios = axios
  }
  getOne(slug) {
    const { data, content } = require(`~/content/categories/${slug}.md`).default
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
    try {
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
    } catch (err) {
      throw err
    }
  }
  async getByPage(page, filter = false) {
    if (!filter) {
      filter = (post) => {
        return post
      }
    }
    try {
      const categories = await this.axios.$get(
        `api/categories/page-${page}.json`
      )
      return categories.filter(filter)
    } catch (err) {
      throw err
    }
  }
  static async getAll() {
    try {
      const categories = await this.axios.$get('api/categories.json')
      return categories
    } catch (err) {
      throw err
    }
  }
  reset() {
    this.gottenPage = 0
  }
}
export default Categories
