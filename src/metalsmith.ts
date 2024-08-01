import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import layouts from '@metalsmith/layouts'
import metadata from '@metalsmith/metadata'
import Metalsmith from 'metalsmith'

import { postprocess } from 'lib/reference.js'

import { blueprint, reference } from './lib/index.js'

const rootDir = dirname(fileURLToPath(import.meta.url))

Metalsmith(rootDir).source('./docs/api').destination('../docs/api').clean(true)

Metalsmith(rootDir).source('./docs/api').destination('../docs/sdk').clean(true)

Metalsmith(rootDir)
  .source('./docs')
  .destination('../docs')
  .clean(false)
  .use(
    metadata({
      codeSampleDefinitions: './data/code-sample-definitions',
    }),
  )
  .use(blueprint)
  .use(reference)
  .use(
    layouts({
      default: 'default.hbs',
      engineOptions: {
        noEscape: true,
      },
    }),
  )
  .use(postprocess)
  .build((err) => {
    if (err != null) throw err
  })
