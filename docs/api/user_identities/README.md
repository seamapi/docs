# User Identities

## The user_identity Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) associated with an application user account.

{% tabs %}
{% tab title="User Identity" %}

User Identity

```json
{
  "created_at": "2025-06-16T16:54:17.946546Z",
  "display_name": "Jane Doe",
  "email_address": "jane@example.com",
  "errors": [],
  "full_name": "Jane Doe",
  "phone_number": "+1555551002",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "user_identity_key": "jane_doe",
  "warnings": [],
  "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`created_at`** *Datetime*

Date and time at which the user identity was created.




---

**`display_name`** *String*





---

**`email_address`** *String*

Unique email address for the user identity.




---

**`errors`** *List* *of Objects*

Array of errors associated with the user identity. Each error object within the array contains two fields: "error_code" and "message." "error_code" is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which Seam created the error.

  <strong><code>message</code></strong> <i>String</i>
  
    Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
</details>

---

**`full_name`** *String*





---

**`phone_number`** *String*

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).




---

**`user_identity_id`** *UUID*

ID of the user identity.




---

**`user_identity_key`** *String*

Unique key for the user identity.




---

[**`warnings`**](./#warnings) *List* *of Objects*

Array of warnings associated with the user identity. Each warning object within the array contains two fields: "warning_code" and "message." "warning_code" is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>being_deleted</code></summary>

Indicates that the user identity is currently being deleted.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>being_deleted</code>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the user identity.




---


## Warnings

**`being_deleted`**

Indicates that the user identity is currently being deleted.

---

## Endpoints


[**`/user_identities/add_acs_user`**](./add_acs_user.md)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/create`**](./create.md)

Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/delete`**](./delete.md)

Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). This deletes the user identity and all associated resources, including any [credentials](https://docs.seam.co/latest/api/access-control-systems/credentials), [acs users](https://docs.seam.co/latest/api/access-control-systems/users) and [client sessions](https://docs.seam.co/latest/api/client_sessions).


[**`/user_identities/generate_instant_key`**](./generate_instant_key.md)

Generates a new [instant key](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/instant-keys) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/get`**](./get.md)

Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/grant_access_to_device`**](./grant_access_to_device.md)

Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).


[**`/user_identities/list`**](./list.md)

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_accessible_devices`**](./list_accessible_devices.md)

Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_acs_systems`**](./list_acs_systems.md)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/list_acs_users`**](./list_acs_users.md)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/remove_acs_user`**](./remove_acs_user.md)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/revoke_access_to_device`**](./revoke_access_to_device.md)

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


[**`/user_identities/update`**](./update.md)

Updates a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


