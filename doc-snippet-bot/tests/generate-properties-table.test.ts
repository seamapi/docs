import test from "ava"
import { generatePropertiesTable } from "../src/generate-properties-table";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

//! question: how to access zod descriptions - are they inside seam connect?

test('generatePropertiesTable generates expected table', async (t) => {
  const exampleEndpoint = "/access_codes/create"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START --!>
  | device_id | type: string
  | name | type: string
  | starts_at | type: string
  | ends_at | type: string
  | code | type: string | 8 to 4 characters | ^\\d+$
  | sync | type: boolean | Default: false
  | attempt_for_offline_device | type: boolean | Default: true
  | common_code_key | type: string
  | prefer_native_scheduling | type: boolean
  | use_backup_access_code_pool | type: boolean
  | allow_external_modification | type: boolean
  | is_external_modification_allowed | type: boolean
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});