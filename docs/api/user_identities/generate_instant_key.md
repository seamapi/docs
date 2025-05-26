# Generate an Instant Key

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Generates a new [instant key](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/instant-keys) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/generate_instant_key ⇒ { instant_key }
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

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to generate an instant key.

---

**`max_use_count`** *Number*

The maximum number of times the instant key can be used. Defaults to 1.

---


## Response

[instant\_key](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of instant_key
}
```
{% endtab %}
{% endtabs %}
