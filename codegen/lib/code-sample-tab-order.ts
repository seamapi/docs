import type { SdkName } from '@seamapi/blueprint'

/**
 * Canonical tab order for code samples across all documentation.
 * Used by the API reference codegen (api-endpoint.ts) and the
 * format-code-sample-tabs script to keep guide tabs in sync.
 */
export const supportedSdkOrder: SdkName[] = [
  'javascript',
  'curl',
  'python',
  'ruby',
  'php',
  'csharp',
  'java',
  'go',
  'seam_cli',
]

/**
 * Maps SdkName values to their canonical display titles as used in
 * GitBook tab headers. Sourced from @seamapi/blueprint CodeSample titles.
 */
export const sdkDisplayTitle: Record<SdkName, string> = {
  javascript: 'JavaScript',
  curl: 'cURL',
  python: 'Python',
  ruby: 'Ruby',
  php: 'PHP',
  csharp: 'C#',
  java: 'Java',
  go: 'Go',
  seam_cli: 'Seam CLI',
}

/** Reverse lookup: display title → canonical index. */
export const tabTitleOrder: Map<string, number> = new Map(
  supportedSdkOrder.map((sdk, i) => [sdkDisplayTitle[sdk], i]),
)

/** Known non-canonical title variants that should be normalized. */
export const tabTitleFixes: Record<string, string> = {
  'cURL (bash)': 'cURL',
  Bash: 'cURL',
  Javascript: 'JavaScript',
  javascript: 'JavaScript',
}
