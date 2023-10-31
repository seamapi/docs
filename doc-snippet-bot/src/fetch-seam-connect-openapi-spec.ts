import axios from "axios"

export async function fetchSeamConnectOpenApiSpec() {
  const openapiUrl = "https://connect.getseam.com/openapi.json"
  const response = await axios.get(openapiUrl)
  const spec = response.data
  const stringifiedSpec = JSON.stringify(spec)

  return stringifiedSpec
}

export default fetchSeamConnectOpenApiSpec
