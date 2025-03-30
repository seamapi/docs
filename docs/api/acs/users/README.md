# ACS Users

The ACS Users route contains the following resources:

## The `acs_user` Resource

Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An `acs_user` typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the Salto system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

For details about how to configure `acs_user`s in your access control system, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

---

## Properties

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the [ACS user's](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access.

<details>

<summary>Child Properties</summary>

- <b><code>ends_at</code></b> <i>Datetime</i>

  Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.



- <b><code>starts_at</code></b> <i>Datetime</i>

  Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</details>


---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`acs_user_id`** *UUID*

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`created_at`** *Datetime*

Date and time at which the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created.


---

**`display_name`** *String*

Display name for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`email`** *String*

{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}


---

**`email_address`** *String*

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

[**`errors`**](./#errors-1) *List* *of Objects*

Errors associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`external_type`** *Enum*

Brand-specific terminology for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.

<details>

<summary>Enum values</summary>

- `pti_user`
- `brivo_user`
- `hid_credential_manager_user`
- `salto_site_user`
- `latch_user`
- `dormakaba_community_user`
- `salto_space_user`
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.


---

**`full_name`** *String*

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`hid_acs_system_id`** *UUID*


---

**`is_managed`** *Boolean*


---

**`is_suspended`** *Boolean*

Indicates whether the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).


---

**`phone_number`** *String*

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).


---

**`user_identity_email_address`** *String*

Email address of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`user_identity_full_name`** *String*

Full name of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`user_identity_id`** *String*

ID of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`user_identity_phone_number`** *String*

Phone number of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).


---

[**`warnings`**](./#warnings-1) *List* *of Objects*

Warnings associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


---


## Errors

**`deleted_externally`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) outside of Seam.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) could not be subscribed on Salto KS because the subscription limit has been exceeded.

---

**`failed_to_create_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not created on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_update_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not updated on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_delete_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not deleted on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---


## Warnings

**`being_deleted`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is being deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is a temporary state, and the ACS user will be deleted shortly.

---

**`salto_ks_user_not_subscribed`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is not subscribed on Salto KS, so they cannot unlock doors or perform any actions. This occurs when the their access schedule hasn’t started yet, if their access schedule has ended, if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

---

**`unknown_issue_with_acs_user`**

An unknown issue occurred while syncing the state of this [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) with the provider. This issue may affect the proper functioning of this user.

---


## Events

**`acs_user.deleted`**

An [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted.

<details>

<summary>Properties</summary>

- <b><code>acs_system_id</code></b> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <b><code>acs_user_id</code></b> <i>UUID</i>



- <b><code>connected_account_id</code></b> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which the event was created.



- <b><code>event_id</code></b> <i>UUID</i>

  ID of the event.



- <b><code>event_type</code></b> <i>String</i>



- <b><code>occurred_at</code></b> <i>Datetime</i>

  Date and time at which the event occurred.



- <b><code>workspace_id</code></b> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

## Endpoints


[**`/acs/users/add_to_access_group`**](./add_to_access_group.md)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/users/create`**](./create.md)

Creates a new [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/delete`**](./delete.md)

Deletes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the ACS user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).


[**`/acs/users/get`**](./get.md)

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/list`**](./list.md)

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/list_accessible_entrances`**](./list_accessible_entrances.md)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.


[**`/acs/users/remove_from_access_group`**](./remove_from_access_group.md)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/users/revoke_access_to_all_entrances`**](./revoke_access_to_all_entrances.md)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/suspend`**](./suspend.md)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.


[**`/acs/users/unsuspend`**](./unsuspend.md)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an ACS user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the ACS user restores their access.


[**`/acs/users/update`**](./update.md)

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


