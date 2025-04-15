# Get Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a single phone entry matching the provided `device_id`.

{% hint style="success" %}
```
POST /phones/get ⇒ { phone }
```
{% endhint %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
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
