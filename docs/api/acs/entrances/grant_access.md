# Grant an ACS User Access to an Entrance



{% hint style="success" %}
```
POST /acs/entrances/grant_access ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_entrance_id`** *String* (Required)

---

**`acs_user_id`** *String* (Required)

---


## Return Type

void
