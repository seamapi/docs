import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/sy/seam/docs/mintlify-docs'
const APPLY = process.argv.includes('--apply')

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

// --- Valid route set: mdx routes + openapi x-mint.href ---
const routes = new Set()
;(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name)
    if (e.isDirectory()) walk(fp)
    else if (e.name.endsWith('.mdx')) {
      const r =
        '/' +
        path
          .relative(ROOT, fp)
          .replace(/\.mdx$/, '')
          .replace(/\/index$/, '')
      routes.add(r === '/' ? '/' : r)
    }
  }
})(ROOT)
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

// --- Walk mdx files, rewrite links ---
const LINK_RE = /https?:\/\/docs\.seam\.co\/latest((?:\/[^\s"')>\]]*)?)/g
let filesChanged = 0
let total = 0
let viaRedirect = 0
let direct = 0
const unresolved = []

function allMdx(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name)
    if (e.isDirectory()) allMdx(fp, acc)
    else if (e.name.endsWith('.mdx')) acc.push(fp)
  }
  return acc
}

for (const fp of allMdx(ROOT)) {
  const orig = fs.readFileSync(fp, 'utf8')
  let changed = false
  const out = orig.replace(LINK_RE, (m, rest) => {
    total++
    // split off trailing anchor/query; trim stray trailing punctuation
    let tail = rest || '/'
    let suffix = ''
    const hashIdx = tail.search(/[#?]/)
    if (hashIdx !== -1) {
      suffix = tail.slice(hashIdx)
      tail = tail.slice(0, hashIdx)
    }
    tail = tail.replace(/[.,;:]+$/, (p) => {
      suffix = p + suffix
      return ''
    })
    if (tail === '') tail = '/'
    // normalize trailing slash (routes/redirect sources are stored without it)
    if (tail.length > 1) tail = tail.replace(/\/+$/, '')
    const resolved = resolveRedirect(tail)
    if (resolved !== tail) viaRedirect++
    else direct++
    if (resolved !== '/' && !routes.has(resolved)) {
      unresolved.push({
        file: fp.replace(ROOT + '/', ''),
        from: tail,
        to: resolved,
      })
    }
    changed = true
    return resolved + suffix
  })
  if (changed) {
    filesChanged++
    if (APPLY) fs.writeFileSync(fp, out)
  }
}

console.log(`${APPLY ? 'APPLIED' : 'DRY-RUN'}`)
console.log(`files changed:     ${filesChanged}`)
console.log(`links rewritten:   ${total}`)
console.log(`  resolved direct (already canonical): ${direct}`)
console.log(`  resolved via redirect -> final dest: ${viaRedirect}`)
console.log(`unresolved (would 404 -> NEEDS REVIEW): ${unresolved.length}`)
const byTarget = {}
for (const u of unresolved) byTarget[u.to] = (byTarget[u.to] || 0) + 1
for (const [t, n] of Object.entries(byTarget)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 25)) {
  console.log(`   ${n}x  ${t}`)
}
