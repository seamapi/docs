# ACS Users

## `acs_user`

Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### access_schedule

Format: `Object`

`starts_at` and `ends_at` timestamps for the `acs_user`'s access.

<details>

<summary><code>ends_at</code> Format: <code>Datetime</code></summary>

Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

<details>

<summary><code>starts_at</code> Format: <code>Datetime</code></summary>

Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

---

### acs_system_id

Format: `ID`

ID of the access control system that contains the `acs_user`.

---

### acs_user_id

Format: `ID`

ID of the `acs_user`.

---

### created_at

Format: `Datetime`

Date and time at which the `acs_user` was created.

---

### display_name

Format: `String`

Display name for the `acs_user`.

---

### email

{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}

Format: `String`

---

### email_address

Format: `String`

Email address of the `acs_user`.

---

### [`errors`](./#errors-1)

Format: `List`

Errors associated with the `acs_user`.

---

### external_type

Format: `Enum`

Brand-specific terminology for the `acs_user` type.

Possible enum values:
- `pti_user`
- `brivo_user`
- `hid_credential_manager_user`
- `salto_site_user`
- `latch_user`
- `dormakaba_community_user`
- `salto_space_user`

---

### external_type_display_name

Format: `String`

Display name that corresponds to the brand-specific terminology for the `acs_user` type.

---

### full_name

Format: `String`

Full name of the `acs_user`.

---

### hid_acs_system_id

Format: `ID`

---

### is_managed

Format: `Boolean`

---

### is_suspended

Format: `Boolean`

Indicates whether the `acs_user` is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).

---

### phone_number

Format: `String`

Phone number of the `acs_user` in E.164 format (for example, `+15555550100`).

---

### user_identity_email_address

Format: `String`

Email address of the user identity associated with the `acs_user`.

---

### user_identity_full_name

Format: `String`

Full name of the user identity associated with the `acs_user`.

---

### user_identity_id

Format: `String`

ID of the user identity associated with the `acs_user`.

---

### user_identity_phone_number

Format: `String`

Phone number of the user identity associated with the `acs_user` in E.164 format (for example, `+15555550100`).

---

### [`warnings`](./#warnings-1)

Format: `List`

Warnings associated with the `acs_user`.

---

### workspace_id

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the `acs_user`.

---

## Errors

### `deleted_externally`

Indicates that the ACS user was deleted from the ACS system outside of Seam.

---

### `salto_ks_subscription_limit_exceeded`

Indicates that the user could not be subscribed on Salto KS because the subscription limit has been exceeded.

---

### `failed_to_create_on_acs_system`

Indicates that the user was not created on the ACS system. This is likely due to an internal unexpected error. Please contact Seam's support if you encounter this.

---

### `failed_to_update_on_acs_system`

Indicates that the user was not updated on the ACS system. This is likely due to an internal unexpected error. Please contact Seam's support if you encounter this.

---

### `failed_to_delete_on_acs_system`

Indicates that the user was not deleted on the ACS system. This is likely due to an internal unexpected error. Please contact Seam's support if you encounter this.

---

## Warnings

### `being_deleted`

Indicates that the user is being deleted from the ACS system. This is a temporary state, and the user will be deleted shortly.

---

### `salto_ks_user_not_subscribed`

Indicates that the user is not subscribed on the Salto KS, so they cannot unlock doors or perform any actions. This occur when the their access schedule hasn’t started yet, or if their access schedule has ended, or if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

---

### `unknown_issue_with_acs_user`

An unknown issue occurred while syncing the state of this user with the provider. This issue may affect the proper functioning of this user.

---

## Endpoints

### [`/acs/users/add_to_access_group`](./add_to_access_group.md)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/users/create`](./create.md)

Creates a new [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/delete`](./delete.md)

Deletes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the ACS user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).
### [`/acs/users/get`](./get.md)

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/list`](./list.md)

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/list_accessible_entrances`](./list_accessible_entrances.md)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.
### [`/acs/users/remove_from_access_group`](./remove_from_access_group.md)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/users/revoke_access_to_all_entrances`](./revoke_access_to_all_entrances.md)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/suspend`](./suspend.md)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.
### [`/acs/users/unsuspend`](./unsuspend.md)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an ACS user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the ACS user restores their access.
### [`/acs/users/update`](./update.md)

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Events

### `acs_user.deleted`

An [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted.

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>acs_user_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

