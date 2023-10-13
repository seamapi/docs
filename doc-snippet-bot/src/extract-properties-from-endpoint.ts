export default function extractPropertiesFromEndpoint(openapi: any, endpoint: string) {
  if (openapi.paths && openapi.paths[endpoint]) {
    const requestBody = openapi.paths[endpoint].post.requestBody;
    const content = requestBody.content["application/json"];
    const schema = content.schema;
    const properties = schema.properties;
    return properties;
  }
  return;
}