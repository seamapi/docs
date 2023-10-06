---
description: Update the properties of a specified user
---

# Update a User

Updates any of the following properties of a specified [user](../../../products/access-systems/#what-is-a-user) (`acs_user` object):

* `full_name`
* `email`
* `phone_number`

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user by including the corresponding `acs_user_id` in the request body. In addition, in the request body, include the properties that you want to update, along with the desired replacement values.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Replacement full name for the user</td></tr><tr><td><code>email</code></td><td>String<br><em>Optional</em></td><td>Replacement email address for the user</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Replacement phone number for the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c",
  "full_name": "Jennifer Gergenson",
  "email": "jennifer@example.com"
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
