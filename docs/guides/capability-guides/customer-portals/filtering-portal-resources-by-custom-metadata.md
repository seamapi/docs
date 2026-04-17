---
description: >-
  Use customer_resources_filters to control which resources are visible to
  customers in a portal, based on custom_metadata on property_listings and
  reservations.
---

# Filtering Portal Resources by Custom Metadata

When creating a customer portal, you can use the `customer_resources_filters` parameter to control which resources (property listings, reservations) are visible to the customer. Filters match against the `custom_metadata` you set on resources in `customer_data`.

***

### How It Works

1. **Tag resources with `custom_metadata`** — when passing `property_listings` or `reservations` in `customer_data`, include a `custom_metadata` object with key-value pairs on each resource.
2. **Set `customer_resources_filters` when creating the portal** — provide an array of filter objects that specify which `custom_metadata` values a resource must have to be visible.
3. **Filtering is enforced server-side** — the customer portal only returns resources whose `custom_metadata` matches all specified filters.

***

### Filter Structure Reference

Each filter in the `customer_resources_filters` array is an object with the following fields:

| Field       | Type              | Description                                                                                                                                     |
| ----------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `field`     | String            | The `custom_metadata` field name to filter on. Must start with a letter or underscore and contain only alphanumeric characters and underscores. |
| `operation` | String            | The comparison operation. Currently only `"="` (equals) is supported.                                                                           |
| `value`     | String or Boolean | The value to compare against.                                                                                                                   |

***

### Key Behaviors

* **AND logic** — when multiple filters are provided, a resource must match _all_ of them to be visible.
* **Exact match** — the `=` operation performs an exact match against the `custom_metadata` value.
* **Server-side enforcement** — filtering happens on the server. The customer portal API only returns matching resources.
* **Field name rules** — field names must match the regex `^[a-zA-Z_]\w*$` (start with a letter or underscore, followed by alphanumeric characters or underscores).

***

### Examples

#### Example 1: Filtering Property Listings by Region

Create property listings with a `region` field in `custom_metadata`, then filter to show only European properties.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const { magic_link } = await seam.customers.createPortal({
  customer_data: {
    customer_key: "customer_123",
    property_listings: [
      {
        name: "Lisbon Apartment",
        property_listing_key: "lisbon_apt",
        custom_metadata: { region: "europe" },
      },
      {
        name: "NYC Loft",
        property_listing_key: "nyc_loft",
        custom_metadata: { region: "north_america" },
      },
    ],
  },
  customer_resources_filters: [
    { field: "region", operation: "=", value: "europe" },
  ],
});

// The portal will only show "Lisbon Apartment"
console.log(magic_link.url);
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X POST \
  'https://connect.getseam.com/customers/create_portal' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "customer_data": {
      "customer_key": "customer_123",
      "property_listings": [
        {
          "name": "Lisbon Apartment",
          "property_listing_key": "lisbon_apt",
          "custom_metadata": { "region": "europe" }
        },
        {
          "name": "NYC Loft",
          "property_listing_key": "nyc_loft",
          "custom_metadata": { "region": "north_america" }
        }
      ]
    },
    "customer_resources_filters": [
      { "field": "region", "operation": "=", "value": "europe" }
    ]
  }'
```
{% endtab %}
{% endtabs %}

#### Example 2: Multiple Filters (AND Logic)

When you provide multiple filters, a resource must match all of them. Here, only property listings that are both premium and in Europe are shown.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const { magic_link } = await seam.customers.createPortal({
  customer_data: {
    customer_key: "customer_123",
    property_listings: [
      {
        name: "Premium Villa",
        property_listing_key: "premium_villa",
        custom_metadata: { is_premium: true, region: "europe" },
      },
      {
        name: "Standard Apartment",
        property_listing_key: "standard_apt",
        custom_metadata: { is_premium: false, region: "europe" },
      },
      {
        name: "Premium Condo",
        property_listing_key: "premium_condo",
        custom_metadata: { is_premium: true, region: "north_america" },
      },
    ],
  },
  customer_resources_filters: [
    { field: "is_premium", operation: "=", value: true },
    { field: "region", operation: "=", value: "europe" },
  ],
});

// Only "Premium Villa" is visible in the portal
console.log(magic_link.url);
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X POST \
  'https://connect.getseam.com/customers/create_portal' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "customer_data": {
      "customer_key": "customer_123",
      "property_listings": [
        {
          "name": "Premium Villa",
          "property_listing_key": "premium_villa",
          "custom_metadata": { "is_premium": true, "region": "europe" }
        },
        {
          "name": "Standard Apartment",
          "property_listing_key": "standard_apt",
          "custom_metadata": { "is_premium": false, "region": "europe" }
        },
        {
          "name": "Premium Condo",
          "property_listing_key": "premium_condo",
          "custom_metadata": { "is_premium": true, "region": "north_america" }
        }
      ]
    },
    "customer_resources_filters": [
      { "field": "is_premium", "operation": "=", "value": true },
      { "field": "region", "operation": "=", "value": "europe" }
    ]
  }'
```
{% endtab %}
{% endtabs %}

