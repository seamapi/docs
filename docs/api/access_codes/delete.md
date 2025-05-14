# Delete an Access Code

```
POST /access_codes/delete ⇒ void
```

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: Yes

ID of the access code to delete.

***

### `device_id`

Format: `UUID`
Required: No

ID of the device for which to delete the access code.

***

## Return Type

void
