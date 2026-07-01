/**
 * Shared helpers for rendering blueprint properties on generated API-reference
 * pages (events.ts, errors.ts). Kept format- and value-consistent across pages
 * so event, error, and warning properties read identically.
 */

interface Formattable {
  format: string
  jsonType?: string
}

interface Sampleable {
  format: string
  values?: Array<{ name: string }>
}

/**
 * Map a blueprint property format to the type label used across the API object
 * pages (e.g. `id` -> `String (UUID)`, `enum` -> `Enum (String)`). Mirrors
 * `formatPropertyType` in generate.ts.
 */
export function formatType(prop: Formattable): string {
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
      return prop.jsonType ?? 'String'
  }
}

/** Narrow a property to one that carries enum `values`. Generic so it preserves
 * the caller's property type. */
export function hasEnumValues<T extends object>(
  prop: T,
): prop is T & { values: Array<{ name: string }> } {
  return (
    'values' in prop && Array.isArray((prop as { values?: unknown }).values)
  )
}

/**
 * Build an illustrative sample value for a property from its format. Values are
 * fixed (never random) so generated payloads are stable across runs; this
 * mirrors the value conventions in load-data.ts.
 */
export function sampleValue(prop: Sampleable): unknown {
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

/** Indent every non-blank line of `text` by `spaces` spaces. */
export function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n')
}
