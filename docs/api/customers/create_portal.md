# Create Customer Portal

{% hint style="info" %}
**Early Access Preview.** The customers API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

* [Request Parameters](create_portal.md#request-parameters)
* [Response](create_portal.md#response)

Creates a new customer portal magic link with configurable features.

<details>

<summary>Authentication Methods</summary>

* API key
* Personal access token\
  Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).

</details>

## Request Parameters

**`customer_data`** _Object_

<details>

<summary><code>access_grants</code> <em>List</em></summary>

List of access grants.

</details>

***

<details>

<summary><code>bookings</code> <em>List</em></summary>

List of bookings.

</details>

***

<details>

<summary><code>buildings</code> <em>List</em></summary>

List of buildings.

</details>

***

<details>

<summary><code>common_areas</code> <em>List</em></summary>

List of shared common areas.

</details>

***

<details>

<summary><code>customer_key</code> <em>String</em></summary>

Your unique identifier for the customer.

</details>

***

<details>

<summary><code>facilities</code> <em>List</em></summary>

List of gym or fitness facilities.

</details>

***

<details>

<summary><code>guests</code> <em>List</em></summary>

List of guests.

</details>

***

<details>

<summary><code>listings</code> <em>List</em></summary>

List of property listings.

</details>

***

<details>

<summary><code>properties</code> <em>List</em></summary>

List of short-term rental properties.

</details>

***

<details>

<summary><code>property_listings</code> <em>List</em></summary>

List of property listings.

</details>

***

<details>

<summary><code>reservations</code> <em>List</em></summary>

List of reservations.

</details>

***

<details>

<summary><code>residents</code> <em>List</em></summary>

List of residents.

</details>

***

<details>

<summary><code>rooms</code> <em>List</em></summary>

List of hotel or hospitality rooms.

</details>

***

<details>

<summary><code>sites</code> <em>List</em></summary>

List of general sites or areas.

</details>

***

<details>

<summary><code>spaces</code> <em>List</em></summary>

List of general spaces or areas.

</details>

***

<details>

<summary><code>staff_members</code> <em>List</em></summary>

List of staff members.

</details>

***

<details>

<summary><code>tenants</code> <em>List</em></summary>

List of tenants.

</details>

***

<details>

<summary><code>units</code> <em>List</em></summary>

List of multi-family residential units.

</details>

***

<details>

<summary><code>user_identities</code> <em>List</em></summary>

List of user identities.

</details>

***

<details>

<summary><code>users</code> <em>List</em></summary>

List of users.

</details>

***

**`customization_profile_id`** _String_

The ID of the customization profile to use for the portal.

***

**`features`** _Object_

<details>

<summary><code>configure</code> <em>Object</em></summary>

Configuration for the configure feature.

</details>

***

<details>

<summary><code>connect</code> <em>Object</em></summary>

Configuration for the connect accounts feature.

</details>

***

<details>

<summary><code>manage</code> <em>Object</em></summary>

Configuration for the manage feature.

</details>

***

<details>

<summary><code>manage_devices</code> <em>Object</em></summary>

### Configuration for the manage devices feature.

### deprecated: Use `manage` instead.

</details>

***

<details>

<summary><code>organize</code> <em>Object</em></summary>

Configuration for the organize feature.

</details>

***

**`is_embedded`** _Boolean_

Whether the portal is embedded in another application.

***

**`landing_page`** _Object_

Configuration for the landing page when the portal loads.

<details>

<summary><code>manage</code> <em>Object</em></summary>



</details>

***

**`locale`** _String_

The locale to use for the portal.

***

## Response

[magic\_link](../unstable_partner/building_blocks/)

{% tabs %}
{% tab title="JSON" %}
```json
{
  "building_block_type": "connect_accounts",
  "created_at": "2025-06-16T16:54:17.946594Z",
  "customer_key": "My Company",
  "expires_at": "2025-06-17T16:54:17.946594Z",
  "url": "https://se.am/1234",
  "workspace_id": "67c58f1f-f148-4415-a63c-dc6c145c6b91"
}
```
{% endtab %}
{% endtabs %}
