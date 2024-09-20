# List ACS Users

```
POST /acs/users/list ⇒ { acs_users: [acs_user, …] }
```

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Request Parameters

### `acs_system_id`

Type: `string`\
Required: No

ID of the `acs_system` for which you want to retrieve all `acs_user`s.

---

### `created_before`

Type: `string`\
Required: No



---

### `limit`

Type: `number`\
Required: No



---

### `user_identity_email_address`

Type: `string`\
Required: No

Email address of the user identity for which you want to retrieve all `acs_user`s.

---

### `user_identity_id`

Type: `string`\
Required: No

ID of the user identity for which you want to retrieve all `acs_user`s.

---

### `user_identity_phone_number`

Type: `string`\
Required: No

Phone number of the user identity for which you want to retrieve all `acs_user`s, in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, `+15555550100`).

---

## Return Type

Array<[acs_user](./README.md)>
