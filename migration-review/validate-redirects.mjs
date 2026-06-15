import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/sy/seam/docs/mintlify-docs'
const docs = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs.json'), 'utf8'))

// 1. Existing redirect sources/destinations
const existingSources = new Set((docs.redirects || []).map((r) => r.source))
const existingDests = new Set((docs.redirects || []).map((r) => r.destination))

// 2. Real mdx routes
const mdxRoutes = new Set()
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name)
    if (e.isDirectory()) walk(fp)
    else if (e.name.endsWith('.mdx')) {
      let rel = '/' + path.relative(ROOT, fp).replace(/\.mdx$/, '')
      rel = rel.replace(/\/index$/, '')
      mdxRoutes.add(rel === '' ? '/' : rel)
    }
  }
}
walk(ROOT)

// 3. OpenAPI x-mint.href routes
const openapi = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'openapi.json'), 'utf8'),
)
const apiRoutes = new Set()
for (const p of Object.values(openapi.paths || {})) {
  for (const op of Object.values(p)) {
    const href = op?.['x-mint']?.href
    if (href) apiRoutes.add(href)
  }
}

const isRoute = (d) =>
  mdxRoutes.has(d) ||
  apiRoutes.has(d) ||
  existingDests.has(d) ||
  existingSources.size === 0

// 4. Extract proposed JSON from the report (last ```json block)
const report = fs.readFileSync(
  '/home/sy/seam/docs/migration-review/doc-195-redirect-audit.md',
  'utf8',
)
const blocks = [...report.matchAll(/```json\s*([\s\S]*?)```/g)]
const proposed = JSON.parse(blocks[blocks.length - 1][1])

// 5. Validate
const seen = new Set()
const problems = {
  dupInProposed: [],
  collidesExisting: [],
  shadowsPage: [],
  badShape: [],
  destMissing: [],
}
for (const r of proposed) {
  if (!r.source?.startsWith('/') || !r.destination?.startsWith('/')) {
    problems.badShape.push(r)
  }
  if (seen.has(r.source)) problems.dupInProposed.push(r.source)
  seen.add(r.source)
  if (existingSources.has(r.source)) problems.collidesExisting.push(r.source)
  if (mdxRoutes.has(r.source) || apiRoutes.has(r.source)) {
    problems.shadowsPage.push(r.source)
  }
  if (!isRoute(r.destination)) problems.destMissing.push(r)
}

console.log(
  'mdx routes:',
  mdxRoutes.size,
  '| api routes:',
  apiRoutes.size,
  '| existing redirects:',
  existingSources.size,
)
console.log('proposed redirects:', proposed.length)
console.log('--- problems ---')
for (const [k, v] of Object.entries(problems)) console.log(`${k}: ${v.length}`)
for (const [k, v] of Object.entries(problems)) {
  if (v.length) {
    console.log(`\n[${k}] sample:`, JSON.stringify(v.slice(0, 8), null, 0))
  }
}
const clean = Object.values(problems).every((v) => v.length === 0)
console.log(
  '\nRESULT:',
  clean
    ? 'ALL CLEAN — safe to append'
    : 'ISSUES FOUND — review before applying',
)
