# Update a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)



{% tabs %}
{% tab title="Signature" %}
```
PATCH /user_identities/update ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *string* (Required)

ID of the user identity.

---

**`email_address`** *string*

Unique email address for the user identity.

---

**`full_name`** *string*

---

**`phone_number`** *string*

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

---

**`user_identity_key`** *string*

Unique key for the user identity.

---


## Response

void
