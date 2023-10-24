export function generatePropertiesTable(extractedProperties: { [x: string]: any; }) {
  const markdownParts = [];

  markdownParts.push(`<!-- INJECT PROPERTIES START --!>`);

  for (const propertyName in extractedProperties) {
    const property = extractedProperties[propertyName];
    let formattedProperty = `| \`${propertyName}\` | type: ${property.type}`;

    if (property.type === 'string' && property.maxLength && property.minLength) {
      formattedProperty += ` | ${property.maxLength} to ${property.minLength} characters`;
    }

    if (property.type === 'string' && property.pattern) {
      formattedProperty += ` | ${property.pattern}`;
    }

    if (property.type === 'boolean') {
      if (property.default !== undefined) {
        formattedProperty += ` | Default: \`${property.default}\``;
      }

      if (property.enum) {
        formattedProperty += ` | Enum: ${property.enum.join(', ')}`;
      }
    }

    if (property.type === 'array' && property.items) {
      formattedProperty += ` | Array of ${property.items.type}`;

      if (property.items.format) {
        formattedProperty += ` | Format: \`${property.items.format}\``;
      }
    }

    markdownParts.push(formattedProperty);
  }

  markdownParts.push(`<!-- INJECT PROPERTIES END --!>`);

  return markdownParts.join('\n');
}
