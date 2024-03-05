<?php
require __DIR__ . '/vendor/autoload.php';

// $seam = new Seam\SeamClient(
//   "seam_apikey1_token",
//   "https://r" . md5(random_bytes(8)) . ".fakeseamconnect.seam.vc"
// );

$seam = new Seam\SeamClient(
  "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy",
  "https://connect.getseam.com"
);
// $seam = new Seam\SeamClient(
//   "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq",
//   // "https://connect.getseam.com"
// );
// $seam = new Seam\SeamClient(
//   // Specify PAT.
//   "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
//   // Specify workspace ID.
//   "98feb997-ff3c-4320-a907-1585108b1c08",
//   "https://connect.getseam.com"
// );


// print_r($seam->devices->list());
// $devices = $seam->devices->list();

// print_r($devices);
// print_r($devices[0]);

// echo $seam->connected_accounts->delete("25aa45e4-ee1d-44a6-91a0-b53e8c06a6d5");

// $connect_webview = $seam->connect_webviews->create(
//   provider_category: "stable"
// );
// $connect_webview_id = $connect_webview->connect_webview_id;
// // $client_session = $seam->client_sessions->create();
// $seam->client_sessions->create();
// // echo $client_session;
// $webview = $seam->connect_webviews->create(
//   custom_metadata: array('internal_account_id' => 'user-1')
// );
// echo json_encode($webview);

// $connect_webview = $seam->connect_webviews->create(
//   accepted_providers: ["google_nest"]
// );
// echo json_encode($connect_webview);


// $webviews = $seam->connect_webviews->list(
//   custom_metadata_has: array('internal_account_id' => 'user-1')
// );
// echo json_encode($webviews);

// echo json_encode($seam->connected_accounts->list());

// $devices = $seam->devices->list(
//   // custom_metadata_has: array('internal_account_id' => 'user-1')
// );

// echo json_encode($devices);

// $device = $seam->devices->get("36cf1a96-196d-41b0-9804-88154387f1f9");
// if ($device->properties->online === true) {
//   echo "Online: true\n";
// } else {
//   echo "Online: false\n";
// }

// $device_connected_events = $seam->events->list(
//   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
//   event_type: "device.connected",
//   since: "2024-01-01T00:00:00Z"
// );
// echo json_encode($device_connected_events), "\n";

// $device = $seam->devices->get("c2cc3831-f347-444e-b83b-d1f14dbb5893");
// $device = $seam->devices->get("36cf1a96-196d-41b0-9804-88154387f1f9");
// if ($device->properties->has_direct_power === true) {
//   echo "Power Source: Wired\n";
// } else {
//   echo "Power Source: Battery-powered\n";
//   // echo "Battery Level: " + $device->properties->battery->level + "\n";
//   echo "Battery Level: {$device->properties->battery->level}\n";
//   echo "Battery Status: {$device->properties->battery->status}\n";
// }

// echo json_encode($seam->devices->get("ffc4d67f-e3a6-4ef8-ac84-f3770750422a"));

// $devices = $seam->devices->list(
//   device_type: "honeywell_thermostat"
// );
// echo json_encode($devices[5]), "\n";

// $devices = $seam->devices->list(
//   device_type: "ecobee_thermostat"
// );
// echo json_encode($devices[0]), "\n";

// $devices = $seam->devices->list(
//   device_type: "nest_thermostat"
// );
// echo json_encode($devices[0]), "\n";

// $thermostats = $seam->thermostats->list();
// echo json_encode($thermostats, JSON_PRETTY_PRINT);

// $thermostat = $seam->thermostats->get(
//   device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
// );
// echo json_encode($thermostat, JSON_PRETTY_PRINT);

// $action_attempt = $seam->action_attempts->get(
//   action_attempt_id: "241e79cd-4bda-499f-8e2e-d7ae01d273cf"
// );
// echo json_encode($action_attempt, JSON_PRETTY_PRINT);


// $heat_request = $seam->thermostats->heat(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e",
//   heating_set_point_celsius: 20
// );

// echo json_encode($heat_request), "\n";

// $off_request = $seam->thermostats->off(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e"
// );

// $fan_on_request = $seam->thermostats->set_fan_mode(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e",
//   fan_mode_setting: "on"
// );

// echo json_encode($fan_on_request), "\n";

$webview = $seam->connect_webviews->create(
  accepted_providers: ["ecobee"]
);

echo json_encode($webview->login_successful), "\n"; # false

# Send the Connect Webview URL to your user.
echo json_encode($webview->url), "\n";
