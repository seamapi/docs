# Suspend an ACS User

```
POST /acs/users/suspend ⇒ void
```

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

## Request Parameters

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the desired `acs_user`.

---

## Return Type

void
