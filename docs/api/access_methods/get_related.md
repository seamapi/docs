# Get related Access Method resources
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets all related resources for one or more Access Methods.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_ids`** *Array* *of UUIDs* (Required)

IDs of the access methods that you want to get along with their related resources.

---

**`exclude`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>access_grants</code>
- <code>access_methods</code>
- <code>instant_keys</code>
- <code>client_sessions</code>
- <code>acs_credentials</code>
</details>

---

**`include`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>access_grants</code>
- <code>access_methods</code>
- <code>instant_keys</code>
- <code>client_sessions</code>
- <code>acs_credentials</code>
</details>

---


## Response

{% hint style="success" %}
Returns:
**[unknown](./)**

{% endhint %}

