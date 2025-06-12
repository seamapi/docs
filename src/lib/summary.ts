import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type Metalsmith from 'metalsmith'

const summaryPath = join('docs', 'SUMMARY.md')

export const summary = async (
  files: Metalsmith.Files,
  _metalsmith: Metalsmith,
): Promise<void> => {
  const apiSummary = files['api/_summary.md']?.contents?.toString('utf-8')
  if (apiSummary == null) {
    throw new Error('Missing api/_summary.md')
  }

  const k = 'SUMMARY.md'
  const summary = await readSummary()
  const contents = getUpdatedSummary(summary, apiSummary)
  files[k] = { contents: Buffer.from(contents) }
  delete files['api/_summary.md']
}

const readSummary = async (): Promise<string> => {
  const buf = await readFile(summaryPath)
  return buf.toString('utf-8')
}

const getUpdatedSummary = (summary: string, apiSummary: string): string => {
  const lines = summary.split('\n')

  const startIdx = lines.findIndex(
    (line) => line.trim() === '<!-- begin api -->',
  )
  if (startIdx === -1) {
    throw new Error('Could not find start of API summary')
  }

  const endIdx = lines.findIndex((line) => line.trim() === '<!-- end api -->')
  if (endIdx === -1) {
    throw new Error('Could not find end of API summary')
  }

  const start = lines.slice(0, startIdx + 1)
  const end = lines.slice(endIdx, -1)

  return [...start, ...apiSummary.trim().split('\n'), ...end].join('\n')
}
