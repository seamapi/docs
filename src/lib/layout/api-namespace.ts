import type { Resource } from '@seamapi/blueprint'

import type { PathMetadata } from '../path-metadata.js'

export interface ApiNamespaceLayoutContext {
  title: string
  description: string
  overview: string
  isAlpha: boolean
  alphaMessage: string | undefined
  resources: Array<{
    name: string
    description: string
    link: string
  }>
}

export function setNamespaceLayoutContext(
  file: Partial<ApiNamespaceLayoutContext>,
  namespace: string,
  resources: Resource[],
  pathMetadata: PathMetadata,
): void {
  const metadata = pathMetadata[namespace]
  if (metadata == null) {
    throw new Error(`Namespace metadata for ${namespace} not found`)
  }

  file.title = metadata.title
  file.description = metadata.description ?? ''
  file.overview = metadata.overview ?? ''
  file.isAlpha = (metadata.alpha ?? '').length > 0
  file.alphaMessage = metadata.alpha

  const namespaceRoutes = Object.entries(pathMetadata).filter(([p]) =>
    p.startsWith(namespace),
  )
  const namespaceResources = [
    ...resources
      .filter((r) => r.routePath === namespace && !r.isUndocumented)
      .map(({ resourceType }) => resourceType),
    ...namespaceRoutes.flatMap(([_, metadata]) => metadata.resources),
  ]
  file.resources = namespaceResources.map((resourceType) => {
    const resource = resources.find((r) => r.resourceType === resourceType)

    if (resource == null) {
      throw new Error(`Resource ${resourceType} not found in blueprint`)
    }

    const resourceRoute = namespaceRoutes.find(([_, metadata]) =>
      metadata.resources.includes(resourceType),
    )
    if (resourceRoute == null) {
      throw new Error(`Route for resource ${resourceType} not found`)
    }
    const [routePath] = resourceRoute
    const lastPathSegment = routePath.split('/').at(-1)
    const docLink = `./${lastPathSegment}/README.md#${resourceType}`

    return {
      name: resourceType,
      description: resource.description,
      link: docLink,
    }
  })
}
