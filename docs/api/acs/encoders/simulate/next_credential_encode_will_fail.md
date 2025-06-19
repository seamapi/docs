# Simulate that the Next Credential Encoding Will Fail

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_encoder_id`** *String* (Required)

````
ID of the `acs_encoder` that will be used in the next request to encode the `acs_credential`.
````

---

**`acs_credential_id`** *String*

````
ID of the `acs_credential` that will fail to be encoded onto a card in the next request.
````

---

**`error_code`** *String*

````
Code of the error to simulate.
````

---


## Response

void

