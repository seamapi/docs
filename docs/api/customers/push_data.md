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

<details>

<summary><b><code>access_grant_key</code></b> <i>String</i></summary>

Your unique identifier for the access grant.

</details>

---



<details>

<summary><b><code>building_keys</code></b> <i>List</i></summary>

Building keys associated with the access grant.

</details>

---



<details>

<summary><b><code>common_area_keys</code></b> <i>List</i></summary>

Common area keys associated with the access grant.

</details>

---



<details>

<summary><b><code>ends_at</code></b> <i>Datetime</i></summary>

Ending date and time for the access grant.

</details>

---



<details>

<summary><b><code>facility_keys</code></b> <i>List</i></summary>

Facility keys associated with the access grant.

</details>

---



<details>

<summary><b><code>guest_key</code></b> <i>String</i></summary>

Guest key associated with the access grant.

</details>

---



<details>

<summary><b><code>listing_keys</code></b> <i>List</i></summary>

Listing keys associated with the access grant.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your name for this access grant resource.

</details>

---



<details>

<summary><b><code>preferred_code</code></b> <i>String</i></summary>

Preferred PIN code to use when creating access for this reservation.

</details>

---



<details>

<summary><b><code>property_keys</code></b> <i>List</i></summary>

Property keys associated with the access grant.

</details>

---



<details>

<summary><b><code>resident_key</code></b> <i>String</i></summary>

Resident key associated with the access grant.

</details>

---



<details>

<summary><b><code>room_keys</code></b> <i>List</i></summary>

Room keys associated with the access grant.

</details>

---



<details>

<summary><b><code>space_keys</code></b> <i>List</i></summary>

Space keys associated with the access grant.

</details>

---



<details>

<summary><b><code>starts_at</code></b> <i>Datetime</i></summary>

Starting date and time for the access grant.

</details>

---



<details>

<summary><b><code>tenant_key</code></b> <i>String</i></summary>

Tenant key associated with the access grant.

</details>

---



<details>

<summary><b><code>unit_keys</code></b> <i>List</i></summary>

Unit keys associated with the access grant.

</details>

---



<details>

<summary><b><code>user_identity_key</code></b> <i>String</i></summary>

User identity key associated with the access grant.

</details>

---



<details>

<summary><b><code>user_key</code></b> <i>String</i></summary>

User key associated with the access grant.

</details>

---


**`bookings`** *Array* *of Objects*

List of bookings.

<details>

<summary><b><code>booking_key</code></b> <i>String</i></summary>

Your unique identifier for the booking.

</details>

---



<details>

<summary><b><code>building_keys</code></b> <i>List</i></summary>

Building keys associated with the access grant.

</details>

---



<details>

<summary><b><code>common_area_keys</code></b> <i>List</i></summary>

Common area keys associated with the access grant.

</details>

---



<details>

<summary><b><code>ends_at</code></b> <i>Datetime</i></summary>

Ending date and time for the access grant.

</details>

---



<details>

<summary><b><code>facility_keys</code></b> <i>List</i></summary>

Facility keys associated with the access grant.

</details>

---



<details>

<summary><b><code>guest_key</code></b> <i>String</i></summary>

Guest key associated with the access grant.

</details>

---



<details>

<summary><b><code>listing_keys</code></b> <i>List</i></summary>

Listing keys associated with the access grant.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your name for this access grant resource.

</details>

---



<details>

<summary><b><code>preferred_code</code></b> <i>String</i></summary>

Preferred PIN code to use when creating access for this reservation.

</details>

---



<details>

<summary><b><code>property_keys</code></b> <i>List</i></summary>

Property keys associated with the access grant.

</details>

---



<details>

<summary><b><code>resident_key</code></b> <i>String</i></summary>

Resident key associated with the access grant.

</details>

---



<details>

<summary><b><code>room_keys</code></b> <i>List</i></summary>

Room keys associated with the access grant.

</details>

---



<details>

<summary><b><code>space_keys</code></b> <i>List</i></summary>

Space keys associated with the access grant.

</details>

---



<details>

