---
description: A device that has been connected to the Seam platform.
---

# Devices

## The Device Object

| **`device_id`**              | uuid                                                                           | ID of the Device                               |
| ---------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| **`device_type`**            | string                                                                         | Type of Device                                 |
| **`capabilities_supported`** | As seen in '[Device Capabilities Supported](./#device-capabilities-supported)' | Capabilities supported by this Device          |
| **`errors`**                 | As seen in '[Device Error Types](./#device-error-types)'                       | List of errors for this Device                 |
| **`location`**               | As seen in '[Device Location](./#device-location)'                             | Location information for the Device            |
| **`manufacturer`**           | As seen in '[Device Manufacturers](./#device-manufacturers)'                   | Manufacturer of the Device                     |
| **`properties`**             | object, as seen in '[Device Properties](./#device-properties)'                 | Properties for the Device                      |
| **`warnings`**               | As seen in '[Device Warning Types](./#device-warning-types)'                   | List of warnings for this Device               |
| **`workspace_id`**           | uuid                                                                           | ID of the workspace that the device belongs to |
| **`created_at`**             | datetime                                                                       | Timestamp of creation time                     |

### Device Properties

| property name                    | type   | Description                                                                                                                                                                      |
| -------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`locked`**                     | bool   | Whether the device is locked                                                                                                                                                     |
| **`online`**                     | bool   | Whether the device is online                                                                                                                                                     |
| **`door_open`**                  | bool   | Whether the door is open                                                                                                                                                         |
| **`manufacturer`**               | string | Manufacturer of the device                                                                                                                                                       |
| **`battery_level`**              | float  | Battery level of the device.                                                                                                                                                     |
| **`XXX_metadata`**               | object | Metadata for the device, where XXX is the manufacturer and specific to that manufacturer                                                                                         |
| **`supported_code_lengths`**     | array  | Supported code lengths for the device, e.g., \[4,5] means "1234" and "12345" would be valid, but neither "123" nor "123456" wouldn't be valid                                    |
| **`max_active_codes_supported`** | int    | Maximum number of codes that may exist on the device at one time.                                                                                                                |
| **`code_constraints`**           | array  | Constraints on access codes that can be set on the device for devices that support access codes. Details can be found in '[Access Code Constraints](./#access-code-constraints)' |
| **`name`**                       | string | Name of the device                                                                                                                                                               |
| **`battery`**                    | object | Battery information for the device, has `level` and `status`. The `status` can be one of `critical`, `low`, `good`, or `full`.                                                   |
| **`keypad_battery`**             | object | Information on the device's keypad battery, if availabile. Has a `level` property.                                                                                               |
| **`serial_number`**              | string | Serial number for the device, if available.                                                                                                                                      |
| **`image_url`**                  | string | Image URL for the device, placeholder image URL if a device-specific image is unavailable                                                                                        |

### Device Location

| Property name       | Type   | Description                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------- |
| **`location_name`** | string | Name of the location the device belongs to, if available.                               |
| **`timezone`**      | string | Name of timezone (name from the IANA timezone database) the device is in, if available. |

## List of Methods

| [Get Device](get-device.md)                       | Get device            |
| ------------------------------------------------- | --------------------- |
| [List Devices](list-devices.md)                   | List device           |
| [List Device Providers](list-device-providers.md) | List device providers |

## Device Capabilities Supported

| Capability Types   | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`access_code`**  | If present, one can set access codes on the device.                                                                                                          |
| **`battery`**      | If present, you can look at the `battery_level` of the device                                                                                                |
| **`health`**       | If present, one can introspect some parameters related to the health of the device.                                                                          |
| **`lock`**         | If present, the device is able to be locked and unlocked.                                                                                                    |
| **`noise_sensor`** | If present, the device can issue noise alerts when noise thresholds are exceeded.                                                                            |
| **`thermostat`**   | If present, the device be used to regulate the temperature of a system, so that the system's temperature is maintained near a desired set point temperature. |

## Device Error Types

{% hint style="info" %}
A device can have more than one error or warning.
{% endhint %}

