import test from "ava"
import extractEndpointPath from "../src/extract-endpoint-path"

test('extractEndpointPath should correctly extract the endpoint path', (t) => {
  const openapiSpec = '<!-- INJECT PROPERTIES /users --!>';
  const endpointPath = extractEndpointPath(openapiSpec);
  const expectedEndpointPath = '/users';
  t.is(endpointPath, expectedEndpointPath);
});

test('extractEndpointPath should correctly extract longer endpoint paths', (t) => {
  const openapiSpec = '<!-- INJECT PROPERTIES /access_codes/create --!>';
  const endpointPath = extractEndpointPath(openapiSpec);
  const expectedEndpointPath = '/access_codes/create';
  t.is(endpointPath, expectedEndpointPath);
});

