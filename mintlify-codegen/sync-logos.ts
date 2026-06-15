/**
 * Sync manufacturer/provider logos from DeviceDB (Strapi) into the brand guides.
 *
 * DeviceDB (the `devicedb_v2` Strapi project) is the source of truth for brand
 * logos. Each `manufacturer` and `provider` entry exposes a square SVG logo in
 * the `square_logo_svg` media field, served from a public CDN. This script
 * crawls both collections, resolves a logo URL for each docs brand guide via the
 * explicit map below, writes a generated manifest, and injects a square <img>
 * block at the top of each brand guide's `index.mdx`.
 *
 * The logo URLs are hot-linked from the Strapi CDN (no binaries are vendored),
 * so re-running this script refreshes the URLs in place when a logo is
 * re-uploaded (the CDN URL carries a content hash that changes on re-upload).
 *
 * Usage:
 *   doppler run -p docs -c dev -- npm run sync:logos
 *
 * Requires env: STRAPI_API_URL (includes the /api suffix), STRAPI_AUTH_TOKEN.
 */

import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
const guidesDir = join(
  repoRoot,
  'mintlify-docs/device-and-system-integration-guides',
)
const manifestPath = join(__dirname, 'brand-logos.generated.json')

type Collection = 'manufacturer' | 'provider'

/**
 * Maps each brand guide directory to the DeviceDB entry whose square logo it
 * should display: a tuple of [collection, slug], or null when DeviceDB has no
 * matching entry (the page gets no logo).
 *
 * The three namespaces (docs directory, Strapi manufacturer slug, Strapi
 * provider slug) do not align by rule, so this map is maintained by hand. When
 * you add a brand guide, add a row here. The script fails loudly if a directory
 * is missing from this map or if a mapped slug has no logo in DeviceDB.
 */
const BRAND_LOGO_SOURCES: Record<string, readonly [Collection, string] | null> =
  {
    '2n-intercom-systems': ['manufacturer', '2n'],
    '33-lock-devices': ['manufacturer', '33-lock'],
    '4suites-locks': ['manufacturer', '4suites'],
    'akiles-locks': ['manufacturer', 'akiles'],
    'assa-abloy-vingcard-credential-services': ['manufacturer', 'assa-abloy'],
    'assa-abloy-visionline-access-control-system': ['provider', 'visionline'],
    'assa-abloy-vostio-access-control-system': ['provider', 'vostio'],
    'august-locks': ['manufacturer', 'august'],
    'avigilon-alta-access-system': ['manufacturer', 'avigilon-alta'],
    'brivo-access': ['manufacturer', 'brivo'],
    'controlbyweb-relays': ['manufacturer', 'controlbyweb'],
    'dormakaba-ambiance-access-control-system': ['provider', 'ambiance'],
    'dormakaba-community-access-control-system': ['provider', 'community'],
    'dormakaba-oracode-locks': ['provider', 'oracode'],
    'ecobee-thermostats': ['manufacturer', 'ecobee'],
    'genie-garage-openers': ['manufacturer', 'genie'],
    'google-nest-thermostats': ['manufacturer', 'nest'],
    'honeywell-thermostats': ['manufacturer', 'honeywell'],
    'hotek-access-control-system': ['manufacturer', 'hotek'],
    'igloohome-locks': ['manufacturer', 'igloohome'],
    'keynest-key-lockers': ['manufacturer', 'keynest'],
    'kwikset-locks': ['manufacturer', 'kwikset'],
    'latch-access-control-system': ['manufacturer', 'latch'],
    'lockly-locks': ['manufacturer', 'lockly'],
    'minut-sensors': ['manufacturer', 'minut'],
    'noiseaware-sensors': ['manufacturer', 'noiseaware'],
    'nuki-locks': ['manufacturer', 'nuki'],
    // Omnitec has no DeviceDB manufacturer or provider entry, so it gets no logo.
    'omnitec-locks': null,
    'pti-storlogix-cloud': ['manufacturer', 'pti'],
    'salto-ks-access-control-system': ['provider', 'salto-ks'],
    'salto-locks': ['manufacturer', 'salto'],
    'salto-proaccess-space-access-system': ['provider', 'salto-space'],
    'schlage-locks': ['manufacturer', 'schlage'],
    'sensi-thermostats': ['manufacturer', 'sensi'],
    'smartthings-hubs-+-devices': ['manufacturer', 'smartthings'],
    'tedee-locks': ['manufacturer', 'tedee'],
    'ttlock-locks': ['manufacturer', 'ttlock'],
    'ultraloq-locks': ['manufacturer', 'ultraloq'],
    'wyze-locks': ['manufacturer', 'wyze'],
    'yale-locks': ['manufacturer', 'yale'],
  }

