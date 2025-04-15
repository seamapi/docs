# ACS Users

## The acs_user Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An `acs_user` typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the Salto system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

For details about how to configure `acs_user`s in your access control system, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_schedule: [example value],
  acs_system_id: [example value],
  acs_user_id: [example value],
  created_at: [example value],
  display_name: [example value],
  email: [example value],
  email_address: [example value],
  errors: [example value],
  external_type: [example value],
  external_type_display_name: [example value],
  full_name: [example value],
  hid_acs_system_id: [example value],
  is_managed: [example value],
  is_suspended: [example value],
  phone_number: [example value],
  user_identity_email_address: [example value],
  user_identity_full_name: [example value],
  user_identity_id: [example value],
  user_identity_phone_number: [example value],
  warnings: [example value],
  workspace_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_schedule</code></strong> <i>Object</i></td>
<td>
`starts_at` and `ends_at` timestamps for the [ACS user's](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access.

<details>

<summary>Child Properties</summary>

- <strong><code>ends_at</code></strong> <i>Datetime</i>

  Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.



- <strong><code>starts_at</code></strong> <i>Datetime</i>

  Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</details>


</td></tr>

<tr><td><strong><code>acs_system_id</code></strong> <i>UUID</i></td>
<td>
ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>acs_user_id</code></strong> <i>UUID</i></td>
<td>
ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created.


</td></tr>

<tr><td><strong><code>display_name</code></strong> <i>String</i></td>
<td>
Display name for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>email</code></strong> <i>String</i></td>
<td>
{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}


</td></tr>

<tr><td><strong><code>email_address</code></strong> <i>String</i></td>
<td>
Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><a href="./#errors"><strong><code>errors</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>external_type</code></strong> <i>Enum</i></td>
<td>
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


</td></tr>

<tr><td><strong><code>external_type_display_name</code></strong> <i>String</i></td>
<td>
Display name that corresponds to the brand-specific terminology for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.


</td></tr>

<tr><td><strong><code>full_name</code></strong> <i>String</i></td>
<td>
Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>hid_acs_system_id</code></strong> <i>UUID</i></td>
<td>

</td></tr>

<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>

</td></tr>

<tr><td><strong><code>is_suspended</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).


</td></tr>

<tr><td><strong><code>phone_number</code></strong> <i>String</i></td>
<td>
Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).


</td></tr>

<tr><td><strong><code>user_identity_email_address</code></strong> <i>String</i></td>
<td>
Email address of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>user_identity_full_name</code></strong> <i>String</i></td>
<td>
Full name of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>user_identity_id</code></strong> <i>String</i></td>
<td>
ID of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>user_identity_phone_number</code></strong> <i>String</i></td>
<td>
Phone number of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).


</td></tr>

<tr><td><a href="./#warnings"><strong><code>warnings</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


</td></tr>

</table>

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

- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <strong><code>acs_user_id</code></strong> <i>UUID</i>



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

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


