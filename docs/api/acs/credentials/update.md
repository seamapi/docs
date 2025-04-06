# Update a Credential

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
PATCH /acs/credentials/update ⇒ void
```
{% endhint %}

## Parameters

**`acs_credential_id`** ** (Required)

ID of the desired credential.

---

**`code`** **

Replacement access (PIN) code for the credential.

---

**`ends_at`** **

Replacement date and time at which the validity of the credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after the `starts_at` value that you set when creating the credential.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
