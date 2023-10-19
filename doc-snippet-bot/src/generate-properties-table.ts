interface Property {
  type: string;
  default?: any;
  enum?: string[];
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  items?: {
    format: string;
    type: string;
  };
}

interface PropertiesObject {
  [key: string]: Property;
}

export function generatePropertiesTable(object: PropertiesObject, endpoint: string): string {
  const markdownParts: string[] = [];
  markdownParts.push(`<!-- INJECT PROPERTIES START ${endpoint} --!>`);
  for (const propertyName in object) {
    const property = object[propertyName];
    let formattedProperty = `| \`${propertyName}\` | ${property.type}`;
    if (property.type === 'string' && property.maxLength && property.minLength) {
      formattedProperty += ` | ${property.maxLength} to ${property.minLength} characters`;
    }
    if (property.type === 'string' && property.pattern) {
      formattedProperty += ` | Matches pattern: \`${property.pattern}\``;
    }
    if (property.type === 'boolean' && property.default !== undefined) {
      formattedProperty += ` | Default: \`${property.default}\``;
    }
    if (property.type === 'boolean' && property.enum) {
      formattedProperty += ` | Enum: ${property.enum.join(', ')}`;
    }
    if (property.type === 'array' && property.items) {
      formattedProperty += ` | Array of ${property.items.type}`;
      if (property.items.format) {
        formattedProperty += ` | Format: \`${property.items.format}\``;
      }
    }
    if (property.type === 'string' && property.enum) {
      formattedProperty += ` | Enum: ${property.enum.join(', ')}`;
    }
    markdownParts.push(formattedProperty);
  }
  markdownParts.push(`<!-- INJECT PROPERTIES END --!>`);

  return markdownParts.join('\n');
}

