# Integrate customer portal into your application

Use the `create_portal` endpoint to generate Customer Portals programmatically.

***

**Grab a ready-made snippet from Console**

1. Go to **Developer** → **Customer Portals**.
2. Configure the portal (features, embedded, landing page) and enter your `customer_key` (and Spaces, if using Organize).
3.  In Generate Portal → **Create Portal Programmatically**, open the code panel.

    ![](<../../.gitbook/assets/Screenshot 2025-09-02 at 12.36.08 AM.png>)
4.  Copy the prefilled request (cURL). Replace placeholders like the Seam API key.

    ```bash
    curl -X POST \
      https://connect.getseam.com/customers/create_portal> \
      -H "Authorization: Bearer $SEAM_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
      "is_embedded": false,
      "features": {
        "connect": { "exclude": false },
        "organize": { "exclude": false },
        "manage_devices": { "exclude": false }
      },
      "customer_data": {
        "customer_key": "sample_customer_key",
        "property_listings": [
        {
          "name": "Property 1",
          "property_listing_key": "property_1_id"
        }
      ]
      }
    }'
    ```
5. Send the request from your app or API client.

***

**Notes**

* Customize features: All features are enabled by default; set `"exclude": true` to turn any off.
* Embedded or standalone: Set `"is_embedded": true` to embed in an iframe; otherwise it’s standalone.
* Scope by customer: `customer_key` ties the portal to a single customer in your system.
* Use your own IDs: Use `space_key` values that match your internal identifiers.
* Session lifetime: All portal links expire after 7 days. Generate a new portal programmatically each time a customer needs access.

***

## Embedding the Customer Portal as an iFrame

The Seam Customer Portal is a hosted, pre-authenticated interface for managing devices, access codes, reservations, and more. Instead of sharing a magic link with your end-users, you can embed the portal directly inside your own application using an iFrame. This gives your users a seamless experience without leaving your product.

### How it works

When you create a customer portal via the API, Seam returns a `magic_link` URL. This URL can be loaded in a standard HTML `<iframe>`. The portal is fully authenticated through a token embedded in the URL — no additional login is required from the end-user.

Portal links expire after **7 days**. Your backend should generate a fresh link when rendering the page, or when the current link is close to expiring.

### Step 1: Create a portal with `is_embedded: true`

