import test from "ava";

import fetchPropertiesFromOpenapispec from "../src/fetch-properties-from-openapispec";
import nock from 'nock';

test('fetchPropertiesFromOpenapispec should return the expected data', async (t) => {
  const expectedData = { property1: 'value1', property2: 'value2' };

  nock('https://connect.getseam.com')
    .get('/openapi.json')
    .reply(200, expectedData);

  const result = await fetchPropertiesFromOpenapispec();

  t.deepEqual(result, JSON.stringify(expectedData));
});