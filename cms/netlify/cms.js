import Posts from './posts'
import Categories from './categories'
class CMS {
  constructor(axios) {
    this.posts = new Posts(axios)
    this.categories = new Categories(axios)
  }
}
export default CMS
