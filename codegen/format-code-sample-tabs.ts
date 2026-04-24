import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { globSync } from 'glob'

import { tabTitleFixes, tabTitleOrder } from './lib/code-sample-tab-order.js'

const tabsBlockPattern = /\{%\s*tabs\s*%\}[\s\S]*?\{%\s*endtabs\s*%\}/g

const tabPattern =
  /\{%\s*tab\s+title="([^"]+)"\s*%\}([\s\S]*?)\{%\s*endtab\s*%\}/g

function canonicalIndex(title: string): number {
  const normalized = tabTitleFixes[title] ?? title
  return tabTitleOrder.get(normalized) ?? tabTitleOrder.size + 1
}

function formatTabsBlock(block: string): { result: string; changed: boolean } {
  const tabs: Array<{ title: string; content: string }> = []
  for (const match of block.matchAll(tabPattern)) {
    tabs.push({ title: match[1] ?? '', content: match[2] ?? '' })
  }

  if (tabs.length < 2) return { result: block, changed: false }

  const originalTitles = tabs.map((t) => t.title)
  const sorted = [...tabs].sort(
    (a, b) => canonicalIndex(a.title) - canonicalIndex(b.title),
  )
  const sortedTitles = sorted.map((t) => t.title)
  const needsRename = originalTitles.some((t) => t in tabTitleFixes)
  const needsReorder = originalTitles.some((t, i) => t !== sortedTitles[i])

  if (!needsReorder && !needsRename) return { result: block, changed: false }

  const lines = ['{% tabs %}']
  for (const tab of sorted) {
    const title = tabTitleFixes[tab.title] ?? tab.title
    lines.push(`{% tab title="${title}" %}`)
    lines.push(tab.content.trimEnd())
    lines.push('{% endtab %}')
    lines.push('')
  }
  while (lines.at(-1) === '') lines.pop()
  lines.push('{% endtabs %}')

  return { result: lines.join('\n'), changed: true }
}

const dirs = [
  'docs/guides',
  'docs/brand-guides',
  'codegen/source/docs/api-reference',
]
const files = dirs.flatMap((dir) => globSync(join(dir, '**/*.md')))

let totalChanged = 0

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  let changed = false

  const updated = content.replace(tabsBlockPattern, (block) => {
    const { result, changed: blockChanged } = formatTabsBlock(block)
    if (blockChanged) changed = true
    return result
  })

  if (changed) {
    writeFileSync(file, updated)
    totalChanged++
  }
}

if (totalChanged > 0) {
  // eslint-disable-next-line no-console
  console.log(`Formatted tabs in ${String(totalChanged)} file(s).`)
}
