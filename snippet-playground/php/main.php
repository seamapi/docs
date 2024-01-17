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


$webviews = $seam->connect_webviews->list(
  custom_metadata_has: array('internal_account_id' => 'user-1')
);
echo json_encode($webviews);
