---
description: Key Codes to be programmed on a door lock.
---

# Access Codes

## The Access Code object

| **`access_code_id`** | uuid                                                                 | ID of the Access Code                                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`code`**           | string                                                               | Key Code to be entered on the lock                                                                                                                                                                                                                                     |
| **`name`**           | string                                                               | Name of the Access Code                                                                                                                                                                                                                                                |
| **`status`**         | string                                                               | <p><code>unset</code>: The time frame for an access code has not begun; the code is not set</p><p><br><code>setting</code>: The code is being set</p><p><br><code>set</code>: The code has been set</p><p><br><code>removing</code>: The code is being removed<br></p> |
| **`type`**           | string                                                               | `ongoing` or `time_bound`                                                                                                                                                                                                                                              |
| **`is_backup`**      | boolean                                                  | Boolean indicating whether this is a [backup access code](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes)                                       

| **`starts_at`**      | datetime (ISO 8601)                                                  | Timestamp of when the Access Code begins (only relevant for `time_bound` codes)                                                                                                                                                                                        |
| **`ends_at`**        | datetime (ISO 8601)                                                  | Timestamp of when the Access Code ends (only relevant for `time_bound` codes)                                                                                                                                                                                          |
| **`created_at`**     | datetime (ISO 8601)                                                  | Timestamp of when the Access Code was created                                                                                                                                                                                                                          |
| **`errors`**         | As seen in [Access Code Error Types](./#access-code-error-types)     | List of errors for this Access Code                                                                                                                                                                                                                                    |
| **`warnings`**       | As seen in [Access Code Warning Types](./#access-code-warning-types) | List of warnings for this Access Code                                                                                                                                                                                                                                  |

{% hint style="info" %}
An **Ongoing** Access Code will be active until it has been removed from the Device. Be sure to leave both the **`starts_at`** and **`ends_at`** fields empty to specify an ongoing Access Code.

A **Time Bound** Access Code will be programmed at the **`starts_at`**time, and removed at the **`ends_at`** time.
{% endhint %}

## Access Code Error Types

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

### Generic Errors

Seam recommends adding error handling logic to you application for each generic error below.
Seam may add more generic errors in the future, so your application should include a fallback case
if it encounters an unknown generic error code.

| Error Type                       | Description                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `failed_to_set_on_device`        | An error occurred when we tried to set the access code on the device. We will continue to try and set the code on the device in case the error was temporary.                                                                                                                                                             |
| `failed_to_remove_from_device`   | An error occurred when we tried to remove the access code from the device. We will continue to try and remove the code from the device in case the error was temporary.                                                                                                                                                   |
| `code_modified_external_to_seam` | We detected that the code was modified or removed externally after Seam successfully set it on the device. We will attempt to set the code on the device again. Please advise the user that Seam will re-set codes they modify or remove manually, and to review other lock integrations that may be modifying the codes. |

### Specific Errors

When Seam is able to provide more specific information beyond one of the generic errors above,
one or more errors from the list of specific errors may appear.
This gives your application the option to display additional context or suggest provider specific resolutions.

{% hint style="info" %}
If the device or connected account associated with an access code has an error, it will be attached to the access code
alongside any other access code errors.
Treat these errors as Specific Errors.
See [Device Error Types](../devices/#device-error-types) and [Connected Account Error Types](../connected-accounts/#connected-account-error-types).
{% endhint %}

| Error Type                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `august_device_programming_delay`                  | August has acknowledged a request to program the code, but the access code has not yet been fully moved to the device. The device likely has a flaky internet connection. We will continue to try and set the code on the device.                                                                                                                                                                                                                                                      |
| `august_device_slots_full`                         | All access code slots on the device are full.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `august_lock_bad_access_code_format`               | The access code format is not correct                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `august_lock_missing_keypad`                       | August lock is missing a keypad                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `august_lock_temporarily_offline`                  | August lock was temporarily offline while setting/removing a code, the code should be set/remove when it comes back online                                                                                                                                                                                                                                                                                                                                                             |
| `duplicate_code_on_device`                         | An access code with the same pin already exists on the device.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `salto_site_user_not_subscribed`                   | Salto site user is not subscribed. This usually means your Salto site has reached its subscription limit.                                                                                                                                                                                                                                                                                                                                                                              |
| `smartthings_failed_to_set_after_multiple_retries` | Failed to set code on device after multiple retries. This may be due to a conflict with an existing code on the device, or other software that may be used to manage the device.The following codes on the device not managed by Seam may be conflicting: Foo Code, Bar Pin.  We detected the use of RBoy Apps to manage this device, which may conflict with Seam's ability to set codes on the device. We recommend disabling RBoy Apps for devices that will be managed using Seam. |
| `smartthings_no_free_slots_available`              | There are no free slots available on the device. You will need to delete existing codes before more codes can be added to the device. Note that in addition to the codes managed by Seam, there are 3 other codes on the device.                                                                                                                                                                                                                                                       |

## Access Code Warning Types

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

| Warning Type                    | Description                                                                                                                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delay_in_removing_from_device` | We expected the device to report that the access code has been removed but it still has not. We will continue to try and remove the code from the device.                                                                                       |
| `delay_in_setting_on_device`    | There was an unusually long delay in programming the code onto the device. For time bound codes, this is sent when the code enters its active time. Note that this is a temporary warning and might be removed if the code is successfully set. |

## Recommended Mitigations

Certain access code errors may require manual intervention to resolve. Mitigations are proactive measures you can implement in response to certain access code errors and warnings to ensure an access code will work reliably by the time it is needed.

When creating a scheduled access code, Seam will attempt to set the code on the device up to 9 days in advance and will save any errors or warnings on the access code at least 3 days prior to the scheduled start time of the code. The intention behind this is to provide you with enough time to respond to these error and warning messages using the recommended mitigations below.


| Error Code                       | Recommended Mitigation Action                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `failed_to_set_on_device`        | Check the error message for more specific mitigation steps or use a [backup access code](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes)                                                                                                                                                               |
| `failed_to_remove_from_device`   | Check the error message for more specific mitigation steps. Confirm using the provider's app if the access code is still on the device, as it may have been deleted through another source.                                                                                                                                                   |
| `code_modified_external_to_seam` | To resolve a conflict due to a Seam access code being modified or created by an external source, you can delete and re-create the code through Seam or convert the code from an unmanaged to managed access code (if it was created by an external source). By default, Seam will attempt to reset the code. |
| `august_device_programming_delay`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                                                                                                      |
| `august_device_slots_full`                         | Delete existing access codes on the device to free up slots for new access codes. This should be done through Seam if possible.                                                                                                                     |
| `august_lock_bad_access_code_format`               | Review the pin code and name requirements specific to your August device and update the access code on Seam to match these requirements. |
| `august_lock_temporarily_offline`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                                                                                                                                                                                                             |
| `duplicate_code_on_device`                         | Check for [unmanaged access codes](https://docs.seam.co/latest/api-clients/access-codes/list-unmanaged-access-codes) through the provider's app or Seam with the same pin code or name. If a duplicate is found, either delete the duplicate code or convert it to a managed code.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `salto_site_user_not_subscribed`                   | Check the Salto user's subscription and your Salto site's subscription limit.                                                                                                                                                                                                                                                                                                                                                                              |
| `smartthings_failed_to_set_after_multiple_retries` | Check for duplicate codes caused by third-party software managing the device. RBoy Apps in particular can cause this, so disable these for devices that are managed using Seam if possible. |
| `smartthings_no_free_slots_available`              | Delete existing access codes on the device to free up slots for new access codes. Note that in addition to the codes managed by Seam, there are 3 other codes on the device.    

### List of Methods

<table data-header-hidden><thead><tr><th width="312"></th><th></th></tr></thead><tbody><tr><td><a href="create-an-access-code.md">Create an Access Code</a></td><td>Create an Access Code</td></tr><tr><td><a href="create-many-access-codes.md">Create many Access Codes</a></td><td>Create many Access Codes</td></tr><tr><td><a href="update-an-access-code.md">Update an Access Code</a></td><td>Update an Access Code</td></tr><tr><td><a href="delete-an-access-code.md">Delete an Access Code</a></td><td>Delete an Access Code</td></tr><tr><td><a href="get-an-access-code.md">Retrieve an Access Code</a></td><td>Retrieve an Access Code</td></tr><tr><td><a href="list-access-codes.md">Retrieve a list of Access Codes</a></td><td>Retrieve a list of Access Codes</td></tr></tbody></table>
