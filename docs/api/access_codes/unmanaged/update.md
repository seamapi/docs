# Update an Unmanaged Access Code

```
PATCH /access_codes/unmanaged/update ⇒ void
```

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: Yes

ID of the unmanaged access code that you want to update.

***

### `is_managed`

Format: `Boolean`
Required: Yes

***

### `allow_external_modification`

Format: `Boolean`
Required: No

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

***

### `force`

Format: `Boolean`
Required: No

Indicates whether to force the unmanaged access code update.

***

### `is_external_modification_allowed`

Format: `Boolean`
Required: No

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

***

## Return Type

void
