import { chunk } from 'lodash'

export const getOneMixin = {
  getOne(slug) {
    const {
      data,
      content
    } = require(`~/content/${this.slugPlural}/${slug}.md`).default
    return {
      ...data,
      content
    }
  }
}

export const getByNumberMixin = {
  async getByNumber(number, filter = false, firstTime = true) {
    if (!filter) {
      filter = (resource) => {
        return resource
      }
    }
    if (firstTime) {
      this.reset()
    }
    this.gottenPage++
    try {
      const resources = await this.getByPage(this.gottenPage)
      const filtered = resources.filter(filter)
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
}

export const getByPageMixin = {
  gottenPage: 0,
  async getByPage(page, filter = false) {
    if (!filter) {
      filter = (resource) => {
        return resource
      }
    }
    try {
      const categories = await this.axios.$get(
        `api/${this.slugPlural}/page-${page}.json`
      )
      return categories.filter(filter)
    } catch (err) {
      throw err
    }
  },
  reset() {
    this.gottenPage = 0
  }
}

export const getAllMixin = {
  async getAll() {
    const resources = await this.axios.$get(`api/${this.slugPlural}.json`)
    return resources
  }
}

let getMixinChain = Object.assign({}, getOneMixin)
getMixinChain = Object.assign(getMixinChain, getOneMixin)
getMixinChain = Object.assign(getMixinChain, getByNumberMixin)
getMixinChain = Object.assign(getMixinChain, getByPageMixin)
getMixinChain = Object.assign(getMixinChain, getAllMixin)

export const getMixins = getMixinChain
