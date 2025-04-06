# List ACS Users

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
POST /acs/users/list ⇒ { acs_users: [acs_user, …] }
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

**`acs_system_id`** *string*
Required: No

ID of the `acs_system` for which you want to retrieve all `acs_user`s.

---

**`created_before`** *string*
Required: No

---

**`limit`** *number*
Required: No

Maximum number of records to return per page.

---

**`page_cursor`** *string*
Required: No

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *string*
Required: No

String for which to search. Filters returned `acs_user`s to include all records that satisfy a partial match using `full_name`, `phone_number`, or `email_address`.

---

**`user_identity_email_address`** *string*
Required: No

Email address of the user identity for which you want to retrieve all `acs_user`s.

---

**`user_identity_id`** *string*
Required: No

ID of the user identity for which you want to retrieve all `acs_user`s.

---

**`user_identity_phone_number`** *string*
Required: No

Phone number of the user identity for which you want to retrieve all `acs_user`s, in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, `+15555550100`).

---


## Return Type

Array<[acs\_user](./)>
