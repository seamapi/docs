export const phpTaskGuidelines = `

- NEVER comment about assuming the SDK is initialized
- NEVER initialize the seam client
- ALWAYS assume the seam client is already initialized
- Always use snake_case for variable names and function names
- NEVER assign a hard-coded-id to a variable, always keep the hard-coded-id inline


\`\`\`php
# GOOD
$webview = $seam->connect_webviews->create(
  provider_category: "stable"
);

echo json_encode($webview)
\`\`\`


# GOOD
$locks = $seam->locks->list();

echo json_encode($locks);


# GOOD
$seam->access_codes->create(
  device_id: $some_lock->device_id,
  code: '123456',
  name: 'My Access Code'
);

# GOOD
$webview = $seam->connect_webviews->create(
  provider_category: "stable"
);

# Here are PHP examples from the README
$seam = new Seam\SeamClient("YOUR_API_KEY");

# Create a Connect Webview to login to a provider
$connect_webview = $seam->connect_webviews->create(
  accepted_providers: ["august"]
);

print "Please Login at this url: " . $connect_webview->url;

# Poll until connect webview is completed
while (true) {
  $connect_webview = $seam->connect_webviews->get(
    $connect_webview->connect_webview_id
  );
  if ($connect_webview->status == "authorized") {
    break;
  } else {
    sleep(1);
  }
}

$connected_account = $seam->connected_accounts->get(
  $connect_webview->connected_account_id
);

print "Looks like you connected with " .
  json_encode($connected_account->user_identifier);

$devices = $seam->devices->list(
  connected_account_id: $connected_account->connected_account_id
);

print "You have " . count($devices) . " devices";

$device_id = $devices[0]->device_id;

# Lock a Door
$seam->locks->lock_door($device_id);

$updated_device = $seam->devices->get($device_id);
$updated_device->properties->locked; // true

# Unlock a Door
$seam->locks->unlock_door($device_id);
$updated_device->properties->locked; // false

# Create an access code on a device
$access_code = $seam->access_codes->create(
  device_id: $device_id,
  code: "1234",
  name: "Test Code"
);

# Check the status of an access code
$access_code->status; // 'setting' (it will go to 'set' when active on the device)

$seam->access_codes->delete($access_code->access_code_id);

\`\`\`

\`\`\`php
# BAD - NEVER EVER EVER use associative arrays as parameters to the SDK
$action_attempt = $seam->access_codes->delete([
  "access_code_id" => $access_code_id
]);

$action_attempt = $seam->access_codes->delete(
  # VERY BAD OH GOD NO - PLEASE DON'T USE THE => JUST USE A COLON PLEASE
  "access_code_id" => $access_code_id
);

# BAD BAD BAD - TOO VERBOSE - NEVER DO THIS
# Use the connected_account_id "123e4567-e89b-12d3-a456-426614174000"
# BAD BAD
$connected_account_id = "123e4567-e89b-12d3-a456-426614174000";

# GOOD - DO THIS INSTEAD
$connected_account = $seam->connected_accounts->get(
  "123e4567-e89b-12d3-a456-426614174000"
);
\`\`\`

`
