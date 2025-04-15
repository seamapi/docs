# Update Multiple Linked Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Specify the `common_code_key` to identify the set of access codes that you want to update.

See also [Update Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md#update-linked-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /access_codes/update_multiple ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication]{https://docs.seam.co/latest/api/authentication}.
</details>

## Request Parameters

**`common_code_key`** *String* (Required)

Key that links the group of access codes, assigned on creation by `/access_codes/create_multiple`.

---

**`ends_at`** *String*

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`name`** *String*

Name of the new access code.

---

**`starts_at`** *String*

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

void
