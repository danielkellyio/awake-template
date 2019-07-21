import Posts from './posts'
class CMS {
  constructor(axios) {
    this.posts = new Posts(axios)
  }
}
export default CMS
