# Get an Enrollment Automation

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/get ⇒ { enrollment_automation }
```
{% endhint %}

## Parameters

**`enrollment_automation_id`** *String* (Required)

ID of the desired enrollment automation.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

[enrollment\_automation](./)
