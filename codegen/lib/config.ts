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
export const guidesRoot = siteSections[0]!.root
export const apiReferenceRoot = siteSections[1]!.root
export const apiReferenceUrlPrefix = siteSections[1]!.urlPrefix

// Derived paths
export const apiReferenceSummaryPath = join(apiReferenceRoot, 'SUMMARY.md')
