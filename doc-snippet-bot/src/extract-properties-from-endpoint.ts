import fetchSeamConnectOpenApiSpec from "./fetch-properties-from-openapispec"

export async function extractPropertiesFromEndpoint(endpoint: string) {
  try {
    const openAPIData = await fetchSeamConnectOpenApiSpec()
    const openAPIObject = JSON.parse(openAPIData)

    if (openAPIObject.paths && openAPIObject.paths[endpoint]) {
      const requestBody = openAPIObject.paths[endpoint].post.requestBody
      const content = requestBody.content["application/json"]
      const schema = content.schema
      const properties = schema.properties
      return properties
    }
  } catch (error) {
    console.error("Error fetching openAPI data", error)
  }
  return
}

export default extractPropertiesFromEndpoint
