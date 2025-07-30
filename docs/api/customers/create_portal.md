# Create Customer Portal
{% hint style="info" %}
**Early Access Preview.** The customers API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new customer portal magic link with configurable features.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`customer_data`** *Object*

<details>

<summary><b><code>access_grants</code></b> <i>List</i></summary>

List of access grants.

</details>

---



<details>

<summary><b><code>bookings</code></b> <i>List</i></summary>

List of bookings.

</details>

---



<details>

<summary><b><code>buildings</code></b> <i>List</i></summary>

List of buildings.

</details>

---



<details>

<summary><b><code>common_areas</code></b> <i>List</i></summary>

List of shared common areas.

</details>

---



<details>

<summary><b><code>customer_key</code></b> <i>String</i></summary>

Your unique identifier for the customer.

</details>

---



<details>

<summary><b><code>facilities</code></b> <i>List</i></summary>

List of gym or fitness facilities.

</details>

---



<details>

<summary><b><code>guests</code></b> <i>List</i></summary>

List of guests.

</details>

---



<details>

<summary><b><code>listings</code></b> <i>List</i></summary>

List of property listings.

</details>

---



<details>

<summary><b><code>properties</code></b> <i>List</i></summary>

List of short-term rental properties.

</details>

---



<details>

<summary><b><code>property_listings</code></b> <i>List</i></summary>

List of property listings.

</details>

---



<details>

<summary><b><code>reservations</code></b> <i>List</i></summary>

List of reservations.

</details>

---



<details>

<summary><b><code>residents</code></b> <i>List</i></summary>

List of residents.

</details>

---



<details>

<summary><b><code>rooms</code></b> <i>List</i></summary>

List of hotel or hospitality rooms.

</details>

---



<details>

<summary><b><code>spaces</code></b> <i>List</i></summary>

List of general spaces or areas.

</details>

---



<details>

<summary><b><code>tenants</code></b> <i>List</i></summary>

List of tenants.

</details>

---



<details>

<summary><b><code>units</code></b> <i>List</i></summary>

List of multi-family residential units.

</details>

---



<details>

<summary><b><code>user_identities</code></b> <i>List</i></summary>

List of user identities.

</details>

---



<details>

<summary><b><code>users</code></b> <i>List</i></summary>

List of users.

</details>

---


**`features`** *Object*

<details>

<summary><b><code>connect</code></b> <i>Object</i></summary>

Configuration for the connect accounts feature.

</details>

---



<details>

<summary><b><code>manage_devices</code></b> <i>Object</i></summary>

Configuration for the manage devices feature.

</details>

---



<details>

<summary><b><code>organize</code></b> <i>Object</i></summary>

Configuration for the organize feature.

</details>

---


**`is_embedded`** *Boolean*

Whether the portal is embedded in another application.

---


## Response

[magic\_link](./../unstable_partner/building_blocks)


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
