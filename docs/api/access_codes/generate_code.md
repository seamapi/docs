# Generate a Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Generates a code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes), given a device ID.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/generate_code ⇒ { generated_code }
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

**`device_id`** *String* (Required)

ID of the device for which you want to generate a code.

---


## Response

[access\_code](./)

