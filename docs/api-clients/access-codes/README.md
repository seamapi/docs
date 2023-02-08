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

Errors are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| **`failed_to_set_on_device`**      | A failure occurred while attempting to program the code onto the device. Note that the failure might be temporary and this error might be removed after retries. |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`failed_to_remove_from_device`** | A failure occurred while attempting to remove the code frin the device. Note that the failure might be temporary and this error might be removed after retries.  |

## Access Code Warning Types

Warnings are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| **`delay_in_setting_on_device`**    | There was an unusually long delay in programming the code onto the device. For time bound codes, this is sent when the code enters its active time. Note that this is a temporary warning and might be removed if the code is successfully set. |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`delay_in_removing_from_device`** | There was an unusually long delay in remove the code from the device. Note that this is a temporary warning and might be removed if the code is successfully removed.                                                                           |

### List of Methods

| [Create an Access Code](create-an-access-code.md)       | Create an Access Code           |
| ------------------------------------------------------- | ------------------------------- |
| [Create many Access Codes](create-many-access-codes.md) | Create many Access Codes        |
| [Update an Access Code](update-an-access-code.md)       | Update an Access Code           |
| [Delete an Access Code](delete-an-access-code.md)       | Delete an Access Code           |
| [Retrieve an Access Code](get-an-access-code.md)        | Retrieve an Access Code         |
| [Retrieve a list of Access Codes](list-access-codes.md) | Retrieve a list of Access Codes |
