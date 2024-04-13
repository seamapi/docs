# Assign a Credential to a User

Assign a [credential](broken-reference) (identified by its`acs_credential_id`) to a specified [user](../../../products/access-systems/#what-is-a-user) (identified by their `acs_user_id`).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/assign" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential and user by including the corresponding `acs_credential_id` and `acs_user_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String<br><em>Required</em></td><td>ID of the credential to be assigned</td></tr><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the user to whom the new credential is being assigned to</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/assign' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
  "acs_user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_credential` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>acs_credential_pool_id</code></td><td>ID of the credential pool from which to obtain the credential</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the <a href="../../../products/access-systems/">access control system</a> that contains the credential</td></tr><tr><td><code>display_name</code></td><td>Display name that corresponds to the credential type</td></tr><tr><td><code>code</code></td><td>Access (PIN) code for the credential</td></tr><tr><td><code>access_method</code></td><td>Access method for the credential. Supported values: <code>code</code>, <code>card</code>, <code>mobile_key</code></td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the credential type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the credential type</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the credential was created</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential</td></tr><tr><td><code>starts_at</code></td><td>Date and time at which the credential validity starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>ends_at</code></td><td>Date and time at which the credential validity ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>is_multi_phone_sync_credential</code></td><td>Indicates whether the credential is a <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a></td></tr><tr><td><code>visionline_metadata</code></td><td><a href="./#visionline_metadata-properties">Visionline-specific metadata</a> for the credential</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_credential": {
    "acs_credential_id": "755e6817-985f-4e2f-96b2-6f388456f19b",
    "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
    "display_name": "Code 82****",
    "code": "824759",
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "card",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-06T06:50:05.714Z",
    "visionline_metadata": {}
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
