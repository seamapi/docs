# Remove Devices from a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is available for early access. Check it out and send us your feedback at [support@seam.co](mailto:support@seam.co).
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Removes devices from a specific space.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_ids`** *Array* *of UUIDs* (Required)

IDs of the devices that you want to remove from the space.

---

**`space_id`** *String* (Required)

ID of the space from which you want to remove devices.

---


## Response

void

