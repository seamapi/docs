import type { Blueprint, Route } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiNamespaceLayoutContext {
  title: string
  description: string
  resources: Array<{ name: string; description: string }>
}

type File = ApiNamespaceLayoutContext & { layout: string }

export function setNamespaceLayoutContext(
  files: Metalsmith.Files,
  blueprint: Blueprint,
  pathMetadata: PathMetadata,
): void {
  const namespacePaths = getNamespacePaths(blueprint.routes)

  for (const path of namespacePaths) {
    const namespaceMetadata = pathMetadata[path]
    if (namespaceMetadata == null) continue

    const k = `api${path}/README.md`
    files[k] = {
      contents: Buffer.from('\n'),
    }
    const file = files[k] as unknown as File
    file.layout = 'api-namespace.hbs'

    file.title = namespaceMetadata.title
    file.description = namespaceMetadata.description ?? ''
    const namespaceResources = Object.entries(pathMetadata)
      .filter(([p]) => p.startsWith(path))
      .flatMap(([_, metadata]) => metadata.resources)
    file.resources = namespaceResources.map((resourceName) => {
      const resource = blueprint.resources[resourceName]

      if (resource == null) {
        throw new Error(`Resource ${resourceName} not found in blueprint`)
      }

      return {
        name: resourceName,
        description: resource.description,
      }
    })
  }
}

function getNamespacePaths(routes: Route[]): string[] {
  return Array.from(
    new Set(
      routes.flatMap((route) =>
        route.namespace != null ? [route.namespace.path] : [],
      ),
    ),
  )
}