#### Example 3: Boolean Filters

Filter by a boolean `custom_metadata` value, such as showing only premium listings.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const { magic_link } = await seam.customers.createPortal({
  customer_data: {
    customer_key: "customer_123",
    property_listings: [
      {
        name: "Premium Villa",
        property_listing_key: "premium_villa",
        custom_metadata: { is_premium: true },
      },
      {
        name: "Standard Apartment",
        property_listing_key: "standard_apt",
        custom_metadata: { is_premium: false },
      },
    ],
  },
  customer_resources_filters: [
    { field: "is_premium", operation: "=", value: true },
  ],
});

// Only "Premium Villa" is visible
console.log(magic_link.url);
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X POST \
  'https://connect.getseam.com/customers/create_portal' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "customer_data": {
      "customer_key": "customer_123",
      "property_listings": [
        {
          "name": "Premium Villa",
          "property_listing_key": "premium_villa",
          "custom_metadata": { "is_premium": true }
        },
        {
          "name": "Standard Apartment",
          "property_listing_key": "standard_apt",
          "custom_metadata": { "is_premium": false }
        }
      ]
    },
    "customer_resources_filters": [
      { "field": "is_premium", "operation": "=", "value": true }
    ]
  }'
```
{% endtab %}
{% endtabs %}

#### Example 4: Filtering Reservations

Filters also apply to reservations. Here, only reservations that are both premium and in Europe are shown.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const { magic_link } = await seam.customers.createPortal({
  customer_data: {
    customer_key: "customer_123",
    property_listings: [
      {
        name: "Premium Villa",
        property_listing_key: "premium_villa",
      },
    ],
    reservations: [
      {
        name: "Premium EU Reservation",
        reservation_key: "premium_eu_res",
        space_keys: ["premium_villa"],
        custom_metadata: { is_premium: true, region: "europe" },
      },
      {
        name: "Standard EU Reservation",
        reservation_key: "standard_eu_res",
        space_keys: ["premium_villa"],
        custom_metadata: { is_premium: false, region: "europe" },
      },
      {
        name: "Premium US Reservation",
        reservation_key: "premium_us_res",
        space_keys: ["premium_villa"],
        custom_metadata: { is_premium: true, region: "north_america" },
      },
    ],
  },
  customer_resources_filters: [
    { field: "is_premium", operation: "=", value: true },
    { field: "region", operation: "=", value: "europe" },
  ],
});

// Only "Premium EU Reservation" is visible in the portal
console.log(magic_link.url);
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X POST \
  'https://connect.getseam.com/customers/create_portal' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "customer_data": {
      "customer_key": "customer_123",
      "property_listings": [
        {
          "name": "Premium Villa",
          "property_listing_key": "premium_villa"
        }
      ],
      "reservations": [
        {
          "name": "Premium EU Reservation",
          "reservation_key": "premium_eu_res",
          "space_keys": ["premium_villa"],
          "custom_metadata": { "is_premium": true, "region": "europe" }
        },
        {
          "name": "Standard EU Reservation",
          "reservation_key": "standard_eu_res",
          "space_keys": ["premium_villa"],
          "custom_metadata": { "is_premium": false, "region": "europe" }
        },
        {
          "name": "Premium US Reservation",
          "reservation_key": "premium_us_res",
          "space_keys": ["premium_villa"],
          "custom_metadata": { "is_premium": true, "region": "north_america" }
        }
      ]
    },
    "customer_resources_filters": [
      { "field": "is_premium", "operation": "=", "value": true },
      { "field": "region", "operation": "=", "value": "europe" }
    ]
  }'
```
{% endtab %}
{% endtabs %}

***

### Verifying Filters

After creating a portal, you can verify the configured filters by retrieving the portal via the customer API. The response includes `customer_resources_filters` in the portal configuration.

```bash
curl -X GET \
  'https://connect.getseam.com/seam/customer/v1/portals/get?customer_portal_id=PORTAL_ID' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json'
```

The response will include the filters you configured:

```json
{
  "customer_portal": {
    "customer_resources_filters": [
      { "field": "is_premium", "operation": "=", "value": true }
    ]
  }
}
```
