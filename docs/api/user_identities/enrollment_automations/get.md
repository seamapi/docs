# Get an Enrollment Automation

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/get ⇒ { enrollment_automation }
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

**`enrollment_automation_id`** *string*
Required: Yes

ID of the desired enrollment automation.

---


## Return Type

[enrollment\_automation](./)
