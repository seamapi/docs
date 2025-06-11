import type { Endpoint, Namespace, Route } from '@seamapi/blueprint'

import type { PathMetadata } from '../path-metadata.js'

export interface ApiSummaryLayoutContext {
  nodes: Node[]
}

interface Node {
  title: string
  path: string
  nodes: Node[]
}

interface Context {
  routes: Route[]
  namespaces: Namespace[]
  endpoints: Endpoint[]
  pathMetadata: PathMetadata
}

const pathPrefix = 'api'

export function setSummaryLayoutContext(
  file: Partial<ApiSummaryLayoutContext>,
  context: Context,
): void {
  const paths = getPaths(null, context)
  file.nodes = getNodes(paths, context)
}

const getNodes = (paths: string[], context: Context): Node[] => {
  return paths.map((path) => getNode(path, context))
}

const getNode = (path: string, context: Context): Node => {
  const { endpoints, routes, namespaces, pathMetadata } = context
  const endpoint = endpoints.find((e) => e.path === path)
  const route = routes.find((e) => e.path === path)
  const namespace = namespaces.find((e) => e.path === path)

  if (endpoint != null) {
    return {
      title: endpoint.title,
      path: `${pathPrefix}${endpoint.path}.md`,
      nodes: [],
    }
  }

  if (route != null) {
    const routeMetadata = pathMetadata[route.path]
    if (routeMetadata == null) {
      throw new Error(`Route metadata for ${route.path} not found`)
    }

    const paths = getPaths(route.path, context)

    return {
      title: routeMetadata.title,
      path: `${pathPrefix}${route.path}/README.md`,
      nodes: getNodes(paths, context),
    }
  }

  if (namespace != null) {
    const namespaceMetadata = pathMetadata[namespace.path]
    if (namespaceMetadata == null) {
      throw new Error(`Namespace metadata for ${namespace.path} not found`)
    }

    const paths = getPaths(namespace.path, context)

    return {
      title: namespaceMetadata.title,
      path: `${pathPrefix}${namespace.path}/README.md`,
      nodes: getNodes(paths, context),
    }
  }

  throw new Error(`Could not construct node for ${path}`)
}

const getPaths = (parentPath: string | null, context: Context): string[] => {
  const routes = context.routes.filter((r) => r.parentPath === parentPath)

  const endpoints =
    parentPath === null
      ? []
      : context.endpoints.filter((e) => e.path.startsWith(parentPath))

  // TODO: Support namespaces with parentPath.
  const namespaces =
    parentPath === null
      ? context.namespaces.filter(({ path }) => path.split('/').length === 2)
      : []

  return [...endpoints, ...routes, ...namespaces].map(({ path }) => path).sort()
}
