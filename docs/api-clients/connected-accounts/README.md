---
description: >-
  An external third-party account that your user has authorized Seam to get
  access to, i.e. an August account with a list of door locks.
---

# Connected Accounts

## The Connected Account object

| Attributes             | Type                        | Description                                                                                                                                                                                  |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connected_account_id` | string                      | ID of the Connected Account.                                                                                                                                                                 |
| `created_at`           | <p>ISO8601<br>timestamp</p> | Timestamp of the date when the Connected Account was created.                                                                                                                                |
| `user_identifier`      | JSON object                 | The unique identifier for the Connected Account. Could be an email or phone number.                                                                                                          |
| `account_type`         | string                      | <p>Type of manufacturer the Connected Account belongs to.<br>Options include: <code>august</code>, <code>schlage</code>, <code>yale</code>, <code>salto</code>, <code>smartthings</code></p> |
| `custom_metadata`      | JSON object                 | The `custom_metadata` set on the webview that connected the account.                                                                                                                       |

## List of Methods

| [Get Connected Account](get-a-connected-account.md)   | Get a Connected Account.          |
| ----------------------------------------------------- | --------------------------------- |
| [List Connected Accounts](list-connected-accounts.md) | Get a list of Connected Accounts. |



## Connected Account Error Types

Errors are returned in a list:

```
"errors": [
  {
    "error_code": "account_disconnected",
    "message": "Account Disconnected, you may need to reconnect the account with a new webview.",
    "created_at": "2023-06-27T22:50:19.440Z
  }
]
```

### Generic Errors

Seam recommends adding error handling logic to you application for each generic error below.
Seam may add more generic errors in the future, so your application should include a fallback case
if it encounters an unknown generic error code.

| Error Type             | Description                                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account_disconnected` | Account Disconnected, you may need to reconnect the account with a new webview. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change) |
