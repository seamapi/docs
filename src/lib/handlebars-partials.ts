import { readFile } from 'node:fs/promises'
import { parse } from 'node:path'

import { glob } from 'glob'

export const getHandlebarsPartials = async (
  rootPath: string,
): Promise<Record<string, string>> => {
  const paths = await glob(`${rootPath}/**/*.hbs`)
  const keys = paths.map((p) => parse(p).name)
  const contents = await Promise.all(paths.map(async (p) => await readFile(p)))
  return Object.fromEntries(
    keys.map((_, i) => [keys[i], contents[i]?.toString()]),
  )
}
