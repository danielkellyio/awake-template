import Posts from './posts'
import Categories from './categories'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.posts = new Posts(axios)
    this.categories = new Categories(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
