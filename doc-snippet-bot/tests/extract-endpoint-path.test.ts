import test from "ava"
import extractEndpointPath from "../src/extract-endpoint-path"

test('extractEndpointPath should correctly extract short endpoint path', (t) => {
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

test('extractEndpointPath should return an error message when the endpoint doesn\'t begin with /', (t) => {
  const validateEndpoint = (endpoint: string) => {
    if (!endpoint.startsWith("/")) {
      throw new Error("Endpoint must start with a / character.");
    }
  }
  const error = t.throws(() => validateEndpoint("acces_code/create"));
  t.is(error?.message, 'Endpoint must start with a / character.')
});

