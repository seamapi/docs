import type { Blueprint } from '@seamapi/blueprint'

import {
  type ApiError,
  type ApiRouteEvent,
  type ApiRouteProperty,
  type ApiRouteResource,
  type ApiWarning,
  mapBlueprintPropertyToRouteProperty,
  type ResourceSampleContext,
} from './api-route.js'

export function processActionAttemptResource(
  blueprint: Blueprint,
  resources: Array<
    ApiRouteResource & {
      warnings: ApiWarning[]
      errors: ApiError[]
      resourceSamples: ResourceSampleContext[]
    }
  >,
  eventsByRoutePath: Map<string, ApiRouteEvent[]>,
): void {
  const blueprintActionAttemptDef = blueprint.actionAttempts[0]
  if (blueprintActionAttemptDef == null) {
    throw new Error(
      'Cannot process action attempt resource: blueprint.actionAttempts is empty.',
    )
  }

  const idPropKey = 'action_attempt_id'
  const idPropDef = blueprintActionAttemptDef.properties.find(
    (p) => p.name === idPropKey,
  )
  if (idPropDef == null) {
    throw new Error(
      `Blueprint action attempt is missing "${idPropKey}" property.`,
    )
  }

  const statusPropKey = 'status'
  const statusPropDef = blueprintActionAttemptDef.properties.find(
    (p) => p.name === statusPropKey,
  )
  if (statusPropDef == null) {
    throw new Error(
      `Blueprint action attempt is missing "${statusPropKey}" property.`,
    )
  }

  const actionTypes = blueprint.actionAttempts.map(
    (attempt) => attempt.actionAttemptType,
  )

  const properties: ApiRouteProperty[] = [
    mapBlueprintPropertyToRouteProperty(idPropDef),
    mapBlueprintPropertyToRouteProperty(statusPropDef),
    {
      name: 'action_type',
      description: 'Type of the action attempt.',
      format: 'String',
      isDeprecated: false,
      deprecationMessage: '',
      enumValues: actionTypes,
    },
    {
      name: 'error',
      description:
        'Errors associated with the action attempt. Null for pending action attempts.',
      format: 'Object',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'result',
      description:
        'Result of the action attempt. Null for pending action attempts.',
      format: 'Object',
      isDeprecated: false,
      deprecationMessage: '',
    },
  ]

  resources.push({
    name: 'action_attempt',
    description: 'Represents an attempt to perform an action against a device.',
    properties,
    errors: [],
    warnings: [],
    events: eventsByRoutePath.get('/action_attempts') ?? [],
    resourceSamples: [],
  })
}