interface StrapiMedia {
  url?: string | null
}

interface StrapiEntry {
  slug?: string | null
  display_name?: string | null
  square_logo_svg?: StrapiMedia | null
}

interface StrapiResponse {
  data: StrapiEntry[]
  meta?: { pagination?: { pageCount?: number } }
}

interface LogoEntry {
  url: string
  displayName: string
}

// The marker tokens are single-sourced here so the block builder and the strip
// regex below can never drift apart. The regex is tolerant of the descriptive
// text between the tokens, so re-runs replace an existing block in place even if
// that text changes.
const LOGO_MARKER_START = 'devicedb-logo:start'
const LOGO_MARKER_END = 'devicedb-logo:end'
const LOGO_START = `{/* ${LOGO_MARKER_START} — managed by mintlify-codegen/sync-logos.ts; do not edit by hand */}`
const LOGO_END = `{/* ${LOGO_MARKER_END} */}`
const LOGO_BLOCK_RE = new RegExp(
  `\\n*\\{\\/\\* ${LOGO_MARKER_START}[\\s\\S]*?${LOGO_MARKER_END} \\*\\/\\}\\n*`,
)

async function fetchCollection(
  apiUrl: string,
  token: string,
  collection: string,
): Promise<Map<string, LogoEntry>> {
  const out = new Map<string, LogoEntry>()
  let page = 1
  let pageCount = 1
  do {
    const url = new URL(`${apiUrl}/${collection}`)
    url.searchParams.set('populate[0]', 'square_logo_svg')
    url.searchParams.set('pagination[pageSize]', '100')
    url.searchParams.set('pagination[page]', String(page))
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) {
      throw new Error(
        `Strapi request failed for ${collection} (page ${page}): ${res.status} ${res.statusText}`,
      )
    }
    const json = (await res.json()) as StrapiResponse
    for (const item of json.data ?? []) {
      const logoUrl = item.square_logo_svg?.url
      if (item.slug && logoUrl) {
        out.set(item.slug, {
          url: logoUrl,
          displayName: item.display_name ?? item.slug,
        })
      }
    }
    pageCount = json.meta?.pagination?.pageCount ?? 1
    page += 1
  } while (page <= pageCount)
  return out
}

function buildLogoBlock(url: string, displayName: string): string {
  return [
    LOGO_START,
    `<img`,
    `  src="${url}"`,
    `  alt="${displayName} logo"`,
    `  width="96"`,
    `  height="96"`,
    `  style={{ width: "96px", height: "96px", objectFit: "contain" }}`,
    `/>`,
    LOGO_END,
  ].join('\n')
}

