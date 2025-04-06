# Delete an Enrollment Automation

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/delete ⇒ void
```
{% endhint %}

## Parameters

**`enrollment_automation_id`** ** (Required)

ID of the desired enrollment automation.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
