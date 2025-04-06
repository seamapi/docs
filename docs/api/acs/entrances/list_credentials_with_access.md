# List Credentials with Access to an Entrance

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% hint style="success" %}
```
POST /acs/entrances/list_credentials_with_access ⇒ { acs_credentials: [acs_credential, …] }
```
{% endhint %}

## Parameters

**`acs_entrance_id`** **
 (Required)

---

**`include_if`** ** *of Enums*

<details>

<summary>Enum values</summary>

Possible enum values:
- `visionline_metadata.is_valid`
</details>

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

Array<[acs\_credential](./)>
