---
description: Grant a specified user access to a specified entrance
---

# Grant a User Access to an Entrance

Grants a specified [user](../../../products/access-systems/#what-is-a-user)[ ](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity)(`acs_user` object) access to a specified [entrance](../../../products/access-systems/#access-system-components) (`acs_entrance` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/entrances/grant_access" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired entrance and user by including the corresponding `acs_entrance_id` and `acs_user_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired entrance</td></tr><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/grant_access' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
  "acs_user_id": "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
<pre class="language-json"><code class="lang-json"><strong>{
</strong>  "ok": true
}
</code></pre>
{% endtab %}
{% endtabs %}
