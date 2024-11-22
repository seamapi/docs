import type { Blueprint } from '@seamapi/blueprint'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiNamespaceLayoutContext {
  title: string
  description: string
  resources: Array<{ name: string; description: string }>
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

  const namespaceResources = Object.entries(pathMetadata)
    .filter(([p]) => p.startsWith(namespace))
    .flatMap(([_, metadata]) => metadata.resources)
  file.resources = namespaceResources.map((resourceName) => {
    const resource = resources[resourceName]

    if (resource == null) {
      throw new Error(`Resource ${resourceName} not found in blueprint`)
    }

    return {
      name: resourceName,
      description: resource.description,
    }
  })
}
