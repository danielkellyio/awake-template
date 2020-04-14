import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'

export default () => {
  generatePostApi()
  generateCategoryApi()
}