Call the `/customers/create_portal` endpoint from your backend with the `is_embedded` flag set to `true`. This tells the portal to render in a layout optimized for iFrame embedding (no unnecessary navigation that would conflict with your app's own UI).

```bash
curl -X POST https://connect.getseam.com/customers/create_portal \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_data": {
      "customer_key": "my-customer-123",
      "spaces": [
        {
          "name": "123 Main Street",
          "space_key": "property-123"
        }
      ]
    },
    "is_embedded": true,
    "features": {
      "connect": { "exclude": false },
      "manage": {
        "exclude": false,
        "exclude_reservation_management": false,
        "exclude_staff_management": true
      },
      "organize": { "exclude": true },
      "configure": { "exclude": true }
    }
  }'
```

The response includes a `magic_link` object:

```json
{
  "magic_link": {
    "url": "https://partner-ui.seam.vc/portals/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee?token=seam_cst_...",
    "customer_key": "my-customer-123",
    "expires_at": "2026-03-25T12:00:00.000Z",
    "workspace_id": "...",
    "created_at": "2026-03-18T12:00:00.000Z"
  }
}
```

### Step 2: Embed the URL in an iFrame

Use the `magic_link.url` as the `src` attribute of an iFrame in your frontend. The portal handles authentication automatically via the token in the URL.

```html
<iframe
  src="https://partner-ui.seam.vc/portals/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee?token=seam_cst_..."
  width="100%"
  height="800"
  frameborder="0"
  allow="clipboard-write"
  style="border: none; border-radius: 8px;"
></iframe>
```

In practice, your backend generates the `magic_link.url` and passes it to your frontend, which sets it as the iFrame `src`. Don't hardcode the URL — it contains a session token that expires.

### Step 3: Refresh the link before it expires

Portal links are valid for 7 days. If your user keeps a page open for a long time, the embedded portal will eventually expire. Handle this by:

1. **Generating a fresh link on each page load.** This is the simplest approach. Each time your user navigates to the page containing the portal, your backend calls `/customers/create_portal` and returns a new URL.
2. **Tracking expiration client-side.** Store the `expires_at` timestamp and proactively refresh the iFrame `src` before it expires.

You can also use the `/customers/open_portal` endpoint, which reuses an existing portal session if it hasn't expired yet, and creates a new one if it has.

### Configuring which features are visible

The `features` object in the request body controls which sections of the portal your customer sees. Each feature can be included or excluded:

| Feature          | What it controls                                                            |
| ---------------- | --------------------------------------------------------------------------- |
| `connect`        | Connecting new device accounts (e.g., linking an August or Schlage account) |
| `manage`         | Managing reservations and staff for properties                              |
| `organize`       | Organizing devices into spaces and groups                                   |
| `configure`      | Configuring automation rules for access, climate, and Instant Key           |
| `manage_devices` | Legacy device management (use `manage` instead)                             |

For example, if your product only needs reservation management, you can exclude everything else:

```json
{
  "features": {
    "connect": { "exclude": true },
    "manage": {
      "exclude": false,
      "exclude_reservation_management": false,
      "exclude_staff_management": true
    },
    "organize": { "exclude": true },
    "configure": { "exclude": true }
  }
}
```

### Embedding a single reservation view (deep links)

If you want to embed a portal that shows a single reservation — for example, inside a reservation detail page in your PMS — use the `/customers/reservations/create_deep_link` endpoint instead.

```bash
curl -X POST https://connect.getseam.com/customers/reservations/create_deep_link \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_key": "my-customer-123",
    "reservation_key": "res-456"
  }'
```

This returns a `deep_link.url` that you embed the same way. The portal navigates directly to the reservation page with the navigation UI hidden, so it feels like a native part of your application. Deep links automatically set `is_embedded: true` and `navigation_mode: "restricted"`.

### Localization

Set the `locale` parameter when creating the portal to display it in a different language:

* `en-US` (default)
* `pt-PT` — Portuguese
* `fr-FR` — French
* `it-IT` — Italian
* `es-ES` — Spanish

```json
{
  "is_embedded": true,
  "locale": "fr-FR",
  "customer_data": { "..." }
}
```

### Branding and customization

If you have a customization profile set up (configured through the Seam Console), pass the `customization_profile_id` when creating the portal to apply your branding — colors, logos, and other visual settings.

```json
{
  "is_embedded": true,
  "customization_profile_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "customer_data": { "..." }
}
```

### Frequently asked questions

**Do I need to set any special headers or CSP rules on my side?** No. The portal is designed to be embedded and does not set `frame-ancestors` restrictions. As long as your own site doesn't block iFrames in its Content Security Policy, it will work out of the box.

**Can my user interact with the portal inside the iFrame?** Yes. The portal is fully interactive — users can connect accounts, view device status, manage reservations, copy access codes, and everything else the portal supports. Adding `allow="clipboard-write"` to your iFrame tag enables the copy-to-clipboard functionality for access codes.

**What happens when the portal link expires?** The portal will show an error state. Your application should detect this (either by tracking the `expires_at` timestamp or by listening for a page error in the iFrame) and generate a fresh link.

**Can I scope the portal to specific properties or devices?** Yes. Pass `customer_resources_filters` when creating the portal to filter which resources are visible based on their `custom_metadata`. For example, you could show only properties in a specific region or managed by a specific team.

```json
{
  "customer_resources_filters": [
    { "field": "region", "operation": "=", "value": "us-west" }
  ]
}
```
