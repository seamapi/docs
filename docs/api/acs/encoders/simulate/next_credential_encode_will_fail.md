# Simulate that the Next Credential Encoding Will Fail

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% hint style="success" %}
```
POST /acs/encoders/simulate/next_credential_encode_will_fail ⇒ void
```
{% endhint %}

## Parameters

**`acs_encoder_id`** ** (Required)

ID of the `acs_encoder` that will be used in the next request to encode the `acs_credential`.

---

**`acs_credential_id`** **

ID of the `acs_credential` that will fail to be encoded onto a card in the next request.

---

**`error_code`** **

Code of the error to simulate.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
