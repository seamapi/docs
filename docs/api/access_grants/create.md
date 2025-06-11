# Create an Access Grant

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new access grant.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`requested_access_methods`** *Array* *of Objects* (Required)

---

**`acs_entrance_ids`** *Array* *of UUIDs*

Set of IDs of the [entrances](https://docs.seam.co/latest/api/acs/systems/list) to which access is being granted.

---

**`device_ids`** *Array* *of UUIDs*

Set of IDs of the [devices](https://docs.seam.co/latest/api/devices/list) to which access is being granted.

---

**`ends_at`** *String*

Date and time at which the validity of the new grant ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`location`** *Object*

When used, creates a new location with the given entrances and devices, and gives the user access to this location.

<details>

<summary><b><code>acs_entrance_ids</code></b> <i>List</i></summary>

{% hint style="warning" %}
**Deprecated**. Use `acs_entrance_ids` at the top level.
{% endhint %}

</details>

---



<details>

<summary><b><code>device_ids</code></b> <i>List</i></summary>

{% hint style="warning" %}
**Deprecated**. Use `device_ids` at the top level.
{% endhint %}

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Name of the location.

</details>

---


**`location_ids`** *Array* *of UUIDs*

---

**`space_ids`** *Array* *of UUIDs*

Set of IDs of existing spaces to which access is being granted.

---

**`starts_at`** *String*

Date and time at which the validity of the new grant starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`user_identity`** *Object*

When used, creates a new user identity with the given details, and grants them access.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Unique email address for the user identity.

</details>

---



<details>

<summary><b><code>full_name</code></b> <i>String</i></summary>

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

</details>

---


**`user_identity_id`** *String*

ID of user identity for whom access is being granted.

---


## Response

[unknown](./)