<summary><b><code>starts_at</code></b> <i>Datetime</i></summary>

Starting date and time for the access grant.

</details>

---



<details>

<summary><b><code>tenant_key</code></b> <i>String</i></summary>

Tenant key associated with the access grant.

</details>

---



<details>

<summary><b><code>unit_keys</code></b> <i>List</i></summary>

Unit keys associated with the access grant.

</details>

---



<details>

<summary><b><code>user_identity_key</code></b> <i>String</i></summary>

User identity key associated with the access grant.

</details>

---



<details>

<summary><b><code>user_key</code></b> <i>String</i></summary>

User key associated with the access grant.

</details>

---


**`buildings`** *Array* *of Objects*

List of buildings.

<details>

<summary><b><code>building_key</code></b> <i>String</i></summary>

Your unique identifier for the building.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---


**`common_areas`** *Array* *of Objects*

List of shared common areas.

<details>

<summary><b><code>common_area_key</code></b> <i>String</i></summary>

Your unique identifier for the common area.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>parent_site_key</code></b> <i>String</i></summary>

Your unique identifier for the site.

</details>

---


**`facilities`** *Array* *of Objects*

List of gym or fitness facilities.

<details>

<summary><b><code>facility_key</code></b> <i>String</i></summary>

Your unique identifier for the facility.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---


**`guests`** *Array* *of Objects*

List of guests.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>guest_key</code></b> <i>String</i></summary>

Your unique identifier for the guest.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---


**`listings`** *Array* *of Objects*

List of property listings.

<details>

<summary><b><code>listing_key</code></b> <i>String</i></summary>

Your unique identifier for the listing.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---


**`properties`** *Array* *of Objects*

List of short-term rental properties.

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>property_key</code></b> <i>String</i></summary>

Your unique identifier for the property.

</details>

---


**`property_listings`** *Array* *of Objects*

List of property listings.

<details>

<summary><b><code>custom_metadata</code></b> <i>Record</i></summary>

Set key:value pairs. Accepts string or Boolean values. Adding custom metadata to a property listing enables you to store custom information, like customer details or internal IDs from your application.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>property_listing_key</code></b> <i>String</i></summary>

Your unique identifier for the property listing.

</details>

---


**`reservations`** *Array* *of Objects*

List of reservations.

<details>

<summary><b><code>building_keys</code></b> <i>List</i></summary>

Building keys associated with the access grant.

</details>

---



<details>

<summary><b><code>common_area_keys</code></b> <i>List</i></summary>

Common area keys associated with the access grant.

</details>

---



<details>

<summary><b><code>ends_at</code></b> <i>Datetime</i></summary>

Ending date and time for the access grant.

</details>

---



<details>

<summary><b><code>facility_keys</code></b> <i>List</i></summary>

Facility keys associated with the access grant.

</details>

---



<details>

<summary><b><code>guest_key</code></b> <i>String</i></summary>

Guest key associated with the access grant.

</details>

---



<details>

<summary><b><code>listing_keys</code></b> <i>List</i></summary>

Listing keys associated with the access grant.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your name for this access grant resource.

</details>

---



<details>

<summary><b><code>preferred_code</code></b> <i>String</i></summary>

Preferred PIN code to use when creating access for this reservation.

</details>

---



<details>

<summary><b><code>property_keys</code></b> <i>List</i></summary>

Property keys associated with the access grant.

</details>

---



<details>

<summary><b><code>reservation_key</code></b> <i>String</i></summary>

Your unique identifier for the reservation.

</details>

---



<details>

<summary><b><code>resident_key</code></b> <i>String</i></summary>

Resident key associated with the access grant.

</details>

---



<details>

<summary><b><code>room_keys</code></b> <i>List</i></summary>

Room keys associated with the access grant.

</details>

---



<details>

<summary><b><code>space_keys</code></b> <i>List</i></summary>

Space keys associated with the access grant.

</details>

---



<details>

<summary><b><code>starts_at</code></b> <i>Datetime</i></summary>

Starting date and time for the access grant.

</details>

---



<details>

<summary><b><code>tenant_key</code></b> <i>String</i></summary>

