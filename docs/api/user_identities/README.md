# User Identities

## The user_identity Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) associated with an application user account.

{% tabs %}
{% tab title="JSON" %}
```json
{
  created_at: [example value],
  display_name: [example value],
  email_address: [example value],
  full_name: [example value],
  phone_number: [example value],
  user_identity_id: [example value],
  user_identity_key: [example value],
  workspace_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th>** Property **</th><th>** Description **</th></tr>
<tr><td>**`created_at`** *Datetime*</td>
<td>
Date and time at which the user identity was created.


</td></tr>

<tr><td>**`display_name`** *String*</td>
<td>

</td></tr>

<tr><td>**`email_address`** *String*</td>
<td>
Unique email address for the user identity.


</td></tr>

<tr><td>**`full_name`** *String*</td>
<td>

</td></tr>

<tr><td>**`phone_number`** *String*</td>
<td>
Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).


</td></tr>

<tr><td>**`user_identity_id`** *UUID*</td>
<td>
ID of the user identity.


</td></tr>

<tr><td>**`user_identity_key`** *String*</td>
<td>
Unique key for the user identity.


</td></tr>

<tr><td>**`workspace_id`** *UUID*</td>
<td>
ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the user identity.


</td></tr>

</table>
## Endpoints


[**`/user_identities/add_acs_user`**](./add_acs_user.md)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/create`**](./create.md)

Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/delete`**](./delete.md)

Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). To delete a user identity, you must first delete any [ACS credentials](https://docs.seam.co/latest/api/access-control-systems/credentials) and [enrollment automations](https://docs.seam.co/latest/api/user_identities/enrollment_automations/delete) associated with the user identity. You must also deactivate any associated phones.


[**`/user_identities/get`**](./get.md)

Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/grant_access_to_device`**](./grant_access_to_device.md)

Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).


[**`/user_identities/list`**](./list.md)

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_accessible_devices`**](./list_accessible_devices.md)

Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_acs_systems`**](./list_acs_systems.md)

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_acs_users`**](./list_acs_users.md)

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/remove_acs_user`**](./remove_acs_user.md)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/revoke_access_to_device`**](./revoke_access_to_device.md)

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/update`**](./update.md)




