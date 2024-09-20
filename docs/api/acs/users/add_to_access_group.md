# Add an ACS User to an Access Group

```
PUT /acs/users/add_to_access_group ⇒ void
```

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

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