Tenant key associated with the access grant.

</details>

---



<details>

<summary><b><code>unit_keys</code></b> <i>List</i></summary>

Unit keys associated with the access grant.

</details>

---



<details>

<summary><b><code>user_identity_key</code></b> <i>String</i></summary>

User identity key associated with the access grant.

</details>

---



<details>

<summary><b><code>user_key</code></b> <i>String</i></summary>

User key associated with the access grant.

</details>

---


**`residents`** *Array* *of Objects*

List of residents.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---



<details>

<summary><b><code>resident_key</code></b> <i>String</i></summary>

Your unique identifier for the resident.

</details>

---


**`rooms`** *Array* *of Objects*

List of hotel or hospitality rooms.

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>parent_site_key</code></b> <i>String</i></summary>

Your unique identifier for the site.

</details>

---



<details>

<summary><b><code>room_key</code></b> <i>String</i></summary>

Your unique identifier for the room.

</details>

---


**`sites`** *Array* *of Objects*

List of general sites or areas.

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>site_key</code></b> <i>String</i></summary>

Your unique identifier for the site.

</details>

---


**`spaces`** *Array* *of Objects*

List of general spaces or areas.

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>space_key</code></b> <i>String</i></summary>

Your unique identifier for the space.

</details>

---


**`staff_members`** *Array* *of Objects*

List of staff members.

<details>

<summary><b><code>building_keys</code></b> <i>List</i></summary>

List of unique identifiers for the buildings the staff member is associated with.

</details>

---



<details>

<summary><b><code>common_area_keys</code></b> <i>List</i></summary>

List of unique identifiers for the common areas the staff member is associated with.

</details>

---



<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>facility_keys</code></b> <i>List</i></summary>

List of unique identifiers for the facilities the staff member is associated with.

</details>

---



<details>

<summary><b><code>listing_keys</code></b> <i>List</i></summary>

List of unique identifiers for the listings the staff member is associated with.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---



<details>

<summary><b><code>property_keys</code></b> <i>List</i></summary>

List of unique identifiers for the properties the staff member is associated with.

</details>

---



<details>

<summary><b><code>property_listing_keys</code></b> <i>List</i></summary>

List of unique identifiers for the property listings the staff member is associated with.

</details>

---



<details>

<summary><b><code>room_keys</code></b> <i>List</i></summary>

List of unique identifiers for the rooms the staff member is associated with.

</details>

---



<details>

<summary><b><code>site_keys</code></b> <i>List</i></summary>

List of unique identifiers for the sites the staff member is associated with.

</details>

---



<details>

<summary><b><code>space_keys</code></b> <i>List</i></summary>

List of unique identifiers for the spaces the staff member is associated with.

</details>

---



<details>

<summary><b><code>staff_member_key</code></b> <i>String</i></summary>

Your unique identifier for the staff.

</details>

---



<details>

<summary><b><code>unit_keys</code></b> <i>List</i></summary>

List of unique identifiers for the units the staff member is associated with.

</details>

---


**`tenants`** *Array* *of Objects*

List of tenants.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---



<details>

<summary><b><code>tenant_key</code></b> <i>String</i></summary>

Your unique identifier for the tenant.

</details>

---


**`units`** *Array* *of Objects*

List of multi-family residential units.

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this location resource.

</details>

---



<details>

<summary><b><code>parent_site_key</code></b> <i>String</i></summary>

Your unique identifier for the site.

</details>

---



<details>

<summary><b><code>unit_key</code></b> <i>String</i></summary>

Your unique identifier for the unit.

</details>

---


**`user_identities`** *Array* *of Objects*

List of user identities.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---



<details>

<summary><b><code>user_identity_key</code></b> <i>String</i></summary>

Your unique identifier for the user identity.

</details>

---


**`users`** *Array* *of Objects*

List of users.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Email address associated with the user identity.

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Your display name for this user identity resource.

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Phone number associated with the user identity.

</details>

---



<details>

<summary><b><code>user_key</code></b> <i>String</i></summary>

Your unique identifier for the user.

</details>

---



## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

