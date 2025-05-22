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

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`**  (Required)

---

**`acs_user_id`**  (Required)

---


## Response

void
