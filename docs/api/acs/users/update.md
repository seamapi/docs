# Update an ACS User

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
PATCH /acs/users/update ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_user_id`** *string*
Required: Yes

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`access_schedule`** *object*
Required: No

`starts_at` and `ends_at` timestamps for the `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`.

---

**`email`** *string*
Required: No

---

**`email_address`** *string*
Required: No

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`full_name`** *string*
Required: No

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`hid_acs_system_id`** *string*
Required: No

---

**`phone_number`** *string*
Required: No

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

---


## Return Type

void
