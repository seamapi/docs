# Get Phone

Returns a single phone entry matching the provided `device_id`.

{% hint style="success" %}
```
POST /phones/get ⇒ { phone }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`device_id`** *String* (Required)

Device ID of the desired phone.

---


## Return Type

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
