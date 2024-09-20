# Update an ACS User

```
POST /acs/users/update ⇒ void
```

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Request Parameters

### `access_schedule`

Type: `object`\
Required: No

`starts_at` and `ends_at` timestamps for the `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`. Only applicable to Salto KS access control systems.

---

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the `acs_user`.

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

### `hid_acs_system_id`

Type: `string`\
Required: No



---

### `phone_number`

Type: `string`\
Required: No

Phone number of the `acs_user` in E.164 format (for example, `+15555550100`).

---

## Return Type

void
