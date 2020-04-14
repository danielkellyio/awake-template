import { getMixins } from './mixins'

class Category {
  constructor(axios) {
    this.slug = 'category'
    this.slugPlural = 'categories'
    this.pretty = 'Category'
    this.plural = 'Categories'
    this.axios = axios
  }
}

// Mixins
Object.assign(Category.prototype, getMixins)
export default Category
