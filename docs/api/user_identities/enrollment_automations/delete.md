# Delete an Enrollment Automation

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [enrollment automation](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md). You must delete all enrollment automations associated with a [user identity](../../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`enrollment_automation_id`** *String* (Required)

ID of the enrollment automation that you want to delete.

---


## Response

void

