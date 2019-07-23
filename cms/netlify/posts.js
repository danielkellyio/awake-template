import { getMixins } from './mixins'

class Posts {
  constructor(axios) {
    this.slug = 'post'
    this.slugPlural = 'posts'
    this.pretty = 'Post'
    this.plural = 'Posts'
    this.axios = axios
  }
}

// Mixins
Object.assign(Posts.prototype, getMixins)

export default Posts
