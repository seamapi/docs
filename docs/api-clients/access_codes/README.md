---
description: Key codes to be programmed on a door lock
---

# Access Codes

### `access_code` Properties

The `access_code` object has the following properties:

<table><thead><tr><th width="225">Property</th><th width="164.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>access_code_id</code></td><td>String (UUID)</td><td>Unique identifier for the access code.</td></tr><tr><td><code>device_id</code></td><td>String (UUID)</td><td>Unique identifier for the device associated with the access code.</td></tr><tr><td><code>code</code></td><td>String</td><td>Code used for access. Typically, a numeric or alphanumeric string.</td></tr><tr><td><code>name</code></td><td>String</td><td>Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.</td></tr><tr><td><code>common_code_key</code></td><td>String</td><td>Unique identifier for a group of access codes that share the same code.</td></tr><tr><td><code>appearance</code></td><td>Object</td><td>Name as it appears on the lock provider app or on the device. This is an object with a <code>name</code> property, and <code>first_name</code> and <code>last_name</code> properties if the provider breaks down names into components.</td></tr><tr><td><code>status</code></td><td>String</td><td><p>Current status of the access code within the operational lifecycle. Values are: <code>unset</code>: Indicates a deactivated or unused state, either before activation or after deliberate deactivation.</p><p><br><code>setting</code>: A transitional phase that indicates that the code is being configured or activated.</p><p><br><code>set</code>: Indicates that the code is active and operational.</p><p><br><code>removing</code>: Indicates a transitional period in which the code is being deleted or made inactive.<br><br><code>unknown</code>: Indicates an indeterminate state, due to reasons such as system errors or incomplete data, that highlights a potential need for system review or troubleshooting.</p></td></tr><tr><td><code>is_scheduled_on_device</code></td><td>Boolean</td><td>Indicates whether the code is set on the device according to a preconfigured schedule.</td></tr><tr><td><code>is_managed</code></td><td>Boolean</td><td>Indicates whether Seam manages the access code.</td></tr><tr><td><code>type</code></td><td>Enum</td><td><p>Nature of the access code. Values are:</p><p><code>ongoing</code>: Access codes that are active continuously until deactivated manually.</p><p></p><p><code>time_bound</code>: Access codes that have a specific duration.</p></td></tr><tr><td><code>is_backup_access_code_available</code></td><td>Boolean</td><td>Indicates whether a <a href="https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes">backup access code</a> is available for use if the primary access code is lost or compromised.</td></tr><tr><td><code>is_backup</code></td><td>Boolean</td><td>Indicates whether the access code is a <a href="https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes">backup access code</a>.</td></tr><tr><td><code>pulled_backup_access_code_id</code></td><td>String (UUID)</td><td>Identifier of the pulled <a href="https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes">backup access code</a>. Used to associate the pulled backup access code with the original access code.</td></tr><tr><td><code>is_waiting_for_code_assignment</code></td><td>Boolean</td><td>Indicates whether the access code is waiting for a code assignment.</td></tr><tr><td><code>is_external_modification_allowed</code></td><td>Boolean</td><td>Indicates whether changes to the access code from external sources are permitted.</td></tr><tr><td><code>is_one_time_use</code></td><td>Boolean</td><td>Indicates whether the access code can only be used once. If <code>true</code>, the code becomes invalid after the first use.</td></tr><tr><td><code>is_offline_access_code</code></td><td>Boolean</td><td>Indicates whether the access code is intended for use in <a href="../../products/smart-locks/access-codes/offline-access-codes.md">offline</a> scenarios. If <code>true</code>, this code can be created on a device without a network connection.</td></tr><tr><td><code>starts_at</code></td><td>Datetime (ISO 8601)</td><td>Date and time at which the time-bound access code becomes active (only relevant for <code>time_bound</code> codes).</td></tr><tr><td><code>ends_at</code></td><td>Datetime (ISO 8601)</td><td>Date and time after which the time-bound access code becomes inactive (only relevant for <code>time_bound</code> codes).</td></tr><tr><td><code>created_at</code></td><td>Datetime (ISO 8601)</td><td>Date and time at which the access code was created.</td></tr><tr><td><code>errors</code></td><td>See <a href="./#access-code-error-types">Access Code Error Types</a>.</td><td><p>Collection of errors associated with the access code, structured in a dictionary format.</p><p> A unique <code>error_code</code> keys each error. Each error entry is an object containing two fields: <code>message</code> and <code>created_at</code>.</p><p></p><p><code>message</code> is a string that describes the error.</p><p></p><p><code>created_at</code> is a date that indicates when the error was generated.</p><p></p><p>This structure enables detailed tracking and timely response to critical issues.</p></td></tr><tr><td><code>warnings</code></td><td>See <a href="./#access-code-warning-types">Access Code Warning Types</a>.</td><td><p>Collection of warnings associated with the access code, structured in a dictionary format.</p><p>A unique <code>warning_code</code> keys each warning. Each warning entry is an object containing two fields: <code>message</code> and <code>created_at</code>.</p><p></p><p><code>message</code> is a string that describes the warning.</p><p></p><p><code>created_at</code> is a date that indicates when the warning was generated.</p><p></p><p>This structure enables detailed tracking and timely response to potential issues that are not critical but that may require attention.</p></td></tr></tbody></table>



