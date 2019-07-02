import path from 'path'
import glob from 'glob'

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
export const getDynamicPaths = function (urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map((filepath) => `${url}/${path.basename(filepath, '.md')}`)
    })
  )
}
