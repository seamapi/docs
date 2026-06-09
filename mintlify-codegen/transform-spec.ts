import type { Blueprint, Endpoint, SdkName } from '@seamapi/blueprint'

import { supportedSdkOrder } from '../codegen/lib/code-sample-tab-order.js'
import type { PathMetadata } from './load-data.js'

/**
 * SDKs to include in the Mintlify API reference.
 * Matches the GitBook pipeline's apiReferenceSdks.
 */
const apiReferenceSdks = new Set<SdkName>([
  'javascript',
  'python',
  'ruby',
  'php',
  'curl',
  'seam_cli',
])

const mintlifySdkOrder = supportedSdkOrder.filter((sdk) =>
  apiReferenceSdks.has(sdk),
)

/**
 * Map SDK names to Mintlify x-codeSamples lang values.
 */
function sdkToLang(sdk: SdkName): string {
  switch (sdk) {
    case 'curl':
      return 'bash'
    case 'seam_cli':
      return 'bash'
    case 'csharp':
      return 'csharp'
    default:
      return sdk
  }
}

/**
 * Map SDK names to display labels for code sample tabs.
 * Uses "Seam SDK" for SDK-based samples to match prototype.
 */
function sdkToLabel(sdk: SdkName): string {
  switch (sdk) {
    case 'javascript':
      return 'Seam SDK'
    case 'python':
      return 'Seam SDK'
    case 'ruby':
      return 'Seam SDK'
    case 'php':
      return 'Seam SDK'
    case 'csharp':
      return 'Seam SDK'
    case 'java':
      return 'Seam SDK'
    case 'go':
      return 'Seam SDK'
    case 'curl':
      return 'cURL'
    case 'seam_cli':
      return 'Seam CLI'
    default:
      return sdk
  }
}

/**
 * Pretty-print a JSON string with indentation.
 */
function prettyJson(json: string): string {
  try {
    return JSON.stringify(JSON.parse(json), null, 2)
  } catch {
    return json
  }
}

/**
 * Combine request and response code into a single source block.
 * Matches the prototype format: request code, then commented response.
 */
function combineRequestResponse(
  sdk: SdkName,
  request: string,
  response: string,
): string {
  if (!response) return request

  switch (sdk) {
    case 'javascript': {
      const prettyResponse = prettyJson(response)
      return `${request}\n\n/*\n${prettyResponse}\n*/`
    }
    case 'python': {
      // Python response is already in Python object notation
      return `${request}\n\n# ${response}`
    }
    case 'curl': {
      const prettyResponse = prettyJson(response)
      return `${request}\n\n# Response:\n# ${prettyResponse.split('\n').join('\n# ')}`
    }
    case 'seam_cli': {
      const prettyResponse = prettyJson(response)
      return `${request}\n\n# ${prettyResponse.split('\n').join('\n# ')}`
    }
    case 'ruby': {
      return `${request}\n\n# => ${response}`
    }
    case 'php': {
      return `${request}\n\n// ${response}`
    }
    default:
      return request
  }
}

/**
 * Build a lookup from endpoint path to Blueprint Endpoint.
 * Endpoints are nested under routes in the blueprint.
 */
function buildEndpointMap(blueprint: Blueprint): Map<string, Endpoint> {
  const map = new Map<string, Endpoint>()
  for (const route of blueprint.routes) {
    for (const endpoint of route.endpoints) {
      map.set(endpoint.path, endpoint)
    }
  }
  return map
}

/**
 * Create a scoped action_attempt inline schema for an endpoint.
 */
function createScopedActionAttempt(actionType: string): object {
  return {
    type: 'object',
    description: `Tracks the progress of this operation. Poll using the action_attempt_id.`,
    properties: {
      action_attempt_id: {
        type: 'string',
        format: 'uuid',
        description: 'ID of the action attempt.',
      },
      action_type: {
        type: 'string',
        enum: [actionType],
        description: 'Type of action being tracked.',
      },
      status: {
        type: 'string',
        enum: ['pending', 'success', 'error'],
        description: 'Current status of the action.',
      },
      result: {
        type: 'object',
        nullable: true,
        description: 'Result payload on success.',
      },
      error: {
        type: 'object',
        nullable: true,
        description: 'Error details on failure.',
        properties: {
          type: { type: 'string' },
          message: { type: 'string' },
        },
      },
    },
    required: ['action_attempt_id', 'action_type', 'status'],
  }
}

