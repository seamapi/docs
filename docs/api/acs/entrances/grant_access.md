# Grant an ACS User Access to an Entrance

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)



{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/grant_access ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods](https://docs.seam.co/latest/api/authentication)</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_entrance_id`** *String* (Required)

---

**`acs_user_id`** *String* (Required)

---


## Response

void
