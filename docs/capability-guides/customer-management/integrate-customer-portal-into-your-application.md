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

