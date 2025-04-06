# List Thermostats

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/list ⇒ { devices: [device, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`connect_webview_id`** *string*
Required: No

ID of the Connect Webview by which to filter devices.

---

**`connected_account_id`** *string*
Required: No

ID of the connected account by which to filter.

---

**`connected_account_ids`** *array* *of UUIDs*
Required: No

Array of IDs of the connected accounts by which to filter devices.

---

**`created_before`** *string*
Required: No

Date threshold for devices to return. If specified, returns only devices created before the specified date.

---

**`custom_metadata_has`** *object*
Required: No

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

---

**`device_ids`** *array* *of UUIDs*
Required: No

Array of device IDs by which to filter devices.

---

**`device_type`** *string*
Required: No

Device type by which to filter devices.

---

**`device_types`** *array* *of Enums*
Required: No

Array of device types by which to filter devices.
<details>

<summary>Enum values</summary>

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
- `ios_phone`
- `android_phone`
</details>

---

**`limit`** *number*
Required: No

Numerical limit on the number of devices to return.

---

**`manufacturer`** *string*
Required: No

Manufacturer by which to filter devices.

---

**`user_identifier_key`** *string*
Required: No

Your own internal user ID for the user by which to filter devices.

---


## Return Type

Array<[device](./)>
