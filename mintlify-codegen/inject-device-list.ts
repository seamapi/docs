/* eslint-disable no-console */
/**
 * Inject the DeviceDB <DeviceList> snippet into every brand guide.
 *
 * For each brand guide directory it (idempotently):
 *   1. Adds `import { DeviceList } from "/snippets/device-list.jsx"` after the
 *      frontmatter, if not already present.
 *   2. Inserts a marker-delimited <DeviceList> block — under the page's
 *      "## Supported Devices" heading if it has one, otherwise as a new
 *      "## Supported Devices" section appended to the page.
 *
 * The DeviceList snippet renders the cms.devicedb.seam.co web component; this
 * script only places it. The brand -> { manufacturer slug, capabilities } map
 * is maintained by hand below — edit a row to change what a page shows.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const guidesDir = join(
  __dirname,
  '..',
  'mintlify-docs/device-and-system-integration-guides',
)

const IMPORT_LINE = 'import { DeviceList } from "/snippets/device-list.jsx"'
const START =
  '{/* devicedb-devices:start — managed by mintlify-codegen/inject-device-list.ts; do not edit by hand */}'
const END = '{/* devicedb-devices:end */}'
const BLOCK_RE =
  /\n*\{\/\* devicedb-devices:start[\s\S]*?devicedb-devices:end \*\/\}\n*/

// Capability sets per device category (comma-separated Seam can_* flags). The
// widget shows a dropdown of these and lists each compatible device.
const LOCK =
  'can_remotely_unlock,can_program_online_access_codes,can_provision_mobile_keys'
const ACS =
  'can_remotely_unlock,can_provision_mobile_keys,can_program_online_access_codes,can_encode_plastic_cards'
const THERMOSTAT =
  'can_hvac_heat,can_hvac_cool,can_hvac_fan,can_program_thermostat_weekly_programs'
const SENSOR = 'can_monitor'
const ACCESS = 'can_remotely_unlock,can_program_online_access_codes'

// docs brand-guide slug -> DeviceDB manufacturer slug + capabilities to show.
// `null` = no DeviceDB manufacturer entry, so the page gets no device list.
const DEVICE_LISTS: Record<
  string,
  { manufacturer: string; capabilityName: string } | null
> = {
  '2n-intercom-systems': { manufacturer: '2n', capabilityName: ACCESS },
  '33-lock-devices': { manufacturer: '33-lock', capabilityName: LOCK },
  '4suites-locks': { manufacturer: '4suites', capabilityName: LOCK },
  'akiles-locks': { manufacturer: 'akiles', capabilityName: LOCK },
  'assa-abloy-vingcard-credential-services': {
    manufacturer: 'assa-abloy',
    capabilityName: ACS,
  },
  'assa-abloy-visionline-access-control-system': {
    manufacturer: 'assa-abloy',
    capabilityName: ACS,
  },
  'assa-abloy-vostio-access-control-system': {
    manufacturer: 'assa-abloy',
    capabilityName: ACS,
  },
  'august-locks': { manufacturer: 'august', capabilityName: LOCK },
  'avigilon-alta-access-system': {
    manufacturer: 'avigilon-alta',
    capabilityName: ACS,
  },
  'brivo-access': { manufacturer: 'brivo', capabilityName: ACS },
  'controlbyweb-relays': {
    manufacturer: 'controlbyweb',
    capabilityName: 'can_remotely_unlock',
  },
  'dormakaba-ambiance-access-control-system': {
    manufacturer: 'dormakaba',
    capabilityName: ACS,
  },
  'dormakaba-community-access-control-system': {
    manufacturer: 'dormakaba',
    capabilityName: ACS,
  },
  'dormakaba-oracode-locks': {
    manufacturer: 'dormakaba',
    capabilityName: LOCK,
  },
  'ecobee-thermostats': { manufacturer: 'ecobee', capabilityName: THERMOSTAT },
  'first-alert-thermostats': {
    manufacturer: 'first-alert',
    capabilityName: THERMOSTAT,
  },
  'genie-garage-openers': {
    manufacturer: 'genie',
    capabilityName: 'can_remotely_unlock',
  },
  'google-nest-thermostats': {
    manufacturer: 'nest',
    capabilityName: THERMOSTAT,
  },
  'honeywell-thermostats': {
    manufacturer: 'honeywell',
    capabilityName: THERMOSTAT,
  },
  'hotek-access-control-system': { manufacturer: 'hotek', capabilityName: ACS },
  'igloohome-locks': { manufacturer: 'igloohome', capabilityName: LOCK },
  'keyincode-locks': { manufacturer: 'keyincode', capabilityName: LOCK },
  'keynest-key-lockers': { manufacturer: 'keynest', capabilityName: LOCK },
  'kwikset-locks': { manufacturer: 'kwikset', capabilityName: LOCK },
  'latch-access-control-system': { manufacturer: 'latch', capabilityName: ACS },
  'lockly-locks': { manufacturer: 'lockly', capabilityName: LOCK },
  'minut-sensors': { manufacturer: 'minut', capabilityName: SENSOR },
  'noiseaware-sensors': { manufacturer: 'noiseaware', capabilityName: SENSOR },
  'nuki-locks': { manufacturer: 'nuki', capabilityName: LOCK },
  // Omnitec has no DeviceDB entry.
  'omnitec-locks': null,
  'pti-storlogix-cloud': { manufacturer: 'pti', capabilityName: ACS },
  'ring-cameras': { manufacturer: 'ring', capabilityName: SENSOR },
  'salto-ks-access-control-system': {
    manufacturer: 'salto',
    capabilityName: ACS,
  },
  'salto-locks': { manufacturer: 'salto', capabilityName: LOCK },
  'salto-proaccess-space-access-system': {
    manufacturer: 'salto',
    capabilityName: ACS,
  },
  'schlage-locks': { manufacturer: 'schlage', capabilityName: LOCK },
  'sensi-thermostats': { manufacturer: 'sensi', capabilityName: THERMOSTAT },
  'sifely-locks': { manufacturer: 'sifely', capabilityName: LOCK },
  'smartthings-hubs-+-devices': {
    manufacturer: 'smartthings',
    capabilityName:
      'can_remotely_unlock,can_program_online_access_codes,can_hvac_heat,can_hvac_cool',
  },
  'tado-thermostats': { manufacturer: 'tado', capabilityName: THERMOSTAT },
  'tedee-locks': { manufacturer: 'tedee', capabilityName: LOCK },
  'ttlock-locks': { manufacturer: 'ttlock', capabilityName: LOCK },
  'ultraloq-locks': { manufacturer: 'ultraloq', capabilityName: LOCK },
  'wyze-locks': { manufacturer: 'wyze', capabilityName: LOCK },
  'yale-locks': { manufacturer: 'yale', capabilityName: LOCK },
}

