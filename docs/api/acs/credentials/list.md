# List Credentials

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
POST /acs/credentials/list ⇒ { acs_credentials: [acs_credential, …] }
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

**`acs_system_id`** **

ID of the access control system for which you want to retrieve all credentials.

---

**`acs_user_id`** **

ID of the ACS user for which you want to retrieve all credentials.

---

**`created_before`** **

Date and time, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, before which events to return were created.

---

**`is_multi_phone_sync_credential`** **

Indicates whether you want to retrieve only multi-phone sync credentials or non-multi-phone sync credentials.

---

**`limit`** **

Number of credentials to return.

---

**`user_identity_id`** **

ID of the user identity for which you want to retrieve all credentials.

---


## Return Type

Array<[acs\_credential](./)>
