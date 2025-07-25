import type {
  Blueprint,
  DiscriminatedListProperty,
  Endpoint,
  EnumProperty,
  Property,
  PropertyGroup,
  ResourceSample,
  Route,
  SdkName,
  SyntaxName,
} from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

import type { PathMetadata } from '../path-metadata.js'

export interface ApiRouteLayoutContext {
  title: string
  overview: string | undefined
  path: string
  isAlpha: boolean
  alphaMessage: string | undefined
  resources: ApiRouteResource[]
  endpoints: ApiRouteEndpoint[]
  events: ApiRouteEvent[]
}

interface ApiRouteEvent {
  name: string
  description: string
  properties: ApiRouteProperty[]
}

export interface ResourceSampleContext {
  title: string
  description: string
  resourceData: string
  resourceDataSyntax: SyntaxName
}

interface ApiRoutePropertyGroup {
  name?: string
  propertyGroupKey: string | null
  properties: ApiRouteProperty[]
}

type ApiRouteProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & {
  format: string
  enumValues?: string[]
  objectProperties?: ApiRouteProperty[]
  listProperties?: ApiRouteProperty[]
  listItemFormat?: string
  linkTarget?: string
  value?: string
  discriminator?: string
  discriminatorVariants?: Array<{
    name: string
    description: string
    properties: ApiRouteProperty[]
  }>
}

export interface ApiRouteResource {
  name: string
  description: string
  propertyGroups: ApiRoutePropertyGroup[]
  legacyPropertyGroups?: ApiRoutePropertyGroup[]
  events: ApiRouteEvent[]
  hidePreamble: boolean
  endpoints?: ApiRouteEndpoint[]
  warningGroups: ApiRouteVariantGroup[]
  errorGroups: ApiRouteVariantGroup[]
  resourceSamples: ResourceSampleContext[]
}

interface ApiRouteVariantGroup {
  name?: string
  variantGroupKey: string | null
  variants: ApiRouteVariant[]
}

interface ApiRouteVariant {
  name: string
  description: string
  parentResouceType: string | null
}

type ApiRouteEndpoint = Pick<Endpoint, 'path' | 'description'>

