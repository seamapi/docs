<?php
require __DIR__ . '/vendor/autoload.php';

$seam = new Seam\SeamClient(
  "seam_apikey1_token",
  "https://r" . md5(random_bytes(8)) . ".fakeseamconnect.seam.vc"
);

$devices = $seam->devices->list();

print_r($devices);
