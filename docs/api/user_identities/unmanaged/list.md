# List Unmanaged User Identities

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all unmanaged [user identities](../../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) (where is_managed = false).


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`created_before`** *String*

Timestamp by which to limit returned unmanaged user identities. Returns user identities created before this timestamp.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned unmanaged user identities to include all records that satisfy a partial match using `full_name`, `phone_number`, `email_address`,  `user_identity_id` or `acs_system_id`.

---


## Response

{% hint style="success" %}
**Returns:**
Array of [unknowns](./)

{% endhint %}

