# Grant an ACS User Access to an Entrance

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/grant_access ⇒ void
```
{% endtab %}
{% endtabs %}



## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_entrance_id`

Type: `string`
Required: Yes

***

### `acs_user_id`

Type: `string`
Required: Yes

***

## Return Type

void
