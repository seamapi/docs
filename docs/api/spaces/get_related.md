# Get related Space resources
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets all related resources for one or more Spaces.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`exclude`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>connected_accounts</code>
- <code>acs_systems</code>
</details>

---

**`include`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>connected_accounts</code>
- <code>acs_systems</code>
</details>

---

**`space_ids`** *Array* *of UUIDs*

IDs of the spaces that you want to get along with their related resources.

---

**`space_keys`** *Array* *of Strings*

Keys of the spaces that you want to get along with their related resources.

---


## Response

{% hint style="success" %}
Returns:
**[unknown](./)**

{% endhint %}

