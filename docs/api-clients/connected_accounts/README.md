---
description: >-
  An external third-party account that your user has authorized Seam to get
  access to, i.e. an August account with a list of door locks.
---

# Connected Accounts

## `connected_account` Properties

| Attributes                         | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connected_account_id`             | string                      | ID of the Connected Account.                                                                                                                                                                                                                                                                                                                                                            |
| `created_at`                       | <p>ISO8601<br>timestamp</p> | Timestamp of the date when the Connected Account was created.                                                                                                                                                                                                                                                                                                                           |
| `user_identifier`                  | JSON object                 | The unique identifier for the Connected Account. Could be an email or phone number.                                                                                                                                                                                                                                                                                                     |
| `account_type`                     | string                      | <p>Type of manufacturer the Connected Account belongs to.<br>Options include: <code>august</code>, <code>schlage</code>, <code>yale</code>, <code>salto</code>, <code>smartthings</code></p>                                                                                                                                                                                            |
| `account_type_display_name`        | string                      | A version of `account_type` that can go into a user interface                                                                                                                                                                                                                                                                                                                           |
| `custom_metadata`                  | JSON object                 | <p>Set of <code>custom_metadata</code> set on the <a href="../../core-concepts/connect-webviews/">Connect Webview</a> that connected the account. You can also modify or add to this <code>custom_metadata</code>.<br>Specify up to 50 keys, with key names up to 40 characters long. Accepts string or Boolean values. Strings are limited to 500 characters.</p>                      |
| `automatically_manage_new_devices` | Boolean                     | <p>Indicates whether Seam should import all new devices for the connected account to make these devices available for use and management by the Seam API.<br>You <a href="../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices">initially specify the value for this property</a> when creating the corresponding Connect Webview.</p> |

## List of Methods

| [Get Connected Account](get.md)                           | Get a Connected Account.          |
| --------------------------------------------------------- | --------------------------------- |
| [List Connected Accounts](list.md)                        | Get a list of Connected Accounts. |
| [Update Connected Account](update-a-connected-account.md) | Update a Connected Account.       |
| [Delete Connected Accounts](delete.md)                    | Delete a Connected Account.       |

## Connected Account Error Types

Errors are returned in a list:

```
"errors": [
  {
    "is_connected_account_error": true,
    "error_code": "account_disconnected",
    "message": "Account Disconnected, you may need to reconnect the account with a new webview.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

### Generic Errors

Seam recommends adding error handling logic to you application for each generic error below. Seam may add more generic errors in the future, so your application should include a fallback case if it encounters an unknown generic error code.

| Error Type             | Description                                                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `account_disconnected` | Seam has lost connection to a connected account. This may happen if the third-party provider triggered an access token to be revoked (e.g., after a password change). The account owner needs to reconnect the connected account with a new connect webview. |

## Connected Account Warning Types

Warnings are returned in a list:

```
"warnings": [
  {
    "warning_code": "devices_connected_to_other_account",
    "message": "Some devices on this account are already connected to another account.",
    "device_ids": [
      '8e9f2768-18d9-4ac2-845a-2£6fb507ea1f',
      '554acc7a-3cc8-4690-9a5e-b5c863295ee1',
      '06bfa00f-50c5-46ba-853-6£855c11632'
    ],
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

| Warning Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `devices_connected_to_other_account` | This warning indicates that there are devices linked to the current account that are already associated with a different account. It is important to note that these devices cannot be concurrently connected to multiple accounts. To resolve this issue, you may need to disassociate the devices from the other account before connecting them to the current account. Please ensure that the device IDs mentioned on `device_ids` are properly managed and linked to the intended account to avoid any connectivity conflicts. |
