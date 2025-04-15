# Enrollment Automations

## The enrollment_automation Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) within the [Seam mobile access solution](https://docs.seam.co/latest/capability-guides/mobile-access-in-development).

{% tabs %}
{% tab title="JSON" %}
```json
{
  created_at: [example value],
  credential_manager_acs_system_id: [example value],
  enrollment_automation_id: [example value],
  user_identity_id: [example value],
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
Date and time at which the enrollment automation was created.


</td></tr>

<tr><td>**`credential_manager_acs_system_id`** *UUID*</td>
<td>
ID of the associated [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) that serves as the credential manager.


</td></tr>

<tr><td>**`enrollment_automation_id`** *UUID*</td>
<td>
ID of the enrollment automation.


</td></tr>

<tr><td>**`user_identity_id`** *UUID*</td>
<td>
ID of the associated [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


</td></tr>

<tr><td>**`workspace_id`** *UUID*</td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the enrollment automation.


</td></tr>

</table>

## Events

**`enrollment_automation.deleted`**

An [enrollment automation](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) was deleted.

<details>

<summary>Properties</summary>

- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>enrollment_automation_id</code></strong> <i>UUID</i>

  ID of the [enrollment automation](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut).



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


[**`/user_identities/enrollment_automations/delete`**](./delete.md)

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).


[**`/user_identities/enrollment_automations/get`**](./get.md)

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).


[**`/user_identities/enrollment_automations/launch`**](./launch.md)

Sets up a new [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) with a specified [credential manager](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).


[**`/user_identities/enrollment_automations/list`**](./list.md)

Returns a list of all [enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


