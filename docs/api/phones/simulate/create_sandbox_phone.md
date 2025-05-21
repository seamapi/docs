# Create a Sandbox Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). For more information, see [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /phones/simulate/create_sandbox_phone ⇒ { phone }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`**  (Required)

ID of the user identity to associate with the simulated phone.

---

**`assa_abloy_metadata`** 

ASSA ABLOY metadata to associate with the simulated phone.

---

**`custom_sdk_installation_id`** 

ID of the custom SDK installation to use for the simulated phone.

---

**`phone_metadata`** 

Metadata to associate with the simulated phone.

---


## Response

[phone](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of phone
}
```
{% endtab %}
{% endtabs %}
