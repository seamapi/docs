---
description: A device that has been connected to Seam
---

# Devices

The `device` object represents a [device](../../core-concepts/devices.md) that has been connected to Seam.

## `device` Properties

The `device` object has the following properties:

<table><thead><tr><th width="181">Property</th><th width="166.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String (UUID)</td><td>Unique identifier for the device.</td></tr><tr><td><code>device_type</code></td><td>String</td><td>Type of the device.</td></tr><tr><td><code>enabled_capabilities</code></td><td>See <a href="./#enabled_capabilities-values"><code>enabled_capabilities</code> Values</a>.</td><td>Collection of capabilities that the device supports when connected to Seam.</td></tr><tr><td><code>errors</code></td><td>See <a href="./#device-error-types">Device Error Types</a>.</td><td><p>Array of errors associated with the device.</p><p>Each error object within the array contains two fields: <code>error_code</code> and <code>message</code>.</p><p></p><p><code>error_code</code> is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue.</p><p></p><p><code>message</code> provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.</p></td></tr><tr><td><code>warnings</code></td><td>See <a href="./#device-warning-types">Device Warning Types</a>.</td><td><p>Array of warnings associated with the device.</p><p>Each warning object within the array contains two fields: <code>warning_code</code> and <code>message</code>.</p><p></p><p><code>warning_code</code> is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue.</p><p></p><p><code>message</code> provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.</p></td></tr><tr><td><code>location</code></td><td>See <a href="./#location-properties"><code>location</code> Properties</a>.</td><td>Location information for the device.</td></tr><tr><td><code>manufacturer</code></td><td>See <a href="./#device-manufacturers">Device Manufacturers</a>.</td><td>Manufacturer of the device.</td></tr><tr><td><code>properties</code></td><td><p>Object</p><p>See <a href="./#device.properties-properties"><code>device.properties</code> Properties</a>.</p></td><td>Properties of the device.</td></tr><tr><td><code>workspace_id</code></td><td>String (UUID)</td><td>Unique identifier for the Seam workspace associated with the device.</td></tr><tr><td><code>created_at</code></td><td>Datetime</td><td>Date and time at which the device object was created.</td></tr></tbody></table>

### `device.properties` Properties

<table><thead><tr><th width="230.33333333333331">Property</th><th width="129">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>locked</code></td><td>Boolean</td><td>Indicates whether the device is locked.</td></tr><tr><td><code>online</code></td><td>Boolean</td><td>Indicates whether the device is online.</td></tr><tr><td><code>door_open</code></td><td>Boolean</td><td>Indicates whether the door is open.</td></tr><tr><td><code>manufacturer</code></td><td>String</td><td>Manufacturer of the device.</td></tr><tr><td><code>battery_level</code></td><td>Float</td><td>Battery level of the device.</td></tr><tr><td><code>XXX_metadata</code></td><td>Object</td><td>Manufacturer-specific metadata for the device, where <code>XXX</code> is the manufacturer.</td></tr><tr><td><code>supported_code_lengths</code></td><td>Array</td><td><p>Supported code lengths for the device.</p><p>For example, <code>[4,5]</code> means that <code>1234</code> and <code>12345</code> are valid codes, but <code>123</code> and <code>123456</code> are invalid codes.</p></td></tr><tr><td><code>online_access_codes_enabled</code></td><td>Boolean</td><td>Indicates whether it is currently possible to use <a href="../../products/smart-locks/access-codes/">online access codes</a> for the device.</td></tr><tr><td><code>offline_access_codes_enabled</code></td><td>Boolean</td><td>Indicates whether it is currently possible to use <a href="../../products/smart-locks/access-codes/offline-access-codes.md">offline access codes</a> for the device.</td></tr><tr><td><code>max_active_codes_supported</code></td><td>Integer</td><td>Maximum number of codes that can exist on the device at one time.</td></tr><tr><td><code>code_constraints</code></td><td>Array</td><td><p>Constraints on access codes that can be set on the device for devices that support access codes.</p><p>See <a href="./#access-code-constraints">Access Code Constraints</a>.</p></td></tr><tr><td><code>name</code></td><td>String</td><td>Name of the device.</td></tr><tr><td><code>battery</code></td><td>Object</td><td><p>Represents the current status of the battery charge level.</p><p>Values are:</p><p><code>critical</code>: Indicates an extremely low level, suggesting imminent shutdown or an urgent need for charging.</p><p></p><p><code>low</code>: Signifies that the battery is under the preferred threshold and should be charged soon.</p><p></p><p><code>good</code>: Denotes a satisfactory charge level, adequate for normal use without the immediate need for recharging.</p><p></p><p><code>full</code>: Represents a battery that is fully charged, providing the maximum duration of usage.</p></td></tr><tr><td><code>keypad_battery</code></td><td>Object</td><td>Information about the keypad battery for the device, if available. Includes a <code>level</code> property.</td></tr><tr><td><code>serial_number</code></td><td>String</td><td>Serial number for the device, if available.</td></tr><tr><td><code>image_url</code></td><td>String</td><td>Image URL for the device or placeholder image URL if a device-specific image is unavailable.</td></tr></tbody></table>

