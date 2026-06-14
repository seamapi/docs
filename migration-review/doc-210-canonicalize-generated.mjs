// One-time, in-place canonicalization of redirect-source links in the
// already-committed generated output (openapi.json + api/**/*.mdx).
// Mirrors the Phase G guard in mintlify-codegen/generate.ts exactly, but edits
// the committed files so the DOC-210 PR diff contains ONLY link changes — no
// @seamapi/types content drift or code-sample formatter churn from a full regen.
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/sy/seam/docs/mintlify-docs'

const docs = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs.json'), 'utf8'))
const redir = new Map((docs.redirects ?? []).map((r) => [r.source, r.destination]))

function canonicalizePath(p) {
  let current = p.replace(/^\/latest(?=\/|$)/, '')
  if (current === '') current = '/'
  const seen = new Set()
  while (redir.has(current) && !seen.has(current)) {
    seen.add(current)
    current = redir.get(current)
  }
  current = current.replace(/\/index$/, '')
  return current === '' ? '/' : current
}

function splitAnchor(raw) {
  let p = raw
  let suffix = ''
  const i = p.search(/[#?]/)
  if (i !== -1) {
    suffix = p.slice(i)
    p = p.slice(0, i)
  }
  if (p.length > 1) p = p.replace(/\/+$/, '')
  if (p === '') p = '/'
  return { path: p, suffix }
}

function canonicalizeLinks(text) {
  let out = text.replace(
    /https?:\/\/docs\.seam\.co(\/[^\s"')>\]]*)?/g,
    (_full, pathPart) => {
      const { path: p, suffix } = splitAnchor(pathPart ?? '/')
      const canon = canonicalizePath(p)
      return `https://docs.seam.co${canon === '/' ? '' : canon}${suffix}`
    },
  )
  out = out.replace(/\]\((\/[^\s")]+)\)/g, (_full, pathPart) => {
    const { path: p, suffix } = splitAnchor(pathPart)
    return `](${canonicalizePath(p)}${suffix})`
  })
  out = out.replace(/href=(['"])(\/[^'"]+)\1/g, (_full, q, pathPart) => {
    const { path: p, suffix } = splitAnchor(pathPart)
    return `href=${q}${canonicalizePath(p)}${suffix}${q}`
  })
  return out
}

const files = [path.join(ROOT, 'openapi.json')]
const apiDir = path.join(ROOT, 'api')
for (const entry of fs.readdirSync(apiDir, { recursive: true })) {
  if (typeof entry === 'string' && entry.endsWith('.mdx'))
    {files.push(path.join(apiDir, entry))}
}

let count = 0
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const replaced = canonicalizeLinks(content)
  if (replaced !== content) {
    fs.writeFileSync(file, replaced)
    count++
  }
}
console.log(`Canonicalized links in ${count} generated file(s)`)
