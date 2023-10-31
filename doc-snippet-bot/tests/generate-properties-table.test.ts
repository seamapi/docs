import test from "ava"
import { generatePropertiesTable } from "../src/generate-properties-table";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

test('generatePropertiesTable generates expected table', async (t) => {
  const exampleEndpoint = "/access_codes/create"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START ${exampleEndpoint} --!>
device_id | type: string | 
name | type: string | 
starts_at | type: string | 
ends_at | type: string | 
code | type: string | 
sync | type: boolean | 
attempt_for_offline_device | type: boolean | 
common_code_key | type: string | 
prefer_native_scheduling | type: boolean | 
use_backup_access_code_pool | type: boolean | 
allow_external_modification | type: boolean | 
is_external_modification_allowed | type: boolean | 
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties, exampleEndpoint);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});

test('generatePropertiesTable generates expected table including zod descriptions', async (t) => {
  const exampleEndpoint = "/locks/list"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START ${exampleEndpoint} --!>
connected_account_id | type: string | description: List all devices owned by this connected account
connected_account_ids | type: array | 
connect_webview_id | type: string | 
device_type | type: undefined | 
device_types | type: array | 
manufacturer | type: string | 
device_ids | type: array | 
limit | type: number | 
created_before | type: string | 
user_identifier_key | type: string | 
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties, exampleEndpoint);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});