/** Inserts or replaces the logo block immediately after the frontmatter. */
function injectLogo(filePath: string, block: string): 'inserted' | 'updated' {
  const original = readFileSync(filePath, 'utf8')

  // Remove any existing managed block (and its surrounding blank lines).
  const stripped = original.replace(LOGO_BLOCK_RE, '\n')
  const hadBlock = stripped !== original

  const frontmatter = stripped.match(/^---\n[\s\S]*?\n---\n/)
  if (!frontmatter) {
    throw new Error(`No frontmatter found in ${filePath}; cannot place logo.`)
  }
  const head = frontmatter[0]
  const rest = stripped.slice(head.length).replace(/^\n+/, '')
  const next = `${head}\n${block}\n\n${rest}`

  if (next !== original) writeFileSync(filePath, next)
  return hadBlock ? 'updated' : 'inserted'
}

async function main(): Promise<void> {
  const apiUrl = process.env['STRAPI_API_URL']
  const token = process.env['STRAPI_AUTH_TOKEN']
  if (!apiUrl || !token) {
    throw new Error(
      'Missing STRAPI_API_URL and/or STRAPI_AUTH_TOKEN. Run via: doppler run -p docs -c dev -- npm run sync:logos',
    )
  }

  const [manufacturers, providers] = await Promise.all([
    fetchCollection(apiUrl, token, 'manufacturers'),
    fetchCollection(apiUrl, token, 'providers'),
  ])
  const lookup: Record<Collection, Map<string, LogoEntry>> = {
    manufacturer: manufacturers,
    provider: providers,
  }
  console.log(
    `Fetched ${manufacturers.size} manufacturer logos and ${providers.size} provider logos from DeviceDB.`,
  )

  // Warn about drift between the brand guide directories and the map.
  const dirs = readdirSync(guidesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
  const unmapped = dirs.filter((d) => !(d in BRAND_LOGO_SOURCES))
  if (unmapped.length > 0) {
    console.warn(
      `\n⚠️  ${unmapped.length} brand guide(s) are not in BRAND_LOGO_SOURCES (add a row): ${unmapped.join(', ')}`,
    )
  }

  const brands: Record<
    string,
    {
      collection: Collection
      slug: string
      display_name: string
      logo_url: string
    }
  > = {}
  const skipped: string[] = []

  for (const docsSlug of Object.keys(BRAND_LOGO_SOURCES).sort()) {
    const source = BRAND_LOGO_SOURCES[docsSlug]
    if (!source) {
      skipped.push(`${docsSlug} (no DeviceDB entry)`)
      continue
    }
    const [collection, slug] = source
    const entry = lookup[collection].get(slug)
    if (!entry) {
      skipped.push(`${docsSlug} (no logo for ${collection}:${slug})`)
      continue
    }
    brands[docsSlug] = {
      collection,
      slug,
      display_name: entry.displayName,
      logo_url: entry.url,
    }
  }

  // Write the generated manifest (sorted, diff-friendly).
  const manifest = {
    _comment:
      'Generated by mintlify-codegen/sync-logos.ts from DeviceDB (Strapi). Do not edit by hand.',
    source: apiUrl,
    brands,
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
  console.log(
    `\nWrote ${Object.keys(brands).length} brand logos to ${relative(repoRoot, manifestPath)}`,
  )

  // Inject the logo block into each resolved brand guide.
  let inserted = 0
  let updated = 0
  const missingPages: string[] = []
  for (const [docsSlug, brand] of Object.entries(brands)) {
    const indexPath = join(guidesDir, docsSlug, 'index.mdx')
    if (!existsSync(indexPath)) {
      missingPages.push(docsSlug)
      continue
    }
    const block = buildLogoBlock(brand.logo_url, brand.display_name)
    const result = injectLogo(indexPath, block)
    if (result === 'inserted') inserted += 1
    else updated += 1
  }

  console.log(`\nLogo blocks: ${inserted} inserted, ${updated} updated.`)
  if (skipped.length > 0) {
    console.warn(`\nSkipped ${skipped.length} (no logo): ${skipped.join(', ')}`)
  }
  if (missingPages.length > 0) {
    console.warn(
      `\n⚠️  ${missingPages.length} brand(s) have a logo but no index.mdx: ${missingPages.join(', ')}`,
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
