# Unlock a Door with an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Remotely unlocks a specified [entrance](https://docs.seam.co/low-level-apis/access-systems/retrieving-entrance-details) using the cloud key credential associated with an access method. Returns an action attempt that tracks the progress of the unlock operation.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of the cloud_key `access_method` to use for the unlock operation.

---

**`acs_entrance_id`** *String* (Required)

ID of the entrance to unlock.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "error": null,
  "result": { "was_confirmed_by_device": false },
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
