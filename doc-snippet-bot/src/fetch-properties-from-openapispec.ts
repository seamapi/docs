import axios from "axios";


// TODO: create OpenAPI type
export type OpenAPI = {

}

export default async function fetchPropertiesFromOpenapispec() {
  const openapiUrl = 'https://connect.getseam.com/openapi.json';
  const response = await axios.get(openapiUrl);
  const injectedProperties = response.data;
  const stringifiedProperties = JSON.stringify(injectedProperties);
  
  return stringifiedProperties;
}