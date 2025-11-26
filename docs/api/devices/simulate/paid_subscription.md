# Simulate Paid Subscription

- [Request Parameters](#request-parameters)
- [Response](#response)

Toggle the simulated Nuki Smart Hosting subscription for a device (sandbox only).
Send `is_expired: true` to simulate an expired subscription, or `false` to simulate an active subscription.
The actual device error is created/cleared by the poller after this state change.


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

---

**`is_expired`** *Boolean* (Required)

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

