# Push Customer Data
{% hint style="info" %}
**Early Access Preview.** The customers API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Pushes customer data including resources like spaces, properties, rooms, users, etc.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`customer_key`** *String* (Required)

Your unique identifier for the customer.

---

**`access_grants`** *Array* *of Objects*

List of access grants.

---

**`bookings`** *Array* *of Objects*

List of bookings.

---

**`buildings`** *Array* *of Objects*

List of buildings.

---

**`common_areas`** *Array* *of Objects*

List of shared common areas.

---

**`facilities`** *Array* *of Objects*

List of gym or fitness facilities.

---

**`guests`** *Array* *of Objects*

List of guests.

---

**`listings`** *Array* *of Objects*

List of property listings.

---

**`properties`** *Array* *of Objects*

List of short-term rental properties.

---

**`property_listings`** *Array* *of Objects*

List of property listings.

---

**`reservations`** *Array* *of Objects*

List of reservations.

---

**`residents`** *Array* *of Objects*

List of residents.

---

**`rooms`** *Array* *of Objects*

List of hotel or hospitality rooms.

---

**`spaces`** *Array* *of Objects*

List of general spaces or areas.

---

**`tenants`** *Array* *of Objects*

List of tenants.

---

**`units`** *Array* *of Objects*

List of multi-family residential units.

---

**`user_identities`** *Array* *of Objects*

List of user identities.

---

**`users`** *Array* *of Objects*

List of users.

---


## Response

void

