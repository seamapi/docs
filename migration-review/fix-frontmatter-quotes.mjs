import { execSync } from 'node:child_process'
import fs from 'node:fs'

const files = execSync(
  'git diff main...HEAD --name-only -- "mintlify-docs/**/*.mdx"',
  {
    encoding: 'utf8',
  },
)
  .trim()
  .split('\n')
  .filter(Boolean)

const APPLY = process.argv.includes('--apply')
const bad = []

for (const f of files) {
  const t = fs.readFileSync(f, 'utf8')
  const m = t.match(/^---\n([\s\S]*?)\n---/)
  if (!m) continue
  const fm = m[1]
  const lines = fm.split('\n')
  let changed = false
  const newLines = lines.map((line, i) => {
    // key: '...'  where the inner value contains a lone apostrophe -> invalid YAML
    const mm = line.match(/^(\s*[\w:.-]+:\s*)'(.*)'(\s*)$/)
    if (mm && mm[2].includes("'")) {
      const inner = mm[2]
      bad.push({
        f: f.replace('mintlify-docs/', ''),
        line: i + 1,
        key: mm[1].trim(),
      })
      if (inner.includes('"')) {
        // can't safely double-quote; double the apostrophes (YAML single-quote escape)
        changed = true
        return `${mm[1]}'${inner.replace(/'/g, "''")}'${mm[3]}`
      }
      changed = true
      return `${mm[1]}"${inner}"${mm[3]}`
    }
    return line
  })
  if (changed && APPLY) {
    const newFm = newLines.join('\n')
    fs.writeFileSync(f, t.replace(fm, newFm))
  }
}

console.log(
  `${APPLY ? 'FIXED' : 'FOUND'} ${bad.length} broken single-quoted frontmatter line(s):`,
)
for (const b of bad) console.log(`  ${b.f}  (${b.key})`)
