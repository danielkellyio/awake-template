const fs = require('fs')
const matter = require('gray-matter')
console.log('yml-to-json here')

const dir = `${__dirname}/../content/posts`
fs.readdir(dir, (err, files) => {
  const index = []
  const contents = {}
  files.forEach((file) => {
    contents[file] = ''
    const readStream = fs.createReadStream(`${dir}/${file}`, 'UTF-8')
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
          `${__dirname}/../static/api/posts.json`,
          'UTF-8'
        )
        writeStream.write(JSON.stringify(index))
      }
    })
  })
})
