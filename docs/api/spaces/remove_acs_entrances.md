# Remove Entrances from a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Removes [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) from a specific space.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_ids`** *Array* *of UUIDs* (Required)

IDs of the entrances that you want to remove from the space.

---

**`space_id`** *String* (Required)

ID of the space from which you want to remove entrances.

---


## Response

void

