import { dirname } from 'node:path'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'

import layouts from '@metalsmith/layouts'
import metadata from '@metalsmith/metadata'
import { deleteAsync } from 'del'
import Metalsmith from 'metalsmith'

import {
  blueprint,
  helpers,
  postprocess,
  reference,
  report,
} from './lib/index.js'

const rootDir = dirname(fileURLToPath(import.meta.url))

await Promise.all([deleteAsync('./docs/api'), deleteAsync('./docs/sdk')])

Metalsmith(rootDir)
  .source('./docs')
  .destination('../docs')
  .clean(false)
  .use(
    metadata({
      codeSampleDefinitions: './data/code-sample-definitions',
      pathMetadata: './data/paths.yaml',
    }),
  )
  .use(blueprint({ skipCodeFormat: env['SKIP_CODE_FORMAT'] != null }))
  .use(reference)
  .use(report)
  .use(
    layouts({
      default: 'default.hbs',
      engineOptions: {
        noEscape: true,
        helpers,
      },
    }),
  )
  .use(postprocess)
  .build((err) => {
    if (err != null) throw err
  })
