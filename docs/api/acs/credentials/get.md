# Get a Credential

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
POST /acs/credentials/get ⇒ { acs_credential }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_credential_id`** *String* (Required)

ID of the desired credential.

---


## Return Type

[acs\_credential](./)
