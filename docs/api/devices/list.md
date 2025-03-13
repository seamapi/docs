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

Type: `string`
Required: No

ID of the Connect Webview by which to filter devices.

***

### `connected_account_id`

Type: `string`
Required: No

ID of the connected account by which to filter.

***

### `connected_account_ids`

Type: `array`
Required: No

Array of IDs of the connected accounts by which to filter devices.

***

### `created_before`

Type: `string`
Required: No

Date threshold for devices to return. If specified, returns only devices created before the specified date.

***

### `custom_metadata_has`

Type: `object`
Required: No

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

***

### `device_ids`

Type: `array`
Required: No

Array of device IDs by which to filter devices.

***

### `device_type`

Type: `string`
Required: No

Device type by which to filter devices.

***

### `device_types`

Type: `array`
Required: No

Array of device types by which to filter devices.

***

### `limit`

Type: `number`
Required: No

Numerical limit on the number of devices to return.

***

### `manufacturer`

Type: `string`
Required: No

Manufacturer by which to filter devices.

***

### `user_identifier_key`

Type: `string`
Required: No

Your own internal user ID for the user by which to filter devices.

***

## Return Type

Array<[device](./)>
