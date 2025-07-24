# List Enrollment Automations

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [enrollment automations](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md) for a specified [user identity](../../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve enrollment automations.

---


## Response

Array of [enrollment\_automations](.)