{% hint style="info" %}
An **Ongoing** Access Code will be active until it has been removed from the Device. Be sure to leave both the **`starts_at`** and **`ends_at`** fields empty to specify an ongoing Access Code.

A **Time Bound** Access Code will be programmed at the \*\*`starts_at`\*\*time, and removed at the **`ends_at`** time.
{% endhint %}

### Access Code Names

Note that the `name` provided on Seam is used to identify the code on Seam, and is not necessarily the name that will appear on the lock provider's app, or on the device. This is because lock providers may have constraints on names such as length, uniqueness or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`.

In order to provide a consistent experience, Seam will identify the code on Seam by its `name` but may modify the name that appears on the lock provider's app, or on the device. For example, Seam may add additional characters or truncate the name in order to meet provider constraints.

In order to help end users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app, or on the device as a separate property called `appearance`. This is an object with a `name` property, and optionally, `first_name` and `last_name` properties (for providers that break down a name into components).

## External Modification

Seam will attempt to keep the access code on the device in sync with the declared state of the access code on Seam. For example, the start time and end time of the access code will be set to match the declared state of the access code on Seam. Any updates to the access code timings on Seam will be reflected on the device. In general, if the access code is modified external to Seam (through the lock provider's app for example), Seam will attempt to re-set the access code on the device to match the declared state of the access code on Seam. This also applies if the access code is removed from the device. Seam will attempt to re-set the access code on the device until the declared ending time of the access code has passed.

When external modifications are detected, Seam will send an `access_code.modified_external_to_seam` event and add a `code_modified_external_to_seam` error on the access code.

This behavior can sometimes be surprising to end users, so we recommend that you inform your users that Seam will attempt to re-set access codes on the device if they are modified or removed externally. If you would like to disable this behavior, you can set the `allow_external_modification` flag to true when an access code. When this flag is set to true, Seam will set `code_modified_external_to_seam` as a warning on the code instead of an error.

### Access Code Error Types

Errors are returned in a list:

```
"errors": [
  {
    "is_access_code_error": true,
    "error_code": "device_disconnected",
    "message": "Device Disconnected, you may need to reconnect the device.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

#### Generic Errors

Seam recommends adding error handling logic to you application for each generic error below. Seam may add more generic errors in the future, so your application should include a fallback case if it encounters an unknown generic error code.

See our [troubleshooting tips for access codes](../../products/smart-locks/access-codes/troubleshooting-access-code-issues.md) for our recommended responses to these error codes.

| Error Type                             | Description                                                                                                                                                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `failed_to_set_on_device`              | An error occurred when we tried to set the access code on the device. We will continue to try and set the code on the device in case the error was temporary.                                                                                                                                                             |
| `failed_to_remove_from_device`         | An error occurred when we tried to remove the access code from the device. We will continue to try and remove the code from the device in case the error was temporary.                                                                                                                                                   |
| `code_modified_external_to_seam`       | We detected that the code was modified or removed externally after Seam successfully set it on the device. We will attempt to set the code on the device again. Please advise the user that Seam will re-set codes they modify or remove manually, and to review other lock integrations that may be modifying the codes. |
| `conflicting_unmanaged_access_code_id` | An access code called "Foo bar" with the same pin already exists on the device.                                                                                                                                                                                                                                           |

#### Specific Errors

When Seam is able to provide more specific information beyond one of the generic errors above, one or more errors from the list of specific errors may appear. This gives your application the option to display additional context or suggest provider specific resolutions.

{% hint style="info" %}
If the device or connected account associated with an access code has an error, it will be attached to the access code alongside any other access code errors. Treat these errors as Specific Errors. See [Device Error Types](../devices/#device-error-types) and [Connected Account Error Types](../connected-accounts/#connected-account-error-types).
{% endhint %}

See our [troubleshooting tips for access codes](../../products/smart-locks/access-codes/troubleshooting-access-code-issues.md) for our recommended responses to these error codes.

| Error Type                                         | Description                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `august_device_programming_delay`                  | August has acknowledged a request to program the code, but the access code has not yet been fully moved to the device. The device likely has a flaky internet connection. We will continue to try and set the code on the device.                                                                                                                          |
| `august_device_slots_full`                         | All access code slots on the device are full.                                                                                                                                                                                                                                                                                                              |
| `august_lock_bad_access_code_format`               | The access code format is not correct                                                                                                                                                                                                                                                                                                                      |
| `august_lock_missing_keypad`                       | August lock is missing a keypad                                                                                                                                                                                                                                                                                                                            |
| `august_lock_temporarily_offline`                  | August lock was temporarily offline while setting/removing a code, the code should be set/remove when it comes back online                                                                                                                                                                                                                                 |
| `duplicate_code_on_device`                         | An access code with the same pin already exists on the device.                                                                                                                                                                                                                                                                                             |
| `salto_site_user_not_subscribed`                   | Salto site user is not subscribed. This usually means your Salto site has reached its subscription limit.                                                                                                                                                                                                                                                  |
| `smartthings_failed_to_set_after_multiple_retries` | Failed to set code on device after multiple retries. This may be due to a conflict with an existing code on the device, or other software that may be used to manage the device. Please make sure that other applications like like Rboy or Operto are disabled.                                                                                           |
| `smartthings_no_free_slots_available`              | There are no free slots available on the device. You will need to delete existing codes before more codes can be added to the device.                                                                                                                                                                                                                      |
| `kwikset_unable_to_confirm_code`                   | Unable to confirm that the access code is set on the Kwikset device. This is likely due to a duplicate pin code on the device that was set outside of Seam. Please update this access code's 'code' value through Seam Console or by using our [access\_codes/update endpoint](https://docs.seam.co/latest/api-clients/access_codes/update) |
| `kwikset_unable_to_confirm_deletion`               | Unable to confirm deletion of the access code from the Kwikset device. It's possible that this access code was deleted from a source other than Seam. Please check the list of access codes on your Kwikset app from a device that is connected to the lock via Bluetooth or contact us for further assistance                                             |

### Access Code Warnings

{% hint style="info" %}
An access code can have more than one error or warning.
{% endhint %}

Warnings are returned in a list:

```
"warnings": [
  {
    "warning_code": "delay_in_removing_from_device ",
    "message": "We expected the device to report that the access code has been removed but it still has not.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

| Warning Type                     | Description                                                                                                                                                                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delay_in_removing_from_device`  | We expected the device to report that the access code has been removed but it still has not. We will continue to try and remove the code from the device.                                                                                       |
| `delay_in_setting_on_device`     | There was an unusually long delay in programming the code onto the device. For time bound codes, this is sent when the code enters its active time. Note that this is a temporary warning and might be removed if the code is successfully set. |
| `code_modified_external_to_seam` | When we detect that a code was modified or removed externally after Seam successfully set it on the device, and the `allow_external_modification` flag is set for the code, we will set this warning instead of an error.                       |

## `access_code` Methods

* [Create an access code](create-an-access-code.md)
* [Create many access codes](create-many-access-codes.md)
* [List access codes](list-access-codes.md)
* [Get an access code](get-an-access-code.md)
* [Update an access code](update.md)
* [Delete an access code](delete-an-access-code.md)
* [List unmanaged access codes](./unmanaged/list.md)
* [Convert an unmanaged access code](convert-an-unmanaged-access-code.md)
* [Delete an unmanaged access code](./unmanaged/delete.md)
* [Pull a backup access code](pull-backup-access-code.md)
