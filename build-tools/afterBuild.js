import { CMS } from '../config/_siteConfig'
const cms = new CMS()
const runAfter = require(`${__dirname}/../cms/${cms.slug}/hooks/afterBuild`).default
runAfter()
