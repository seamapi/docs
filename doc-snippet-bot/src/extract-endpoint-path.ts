
export default function extractEndpointPath(openapiSpec: string) {
  const regex = /<!-- INJECT PROPERTIES (\/.+?) --!>/;
  const match = openapiSpec.match(regex);
  return match && match[1] ? match[1] : '';
}