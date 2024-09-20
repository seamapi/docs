# Unsuspend an ACS User

```
POST /acs/users/unsuspend ⇒ void
```

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an ACS user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the ACS user restores their access.

## Request Parameters

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the desired `acs_user`.

---

## Return Type

void
