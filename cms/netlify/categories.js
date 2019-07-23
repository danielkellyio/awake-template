import { getMixins } from './mixins'

class Categories {
  constructor(axios) {
    this.slug = 'category'
    this.slugPlural = 'categories'
    this.pretty = 'Category'
    this.plural = 'Categories'
    this.axios = axios
  }
}

// Mixins
Object.assign(Categories.prototype, getMixins)
export default Categories
