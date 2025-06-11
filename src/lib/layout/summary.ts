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
  const nodes = paths.map((path) => getNode(path, context))
  return nodes.sort((n1, n2) => {
    const res = n1.title.localeCompare(n2.title)
    if (n1.nodes.length > 0 && n2.nodes.length === 0) return 1
    if (n1.nodes.length === 0 && n2.nodes.length > 0) return -1
    return res
  })
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

const getPaths = (path: string | null, context: Context): string[] => {
  const getSubpaths = (
    items: Array<{ path: string; parentPath: string | null }>,
  ): string[] => {
    return items
      .filter(({ parentPath }) => parentPath === path)
      .map(({ path }) => path)
  }

  const routes = getSubpaths(context.routes)
  const endpoints = getSubpaths(context.endpoints)
  const namespaces = getSubpaths(context.namespaces)

  return [...namespaces, ...endpoints, ...routes]
}
