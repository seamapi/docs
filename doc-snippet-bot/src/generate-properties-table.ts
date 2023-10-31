export function generatePropertiesTable(extractedProperties: { [x: string]: any; }, extractedEndpoint: string) {
  const markdownTable: Array<Array<string | string[]>> = [];

  markdownTable.push([`<!-- INJECT PROPERTIES START ${extractedEndpoint} --!>`]);

  for (const propertyName in extractedProperties) {
    const property = extractedProperties[propertyName];
    const formattedPropertyName = [propertyName];
    const formattedPropertyType = [`type: ${property.type}`];
    const formattedPropertyDescription = property.description ? [`description: ${property.description}`] : [];

    markdownTable.push([formattedPropertyName, formattedPropertyType,  formattedPropertyDescription]);
  }

  markdownTable.push([`<!-- INJECT PROPERTIES END --!>`]);

  const formattedMarkdown = markdownTable
    .map(row => row.join(' | '))
    .join('\n');

  return formattedMarkdown;
}
