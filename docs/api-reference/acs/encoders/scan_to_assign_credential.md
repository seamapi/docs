# Scan to Assign a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Scans a physical card placed on the specified [encoder](https://docs.seam.co/low-level-apis/access-systems/working-with-card-encoders-and-scanners) and assigns the scanned credential to an ACS user. Provide either an `acs_user_id` or a `user_identity_id`.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` to use to scan the credential.

---

**`acs_user_id`** *String*

ID of the `acs_user` to assign the scanned credential to.

---

**`salto_ks_metadata`** *Object*

Salto KS-specific metadata for the scan action.

<details>

<summary><b><code>detect_new_tags</code></b> <i>Boolean</i></summary>

When true, activates tag registration mode on the encoder to detect new, unregistered tags. When false, only detects existing tags already registered in the system. Defaults to false.

</details>

---


**`user_identity_id`** *String*

ID of the `user_identity` to assign the scanned credential to. If the ACS system contains an ACS user linked to this user identity, it is used. Otherwise, one is created.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}

