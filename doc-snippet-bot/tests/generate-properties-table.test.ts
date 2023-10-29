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
  | code | type: string |
  | sync | type: boolean |
  | attempt_for_offline_device | type: boolean |
  | common_code_key | type: string
  | prefer_native_scheduling | type: boolean
  | use_backup_access_code_pool | type: boolean
  | allow_external_modification | type: boolean
  | is_external_modification_allowed | type: boolean
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});