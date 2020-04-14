import path from 'path'
import glob from 'glob'
import head from './config/head'
import { modules, modulesSettings } from './config/modules'
import plugins from './config/plugins'
import build from './config/build'
import css from './config/css'
import { routeMap, otherRoutes } from './config/generate'

export default {
  mode: 'universal',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Headers of the page
   */
  head: head,
  generate: {
    routes: otherRoutes.concat(getDynamicPaths(routeMap))
  },
  /*
   ** Global CSS
   */
  css: css,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: plugins,
  /*
   ** Nuxt.js modules
   */
  modules: modules,
  ...modulesSettings,
  /*
   ** Build configuration
   */
  build: build
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: 'content' }).map((filepath) => {
        return `${url}/${path.basename(filepath, '.md')}`
      })
    })
  )
}
