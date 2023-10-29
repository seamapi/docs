export function generatePropertiesTable(extractedProperties: { [x: string]: any; }) {
  const markdownParts: Array<Array<string>> = [];
  markdownParts.push([`<!-- INJECT PROPERTIES START --!>`]);

  for (const propertyName in extractedProperties) {
    const property = extractedProperties[propertyName];
    let formattedProperty = [`  | ${propertyName} | type: ${property.type}`];
    markdownParts.push(formattedProperty);
  }

  markdownParts.push([`<!-- INJECT PROPERTIES END --!>`]);

  return markdownParts.map(row => row.join("|")).join('\n');
}
