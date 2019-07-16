import siteConfig from '../config/_siteConfig'
const fs = require('fs')
const matter = require('gray-matter')
const _ = require('lodash')

const contentDir = `${__dirname}/../content/posts`
const apiDir = `${__dirname}/../static/api`
fs.readdir(contentDir, (err, files) => {
  const index = []
  const contents = {}
  files.forEach((file) => {
    contents[file] = ''
    const readStream = fs.createReadStream(`${contentDir}/${file}`, 'UTF-8')
    readStream.on('data', (data, err) => {
      if (err) throw err
      contents[file] += data
    })
    readStream.on('end', () => {
      const parsed = matter(contents[file])
      delete parsed.buffer
      parsed.data.slug = file.replace(/.md$/, '')
      index.push(parsed)

      if (index.length === files.length) {
        const writeStream = fs.createWriteStream(
          `${apiDir}/posts.json`,
          'UTF-8'
        )
        const sorted = index.sort(compareDates).reverse()
        writeStream.write(JSON.stringify(sorted))

        createPagination(sorted)
      }
    })
  })

  console.log('Posts api regenerated')

  function compareDates(a, b) {
    const aParsed = Date.parse(a.data.date)
    const bParsed = Date.parse(b.data.date)
    if (aParsed < bParsed) {
      return -1
    }
    if (aParsed > bParsed) {
      return 1
    }
    return 0
  }
  function createPagination(posts) {
    const paginated = _.chunk(posts, siteConfig.posts.postsPerPage)
    let currentPage = 0
    for (let i = 0; i < paginated.length; i++) {
      currentPage = i + 1
      const chunkWriteStream = fs.createWriteStream(
        `${apiDir}/pagination/page-${currentPage}.json`,
        'UTF-8'
      )
      chunkWriteStream.write(JSON.stringify(paginated[i]))
    }
    const meta = require(`${apiDir}/posts-meta.json`)
    meta.lastPage = currentPage
    const chunkWriteStream = fs.createWriteStream(
      `${apiDir}/posts-meta.json`,
      'UTF-8'
    )
    chunkWriteStream.write(JSON.stringify(meta))
  }
})
