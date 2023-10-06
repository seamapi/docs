---
description: Remove a specified user from a specified access group
---

# Remove a User from an Access Group

Removes a specified [user](../../../products/access-systems/#what-is-a-user) (`acs_user` object) from a specified [access group](../../../products/access-systems/#what-is-an-access-group) (`acs_access_group` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/remove_from_access_group" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user and access group by including the corresponding `acs_user_id` and `acs_access_group_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user</td></tr><tr><td><code>acs_access_group_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired access group</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/remove_from_access_group' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c",
  "acs_access_group_id": "3adfb716-ba84-431e-ab30-ab521f2aa8e8"
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
