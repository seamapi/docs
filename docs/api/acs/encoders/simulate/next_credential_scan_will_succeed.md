# Simulate that the Next Credential Scan Will Succeed

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/simulate/next_credential_scan_will_succeed ⇒ void
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

**`acs_encoder_id`** *string* (Required)

ID of the `acs_encoder` that will be used in the next request to scan the `acs_credential`.

---

**`acs_credential_id_on_seam`** *string*

ID of the Seam `acs_credential` that matches the `acs_credential` on the encoder in this simulation.

---

**`scenario`** *string*

Scenario to simulate.

---


## Response

void
