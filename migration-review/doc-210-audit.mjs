import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/sy/seam/docs/mintlify-docs'

// --- Build redirect map (with chain resolution) ---
const docs = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs.json'), 'utf8'))
const redir = new Map(
  (docs.redirects || []).map((r) => [r.source, r.destination]),
)
function resolveRedirect(p) {
  const seen = new Set()
  let cur = p
  while (redir.has(cur) && !seen.has(cur)) {
    seen.add(cur)
    cur = redir.get(cur)
  }
  return cur
}

// --- Valid route set ---
const routes = new Set()
function allMdx(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name)
    if (e.isDirectory()) allMdx(fp, acc)
    else if (e.name.endsWith('.mdx')) acc.push(fp)
  }
  return acc
}
const mdxFiles = allMdx(ROOT)
for (const fp of mdxFiles) {
  const r =
    '/' +
    path
      .relative(ROOT, fp)
      .replace(/\.mdx$/, '')
      .replace(/\/index$/, '')
  routes.add(r === '/' ? '/' : r)
}
try {
  const oa = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'openapi.json'), 'utf8'),
  )
  for (const m of Object.values(oa.paths || {})) {
    for (const op of Object.values(m)) {
      const href = op?.['x-mint']?.href
      if (href) routes.add(href)
    }
  }
} catch {}

// --- Find internal links that are redirect SOURCES (hops) ---
// matches: ](/path...) , href='/path...' , href="/path..." , and docs.seam.co/path
const PATTERNS = [
  /\]\((\/[^\s")]+)\)/g, // markdown links
  /href=(?:'|")(\/[^'"]+)(?:'|")/g, // jsx href
  /https?:\/\/docs\.seam\.co(\/[^\s"')>\]]*)/g, // absolute docs links
]

const hops = [] // {file, generated, from, to, valid}
function isGenerated(fp) {
  const rel = path.relative(ROOT, fp)
  return rel.startsWith('api/') || rel === 'openapi.json'
}

function scanText(fp, text) {
  for (const re of PATTERNS) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(text)) !== null) {
      let p = m[1]
      // strip /latest prefix for the "absolute docs" case so we judge the real path
      // strip anchor/query
      let suffix = ''
      const h = p.search(/[#?]/)
      if (h !== -1) {
        suffix = p.slice(h)
        p = p.slice(0, h)
      }
      if (p.length > 1) p = p.replace(/\/+$/, '')
      if (p === '') p = '/'
      // is this path a redirect source?
      if (redir.has(p)) {
        const to = resolveRedirect(p)
        hops.push({
          file: path.relative(ROOT, fp),
          generated: isGenerated(fp),
          from: p,
          to,
          suffix,
          valid: to === '/' || routes.has(to),
        })
      }
    }
  }
}

for (const fp of mdxFiles) scanText(fp, fs.readFileSync(fp, 'utf8'))
const oaPath = path.join(ROOT, 'openapi.json')
if (fs.existsSync(oaPath)) scanText(oaPath, fs.readFileSync(oaPath, 'utf8'))

// --- Report ---
const gen = hops.filter((h) => h.generated)
const hand = hops.filter((h) => !h.generated)
console.log(`TOTAL redirect-hop links: ${hops.length}`)
console.log(`  generated (api/** + openapi.json): ${gen.length}`)
console.log(`  hand-written:                      ${hand.length}`)
const invalid = hops.filter((h) => !h.valid)
console.log(`  hops whose destination is NOT a valid route: ${invalid.length}`)
if (invalid.length) {
  const byT = {}
  for (const h of invalid) byT[h.to] = (byT[h.to] || 0) + 1
  for (const [t, n] of Object.entries(byT).sort((a, b) => b[1] - a[1])) {
    console.log(`     ${n}x -> ${t}`)
  }
}

console.log(`\n--- HAND-WRITTEN files needing one-time fix ---`)
const byFile = {}
for (const h of hand) (byFile[h.file] ||= []).push(h)
for (const [f, hs] of Object.entries(byFile).sort()) {
  console.log(`\n${f}  (${hs.length})`)
  const seen = new Set()
  for (const h of hs) {
    const k = `${h.from} -> ${h.to}`
    if (seen.has(k)) continue
    seen.add(k)
    console.log(`   ${h.from}  ->  ${h.to}`)
  }
}

console.log(`\n--- GENERATED hop targets (handled by guard) ---`)
const byMap = {}
for (const h of gen) {
  const k = `${h.from} -> ${h.to}`
  byMap[k] = (byMap[k] || 0) + 1
}
for (const [k, n] of Object.entries(byMap).sort((a, b) => b[1] - a[1])) {
  console.log(`   ${n}x  ${k}`)
}