export const setApiRouteLayoutContext = (
  file: Partial<ApiRouteLayoutContext>,
  route: Route,
  blueprint: Blueprint,
  pathMetadata: PathMetadata,
): void => {
  const metadata = pathMetadata[route.path]
  if (metadata == null) {
    throw new Error(`Missing path metadata for ${route.path}`)
  }

  file.title = metadata.title
  file.overview = metadata.overview
  file.path = route.path
  file.isAlpha = (metadata.alpha ?? '').length > 0
  file.alphaMessage = metadata.alpha

  const eventsByRoutePath = groupEventsByRoutePath(blueprint.events)
  file.events = eventsByRoutePath.get(route.path) ?? []

  file.endpoints = route.endpoints
    .filter(
      ({ isUndocumented, title }) => !isUndocumented && title.length !== 0,
    )
    .map(({ path, name, description }) => ({
      path,
      name,
      description: getFirstParagraph(description),
    }))

  const resourceTypes = [
    ...new Set([
      ...blueprint.resources
        .filter((r) => r.routePath === route.path && !r.isUndocumented)
        .map(({ resourceType }) => resourceType),
      ...metadata.resources,
    ]),
  ]
  file.resources = []
  for (const resourceType of resourceTypes) {
    const resource = blueprint.resources.find(
      (r) => r.resourceType === resourceType,
    )

    if (resourceType === 'action_attempt') {
      processActionAttemptResource(file.resources, eventsByRoutePath, blueprint)
      continue
    }

    if (resourceType === 'event') {
      processEventResource(file.resources, blueprint)
      continue
    }

    if (resource == null) {
      throw new Error(
        `Path metadata for ${route.path} has invalid resource type ${resourceType}`,
      )
    }

    const groupOptions = {
      include: metadata.include_groups,
      exclude: metadata.exclude_groups,
    }

    const warningsProp = resource.properties.find((p) => p.name === 'warnings')
    const errorsProp = resource.properties.find((p) => p.name === 'errors')
    const warningGroups =
      warningsProp != null
        ? groupVariants(warningsProp, groupOptions, resourceType, resourceTypes)
        : []
    const errorGroups =
      errorsProp != null
        ? groupVariants(errorsProp, groupOptions, resourceType, resourceTypes)
        : []

    const allProperties = resource.properties.filter(
      ({ isUndocumented }) => !isUndocumented,
    )

    const properties = allProperties.filter(({ name }) => name !== 'properties')

    const legacyProperty = allProperties.find(
      ({ name }) => name === 'properties',
    )

    const propertyGroups = groupProperties(
      properties,
      resource.propertyGroups,
      groupOptions,
    )

    addLinkTargetsToProperties(propertyGroups?.[0]?.properties, {
      hasErrors: errorGroups.length > 0,
      hasWarnings: warningGroups.length > 0,
    })

    const legacyPropertyGroups =
      legacyProperty != null && legacyProperty.format === 'object'
        ? groupProperties(
            legacyProperty.properties,
            legacyProperty.propertyGroups,
            {
              include: metadata.include_groups,
              exclude: metadata.exclude_groups,
            },
          )
        : null

    file.resources.push({
      name: resource.resourceType,
      description: resource.description,
      propertyGroups,
      ...(legacyPropertyGroups == null ? {} : { legacyPropertyGroups }),
      errorGroups,
      warningGroups,
      hidePreamble: route.path !== resource.routePath,
      events: eventsByRoutePath.get(resource.routePath) ?? [],
      endpoints: file.endpoints,
      resourceSamples: resource.resourceSamples
        .filter(({ title }) => {
          if (groupOptions.include != null) {
            return groupOptions.include.some((x) =>
              title.toLowerCase().includes(x.split('_')[0]?.slice(0, -1) ?? ''),
            )
          }
          if (groupOptions.exclude != null) {
            return !groupOptions.exclude.some((x) =>
              title.toLowerCase().includes(x.split('_')[0]?.slice(0, -1) ?? ''),
            )
          }
          return true
        })
        .map(mapResourceSample),
    })
  }
}

const groupVariants = (
  property: Property | null,
  {
    include,
    exclude,
  }: {
    include?: string[] | undefined
    exclude?: string[] | undefined
  },
  resourceType: string,
  resourceTypes: string[],
): ApiRouteVariantGroup[] => {
  if (!isDiscriminatedListProperty(property)) {
    return []
  }

  const getApiRouteVariants = (
    variantGroupKey: string | null,
  ): ApiRouteVariant[] => {
    return collectResourceVariants(
      {
        ...property,
        variants: property.variants.filter(
          (v) => v.variantGroupKey === variantGroupKey,
        ),
      },
      resourceTypes,
    ).sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }

  const groups = property.variantGroups
    .reduce<ApiRouteVariantGroup[]>(
      (groups, variantGroup) => [
        ...groups,
        {
          name: variantGroup.name,
          variantGroupKey: variantGroup.variantGroupKey,
          variants: getApiRouteVariants(variantGroup.variantGroupKey),
        },
      ],
      [
        {
          variants: getApiRouteVariants(null),
          variantGroupKey: null,
        },
      ],
    )
    .filter(({ variants }) => variants.length > 0)
    .filter(({ variantGroupKey }) => {
      if (include == null) return true
      if (variantGroupKey == null) return true
      return include.includes(variantGroupKey)
    })
    .filter(({ variantGroupKey }) => {
      if (exclude == null) return true
      if (variantGroupKey == null) return true
      return !exclude.includes(variantGroupKey)
    })
    .sort((a, b) => {
      if (a.variantGroupKey === null || a.name == null) return -1
      if (a.variantGroupKey === null || b.name == null) return 1
      return a.name.localeCompare(b.name)
    })

  if (include != null) {
    const variants = groups
      .flatMap((g) => g.variants)
      .sort((a, b) => {
        if (a.parentResouceType === null && b.parentResouceType === null) {
          return a.name.localeCompare(b.name)
        }
        if (a.parentResouceType === resourceType) {
          return -1
        }
        if (b.parentResouceType === resourceType) {
          return 1
        }
        if (a.parentResouceType === null) {
          return -1
        }
        if (b.parentResouceType === null) {
          return 1
        }
        if (a.parentResouceType !== b.parentResouceType) {
          return a.parentResouceType.localeCompare(b.parentResouceType)
        }
        return a.name.localeCompare(b.name)
      })
    return [
      {
        variantGroupKey: null,
        variants,
      },
    ]
  }

  return groups
}