function buildBlock(manufacturer: string, capabilityName: string): string {
  return [
    START,
    '',
    `<DeviceList manufacturers="${manufacturer}" capabilityName="${capabilityName}" />`,
    '',
    END,
  ].join('\n')
}

const IMPORT_RE =
  /^[ \t]*import \{ DeviceList \} from "\/snippets\/device-list\.jsx"[ \t]*\n?/m

function ensureImport(content: string): string {
  // Strip any existing import, then re-place it canonically. An import directly
  // followed by an MDX expression (e.g. the {/* logo */} block) fails to parse
  // with acorn ("Could not parse import/exports"); placing it immediately
  // before the first Markdown heading guarantees it is followed by Markdown,
  // which parses. Strip-then-place also repositions an import left in the wrong
  // spot, and keeps re-runs idempotent.
  const stripped = content.replace(IMPORT_RE, '')
  const heading = stripped.match(/\n#{1,6}[ \t]/)
  let result: string
  if (heading && heading.index != null) {
    const at = heading.index + 1
    const before = stripped.slice(0, at).replace(/\n+$/, '\n')
    result = `${before}\n${IMPORT_LINE}\n\n${stripped.slice(at)}`
  } else {
    const frontmatter = stripped.match(/^---\n[\s\S]*?\n---\n/)
    if (!frontmatter) {
      throw new Error('No frontmatter found; cannot add import.')
    }
    const head = frontmatter[0]
    const rest = stripped.slice(head.length).replace(/^\n+/, '')
    result = `${head}\n${IMPORT_LINE}\n\n${rest}`
  }
  return result.replace(/\n{3,}/g, '\n\n')
}

function placeBlock(content: string, block: string): string {
  // Strip any existing managed block (leaving a paragraph break so we never
  // mash surrounding lines — e.g. `text\n---` would become a setext heading),
  // then place it canonically right after the "## Supported Devices" heading so
  // re-runs are idempotent.
  const stripped = content.replace(BLOCK_RE, '\n\n')
  const headingRe = /(^|\n)##[ \t]+Supported Devices[^\n]*\n/
  const m = stripped.match(headingRe)
  let result: string
  if (m && m.index != null) {
    const at = m.index + m[0].length
    const before = stripped.slice(0, at)
    const after = stripped.slice(at).replace(/^\n+/, '')
    result = `${before}\n${block}\n\n${after}`
  } else {
    result = `${stripped.replace(/\s*$/, '')}\n\n## Supported Devices\n\n${block}\n`
  }
  // Collapse any 3+ newline runs to a single blank line for stable, clean output.
  return result.replace(/\n{3,}/g, '\n\n')
}

function main(): void {
  let updated = 0
  const skipped: string[] = []
  for (const [slug, cfg] of Object.entries(DEVICE_LISTS).sort()) {
    const file = join(guidesDir, slug, 'index.mdx')
    if (!existsSync(file)) {
      skipped.push(`${slug} (no index.mdx)`)
      continue
    }
    if (!cfg) {
      skipped.push(`${slug} (no DeviceDB manufacturer)`)
      continue
    }
    const original = readFileSync(file, 'utf8')
    let next = ensureImport(original)
    next = placeBlock(next, buildBlock(cfg.manufacturer, cfg.capabilityName))
    next = next.replace(/\n*$/, '\n') // exactly one trailing newline
    if (next !== original) {
      writeFileSync(file, next)
      updated += 1
    }
  }
  console.log(`Injected/updated DeviceList on ${updated} brand guide(s).`)
  if (skipped.length > 0) {
    console.log(`Skipped ${skipped.length}: ${skipped.join(', ')}`)
  }
}

main()
