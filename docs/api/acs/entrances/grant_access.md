# Grant an ACS User Access to an Entrance



{% hint style="info" %}
{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/grant_access ⇒ void
```

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

{% endtab %}
{% endtabs %}
{% endhint %}


## Request Parameters

### `acs_entrance_id`

Type: `string`
Required: Yes

---

### `acs_user_id`

Type: `string`
Required: Yes

---


## Return Type

void
