# Create an ACS User

```
POST /acs/users/create ⇒ { acs_user }
```

Creates a new [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Request Parameters

### `access_schedule`

Type: `object`\
Required: No

`starts_at` and `ends_at` timestamps for the new `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`. Only applicable to Salto KS access control systems.

---

### `acs_access_group_ids`

Type: `array`\
Required: No

Array of `access_group_id`s to indicate the access groups to which to add the new `acs_user`.

---

### `acs_system_id`

Type: `string`\
Required: Yes

ID of the `acs_system` to which to add the new `acs_user`.

---

### `email`

Type: `string`\
Required: No



---

### `email_address`

Type: `string`\
Required: No

Email address of the `acs_user`.

---

### `full_name`

Type: `string`\
Required: No

Full name of the `acs_user`.

---

### `phone_number`

Type: `string`\
Required: No

Phone number of the `acs_user` in E.164 format (for example, `+15555550100`).

---

### `user_identity_id`

Type: `string`\
Required: No

ID of the user identity with which to associate the new `acs_user`.

---

## Return Type

[acs_user](./README.md)
