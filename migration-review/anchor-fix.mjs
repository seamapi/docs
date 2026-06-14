import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/sy/seam/docs/mintlify-docs'
const APPLY = process.argv.includes('--apply')

const ghSlug = (h) =>
  h
    .trim()
    .toLowerCase()
    .replace(/`/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

// route -> { file, slugs:Set }
const routeMap = new Map()
;(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name)
    if (e.isDirectory()) walk(fp)
    else if (e.name.endsWith('.mdx')) {
      let r =
        '/' +
        path
          .relative(ROOT, fp)
          .replace(/\.mdx$/, '')
          .replace(/\/index$/, '')
      r = r === '' ? '/' : r
      const t = fs.readFileSync(fp, 'utf8').replace(/^---\n[\s\S]*?\n---/, '')
      const slugs = new Set()
      for (const m of t.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)) {
        slugs.add(ghSlug(m[1]))
      }
      routeMap.set(r, { file: fp, slugs })
    }
  }
})(ROOT)

const norm = (a) => a.replace(/^id-/, '').replace(/\./g, '').replace(/-+/g, '-')

const LINK_RE = /\]\((\/[^)\s]*?)#([^)\s]+)\)/g
const broken = []
const files = fs
  .readdirSync(ROOT, { recursive: true })
  .filter((f) => f.endsWith('.mdx'))

for (const rel of files) {
  const fp = path.join(ROOT, rel)
  let txt = fs.readFileSync(fp, 'utf8')
  let changed = false
  txt = txt.replace(LINK_RE, (full, p, anchor) => {
    const key = p.replace(/\/$/, '') || '/'
    const target = routeMap.get(key)
    if (!target) return full // path-level issue, not our concern here
    if (target.slugs.has(anchor)) return full // valid anchor
    // broken anchor — try to find a fix
    const n = norm(anchor)
    let fix = null
    for (const s of target.slugs) {
      if (s === n || norm(s) === n || s === anchor.replace(/-\d+$/, '')) {
        fix = s
        break
      }
    }
    broken.push({ file: rel, path: key, anchor, fix: fix || '(STRIP)' })
    changed = true
    return fix ? `](${p}#${fix})` : `](${p})`
  })
  if (changed && APPLY) fs.writeFileSync(fp, txt)
}

const uniq = new Map()
for (const b of broken) {
  const k = `${b.path}#${b.anchor}`
  if (!uniq.has(k)) {
    uniq.set(k, { ...b, n: 0, slugsSample: routeMap.get(b.path)?.slugs })
  }
  uniq.get(k).n++
}
console.log(
  `${APPLY ? 'APPLIED fixes/strips' : 'DRY-RUN'} — ${broken.length} broken anchor links, ${uniq.size} unique\n`,
)
for (const [k, v] of uniq) {
  console.log(`${v.n}x  ${k}`)
  console.log(
    `      -> ${v.fix === '(STRIP)' ? 'NO MATCH — strip anchor' : 'fix to #' + v.fix}`,
  )
}
