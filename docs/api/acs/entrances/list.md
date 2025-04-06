# List Entrances

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% hint style="success" %}
```
POST /acs/entrances/list ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_credential_id`** *string*
Required: No

---

**`acs_system_id`** *string*
Required: No

---


## Return Type

Array<[acs\_entrance](./)>