/**
 * Simplify a schema property that has a large oneOf (errors/warnings).
 * Replaces 38+ variant error schemas with a generic shape.
 */
function simplifyErrorWarningArray(prop: any): any {
  if (prop?.type !== 'array') return prop
  const items = prop.items
  if (!items?.oneOf || items.oneOf.length < 5) return prop

  return {
    type: 'array',
    description: prop.description,
    items: {
      type: 'object',
      properties: {
        error_code: { type: 'string', description: 'Error or warning code.' },
        message: {
          type: 'string',
          description: 'Human-readable description.',
        },
        created_at: {
          type: 'string',
          format: 'date-time',
          description: 'When this error or warning was generated.',
        },
      },
    },
  }
}

/**
 * Rewrite docs.seam.co links to relative Mintlify paths.
 */
function rewriteLinks(text: string): string {
  if (!text) return text
  return text.replace(/https:\/\/docs\.seam\.co\/latest\//g, '/')
}

/**
 * Truncate a description to the first paragraph or ~500 chars.
 */
function truncateDescription(text: string, maxLen = 500): string {
  if (!text || text.length <= maxLen) return text

  // Try to cut at first paragraph break
  const paragraphBreak = text.indexOf('\n\n')
  if (paragraphBreak > 0 && paragraphBreak <= maxLen) {
    return text.slice(0, paragraphBreak)
  }

  // Cut at sentence boundary within maxLen
  const truncated = text.slice(0, maxLen)
  const lastPeriod = truncated.lastIndexOf('. ')
  if (lastPeriod > maxLen / 2) {
    return truncated.slice(0, lastPeriod + 1)
  }

  return truncated + '...'
}

/**
 * Generate a human-readable title from a path like /access_codes/create.
 */
function titleFromPath(path: string): string {
  const parts = path.split('/').filter(Boolean)
  const action = parts[parts.length - 1]
  if (!action) return path

  // Convert snake_case to Title Case
  return action
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * Transform the raw OpenAPI spec for Mintlify consumption.
 */
export function transformSpec(
  spec: any,
  blueprint: Blueprint,
  _pathMetadata: PathMetadata,
): { spec: any; stats: TransformStats } {
  const endpointMap = buildEndpointMap(blueprint)
  const stats: TransformStats = {
    totalEndpoints: 0,
    withCodeSamples: 0,
    withActionAttempts: 0,
    withoutCodeSamples: [] as string[],
  }

  // Remove only undocumented paths to reduce spec size
  // Keep x-draft paths since they may be in the navigation (e.g., access_grants, spaces)
  const pathsToRemove: string[] = []
  for (const [path, methods] of Object.entries(spec.paths) as any) {
    const op = methods.post
    if (!op) continue
    if (op['x-undocumented']) {
      pathsToRemove.push(path)
    }
  }
  for (const path of pathsToRemove) {
    delete spec.paths[path]
  }
  stats.removedPaths = pathsToRemove.length

  // Transform each path/operation
  for (const [path, methods] of Object.entries(spec.paths) as any) {
    const op = methods.post
    if (!op) continue

    stats.totalEndpoints++

    // 1. Human summary/title
    const bpEndpoint = endpointMap.get(path)
    if (bpEndpoint?.title) {
      op.summary = bpEndpoint.title
    } else if (op['x-title']) {
      op.summary = op['x-title']
    } else {
      op.summary = titleFromPath(path)
    }

    // 2. x-mint href for URL preservation
    op['x-mint'] = { href: `/api${path}` }

    // 3. Inject x-codeSamples from blueprint
    if (bpEndpoint && bpEndpoint.codeSamples.length > 0) {
      const codeSamples: Array<{
        lang: string
        label: string
        source: string
      }> = []

      // Use the first/primary code sample to avoid tab duplication
      const sample = bpEndpoint.codeSamples[0]
      if (sample) {
        for (const sdk of mintlifySdkOrder) {
          const code = sample.code[sdk]
          if (!code) continue

          codeSamples.push({
            lang: sdkToLang(sdk),
            label: sdkToLabel(sdk),
            source: combineRequestResponse(sdk, code.request, code.response),
          })
        }
      }

      if (codeSamples.length > 0) {
        op['x-codeSamples'] = codeSamples
        stats.withCodeSamples++
      } else {
        stats.withoutCodeSamples.push(path)
      }
    } else {
      stats.withoutCodeSamples.push(path)
    }

    // 4. Scope action_attempt per endpoint
    const responseSchema =
      op.responses?.['200']?.content?.['application/json']?.schema
    if (responseSchema?.properties?.action_attempt) {
      const actionAttemptProp = responseSchema.properties.action_attempt
      const actionType = op['x-action-attempt-type']

      if (
        actionType &&
        (actionAttemptProp.$ref ||
          (actionAttemptProp.oneOf && actionAttemptProp.oneOf.length > 3))
      ) {
        responseSchema.properties.action_attempt =
          createScopedActionAttempt(actionType)
        stats.withActionAttempts++
      }
    }

    // 5. Rewrite description links
    if (op.description) {
      op.description = rewriteLinks(op.description)
    }

    // 6. Clean up vendor extensions Mintlify doesn't need
    delete op['x-fern-sdk-group-name']
    delete op['x-fern-sdk-method-name']
    delete op['x-fern-sdk-return-value']
    delete op['x-undocumented']
    delete op['x-draft']
    delete op['x-batch-keys']
    delete op['x-deprecated']
  }

  // Transform component schemas
  transformComponents(spec)

  return { spec, stats }
}

/**
 * Clean up component schemas for Mintlify rendering.
 */
function transformComponents(spec: any): void {
  const schemas = spec.components?.schemas
  if (!schemas) return

  for (const [name, schema] of Object.entries(schemas) as any) {
    // Truncate long descriptions
    if (schema.description) {
      schema.description = truncateDescription(rewriteLinks(schema.description))
    }

    // Simplify error/warning arrays in properties
    if (schema.properties) {
      for (const [propName, prop] of Object.entries(schema.properties) as any) {
        if (
          propName === 'errors' ||
          propName === 'warnings' ||
          propName.endsWith('_errors') ||
          propName.endsWith('_warnings')
        ) {
          schema.properties[propName] = simplifyErrorWarningArray(prop)
        }

        // Also rewrite descriptions in properties
        if (prop.description) {
          prop.description = rewriteLinks(prop.description)
        }
      }
    }

    // Simplify the monolithic action_attempt schema
    if (name === 'action_attempt' && schema.oneOf?.length > 10) {
      // Replace with a generic action_attempt schema
      // (individual endpoints already have scoped inline schemas)
      delete schema.oneOf
      delete schema.discriminator
      schema.type = 'object'
      schema.description =
        'Represents an asynchronous action. Poll until status is success or error.'
      schema.properties = {
        action_attempt_id: {
          type: 'string',
          format: 'uuid',
          description: 'ID of the action attempt.',
        },
        action_type: {
          type: 'string',
          description: 'Type of action being tracked.',
        },
        status: {
          type: 'string',
          enum: ['pending', 'success', 'error'],
          description: 'Current status of the action.',
        },
        result: {
          type: 'object',
          nullable: true,
          description: 'Result payload on success.',
        },
        error: {
          type: 'object',
          nullable: true,
          description: 'Error details on failure.',
          properties: {
            type: { type: 'string' },
            message: { type: 'string' },
          },
        },
      }
      schema.required = ['action_attempt_id', 'action_type', 'status']
    }
  }
}

export interface TransformStats {
  totalEndpoints: number
  withCodeSamples: number
  withActionAttempts: number
  withoutCodeSamples: string[]
  removedPaths: number
}
