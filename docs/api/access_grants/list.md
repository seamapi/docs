# List Access Grants
{% hint style="info" %}
**Early Access Preview.** The access grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Get an access grant.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`** *String*

````
ID of entrance to filter list of access grants by.
````

---

**`acs_system_id`** *String*

````
ID of system to filter list of access grants by.
````

---

**`location_id`** *String*

---

**`space_id`** *String*

````
ID of space to filter list of access grants by.
````

---

**`user_identity_id`** *String*

````
ID of user identity to filter list of access grants by.
````

---


## Response

Array of [access\_grants](./)

