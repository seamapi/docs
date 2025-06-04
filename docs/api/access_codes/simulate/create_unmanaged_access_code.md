# Simulate Creating an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates the creation of an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/simulate/create_unmanaged_access_code ⇒ { access_code }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`code`** *String* (Required)

Code of the simulated unmanaged access code.

---

**`device_id`** *String* (Required)

ID of the device for which you want to simulate the creation of an unmanaged access code.

---

**`name`** *String* (Required)

Name of the simulated unmanaged access code.

---


## Response

[unmanaged\_access\_code](./)

