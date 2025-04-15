# Get Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a single phone entry matching the provided `device_id`.

{% tabs %}
{% tab title="Signature" %}
```
POST /phones/get ⇒ { phone }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication]{https://docs.seam.co/latest/api/authentication}.
</details>

## Request Parameters

**`device_id`** *String* (Required)

Device ID of the desired phone.

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
