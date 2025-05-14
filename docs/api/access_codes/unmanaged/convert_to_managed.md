# Convert an Unmanaged Access Code

```
PATCH /access_codes/unmanaged/convert_to_managed ⇒ void
```

Converts an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) to an [access code managed through Seam](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An unmanaged access code has a limited set of operations that you can perform on it. Once you convert an unmanaged access code to a managed access code, the full set of access code operations and lifecycle events becomes available for it.

Note that not all device providers support converting an unmanaged access code to a managed access code.

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: Yes

ID of the unmanaged access code that you want to convert to a managed access code.

***

### `allow_external_modification`

Format: `Boolean`
Required: No

Indicates whether external modification of the access code is allowed.

***

### `force`

Format: `Boolean`
Required: No

Indicates whether to force the access code conversion. To switch management of an access code from one Seam workspace to another, set `force` to `true`.

***

### `is_external_modification_allowed`

Format: `Boolean`
Required: No

Indicates whether external modification of the access code is allowed.

***

## Return Type

void
