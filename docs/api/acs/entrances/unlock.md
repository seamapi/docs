# Unlock an Entrance

- [Request Parameters](#request-parameters)
- [Response](#response)

Remotely unlocks a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) using a cloud_key credential. Returns an action attempt that tracks the progress of the unlock operation.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_credential_id`** *String* (Required)

ID of the cloud_key credential to use for the unlock operation.

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