const isDiscriminatedListProperty = (
  prop: Property | undefined | null,
): prop is DiscriminatedListProperty => {
  return (
    prop != null &&
    'itemFormat' in prop &&
    prop.itemFormat === 'discriminated_object'
  )
}

const collectResourceVariants = (
  property: DiscriminatedListProperty,
  resourceTypes: string[],
): ApiRouteVariant[] => {
  return property.variants
    .map((variant) => {
      const discriminator = findEnumProperty(
        variant.properties,
        property.discriminator,
      )
      if (discriminator?.values?.[0]?.name == null) {
        return null
      }

      return {
        name: discriminator.values[0].name,
        description: variant.description,
        parentResouceType: getParentVariantResourceType(
          variant.properties.map(({ name }) => name),
          resourceTypes,
        ),
      }
    })
    .filter((variant): variant is ApiRouteVariant => variant !== null)
}

export const groupProperties = (
  properties: Property[],
  propertyGroups: PropertyGroup[],
  {
    include,
    exclude,
  }: {
    include?: string[] | undefined
    exclude?: string[] | undefined
  },
): ApiRoutePropertyGroup[] => {
  const getApiRouteProperties = (
    propertyGroupKey: string | null,
  ): ApiRouteProperty[] =>
    properties
      .filter((p) => p.propertyGroupKey === propertyGroupKey)
      .map(mapBlueprintPropertyToRouteProperty)
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

  const groups = propertyGroups
    .reduce<ApiRoutePropertyGroup[]>(
      (groups, propertyGroup) => [
        ...groups,
        {
          name: propertyGroup.name,
          propertyGroupKey: propertyGroup.propertyGroupKey,
          properties: getApiRouteProperties(propertyGroup.propertyGroupKey),
        },
      ],
      [
        {
          properties: getApiRouteProperties(null),
          propertyGroupKey: null,
        },
      ],
    )
    .filter(({ properties }) => properties.length > 0)
    .filter(({ propertyGroupKey }) => {
      if (include == null) return true
      if (propertyGroupKey == null) return true
      return include.includes(propertyGroupKey)
    })
    .filter(({ propertyGroupKey }) => {
      if (exclude == null) return true
      if (propertyGroupKey == null) return true
      return !exclude.includes(propertyGroupKey)
    })
    .sort((a, b) => {
      if (a.name == null) return -1
      if (b.name == null) return 1
      return a.name.localeCompare(b.name)
    })

  if (include != null) {
    const properties = groups
      .flatMap((g) => g.properties)
      .filter((p) => !p.name.startsWith('_'))
      .sort((a, b) => a.name.localeCompare(b.name))
    return [
      {
        propertyGroupKey: null,
        properties,
      },
    ]
  }

  return groups
}

const groupEventsByRoutePath = (
  events: Blueprint['events'],
): Map<string, ApiRouteEvent[]> => {
  const eventsByRoutePath = new Map<string, ApiRouteEvent[]>()

  for (const event of events) {
    const routeEvents = eventsByRoutePath.get(event.routePath) ?? []
    routeEvents.push({
      name: event.eventType,
      description: event.description,
      properties: event.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map(mapBlueprintPropertyToRouteProperty),
    })

    eventsByRoutePath.set(event.routePath, routeEvents)
  }

  return eventsByRoutePath
}

