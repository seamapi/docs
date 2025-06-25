# Get an Enrollment Automation

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`enrollment_automation_id`** *String* (Required)

ID of the enrollment automation that you want to get.

---


## Response

[enrollment\_automation](./)
