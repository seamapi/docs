# Update a User Identity

```
PATCH /user_identities/update ⇒ void
```



## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `user_identity_id`

Format: `UUID`
Required: Yes

ID of the user identity.

***

### `email_address`

Format: `String`
Required: No

Unique email address for the user identity.

***

### `full_name`

Format: `String`
Required: No

***

### `phone_number`

Format: `String`
Required: No

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

***

### `user_identity_key`

Format: `String`
Required: No

Unique key for the user identity.

***

## Return Type

void
