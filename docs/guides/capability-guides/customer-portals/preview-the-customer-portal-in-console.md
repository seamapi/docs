# Preview the customer portal in Console

You can set up a customer portal directly from the Seam Console. These Console-generated portals are intended as an **API exploration playground** — they let you preview how portals work and experiment with the API before building your integration.

{% hint style="warning" %}
**Important:** Portal links created in Console are temporary. They expire after 7 days and should not be used in production. For real-world usage, always generate portals programmatically using the API.
{% endhint %}

***

### 1. Open the Customer Portals page

From the Console, navigate to **Developer** → **Customer Portals** from the top navigation bar.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-01 at 6.55.05 PM.png" alt=""><figcaption></figcaption></figure>

***

### 2. Select your business verticals

Choose the vertical that best matches your product (for example, _Short Term Rental_). This setting does two things:

1. Preconfigures recommended defaults for your use case.
2. Updates the labels in the portal UI so they use industry-specific terms your customers expect.

For example:

* In the Hospitality vertical, the generic Seam concept of a _Space_ appears in the portal as a _Room_.
* In Multi-family, _Spaces_ appear as _Units_.
* In Gym Management, they appear as _Facilities_.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-02 at 5.40.55 PM (1).png" alt="" width="563"><figcaption><p>Example: In the Hospitality vertical, Spaces are shown as “Rooms” in the portal UI.</p></figcaption></figure>



Here's a complete reference of how Seam concepts map to industry-specific labels across verticals:

| Vertical              | User Identity | Spaces              | Bookings     |
| --------------------- | ------------- | ------------------- | ------------ |
| **Short Term Rental** | Guest         | Property listings   | Reservations |
| **Multi-family**      | Tenant        | Units, Common areas | Leases       |
| **Hospitality**       | Guest         | Rooms, Common areas | Bookings     |
| **Gym Management**    | Member        | Facilities          | Memberships  |
| **Property Tours**    | Visitor       | Tour spaces         | Bookings     |
| **Neutral**           | User Identity | Spaces              | Bookings     |

***

### 3. Configure portal features

Under **Portal Configuration**, select which features to enable:

* **Connect** – allow customers to connect their device accounts.
* **Organize** – let customers map devices to rental units, rooms, or spaces.
* **Manage Devices** – give customers tools to manage devices, troubleshoot, and view logs.
* **Configure** – allow customers to set automation rules and customize Instant Key branding.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-01 at 6.58.26 PM.png" alt=""><figcaption></figcaption></figure>

***

### 4. Enter your `customer_key`

Add the customer\_key for the customer this portal belongs to. Seam uses this key to scope the portal to only that customer’s devices and accounts.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-01 at 11.11.26 PM.png" alt="" width="375"><figcaption></figcaption></figure>

***

### 5. (Optional) Set up Spaces

This step is required only if you enable the Organize feature.

* Spaces represent the real-world units your customer manages—for example, _Room 101_ in a hotel, _Unit A_ in an apartment building, or _Studio 3_ in a gym.
* Create a Space for each unit your customer manages.
* Use a `space_key` that matches your own system’s identifier (for example, `room-101-id`).

{% hint style="info" %}
**Reminder:** Even if the portal shows “Rooms” or “Units,” these all map back to Spaces in Seam.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-02 at 12.13.52 AM.png" alt="" width="375"><figcaption></figcaption></figure>

***

### 6. Generate the portal

Click **Create Portal**. Seam generates a temporary portal URL you can use to preview the portal.

{% hint style="warning" %}
**Note:** All portal links expire after 7 days. For production, always generate portals programmatically, each time a customer needs access.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-02 at 12.15.27 AM.png" alt="" width="375"><figcaption></figcaption></figure>

***

### Next step: Generate portals programmatically with the API

In production, portals must be generated with the API so that they can be refreshed whenever a customer needs access. On the next page, we’ll cover how to create portals programmatically using the `create_portal` endpoint.
