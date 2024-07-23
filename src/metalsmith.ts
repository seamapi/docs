import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import metadata from '@metalsmith/metadata'
import Metalsmith from 'metalsmith'

import { blueprint, reference } from './lib/index.js'

Metalsmith(dirname(fileURLToPath(import.meta.url)))
  .source('./docs/api')
  .destination('../docs/api')
  .clean(true)
  .use(
    metadata({
      codeSampleDefinitions: './data/code-sample-definitions',
    }),
  )
  .use(blueprint)
  .use(reference)
  .build((err) => {
    if (err != null) throw err
  })