Errors are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| Error Type                        | Description                                                                                                                                                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| account_disconnected              | Seam has lost connection to a connected account. This may happen if the third-party provider triggered an access token to be revoked (e.g., after a password change). The account owner needs to reconnect the connected account with a new connect webview. |
| device_disconnected               | Device is disconnected                                                                                                                                                                                                                                       |
| device_removed                    | Device has been removed from the Connected Account. Seam can no longer sync with this device.                                                                                                                                                                |
| hub_disconnected                  | The hub that the device is connected to is offline. Seam is unable to sync updates to this device.                                                                                                                                                           |
| missing_device_credentials        | Missing device credentials, please create a new Connect Webview to provide them.                                                                                                                                                                             |
| ttlock_lock_not_paired_to_gateway | The lock is not paired with a Gateway, Seam will not be able to unlock or program access codes on the lock. Please add a Gateway to enable support.                                                                                                          |

## Device W

{% hint style="info" %}
A device can have more than one error or warning.
{% endhiarning Types

Warnings are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| Warning Type                              | Description                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| device_has_flaky_connection               | Device has a flaky connection to the internet.                                                                                                        |
| salto_office_mode                         | Lock is in Office Mode. Access Codes will not unlock doors. You can disable office mode in the Salto dashboard.                                       |
| salto_privacy_mode                        | Lock is in Privacy Mode. Access Codes will not unlock doors. You can disable privacy mode by pressing the back of the lock.                           |
| ttlock_lock_gateway_unlocking_not_enabled | Please turn on the Remote Unlock feature in the lock settings to enable unlocks. This must be turned on from the mobile app while near the door lock. |

## Device Manufacturers

On some account types, Seam provides additional information on the manufacturer of the door lock. Where the device is being connected via a smart hub, the manufacturer of the door lock might be different from that of the smart hub.

Here are a list of manufacturers that might get returned:

| **`august`**  |
| ------------- |
| **`keywe`**   |
| **`kwikset`** |
| **`lockly`**  |
| **`philia`**  |
| **`samsung`** |
| **`schlage`** |
| **`yale`**    |
| **`unknown`** |

## Device Providers

Seam maintains a list of Device Providers that can be accessed from the [List Device Providers](list-device-providers.md) endpoint.

Available information included in the [Device Provider](./#device-provider) object are as follows:

| property name              | type   | Description                                                                     |
| -------------------------- | ------ | ------------------------------------------------------------------------------- |
| **`device_provider_name`** | string | Name of the device provider (e.g. `august`)                                     |
| **`display_name`**         | string | Formatted version of the `device_provider_name` (e.g. `August`)                 |
| **`image_url`**            | string | Image url for the provider logo                                                 |
| **`provider_categories`**  | array  | Array of associated categories for the provider (possible categories: `stable`) |

Example Device Provider Object:

```javascript
{
    "device_provider_name": "august",
    "display_name": "August",
    "image_url": "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
    "provider_categories": ["stable"]
}
```

## Access Code Constraints

Each constraint in the `code_constraints` array is an object with at least the `constraint_type` property. The `constraint_type` property can be one of the following:

| **`constraint_type`**               | Description                                                                                                                                                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`no_zeros`**                      | `0`s cannot be used as digits in the pin code.                                                                                                                                                                                        |
| **`cannot_start_with_12`**          | The pin code cannot start with the sequence of digits `12`.                                                                                                                                                                           |
| **`no_triple_consecutive_ints`**    | No more than 3 digits in a row can be consecutive or the same in the pin code.                                                                                                                                                        |
| **`cannot_specify_pin_code`**       | A pin code cannot be specified - it has to be left empty and one will be generated by the lock provider.                                                                                                                              |
| **`pin_code_matches_existing_set`** | If a pin code is specified, it must match an existing set of pin codes used in the account (for example, pin code matches the code assigned to a user in the system).                                                                 |
| **`start_date_in_future`**          | For time-bound codes, the start date has to be in the future.                                                                                                                                                                         |
| **`name_length`**                   | The name of the code has some restrictions on length. When the `constraint_type` is `name_length`, the constraint object has one or two additional properties called `min_length` and `max_length` to specify the length constraints. |
