# Update an ACS User

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
PATCH /acs/users/update ⇒ void
```
{% endhint %}

## Parameters

**`acs_user_id`** ** (Required)

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`access_schedule`** **

`starts_at` and `ends_at` timestamps for the `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`.

---

**`email`** **

---

**`email_address`** **

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`full_name`** **

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`hid_acs_system_id`** **

---

**`phone_number`** **

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
