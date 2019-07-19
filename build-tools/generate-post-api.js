import siteConfig from '../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const generatePostApi = () => {
  const contentDir = `${__dirname}/../content/posts`
  const apiDir = `${__dirname}/../static/api`
  const allFile = `${apiDir}/posts.json`
  const metaFile = `${apiDir}/posts-meta.json`
  const pages = siteConfig.posts.perPage
  const doneMessage = `{totalNumber} posts generated in posts API`

  createAll(contentDir, allFile)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/posts`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generatePostApi
