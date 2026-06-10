# Customers

## The customer_portal Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a Customer Portal. Customer Portal is a hosted, customizable interface for managing device access. It enables you to embed secure, pre-authenticated access flows into your product—either by sharing a link with users or embedding a view in an iframe.

With Customer Portal, you no longer need to build out frontend experiences for physical access, thermostats, and sensors. Instead, you can ship enterprise-grade access control experiences in a fraction of the time, while maintaining your product's branding and user experience.

Seam hosts these flows, handling everything from account connection and device mapping to full-featured device control.

{% tabs %}
{% tab title="Customer Portal" %}

A customer portal resource.

```json
{
  "created_at": "2025-06-16T16:54:17.946594Z",
  "customer_key": "My Company",
  "expires_at": "2025-06-17T16:54:17.946594Z",
  "url": "https://se.am/1234",
  "workspace_id": "67c58f1f-f148-4415-a63c-dc6c145c6b91"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`created_at`** *Datetime*

Date and time at which the customer portal link was created.




---

**`customer_key`** *String*

Customer key for the customer portal.




---

**`expires_at`** *Datetime*

Date and time at which the customer portal link expires.




---

**`url`** *String*

URL for the customer portal.




---

**`workspace_id`** *UUID*

ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) associated with the customer portal.




---

## Endpoints


[**`/customers/create_portal`**](./create_portal.md)

Creates a new customer portal magic link with configurable features.


[**`/customers/delete_data`**](./delete_data.md)

Deletes customer data including resources like spaces, properties, rooms, users, etc.
This will delete the partner resources and any related Seam resources (user identities, access grants, spaces).


[**`/customers/push_data`**](./push_data.md)

Pushes customer data including resources like spaces, properties, rooms, users, etc.


