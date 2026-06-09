/**
 * Filter `mintlify validate` output:
 * - Strip ANSI escape sequences for clean CI logs
 * - Ignore the known false positive about OpenAPI schema version in docs.json
 * - Exit 0 if no real warnings/errors remain, exit 1 otherwise
 */
const chunks: Buffer[] = []

process.stdin.on('data', (chunk: Buffer) => chunks.push(chunk))

process.stdin.on('end', () => {
  const raw = Buffer.concat(chunks).toString('utf-8')

  // Strip ANSI escape sequences
  const stripped = raw.replace(
    // eslint-disable-next-line no-control-regex
    /\x1b\[[0-9;]*[A-Za-z]|\x1b\[2K/g,
    '',
  )

  const lines = stripped.split('\n').filter((line) => line.trim().length > 0)

  // Known false positive: Mintlify CLI tries to validate docs.json as an
  // OpenAPI spec because it has a top-level "openapi" key (which is actually
  // the Mintlify config telling it which spec file to use).
  const knownFalsePositive =
    'Error validating OpenAPI file /docs.json: Error: Failed to validate OpenAPI schema'

  const realIssues = lines.filter((line) => {
    // Keep only warning/error/parsing lines
    if (
      !line.includes('warning') &&
      !line.includes('error') &&
      !line.includes('parsing error')
    ) {
      return false
    }
    // Filter out known false positive
    if (line.includes(knownFalsePositive)) return false
    // Filter out the summary line that just counts warnings
    if (line.match(/^error Build validation failed with \d+ warning/))
      return false
    return true
  })

  // Print meaningful output only (skip spinner lines)
  for (const line of lines) {
    if (line.match(/^[⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏]/) || line.trim() === '') continue
    if (line.includes(knownFalsePositive)) {
      console.log(`[ignored] ${line}`)
    } else {
      console.log(line)
    }
  }

  if (realIssues.length > 0) {
    console.error(
      `\n✗ Mintlify validation failed with ${realIssues.length} issue(s)`,
    )
    process.exit(1)
  } else {
    console.log('\n✓ Mintlify validation passed')
    process.exit(0)
  }
})
