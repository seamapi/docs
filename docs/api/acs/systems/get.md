# Get an ACS System

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

{% hint style="success" %}
```
POST /acs/systems/get ⇒ { acs_system }
```
{% endhint %}

## Parameters

**`acs_system_id`** *String* (Required)

ID of the desired access control system.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[acs\_system](./)
