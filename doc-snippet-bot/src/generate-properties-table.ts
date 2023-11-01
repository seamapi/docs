import type { OpenApiProperties } from "./get-openapi-properties-for-endpoint"
export function generatePropertiesTable(
  extractedProperties: { [x: string]: OpenApiProperties },
  extractedEndpoint: string,
) {
  const markdownTable: Array<string | string[]> = []

  markdownTable.push(`<!-- INJECT PROPERTIES START ${extractedEndpoint} --!>`)

  for (const propertyName in extractedProperties) {
    const property = extractedProperties[propertyName]

    markdownTable.push([
      propertyName,
      `type: ${property.type}`,
      property.description ? `description: ${property.description}` : "",
    ])
  }

  markdownTable.push([`<!-- INJECT PROPERTIES END --!>`])

  const formattedMarkdown = markdownTable
    .map((row) => (typeof row === "string" ? row : row.join(" | ")))
    .join("\n")

  return formattedMarkdown
}
