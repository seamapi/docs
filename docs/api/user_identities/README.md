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
<tr><th width="250">Property</th><th>Description</th></tr>
<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the user identity was created.


</td></tr>

<tr><td><strong><code>display_name</code></strong> <i>String</i></td>
<td>

</td></tr>

<tr><td><strong><code>email_address</code></strong> <i>String</i></td>
<td>
Unique email address for the user identity.


</td></tr>

<tr><td><strong><code>full_name</code></strong> <i>String</i></td>
<td>

</td></tr>

<tr><td><strong><code>phone_number</code></strong> <i>String</i></td>
<td>
Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).


</td></tr>

<tr><td><strong><code>user_identity_id</code></strong> <i>UUID</i></td>
<td>
ID of the user identity.


</td></tr>

<tr><td><strong><code>user_identity_key</code></strong> <i>String</i></td>
<td>
Unique key for the user identity.


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the user identity.


</td></tr>

</table>
</table>

## Endpoints

<table>
<tr><th width="250">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./add_acs_user.md"><strong><code>/user_identities/add_acs_user</code></strong></a></td>

<td>Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./create.md"><strong><code>/user_identities/create</code></strong></a></td>

<td>Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./delete.md"><strong><code>/user_identities/delete</code></strong></a></td>

<td>Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). To delete a user identity, you must first delete any [ACS credentials](https://docs.seam.co/latest/api/access-control-systems/credentials) and [enrollment automations](https://docs.seam.co/latest/api/user_identities/enrollment_automations/delete) associated with the user identity. You must also deactivate any associated phones.</td></tr>


<tr><td><a href="./get.md"><strong><code>/user_identities/get</code></strong></a></td>

<td>Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./grant_access_to_device.md"><strong><code>/user_identities/grant_access_to_device</code></strong></a></td>

<td>Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).</td></tr>


<tr><td><a href="./list.md"><strong><code>/user_identities/list</code></strong></a></td>

<td>Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./list_accessible_devices.md"><strong><code>/user_identities/list_accessible_devices</code></strong></a></td>

<td>Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./list_acs_systems.md"><strong><code>/user_identities/list_acs_systems</code></strong></a></td>

<td>Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./list_acs_users.md"><strong><code>/user_identities/list_acs_users</code></strong></a></td>

<td>Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./remove_acs_user.md"><strong><code>/user_identities/remove_acs_user</code></strong></a></td>

<td>Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./revoke_access_to_device.md"><strong><code>/user_identities/revoke_access_to_device</code></strong></a></td>

<td>Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).</td></tr>


<tr><td><a href="./update.md"><strong><code>/user_identities/update</code></strong></a></td>

<td></td></tr>

</table>
