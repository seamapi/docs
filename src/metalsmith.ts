import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import Metalsmith from 'metalsmith'

import { blueprint } from './lib/index.js'

Metalsmith(dirname(fileURLToPath(import.meta.url)))
  .source('./docs/api')
  .destination('../docs/api')
  .clean(true)
  .metadata({})
  .use(blueprint)
  .build((err) => {
    if (err != null) throw err
  })
