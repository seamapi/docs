# Get Phone

Returns a single phone entry matching the provided `device_id`.

{% hint style="success" %}
```
POST /phones/get ⇒ { phone }
```
{% endhint %}

## Parameters

**`device_id`** ** (Required)

Device ID of the desired phone.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

[phone](./)
