
---
description: Get all access control systems
---

# List Systems

Returns a list of all [access control systems](../../../products/access-systems/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned access control systems by a specific [connected account](../../connected-accounts/) ID, include the `connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the response includes all access control systems connected to your [workspace](../../../core-concepts/workspaces/).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody>

</tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.systems.list()
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'POST' \
  'https://connect.getseam.com/acs/systems' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.systems.list();
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->acs->systems->list();
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.SystemsAcs.List();
```
{% endtab %}

{% tab title="Java" %}
```java
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```go
acs_systems, uErr := client.Acs.Systems.List(
  context.Background(), &acs.SystemsListRequest{},
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_systems` array, in which each returned `acs_system` contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody>

<tr><td><code>acs_system_id</code></td><td>ID of the `acs_system`.</td></tr>

<tr><td><code>can_add_acs_users_to_acs_access_groups</code></td><td>Indicates whether the `acs_system` supports [adding users to access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td></tr>

<tr><td><code>can_automate_enrollment</code></td><td>Indicates whether it is possible to [launch enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) for the `acs_system`.</td></tr>

<tr><td><code>can_create_acs_access_groups</code></td><td>Indicates whether the `acs_system` supports creating [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td></tr>

<tr><td><code>can_remove_acs_users_from_acs_access_groups</code></td><td>Indicates whether the `acs_system` supports [removing users from access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td></tr>

<tr><td><code>connected_account_ids</code></td><td>IDs of the [connected accounts](https://docs.seam.co/latest/core-concepts/connected-accounts) associated with the `acs_system`.</td></tr>

<tr><td><code>created_at</code></td><td>Date and time at which the `acs_system` was created.</td></tr>

<tr><td><code>errors</code></td><td>Errors associated with the `acs_system`.</td></tr>

<tr><td><code>external_type</code></td><td>Brand-specific terminology for the `acs_system` type.</td></tr>

<tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the `acs_system` type.</td></tr>

<tr><td><code>image_alt_text</code></td><td>Alternative text for the `acs_system` image.</td></tr>

<tr><td><code>image_url</code></td><td>URL for the image that represents the `acs_system`.</td></tr>

<tr><td><code>name</code></td><td>Name of the `acs_system`.</td></tr>

<tr><td><code>system_type</code></td><td></td></tr>

<tr><td><code>system_type_display_name</code></td><td></td></tr>

<tr><td><code>warnings</code></td><td></td></tr>

<tr><td><code>workspace_id</code></td><td>ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) that contains the `acs_system`.</td></tr>

</tbody></table>

### Sample Response

{% tabs %}
{% tab title="JavaScript" %}
```json
{
          "acs_systems": [
            {
              "acs_system_id": "11111111-1111-1111-1111-111111111111",
              "name": "Example Inc",
              "workspace_id": "00000000-0000-0000-0000-000000000000",
              "created_at": "2023-11-30T06:27:14.961Z",
              "external_type": "pti_site",
              "external_type_display_name": "PTI site",
              "connected_account_ids": [
                "11111111-1111-1111-1111-222222222222"
              ],
              "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
              "image_alt_text": "PTI site Logo"
            }
          ],
          "ok": true
        }
```
{% endtab %}
{% endtabs %}