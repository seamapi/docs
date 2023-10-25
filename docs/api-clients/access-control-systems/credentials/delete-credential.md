---
description: Delete a specified credential
---

# Delete a Credential

Deletes a specified [credential](../../../products/access-systems/issuing-credentials.md) (`acs_credential` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential by including the corresponding `acs_credential_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired credential</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
<pre class="language-bash"><code class="lang-bash"><strong>curl -X 'POST' \
</strong>  'https://connect.getseam.com/acs/credentials/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "d3bb3509-b3a6-4101-b697-27626327aa59"
}'
</code></pre>
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
