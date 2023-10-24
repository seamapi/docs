import test from "ava"
import { generatePropertiesTable } from "../src/generate-properties-table";
import extractPropertiesFromEndpoint from "../src/extract-properties-from-endpoint";

test('generatePropertiesTable generates expected table', async (t) => {
  const exampleEndpoint = "/access_codes/create"
  const extractedProperties = await extractPropertiesFromEndpoint(exampleEndpoint);

  const expectedMarkdown = `<!-- INJECT PROPERTIES START --!>
| allow_external_modification | boolean
| attempt_for_offline_device | boolean | Default: true
| behavior_when_code_cannot_be_shared | string | Enum: throw, create_random_code
| code | string | 8 to 4 characters | Matches pattern: ^\d+$
| device_ids | array | Array of string | Format: uuid
| ends_at | string
| is_external_modification_allowed | boolean
| name | string
| prefer_native_scheduling | boolean
| starts_at | string
| use_backup_access_code_pool | boolean
<!-- INJECT PROPERTIES END --!>`;

  const generatedMarkdown = generatePropertiesTable(extractedProperties);
  console.log(generatedMarkdown);

  t.deepEqual(generatedMarkdown, expectedMarkdown);
});