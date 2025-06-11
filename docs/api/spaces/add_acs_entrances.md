# Add Entrances to a Space
{% hint style="info" %}
The Spaces API is available for early access. We value your feedback
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Adds [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) to a specific space.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_ids`** *Array* *of UUIDs* (Required)

IDs of the entrances that you want to add to the space.

---

**`space_id`** *String* (Required)

ID of the space to which you want to add entrances.

---


## Response

void