const getFirstParagraph = (text: string): string =>
  text.split('\n\n').at(0) ?? text

const findEnumProperty = (
  properties: Property[],
  name: string,
): EnumProperty | null => {
  const prop = properties.find(
    (p) => p.name === name && p.format === 'enum',
  ) as EnumProperty | undefined

  return prop ?? null
}

const mapBlueprintPropertyToRouteProperty = (
  prop: Property,
): ApiRouteProperty => {
  const { name, description, format, isDeprecated, deprecationMessage } = prop
  const contextRouteProp: ApiRouteProperty = {
    name,
    description: description.trim(),
    isDeprecated,
    deprecationMessage,
    format: normalizePropertyFormatForDocs(format),
    listItemFormat: '',
  }

  if ('values' in prop) {
    const singleValueEnumProps = ['event_type', 'action_type']
    if (
      singleValueEnumProps.includes(name) &&
      prop.values.length === 1 &&
      prop.values[0] != null
    ) {
      contextRouteProp.value = prop.values[0].name
    } else {
      contextRouteProp.enumValues = prop.values.map(({ name }) => name)
    }
  }

  if ('properties' in prop) {
    const flattenedProperties = flattenObjectProperties(prop.properties)
    contextRouteProp.objectProperties = flattenedProperties.map(
      mapBlueprintPropertyToRouteProperty,
    )
  }

  if ('itemProperties' in prop) {
    const flattenedProperties = flattenObjectProperties(prop.itemProperties)
    contextRouteProp.listProperties = flattenedProperties.map(
      mapBlueprintPropertyToRouteProperty,
    )
  }

  if (format === 'list') {
    contextRouteProp.listItemFormat = normalizePropertyFormatForDocs(
      prop.itemFormat,
    )

    if (prop.itemFormat === 'discriminated_object') {
      const discriminatedListProp = prop
      contextRouteProp.discriminator = discriminatedListProp.discriminator
      contextRouteProp.discriminatorVariants =
        discriminatedListProp.variants.map((variant) => {
          const discriminatorProperty = variant.properties.find(
            (p) => p.name === discriminatedListProp.discriminator,
          )
          const variantName =
            (discriminatorProperty as EnumProperty)?.values?.[0]?.name ??
            'unknown_variant'
          return {
            name: variantName,
            description: variant.description,
            properties: variant.properties
              .filter((p) => !p.isUndocumented)
              .map(mapBlueprintPropertyToRouteProperty),
          }
        })
    }
  }

  return contextRouteProp
}

type PropertyFormat = Property['format'] | ListProperty['itemFormat']
type ListProperty = Extract<Property, { format: 'list' }>

export const normalizePropertyFormatForDocs = (
  format: PropertyFormat,
): string => {
  const formatMap: Partial<Record<PropertyFormat, string>> = {
    id: 'UUID',
    discriminated_object: 'Object',
  }

  return formatMap[format] ?? pascalCase(format)
}

const flattenObjectProperties = (
  properties: Property[],
  paths: string[] = [],
): Property[] => {
  const results: Property[] = []

  for (const property of properties.filter(
    ({ isUndocumented }) => !isUndocumented,
  )) {
    const name = [...paths, property.name].join('.')

    results.push({
      ...property,
      name,
    })

    if (property.format === 'object') {
      results.push(...flattenObjectProperties(property.properties, [name]))
      continue
    }
  }

  return results
}

const addLinkTargetsToProperties = (
  properties: ApiRouteProperty[] | undefined,
  sections: { hasErrors: boolean; hasWarnings: boolean },
): void => {
  if (properties == null) return
  const linkableProperties: Record<string, string | undefined> = {
    errors: sections.hasErrors ? './#errors' : undefined,
    warnings: sections.hasWarnings ? './#warnings' : undefined,
  }

  for (const prop of properties) {
    const linkTarget = linkableProperties[prop.name]
    if (linkTarget != null) {
      prop.linkTarget = linkTarget
    }
  }
}

