# Remove an ACS User from an Access Group

```
POST /acs/users/remove_from_access_group ⇒ void
```

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

## Request Parameters

### `acs_access_group_id`

Type: `string`\
Required: Yes

ID of the desired access group.

---

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the desired `acs_user`.

---

## Return Type

void
