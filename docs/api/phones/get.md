# Get Phone

Returns a single phone entry matching the provided `device_id`.

{% hint style="info" %}
{% tabs %}
{% tab title="Signature" %}
```
POST /phones/get ⇒ { phone }
```

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

{% endtab %}
{% endtabs %}
{% endhint %}


## Request Parameters

### `device_id`

Type: `string`
Required: Yes

Device ID of the desired phone.

---


## Return Type

[phone](./)
