# Delete an Unmanaged Access Code

```
POST /access_codes/unmanaged/delete ⇒ void
```

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: Yes

ID of the unmanaged access code to delete.

***

## Return Type

void
