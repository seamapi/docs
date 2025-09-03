---
description: Link your customers to Seam with customer_key.
---

# Customers

A customer in Seam represents one of your end customers — for example, a hotel operator, property manager, gym owner, or office admin. Customers link the systems and devices they control (via Seam Connect) to your application.

Seam gives you a way to tag each customer with your own identifier through the `customer_key`. This makes it easy to keep Seam’s records aligned with your own database.

***

### What is `customer_key`?

`customer_key` is your unique identifier for a customer. You assign it when creating resources that belong to that customer. Seam then copies the same key to related resources, so you always have a reliable way to look them up.

Key uses:

* Connect Webviews: Tag a Webview with `customer_key`. When the customer connects their account, the resulting Connected Account inherits that key.
* Customer Portals: Initialize a portal with `customer_key` so the portal shows only the devices, spaces, and accounts for that customer.
* Lookups: Use `customer_key` to fetch all Connected Accounts, devices, or systems associated with a specific customer.

***

#### Key uses:

* Connect Webviews: Tag a Webview with `customer_key`. When the customer connects their account, the resulting Connected Account inherits that key.
* Customer Portals: Initialize a portal with `customer_key` so the portal shows only the devices, spaces, and accounts for that customer.
* Lookups: Use `customer_key` to fetch all Connected Accounts, devices, or systems associated with a specific customer.

***

### Next step: set up a Customer Portal

Once you’ve defined a customer with `customer_key`, you can set up a Customer Portal to give them self-service access to their systems and devices. In the next section, we’ll walk through how to configure a Customer Portal in the Console and initialize it with your `customer_key`.
