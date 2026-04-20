import { readFile } from 'node:fs/promises'

import type Metalsmith from 'metalsmith'

import { apiReferenceRoot, apiReferenceSummaryPath } from './config.js'

export const summary = async (
  files: Metalsmith.Files,
  _metalsmith: Metalsmith,
): Promise<void> => {
  const summaryKey = `${apiReferenceRoot}/_summary.md`
  const apiSummary = files[summaryKey]?.contents?.toString('utf-8')
  if (apiSummary == null) {
    throw new Error(`Missing ${summaryKey}`)
  }

  const k = `${apiReferenceRoot}/SUMMARY.md`
  const summary = await readSummary()
  const contents = getUpdatedSummary(summary, apiSummary)
  files[k] = { contents: Buffer.from(`${contents}\n`) }
  delete files[summaryKey]
}

const readSummary = async (): Promise<string> => {
  const buf = await readFile(apiReferenceSummaryPath)
  return buf.toString('utf-8')
}

const getUpdatedSummary = (summary: string, apiSummary: string): string => {
  const lines = summary.split('\n')

  const startIdx = lines.findIndex(
    (line) => line.trim() === '* [Pagination](pagination.md)',
  )
  if (startIdx === -1) {
    throw new Error('Could not find start of API summary')
  }

  const start = lines.slice(0, startIdx + 1)

  return [...start, ...apiSummary.trim().split('\n')].join('\n')
}
