const ncp = require('ncp').ncp

ncp.limit = 16

export default () => {
  ncp(`${__dirname}/../static`, `${__dirname}/../../../static`, (err) => {
    if (err) {
      return console.error(err)
    }
    console.log('Netlify admin generated in dist')
  })
}
