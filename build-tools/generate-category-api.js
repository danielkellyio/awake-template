import siteConfig from '../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const generateCategoryApi = () => {
  const contentDir = `${__dirname}/../content/categories`
  const apiDir = `${__dirname}/../static/api`
  const allFile = `${apiDir}/categories.json`
  const metaFile = `${apiDir}/categories-meta.json`
  const pages = siteConfig.categories.perPage
  const doneMessage = `{totalNumber} categories generated in categories API`

  createAll(contentDir, allFile)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/categories`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateCategoryApi
