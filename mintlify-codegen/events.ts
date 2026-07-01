/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Blueprint } from '@seamapi/blueprint'

/**
 * Generate event documentation into the API `object.mdx` pages.
 *
 * The GitBook codegen rendered two kinds of event docs that were dropped when
 * the API reference moved to OpenAPI-generated pages (events are webhook
 * payloads, not endpoints, so they have no OpenAPI representation to carry them
 * over):
 *
 *   1. A per-resource `## Events` section on each resource's object page,
 *      listing every event that resource emits with its properties.
 *   2. The full `event_type` enum on the Event object page.
 *
 * Both are derived from `blueprint.events`, which the OpenAPI pipeline already
 * builds but never reads. This module restores them so they stay in sync with
 * `@seamapi/types` on every `npm run generate:mintlify`.
 *
 * Runs after object pages are refreshed (so it wins over the resource
 * Properties rewrite) and before link canonicalization (so `docs.seam.co`
 * links in event descriptions are rewritten to canonical relative paths).
 */

// Sentinel markers delimit the generated section so re-runs replace it exactly
// rather than re-parsing markdown headings. MDX treats `{/* ... */}` as a
// comment, so the markers never render.
const EVENTS_START = '{/* SEAM-GENERATED-EVENTS:START */}'
const EVENTS_END = '{/* SEAM-GENERATED-EVENTS:END */}'

// Route path of the Event object page itself. Events do not emit events, so
// this path never appears in `blueprint.events`; it is handled separately to
// receive the full `event_type` enum.
const EVENT_OBJECT_ROUTE = '/events'

type EventResource = Blueprint['events'][number]
type EventProperty = EventResource['properties'][number]

/**
 * Map a blueprint property format to the type label used across the API object
 * pages (e.g. `id` -> `String (UUID)`, `enum` -> `Enum (String)`). Mirrors
 * `formatPropertyType` in generate.ts so event properties read the same as the
 * resource properties above them.
 */
function formatType(prop: EventProperty): string {
  switch (prop.format) {
    case 'id':
      return 'String (UUID)'
    case 'datetime':
      return 'String (ISO 8601)'
    case 'enum':
      return 'Enum (String)'
    case 'list':
      return 'Array'
    case 'boolean':
      return 'Boolean'
    case 'string':
      return 'String'
    case 'object':
    case 'record':
      return 'Object'
    default:
      return (prop as { jsonType?: string }).jsonType ?? 'String'
  }
}

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n')
}

function hasEnumValues(
  prop: EventProperty,
): prop is EventProperty & { values: Array<{ name: string }> } {
  return (
    'values' in prop && Array.isArray((prop as { values?: unknown }).values)
  )
}

/**
 * Build an illustrative sample value for an event property from its format.
 * Values are fixed (never random) so generated payloads are stable across
 * runs; this mirrors the value conventions in load-data.ts.
 */
function sampleValue(prop: EventProperty): unknown {
  if (hasEnumValues(prop) && prop.values.length > 0) {
    return prop.values[0]?.name ?? ''
  }
  switch (prop.format) {
    case 'id':
      return '00000000-0000-0000-0000-000000000000'
    case 'datetime':
      return '2025-01-01T00:00:00.000Z'
    case 'boolean':
      return true
    case 'number':
      return 0
    case 'list':
      return []
    case 'object':
    case 'record':
      return {}
    case 'string':
      return ''
    default:
      return null
  }
}

/**
 * Synthesize an example webhook payload for an event so readers can see its
 * shape without triggering the event. `event_type` gets the concrete type and
 * `event_description` echoes the event's description (matching the real
 * payload); every other field gets a type-appropriate placeholder.
 */
function buildEventSample(event: EventResource): Record<string, unknown> {
  const sample: Record<string, unknown> = {}
  for (const prop of event.properties) {
    if (prop.isUndocumented) continue
    if (prop.name === 'event_type') {
      sample[prop.name] = event.eventType
    } else if (prop.name === 'event_description') {
      sample[prop.name] = event.description.trim()
    } else {
      sample[prop.name] = sampleValue(prop)
    }
  }
  return sample
}

/** Render an event's example payload as a JSON code block. */
function renderEventSample(event: EventResource): string {
  const json = JSON.stringify(buildEventSample(event), null, 2)
  return ['```json Example webhook payload', json, '```'].join('\n')
}

/** Render a single event property as a Mintlify `<ResponseField>`. */
function renderEventProperty(prop: EventProperty): string {
  const body: string[] = []

  // `event_type` is a single-value enum: show the concrete value.
  if (
    prop.name === 'event_type' &&
    hasEnumValues(prop) &&
    prop.values.length === 1 &&
    prop.values[0] != null
  ) {
    body.push(`Value: \`${prop.values[0].name}\``)
  } else {
    const description = (prop.description ?? '').trim()
    body.push(description || `The ${prop.name.replace(/_/g, ' ')}.`)

    if (hasEnumValues(prop) && prop.values.length > 0) {
      const values = prop.values.map((value) => `\`${value.name}\``).join(', ')
      body.push('', `Possible values: ${values}`)
    }
  }

  return [
    `<ResponseField name="${prop.name}" type="${formatType(prop)}">`,
    indent(body.join('\n'), 2),
    '</ResponseField>',
  ].join('\n')
}

/**
 * Render one event: its type and description, an example payload showing its
 * shape, then a collapsible `<Accordion>` of its properties. Mintlify strips
 * raw `<details>` elements, so the collapsible uses the native `<Accordion>`.
 */
function renderEvent(event: EventResource): string {
  const properties = event.properties
    .filter((prop) => !prop.isUndocumented)
    .map(renderEventProperty)
    .join('\n\n')

  return [
    `### \`${event.eventType}\``,
    '',
    event.description.trim(),
    '',
    renderEventSample(event),
    '',
    '<Accordion title="Properties">',
    '',
    properties,
    '',
    '</Accordion>',
  ].join('\n')
}

/** Render the full marker-wrapped `## Events` section for a resource. */
function renderEventsSection(events: EventResource[]): string {
  const body = events.map(renderEvent).join('\n\n')
  return [EVENTS_START, '', '## Events', '', body, '', EVENTS_END].join('\n')
}

/**
 * Insert or replace the generated events section in an object page. Handles
 * three cases: an existing marker-wrapped section, a legacy hand-written
 * `## Events` heading, or no events section at all.
 */
function upsertEventsSection(content: string, section: string): string {
  const startIdx = content.indexOf(EVENTS_START)
  if (startIdx !== -1) {
    const endIdx = content.indexOf(EVENTS_END, startIdx)
    if (endIdx !== -1) {
      const after = endIdx + EVENTS_END.length
      return content.slice(0, startIdx) + section + content.slice(after)
    }
  }

  const endpointsIdx = content.search(/^## Endpoints$/m)

  // Legacy hand-written `## Events` section: replace up to `## Endpoints`
  // (which always follows it on the hand-ported pages) or the end of file.
  const legacyIdx = content.search(/^## Events$/m)
  if (legacyIdx !== -1) {
    const end =
      endpointsIdx !== -1 && endpointsIdx > legacyIdx
        ? endpointsIdx
        : content.length
    return `${content.slice(0, legacyIdx)}${section}\n\n${content.slice(end)}`
  }

  // No events section yet: insert before `## Endpoints` if present, else append.
  if (endpointsIdx !== -1) {
    return `${content.slice(0, endpointsIdx)}${section}\n\n${content.slice(endpointsIdx)}`
  }
  return `${content.replace(/\s+$/, '')}\n\n${section}\n`
}

/**
 * Replace the `event_type` ResponseField on the Event object page with one that
 * lists every event type as enum values. Idempotent: matches the field whether
 * or not it already carries the enum block.
 */
function injectEventTypeEnum(content: string, eventTypes: string[]): string {
  const field = [
    '<ResponseField name="event_type" type="Enum (String)">',
    '  The event type.',
    '',
    '  <Accordion title="Enum values">',
    ...eventTypes.map((type) => `    - \`${type}\``),
    '  </Accordion>',
    '</ResponseField>',
  ].join('\n')

  return content.replace(
    /<ResponseField name="event_type"[^>]*>[\s\S]*?<\/ResponseField>/,
    field,
  )
}

/** Group events by the route path of the resource that emits them. */
function groupEventsByRoutePath(
  events: EventResource[],
): Map<string, EventResource[]> {
  const byRoute = new Map<string, EventResource[]>()
  for (const event of events) {
    const group = byRoute.get(event.routePath) ?? []
    group.push(event)
    byRoute.set(event.routePath, group)
  }
  return byRoute
}

export async function updateEventPages(
  blueprint: Blueprint,
  docsDir: string,
): Promise<string[]> {
  const events = (blueprint.events ?? []).filter(
    (event) => !event.isUndocumented,
  )
  const updated: string[] = []

  // 1. Per-resource `## Events` sections.
  for (const [routePath, routeEvents] of groupEventsByRoutePath(events)) {
    const objectPath = join(docsDir, 'api', routePath.slice(1), 'object.mdx')
    let content: string
    try {
      content = await readFile(objectPath, 'utf8')
    } catch {
      // Some event route paths have no object page (e.g.
      // /user_identities/enrollment_automations). The GitBook codegen skipped
      // these too; log so a new page can be wired up if one is ever added.
      console.log(`  No object page for events on ${routePath}, skipping`)
      continue
    }

    const section = renderEventsSection(routeEvents)
    const next = upsertEventsSection(content, section)
    if (next !== content) {
      await writeFile(objectPath, next)
      updated.push(routePath)
    }
  }

  // 2. Full `event_type` enum on the Event object page.
  const eventTypes = [...new Set(events.map((event) => event.eventType))]
  const eventObjectPath = join(
    docsDir,
    'api',
    EVENT_OBJECT_ROUTE.slice(1),
    'object.mdx',
  )
  try {
    const content = await readFile(eventObjectPath, 'utf8')
    const next = injectEventTypeEnum(content, eventTypes)
    if (next !== content) {
      await writeFile(eventObjectPath, next)
      updated.push(EVENT_OBJECT_ROUTE)
    }
  } catch {
    console.log(`  No Event object page at ${eventObjectPath}, skipping enum`)
  }

  return updated
}