### `location` Properties

<table><thead><tr><th width="204">Property</th><th width="128.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>location_name</code></td><td>String</td><td>Name of the device location.</td></tr><tr><td><code>timezone</code></td><td>String</td><td>Time zone of the device location, as a name from the IANA time zone database.</td></tr></tbody></table>

## `enabled_capabilities` Values

<table><thead><tr><th width="202">Capability</th><th>Description</th></tr></thead><tbody><tr><td><code>access_code</code></td><td>If present, you can set access codes on the device.</td></tr><tr><td><code>battery</code></td><td>If present, you can look at the <code>battery_level</code> of the device</td></tr><tr><td><code>health</code></td><td>If present, you can introspect some parameters related to the health of the device.</td></tr><tr><td><code>lock</code></td><td>If present, you can lock and unlock the device.</td></tr><tr><td><code>noise_sensor</code></td><td>If present, the device can issue noise alerts when noise thresholds are exceeded.</td></tr><tr><td><code>thermostat</code></td><td>If present, the device can regulate the temperature of a system so that the temperature of the system is maintained near a desired set point temperature.</td></tr></tbody></table>

## Device Error Types

Errors are returned in a list. For example:

```
"errors": [
  {
    "is_device_error": true,
    "error_code": "device_disconnected",
    "message": "Device Disconnected, you may need to reconnect the device.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

### Generic Errors

Seam recommends adding error handling logic to you app for each generic error in this table. Seam may add more generic errors in the future, so your app should include a fallback case if it encounters an unknown generic error code.

<table><thead><tr><th width="263">Error Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_disconnected</code></td><td>Device is disconnected.</td></tr><tr><td><code>device_removed</code></td><td>Device has been removed from the connected account. Seam can no longer sync with this device.</td></tr><tr><td><code>hub_disconnected</code></td><td>The hub that the device is connected to is offline. Seam is unable to sync updates to this device.</td></tr></tbody></table>

### Specific Errors

When Seam is able to provide more specific information beyond one of the [generic errors](./#generic-errors), one or more errors from the list of specific errors may appear. This gives your app the option to display additional context or suggest provider specific resolutions.

{% hint style="info" %}
If the connected account associated with a device has an error, it is attached to the device alongside any other device errors. Treat these errors as specific errors. See [Connected Account Error Types](../connected-accounts/#connected-account-error-types).
{% endhint %}

| Error Type                          | Description                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `missing_device_credentials`        | Missing device credentials. Create a new [Connect Webview](../../core-concepts/connect-webviews/) to provide the credentials.   |
| `ttlock_lock_not_paired_to_gateway` | The lock is not paired with a gateway. Seam cannot unlock or program access codes on the lock. Add a gateway to enable support. |

## Device Warning Types

Warnings are returned in a list. For example:

```
"warnings": [
  {
    "warning_code": "device_has_flaky_connection",
    "message": "Device has a flaky connection to the internet.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

| Warning Type                                | Description                                                                                                                                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device_has_flaky_connection`               | Device has a flaky connection to the internet.                                                                                                                                                                                              |
| `third_party_integration_detected`          | We detected that another third-party service (for example, Operto) is being used to manage this device. This situation may cause access codes that Seam sets to fail because the third-party service is making modifications to Seam codes. |
| `salto_office_mode`                         | Lock is in office mode. Access codes will not unlock doors. You can disable office mode in the Salto dashboard.                                                                                                                             |
| `salto_privacy_mode`                        | Lock is in privacy mode. Access Codes will not unlock doors. You can disable privacy mode by pressing the back of the lock.                                                                                                                 |
| `ttlock_lock_gateway_unlocking_not_enabled` | Turn on the remote unlock feature in the lock settings to enable unlocks. This feature must be turned on from the mobile app while near the door lock.                                                                                      |

## Device Manufacturers

On some account types, Seam provides additional information about the manufacturer of the door lock. Where the device is being connected through a smart hub, the manufacturer of the door lock might be different from that of the smart hub.

Seam might return the following manufacturers:

* `august`
* `keywe`
* `kwikset`
* `lockly`
* `philia`
* `samsung`
* `schlage`
* `yale`
* `unknown`

## Device Providers

Seam maintains a list of device providers that you can access using the [List Device Providers](list-device-providers.md) endpoint.

The [Device Provider](./#device-provider) object includes the following information:

<table><thead><tr><th width="273">Property</th><th width="92.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_provider_name</code></td><td>String</td><td><p>Name of the device provider.</p><p>For example: <code>august</code></p></td></tr><tr><td><code>display_name</code></td><td>String</td><td><p>Formatted version of the <code>device_provider_name</code>.</p><p>For example: <code>August</code></p></td></tr><tr><td><code>image_url</code></td><td>String</td><td>Image URL for the provider logo.</td></tr><tr><td><code>provider_categories</code></td><td>Array</td><td><p>Array of associated categories for the provider.</p><p>Possible categories: <code>stable</code></p></td></tr></tbody></table>

The following example shows a device provider object:

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

<table><thead><tr><th width="338">Constraint Type</th><th>Description</th></tr></thead><tbody><tr><td><code>no_zeros</code></td><td><code>0</code>s cannot be used as digits in the PIN code.</td></tr><tr><td><code>cannot_start_with_12</code></td><td>The PIN code cannot start with the sequence of digits <code>12</code>.</td></tr><tr><td><code>no_triple_consecutive_ints</code></td><td>No more than 3 digits in a row can be consecutive or the same in the PIN code.</td></tr><tr><td><code>cannot_specify_pin_code</code></td><td>A PIN code cannot be specified. It must be left empty, and one will be generated by the lock provider.</td></tr><tr><td><code>pin_code_matches_existing_set</code></td><td><p>If a PIN code is specified, it must match an existing set of PIN codes used in the account.</p><p>For example, the PIN code matches the code assigned to a user in the system.</p></td></tr><tr><td><code>start_date_in_future</code></td><td>For time-bound codes, the start date has to be in the future.</td></tr><tr><td><code>name_length</code></td><td><p>The name of the code has some restrictions on length.</p><p>When the <code>constraint_type</code> is <code>name_length</code>, the constraint object has one or two additional properties called <code>min_length</code> and <code>max_length</code> to specify the length constraints.</p></td></tr></tbody></table>

## `device` Methods

You can perform the following actions on `device` objects:

* [List devices](list-devices.md)
* [List device providers](list-device-providers.md)
* [Get a device](get-device.md)
* [Update a device](update-device.md)
* [List un`managed` devices](list-unmanaged-devices.md)
* [Get an unmanaged devices](get-device-1.md)
* [Update an unmanaged device](update-unmanaged-device.md)
