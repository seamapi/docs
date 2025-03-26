import type { Blueprint } from '@seamapi/blueprint'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiNamespaceLayoutContext {
  title: string
  description: string
  overview: string
  resources: Array<{
    name: string
    description: string
    link: string
  }>
}

export function setNamespaceLayoutContext(
  file: ApiNamespaceLayoutContext,
  namespace: string,
  resources: Blueprint['resources'],
  pathMetadata: PathMetadata,
): void {
  const namespaceMetadata = pathMetadata[namespace]
  if (namespaceMetadata == null) {
    throw new Error(`Namespace metadata for ${namespace} not found`)
  }

  file.title = namespaceMetadata.title
  file.description = namespaceMetadata.description ?? ''
  file.overview = namespaceMetadata.overview ?? ''

  const namespaceRoutes = Object.entries(pathMetadata).filter(([p]) =>
    p.startsWith(namespace),
  )
  const namespaceResources = namespaceRoutes.flatMap(
    ([_, metadata]) => metadata.resources,
  )
  file.resources = namespaceResources.map((resourceName) => {
    const resource = resources[resourceName]

    if (resource == null) {
      throw new Error(`Resource ${resourceName} not found in blueprint`)
    }

    const resourceRoute = namespaceRoutes.find(([_, metadata]) =>
      metadata.resources.includes(resourceName),
    )
    if (resourceRoute == null) {
      throw new Error(`Route for resource ${resourceName} not found`)
    }
    const [routePath] = resourceRoute
    const lastPathSegment = routePath.split('/').at(-1)
    const docLink = `./${lastPathSegment}/README.md#${resourceName}`

    return {
      name: resourceName,
      description: resource.description,
      link: docLink,
    }
  })
}
