# List Phones

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [phones](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md). To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_credential_id`** *String*

ID of the [credential](../../capability-guides/access-systems/managing-credentials.md) by which you want to filter the list of returned phones.

---

**`owner_user_identity_id`** *String*

ID of the user identity that represents the owner by which you want to filter the list of returned phones.

---


## Response

Array of [phones](./)

