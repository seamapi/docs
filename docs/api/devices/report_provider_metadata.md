# Report Provider Metadata

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates provider-specific metadata for devices.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`devices`** *Array* *of Objects* (Required)

Array of devices with provider metadata to update

<details>

<summary><b><code>device_id</code></b> <i>UUID</i></summary>

ID of the device to update

</details>

---



<details>

<summary><b><code>ultraloq_metadata</code></b> <i>Object</i></summary>

Ultraloq-specific metadata to update

</details>

---



<details>

<summary><b><code>ultraloq_metadata.time_zone</code></b> <i>Enum</i></summary>

IANA timezone for the Ultraloq device

Enum values:

- <code>Africa/Abidjan</code>
- <code>Africa/Accra</code>
- <code>Africa/Addis_Ababa</code>
- <code>Africa/Algiers</code>
- <code>Africa/Asmera</code>
- <code>Africa/Bamako</code>
- <code>Africa/Bangui</code>
- <code>Africa/Banjul</code>
- <code>Africa/Bissau</code>
- <code>Africa/Blantyre</code>
- <code>Africa/Brazzaville</code>
- <code>Africa/Bujumbura</code>
- <code>Africa/Cairo</code>
- <code>Africa/Casablanca</code>
- <code>Africa/Ceuta</code>
- <code>Africa/Conakry</code>
- <code>Africa/Dakar</code>
- <code>Africa/Dar_es_Salaam</code>
- <code>Africa/Djibouti</code>
- <code>Africa/Douala</code>
- <code>Africa/El_Aaiun</code>
- <code>Africa/Freetown</code>
- <code>Africa/Gaborone</code>
- <code>Africa/Harare</code>
- <code>Africa/Johannesburg</code>
- <code>Africa/Juba</code>
- <code>Africa/Kampala</code>
- <code>Africa/Khartoum</code>
- <code>Africa/Kigali</code>
- <code>Africa/Kinshasa</code>
- <code>Africa/Lagos</code>
- <code>Africa/Libreville</code>
- <code>Africa/Lome</code>
- <code>Africa/Luanda</code>
- <code>Africa/Lubumbashi</code>
- <code>Africa/Lusaka</code>
- <code>Africa/Malabo</code>
- <code>Africa/Maputo</code>
- <code>Africa/Maseru</code>
- <code>Africa/Mbabane</code>
- <code>Africa/Mogadishu</code>
- <code>Africa/Monrovia</code>
- <code>Africa/Nairobi</code>
- <code>Africa/Ndjamena</code>
- <code>Africa/Niamey</code>
- <code>Africa/Nouakchott</code>
- <code>Africa/Ouagadougou</code>
- <code>Africa/Porto-Novo</code>
- <code>Africa/Sao_Tome</code>
- <code>Africa/Tripoli</code>
- <code>Africa/Tunis</code>
- <code>Africa/Windhoek</code>
- <code>America/Adak</code>
- <code>America/Anchorage</code>
- <code>America/Anguilla</code>
- <code>America/Antigua</code>
- <code>America/Araguaina</code>
- <code>America/Argentina/La_Rioja</code>
- <code>America/Argentina/Rio_Gallegos</code>
- <code>America/Argentina/Salta</code>
- <code>America/Argentina/San_Juan</code>
- <code>America/Argentina/San_Luis</code>
- <code>America/Argentina/Tucuman</code>
- <code>America/Argentina/Ushuaia</code>
- <code>America/Aruba</code>
- <code>America/Asuncion</code>
- <code>America/Bahia</code>
- <code>America/Bahia_Banderas</code>
- <code>America/Barbados</code>
- <code>America/Belem</code>
- <code>America/Belize</code>
- <code>America/Blanc-Sablon</code>
- <code>America/Boa_Vista</code>
- <code>America/Bogota</code>
- <code>America/Boise</code>
- <code>America/Buenos_Aires</code>
- <code>America/Cambridge_Bay</code>
- <code>America/Campo_Grande</code>
- <code>America/Cancun</code>
- <code>America/Caracas</code>
- <code>America/Catamarca</code>
- <code>America/Cayenne</code>
- <code>America/Cayman</code>
- <code>America/Chicago</code>
- <code>America/Chihuahua</code>
- <code>America/Ciudad_Juarez</code>
- <code>America/Coral_Harbour</code>
- <code>America/Cordoba</code>
- <code>America/Costa_Rica</code>
- <code>America/Creston</code>
- <code>America/Cuiaba</code>
- <code>America/Curacao</code>
- <code>America/Danmarkshavn</code>
- <code>America/Dawson</code>
- <code>America/Dawson_Creek</code>
- <code>America/Denver</code>
- <code>America/Detroit</code>
- <code>America/Dominica</code>
- <code>America/Edmonton</code>
- <code>America/Eirunepe</code>
- <code>America/El_Salvador</code>
- <code>America/Fort_Nelson</code>
- <code>America/Fortaleza</code>
- <code>America/Glace_Bay</code>
- <code>America/Godthab</code>
- <code>America/Goose_Bay</code>
- <code>America/Grand_Turk</code>
- <code>America/Grenada</code>
- <code>America/Guadeloupe</code>
- <code>America/Guatemala</code>
- <code>America/Guayaquil</code>
- <code>America/Guyana</code>
- <code>America/Halifax</code>
- <code>America/Havana</code>
- <code>America/Hermosillo</code>
- <code>America/Indiana/Knox</code>
- <code>America/Indiana/Marengo</code>
- <code>America/Indiana/Petersburg</code>
- <code>America/Indiana/Tell_City</code>
- <code>America/Indiana/Vevay</code>
- <code>America/Indiana/Vincennes</code>
- <code>America/Indiana/Winamac</code>
- <code>America/Indianapolis</code>
- <code>America/Inuvik</code>
- <code>America/Iqaluit</code>
- <code>America/Jamaica</code>
- <code>America/Jujuy</code>
- <code>America/Juneau</code>
- <code>America/Kentucky/Monticello</code>
- <code>America/Kralendijk</code>
- <code>America/La_Paz</code>
- <code>America/Lima</code>
- <code>America/Los_Angeles</code>
- <code>America/Louisville</code>
- <code>America/Lower_Princes</code>
- <code>America/Maceio</code>
- <code>America/Managua</code>
- <code>America/Manaus</code>
- <code>America/Marigot</code>
- <code>America/Martinique</code>
- <code>America/Matamoros</code>
- <code>America/Mazatlan</code>
- <code>America/Mendoza</code>
- <code>America/Menominee</code>
- <code>America/Merida</code>
- <code>America/Metlakatla</code>
- <code>America/Mexico_City</code>
- <code>America/Miquelon</code>
- <code>America/Moncton</code>
- <code>America/Monterrey</code>
- <code>America/Montevideo</code>
- <code>America/Montreal</code>
- <code>America/Montserrat</code>
- <code>America/Nassau</code>
- <code>America/New_York</code>
- <code>America/Nipigon</code>
- <code>America/Nome</code>
- <code>America/Noronha</code>
- <code>America/North_Dakota/Beulah</code>
- <code>America/North_Dakota/Center</code>
- <code>America/North_Dakota/New_Salem</code>
- <code>America/Ojinaga</code>
- <code>America/Panama</code>
- <code>America/Pangnirtung</code>
- <code>America/Paramaribo</code>
- <code>America/Phoenix</code>
- <code>America/Port-au-Prince</code>
- <code>America/Port_of_Spain</code>
- <code>America/Porto_Velho</code>
- <code>America/Puerto_Rico</code>
- <code>America/Punta_Arenas</code>
- <code>America/Rainy_River</code>
- <code>America/Rankin_Inlet</code>
- <code>America/Recife</code>
- <code>America/Regina</code>
- <code>America/Resolute</code>
- <code>America/Rio_Branco</code>
- <code>America/Santa_Isabel</code>
- <code>America/Santarem</code>
- <code>America/Santiago</code>
- <code>America/Santo_Domingo</code>
- <code>America/Sao_Paulo</code>
- <code>America/Scoresbysund</code>
- <code>America/Sitka</code>
- <code>America/St_Barthelemy</code>
- <code>America/St_Johns</code>
- <code>America/St_Kitts</code>
- <code>America/St_Lucia</code>
- <code>America/St_Thomas</code>
- <code>America/St_Vincent</code>
- <code>America/Swift_Current</code>
- <code>America/Tegucigalpa</code>
- <code>America/Thule</code>
- <code>America/Thunder_Bay</code>
- <code>America/Tijuana</code>
- <code>America/Toronto</code>
- <code>America/Tortola</code>
- <code>America/Vancouver</code>
- <code>America/Whitehorse</code>
- <code>America/Winnipeg</code>
- <code>America/Yakutat</code>
- <code>America/Yellowknife</code>
- <code>Antarctica/Casey</code>
- <code>Antarctica/Davis</code>
- <code>Antarctica/DumontDUrville</code>
- <code>Antarctica/Macquarie</code>
- <code>Antarctica/Mawson</code>
- <code>Antarctica/McMurdo</code>
- <code>Antarctica/Palmer</code>
- <code>Antarctica/Rothera</code>
- <code>Antarctica/Syowa</code>
- <code>Antarctica/Troll</code>
- <code>Antarctica/Vostok</code>
- <code>Arctic/Longyearbyen</code>
- <code>Asia/Aden</code>
- <code>Asia/Almaty</code>
- <code>Asia/Amman</code>
- <code>Asia/Anadyr</code>
- <code>Asia/Aqtau</code>
- <code>Asia/Aqtobe</code>
- <code>Asia/Ashgabat</code>
- <code>Asia/Atyrau</code>
- <code>Asia/Baghdad</code>
- <code>Asia/Bahrain</code>
- <code>Asia/Baku</code>
- <code>Asia/Bangkok</code>
- <code>Asia/Barnaul</code>
- <code>Asia/Beirut</code>
- <code>Asia/Bishkek</code>
- <code>Asia/Brunei</code>
- <code>Asia/Calcutta</code>
- <code>Asia/Chita</code>
- <code>Asia/Choibalsan</code>
- <code>Asia/Colombo</code>
- <code>Asia/Damascus</code>
- <code>Asia/Dhaka</code>
- <code>Asia/Dili</code>
- <code>Asia/Dubai</code>
- <code>Asia/Dushanbe</code>
- <code>Asia/Famagusta</code>
- <code>Asia/Gaza</code>
- <code>Asia/Hebron</code>
- <code>Asia/Hong_Kong</code>
- <code>Asia/Hovd</code>
- <code>Asia/Irkutsk</code>
- <code>Asia/Jakarta</code>
- <code>Asia/Jayapura</code>
- <code>Asia/Jerusalem</code>
- <code>Asia/Kabul</code>
- <code>Asia/Kamchatka</code>
- <code>Asia/Karachi</code>
- <code>Asia/Katmandu</code>
- <code>Asia/Khandyga</code>
- <code>Asia/Krasnoyarsk</code>
- <code>Asia/Kuala_Lumpur</code>
- <code>Asia/Kuching</code>
- <code>Asia/Kuwait</code>
- <code>Asia/Macau</code>
- <code>Asia/Magadan</code>
- <code>Asia/Makassar</code>
- <code>Asia/Manila</code>
- <code>Asia/Muscat</code>
- <code>Asia/Nicosia</code>
- <code>Asia/Novokuznetsk</code>
- <code>Asia/Novosibirsk</code>
- <code>Asia/Omsk</code>
- <code>Asia/Oral</code>
- <code>Asia/Phnom_Penh</code>
- <code>Asia/Pontianak</code>
- <code>Asia/Pyongyang</code>
- <code>Asia/Qatar</code>
- <code>Asia/Qostanay</code>
- <code>Asia/Qyzylorda</code>
- <code>Asia/Rangoon</code>
- <code>Asia/Riyadh</code>
- <code>Asia/Saigon</code>
- <code>Asia/Sakhalin</code>
- <code>Asia/Samarkand</code>
- <code>Asia/Seoul</code>
- <code>Asia/Shanghai</code>
- <code>Asia/Singapore</code>
- <code>Asia/Srednekolymsk</code>
- <code>Asia/Taipei</code>
- <code>Asia/Tashkent</code>
- <code>Asia/Tbilisi</code>
- <code>Asia/Tehran</code>
- <code>Asia/Thimphu</code>
- <code>Asia/Tokyo</code>
- <code>Asia/Tomsk</code>
- <code>Asia/Ulaanbaatar</code>
- <code>Asia/Urumqi</code>
- <code>Asia/Ust-Nera</code>
- <code>Asia/Vientiane</code>
- <code>Asia/Vladivostok</code>
- <code>Asia/Yakutsk</code>
- <code>Asia/Yekaterinburg</code>
- <code>Asia/Yerevan</code>
- <code>Atlantic/Azores</code>
- <code>Atlantic/Bermuda</code>
- <code>Atlantic/Canary</code>
- <code>Atlantic/Cape_Verde</code>
- <code>Atlantic/Faeroe</code>
- <code>Atlantic/Madeira</code>
- <code>Atlantic/Reykjavik</code>
- <code>Atlantic/South_Georgia</code>
- <code>Atlantic/St_Helena</code>
- <code>Atlantic/Stanley</code>
- <code>Australia/Adelaide</code>
- <code>Australia/Brisbane</code>
- <code>Australia/Broken_Hill</code>
- <code>Australia/Currie</code>
- <code>Australia/Darwin</code>
- <code>Australia/Eucla</code>
- <code>Australia/Hobart</code>
- <code>Australia/Lindeman</code>
- <code>Australia/Lord_Howe</code>
- <code>Australia/Melbourne</code>
- <code>Australia/Perth</code>
- <code>Australia/Sydney</code>
- <code>Europe/Amsterdam</code>
- <code>Europe/Andorra</code>
- <code>Europe/Astrakhan</code>
- <code>Europe/Athens</code>
- <code>Europe/Belgrade</code>
- <code>Europe/Berlin</code>
- <code>Europe/Bratislava</code>
- <code>Europe/Brussels</code>
- <code>Europe/Bucharest</code>
- <code>Europe/Budapest</code>
- <code>Europe/Busingen</code>
- <code>Europe/Chisinau</code>
- <code>Europe/Copenhagen</code>
- <code>Europe/Dublin</code>
- <code>Europe/Gibraltar</code>
- <code>Europe/Guernsey</code>
- <code>Europe/Helsinki</code>
- <code>Europe/Isle_of_Man</code>
- <code>Europe/Istanbul</code>
- <code>Europe/Jersey</code>
- <code>Europe/Kaliningrad</code>
- <code>Europe/Kiev</code>
- <code>Europe/Kirov</code>
- <code>Europe/Lisbon</code>
- <code>Europe/Ljubljana</code>
- <code>Europe/London</code>
- <code>Europe/Luxembourg</code>
- <code>Europe/Madrid</code>
- <code>Europe/Malta</code>
- <code>Europe/Mariehamn</code>
- <code>Europe/Minsk</code>
- <code>Europe/Monaco</code>
- <code>Europe/Moscow</code>
- <code>Europe/Oslo</code>
- <code>Europe/Paris</code>
- <code>Europe/Podgorica</code>
- <code>Europe/Prague</code>
- <code>Europe/Riga</code>
- <code>Europe/Rome</code>
- <code>Europe/Samara</code>
- <code>Europe/San_Marino</code>
- <code>Europe/Sarajevo</code>
- <code>Europe/Saratov</code>
- <code>Europe/Simferopol</code>
- <code>Europe/Skopje</code>
- <code>Europe/Sofia</code>
- <code>Europe/Stockholm</code>
- <code>Europe/Tallinn</code>
- <code>Europe/Tirane</code>
- <code>Europe/Ulyanovsk</code>
- <code>Europe/Uzhgorod</code>
- <code>Europe/Vaduz</code>
- <code>Europe/Vatican</code>
- <code>Europe/Vienna</code>
- <code>Europe/Vilnius</code>
- <code>Europe/Volgograd</code>
- <code>Europe/Warsaw</code>
- <code>Europe/Zagreb</code>
- <code>Europe/Zaporozhye</code>
- <code>Europe/Zurich</code>
- <code>Indian/Antananarivo</code>
- <code>Indian/Chagos</code>
- <code>Indian/Christmas</code>
- <code>Indian/Cocos</code>
- <code>Indian/Comoro</code>
- <code>Indian/Kerguelen</code>
- <code>Indian/Mahe</code>
- <code>Indian/Maldives</code>
- <code>Indian/Mauritius</code>
- <code>Indian/Mayotte</code>
- <code>Indian/Reunion</code>
- <code>Pacific/Apia</code>
- <code>Pacific/Auckland</code>
- <code>Pacific/Bougainville</code>
- <code>Pacific/Chatham</code>
- <code>Pacific/Easter</code>
- <code>Pacific/Efate</code>
- <code>Pacific/Enderbury</code>
- <code>Pacific/Fakaofo</code>
- <code>Pacific/Fiji</code>
- <code>Pacific/Funafuti</code>
- <code>Pacific/Galapagos</code>
- <code>Pacific/Gambier</code>
- <code>Pacific/Guadalcanal</code>
- <code>Pacific/Guam</code>
- <code>Pacific/Honolulu</code>
- <code>Pacific/Johnston</code>
- <code>Pacific/Kiritimati</code>
- <code>Pacific/Kosrae</code>
- <code>Pacific/Kwajalein</code>
- <code>Pacific/Majuro</code>
- <code>Pacific/Marquesas</code>
- <code>Pacific/Midway</code>
- <code>Pacific/Nauru</code>
- <code>Pacific/Niue</code>
- <code>Pacific/Norfolk</code>
- <code>Pacific/Noumea</code>
- <code>Pacific/Pago_Pago</code>
- <code>Pacific/Palau</code>
- <code>Pacific/Pitcairn</code>
- <code>Pacific/Ponape</code>
- <code>Pacific/Port_Moresby</code>
- <code>Pacific/Rarotonga</code>
- <code>Pacific/Saipan</code>
- <code>Pacific/Tahiti</code>
- <code>Pacific/Tarawa</code>
- <code>Pacific/Tongatapu</code>
- <code>Pacific/Truk</code>
- <code>Pacific/Wake</code>
- <code>Pacific/Wallis</code>

</details>

---



## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

