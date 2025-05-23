import { dirname } from 'node:path'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'

import layouts from '@metalsmith/layouts'
import metadata from '@metalsmith/metadata'
import { blueprint, getHandlebarsPartials } from '@seamapi/smith'
import * as types from '@seamapi/types/connect'
import { deleteAsync } from 'del'
import Metalsmith from 'metalsmith'

import {
  formatCode,
  helpers,
  postprocess,
  reference,
  report,
} from './lib/index.js'

const rootDir = dirname(fileURLToPath(import.meta.url))

await Promise.all([deleteAsync('./docs/api'), deleteAsync('./docs/sdk')])

const partials = await getHandlebarsPartials(`${rootDir}/layouts/partials`)

Metalsmith(rootDir)
  .source('./docs')
  .destination('../docs')
  .clean(false)
  .use(
    layouts({
      default: 'default.hbs',
      transform: 'handlebars',
      engineOptions: {
        noEscape: true,
        helpers,
        partials,
      },
    }),
  )
  .use(
    metadata({
      codeSampleDefinitions: './data/code-sample-definitions',
      resourceSampleDefinitions: './data/resource-sample-definitions',
      pathMetadata: './data/paths.yaml',
    }),
  )
  .use(
    blueprint({
      types,
      formatCode,
      skipCodeFormat: env['SKIP_CODE_FORMAT'] != null,
    }),
  )
  .use(reference)
  .use(report)
  .use(postprocess)
  .build((err) => {
    if (err != null) throw err
  })
