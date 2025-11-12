# Get related Access Grant resources
{% hint style="info" %}
**Early Access Preview.** The Access Grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets all related resources for one or more Access Grants.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_ids`** *Array* *of UUIDs* (Required)

IDs of the access grants that you want to get along with their related resources.

---

**`exclude`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>connected_accounts</code>
- <code>acs_systems</code>
- <code>user_identities</code>
- <code>acs_access_groups</code>
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
- <code>user_identities</code>
- <code>acs_access_groups</code>
</details>

---


## Response

{% hint style="success" %}
Returns:
**[unknown](./)**

{% endhint %}

