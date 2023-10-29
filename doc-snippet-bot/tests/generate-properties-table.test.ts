import test from "ava"
import { generatePropertiesTable } from "../src/generate-properties-table";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

test('generatePropertiesTable generates expected table', async (t) => {
  const exampleEndpoint = "/access_codes/create"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START --!>
  | device_id | type: string
  | name | type: string
  | starts_at | type: string
  | ends_at | type: string
  | code | type: string
  | sync | type: boolean
  | attempt_for_offline_device | type: boolean
  | common_code_key | type: string
  | prefer_native_scheduling | type: boolean
  | use_backup_access_code_pool | type: boolean
  | allow_external_modification | type: boolean
  | is_external_modification_allowed | type: boolean
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});

test('generatePropertiesTable generates expected table including zod descriptions', async (t) => {
  const exampleEndpoint = "/locks/list"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START --!>
    connected_account_id: |
      type: 'string',
      format: 'uuid',
      description: 'List all devices owned by this connected account'
    |,
    connected_account_ids: |
      type: 'array',
      items: | type: 'string', format: 'uuid' |,
      minItems: 1
    |,
    connect_webview_id: | type: 'string', format: 'uuid' |,
    device_type: | oneOf: [ [Object], [Object], [Object] ] |,
    device_types: | type: 'array', items: | oneOf: [Array] | |,
    manufacturer: |
      type: 'string',
      enum: [
        'akuvox',        'august',
        'avigilon_alta', 'brivo',
        'butterflymx',   'doorking',
        'four_suites',   'genie',
        'igloo',         'keywe',
        'kwikset',       'linear',
        'lockly',        'nuki',
        'philia',        'salto',
        'samsung',       'schlage',
        'seam',          'unknown',
        'wyze',          'yale',
        'minut',         'two_n',
        'ttlock',        'nest',
        'igloohome',     'ecobee',
        'hubitat',       'controlbyweb',
        'smartthings',   'dormakaba_oracode'
      ]
    |,
    device_ids: | type: 'array', items: | type: 'string', format: 'uuid' | |,
    limit: | default: 500, type: 'number', nullable: true |,
    created_before: | type: 'string', format: 'date-time' |,
    user_identifier_key: | type: 'string' |
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});