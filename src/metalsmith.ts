import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import Metalsmith from 'metalsmith'

Metalsmith(dirname(fileURLToPath(import.meta.url)))
  .source('./docs/api')
  .destination('../docs/api')
  .clean(true)
  .metadata({})
  .build((err) => {
    if (err != null) throw err
  })
