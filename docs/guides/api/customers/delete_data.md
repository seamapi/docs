# Delete Customer Data
{% hint style="info" %}
**Early Access Preview.** The customers API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes customer data including resources like spaces, properties, rooms, users, etc.
This will delete the partner resources and any related Seam resources (user identities, access grants, spaces).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_keys`** *Array* *of Strings*

List of access grant keys to delete.

---

**`booking_keys`** *Array* *of Strings*

List of booking keys to delete.

---

**`building_keys`** *Array* *of Strings*

List of building keys to delete.

---

**`common_area_keys`** *Array* *of Strings*

List of common area keys to delete.

---

**`customer_keys`** *Array* *of Strings*

List of customer keys to delete all data for.

---

**`facility_keys`** *Array* *of Strings*

List of facility keys to delete.

---

**`guest_keys`** *Array* *of Strings*

List of guest keys to delete.

---

**`listing_keys`** *Array* *of Strings*

List of listing keys to delete.

---

**`property_keys`** *Array* *of Strings*

List of property keys to delete.

---

**`property_listing_keys`** *Array* *of Strings*

List of property listing keys to delete.

---

**`reservation_keys`** *Array* *of Strings*

List of reservation keys to delete.

---

**`resident_keys`** *Array* *of Strings*

List of resident keys to delete.

---

**`room_keys`** *Array* *of Strings*

List of room keys to delete.

---

**`space_keys`** *Array* *of Strings*

List of space keys to delete.

---

**`staff_member_keys`** *Array* *of Strings*

List of staff member keys to delete.

---

**`tenant_keys`** *Array* *of Strings*

List of tenant keys to delete.

---

**`unit_keys`** *Array* *of Strings*

List of unit keys to delete.

---

**`user_identity_keys`** *Array* *of Strings*

List of user identity keys to delete.

---

**`user_keys`** *Array* *of Strings*

List of user keys to delete.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

