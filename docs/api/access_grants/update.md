# Update an Access Grant
{% hint style="info" %}
**Early Access Preview.** The access grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an existing access grant's time window.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_id`** *String* (Required)

ID of the access grant to update.

---

**`ends_at`** *String*

Date and time at which the validity of the grant ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`starts_at`** *String*

Date and time at which the validity of the grant starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

void

