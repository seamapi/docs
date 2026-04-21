import { join } from 'node:path'

// The base URL for the published documentation site.
export const baseUrl = 'https://docs.seam.co/latest/'

// The URL prefix to strip when resolving absolute URLs to file paths.
export const siteUrlPrefix = '/latest'

// Each site section is a GitBook site section with its own SUMMARY.md.
export interface SiteSection {
  // Display name for logging/errors.
  name: string
  // Path from repo root to the section's content directory.
  root: string
  // Published URL prefix (e.g., '/api'). Empty string for the default section.
  urlPrefix: string
}

export const siteSections: SiteSection[] = [
  { name: 'Guides', root: join('docs', 'guides'), urlPrefix: '' },
  {
    name: 'API Reference',
    root: join('docs', 'api-reference'),
    urlPrefix: '/api',
  },
]

// Convenience accessors (used by codegen)
const guides = siteSections.find((s) => s.name === 'Guides')
const apiReference = siteSections.find((s) => s.name === 'API Reference')

if (guides == null || apiReference == null) {
  throw new Error('Missing required site section in config')
}

export const guidesRoot = guides.root
export const apiReferenceRoot = apiReference.root
export const apiReferenceUrlPrefix = apiReference.urlPrefix

// Derived paths
export const apiReferenceSummaryPath = join(apiReferenceRoot, 'SUMMARY.md')
