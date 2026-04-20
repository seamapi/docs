import { join } from 'node:path'

// Site section roots (paths from repo root)
export const apiReferenceRoot = join('docs', 'api-reference')
export const guidesRoot = join('docs', 'guides')

// The published URL prefix for the API Reference site section on docs.seam.co.
export const apiReferenceUrlPrefix = '/api'

// The base URL for the published documentation site.
export const baseUrl = 'https://docs.seam.co/latest/'

// The URL prefix to strip when resolving absolute URLs to file paths.
export const siteUrlPrefix = '/latest'

// Derived paths
export const apiReferenceSummaryPath = join(apiReferenceRoot, 'SUMMARY.md')
