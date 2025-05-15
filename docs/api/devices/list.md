# List Devices

```
POST /devices/list ⇒ { devices: [device, …] }
```

Returns a list of all [devices](../../core-concepts/devices/README.md).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `connect_webview_id`

Format: `UUID`
Required: No

ID of the Connect Webview by which to filter devices.

***

### `connected_account_id`

Format: `UUID`
Required: No

ID of the connected account by which to filter.

***

### `connected_account_ids`

Format: `List`
Item format: `UUID`
Required: No

Array of IDs of the connected accounts by which to filter devices.

***

### `created_before`

Format: `Datetime`
Required: No

Date threshold for devices to return. If specified, returns only devices created before the specified date.

***

### `custom_metadata_has`

Format: `Record`
Required: No

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

***

### `device_ids`

Format: `List`
Item format: `UUID`
Required: No

Array of device IDs by which to filter devices.

***

### `device_type`

Format: `Enum`
Required: No

Device type by which to filter devices.

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `sensi_thermostat`
- `ios_phone`
- `android_phone`

***

### `device_types`

Format: `List`
Item format: `Enum`
Required: No

Array of device types by which to filter devices.

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `sensi_thermostat`
- `ios_phone`
- `android_phone`

***

### `limit`

Format: `Number`
Required: No

Numerical limit on the number of devices to return.

***

### `manufacturer`

Format: `Enum`
Required: No

Manufacturer by which to filter devices.

Possible enum values:
- `akuvox`
- `august`
- `avigilon_alta`
- `brivo`
- `butterflymx`
- `doorking`
- `four_suites`
- `genie`
- `igloo`
- `keywe`
- `kwikset`
- `linear`
- `lockly`
- `nuki`
- `philia`
- `salto`
- `samsung`
- `schlage`
- `seam`
- `unknown`
- `wyze`
- `yale`
- `minut`
- `two_n`
- `ttlock`
- `nest`
- `igloohome`
- `ecobee`
- `hubitat`
- `controlbyweb`
- `smartthings`
- `dormakaba_oracode`
- `tedee`
- `honeywell_resideo`
- `akiles`
- `tado`
- `sensi`

***

### `page_cursor`

Format: `String`
Required: No

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

***

### `user_identifier_key`

Format: `String`
Required: No

Your own internal user ID for the user by which to filter devices.

***

## Return Type

Array<[device](./)>
