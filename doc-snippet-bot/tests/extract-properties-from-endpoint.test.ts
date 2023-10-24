import test from "ava";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

test("extractPropertiesFromEndpoint from /accces_codes/create should return expected properties", async (t) => {
  const expectedProperties = {
    device_id: {
      "type": "string",
      "format": "uuid"
    },
    name: {
      "type": "string"
    },
    starts_at: {
      "type": "string"
    },
    ends_at: {
      "type": "string"
    },
    code: {
      "type": "string",
      "minLength": 4,
      "maxLength": 8,
      "pattern": "^\\d+$"
    },
    sync: {
      "default": false,
      "type": "boolean"
    },
    attempt_for_offline_device: {
      "default": true,
      "type": "boolean"
    },
    common_code_key: {
      "type": "string"
    },
    prefer_native_scheduling: {
      "type": "boolean"
    },
    use_backup_access_code_pool: {
      "type": "boolean"
    },
    allow_external_modification: {
      "type": "boolean"
    },
    is_external_modification_allowed: {
      "type": "boolean"
    }
  };

  const endpoint = '/access_codes/create';

  const fetchedProperties = await extractPropertiesFromEndpoint(endpoint);

  t.deepEqual(fetchedProperties, expectedProperties);
})

//* return only POST method properties

test("extractPropertiesFromEndpoint from /accces_codes/create_multiple should return expected properties from the POST method", async (t) => {
  const expectedProperties = {
    device_ids: { type: 'array', items: { type: 'string', format: 'uuid' } },
    behavior_when_code_cannot_be_shared: {
      default: 'throw',
      type: 'string',
      enum: ['throw', 'create_random_code']
    },
    name: { type: 'string' },
    starts_at: { type: 'string' },
    ends_at: { type: 'string' },
    code: { type: 'string', minLength: 4, maxLength: 8, pattern: '^\\d+$' },
    attempt_for_offline_device: { default: true, type: 'boolean' },
    prefer_native_scheduling: { type: 'boolean' },
    use_backup_access_code_pool: { type: 'boolean' },
    allow_external_modification: { type: 'boolean' },
    is_external_modification_allowed: { type: 'boolean' }
  }

  const endpoint = '/access_codes/create_multiple';

  const fetchedProperties = await extractPropertiesFromEndpoint(endpoint);

  t.deepEqual(fetchedProperties, expectedProperties);
})
