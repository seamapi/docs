# Create a Sandbox Phone

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). For more information, see [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).

{% hint style="success" %}
```
POST /phones/simulate/create_sandbox_phone ⇒ { phone }
```
{% endhint %}

## Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity to associate with the simulated phone.

---

**`assa_abloy_metadata`** *Object*

ASSA ABLOY metadata to associate with the simulated phone.

---

**`custom_sdk_installation_id`** *String*

ID of the custom SDK installation to use for the simulated phone.

---

**`phone_metadata`** *Object*

Metadata to associate with the simulated phone.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[phone](./)