export const mapResourceSample = (
  sample: ResourceSample,
): ResourceSampleContext => {
  const jsonSample = Object.entries(sample.resource).find(
    ([k]) => (k as SdkName) === 'seam_cli',
  )?.[1]

  if (jsonSample == null) {
    throw new Error(
      `Missing seam_cli for ${sample.resource_type} resource sample: ${sample.title}`,
    )
  }

  return {
    title: sample.title,
    description: sample.description,
    resourceData: jsonSample.resource_data,
    resourceDataSyntax: jsonSample.resource_data_syntax,
  }
}

const getParentVariantResourceType = (
  propertyKeys: string[],
  resourceTypes: string[],
): string | null => {
  const keyMap = Object.fromEntries(
    resourceTypes.map((k) => [`is_${k}_error`, k]),
  )
  const key = propertyKeys.find((k) => Object.keys(keyMap).includes(k))
  if (key == null) return null
  return keyMap[key] ?? null
}

function processActionAttemptResource(
  resources: ApiRouteResource[],
  eventsByRoutePath: Map<string, ApiRouteEvent[]>,
  blueprint: Blueprint,
): void {
  const properties: ApiRouteProperty[] = [
    {
      name: 'action_attempt_id',
      description: 'ID of the action attempt.',
      format: 'UUID',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'status',
      description: 'Status of the action attempt.',
      format: 'Enum',
      isDeprecated: false,
      deprecationMessage: '',
      enumValues: ['pending', 'success', 'error'],
    },
    {
      name: 'action_type',
      description: 'Type of the action attempt.',
      format: 'Enum',
      isDeprecated: false,
      deprecationMessage: '',
      enumValues: blueprint.actionAttempts
        .filter(
          ({ isDeprecated, isUndocumented }) =>
            !(isUndocumented || isDeprecated),
        )
        .filter(
          ({ actionAttemptType }) =>
            !['CREATE', 'DELETE', 'UPDATE', 'SYNC'].includes(
              actionAttemptType.split('_')[0] ?? '',
            ),
        )
        .map(({ actionAttemptType }) => actionAttemptType),
    },
    {
      name: 'error',
      description:
        'Error associated with the action attempt. Null for pending and successful action attempts.',
      format: 'Object',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'result',
      description:
        'Result of the action attempt. Null for pending and errored action attempts.',
      format: 'Object',
      isDeprecated: false,
      deprecationMessage: '',
    },
  ]

  resources.push({
    name: 'action_attempt',
    description: 'Represents an attempt to perform an action against a device.',
    propertyGroups: [{ propertyGroupKey: null, properties }],
    hidePreamble: false,
    errorGroups: [],
    warningGroups: [],
    resourceSamples: [],
    events: eventsByRoutePath.get('/action_attempts') ?? [],
  })
}

function processEventResource(
  resources: ApiRouteResource[],
  blueprint: Blueprint,
): void {
  const properties: ApiRouteProperty[] = [
    {
      name: 'event_id',
      description: 'ID of the event.',
      format: 'UUID',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'event_type',
      description: 'Type of event.',
      format: 'Enum',
      isDeprecated: false,
      deprecationMessage: '',
      enumValues: blueprint.events
        .filter(
          ({ isDeprecated, isUndocumented }) =>
            !(isUndocumented || isDeprecated),
        )
        .map(({ eventType }) => eventType),
    },
    {
      name: 'workspace_id',
      description:
        'ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) associated with the event.',
      format: 'UUID',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'created_at',
      description: 'Date and time at which the event was created.',
      format: 'DateTime',
      isDeprecated: false,
      deprecationMessage: '',
    },
    {
      name: 'occurred_at',
      description: 'Date and time at which the event occurred.',
      format: 'DateTime',
      isDeprecated: false,
      deprecationMessage: '',
    },
  ]

  resources.push({
    name: 'event',
    description: 'Represents an event that occurred in your workspace.',
    propertyGroups: [{ propertyGroupKey: null, properties }],
    hidePreamble: false,
    errorGroups: [],
    warningGroups: [],
    resourceSamples: [],
    events: [],
  })
}
