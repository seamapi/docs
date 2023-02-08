# Creating a Seam-Compatible Door Locks API

Seam integrates with Intercom systems to enable them to receive deliveries from major delivery providers. After making your intercom API seam-compatible, you don’t need to do any additional effort to be compatible with major US delivery providers, a major selling point for US intercom systems.

To make your system compatible, you should create a HTTP REST API with OAuth for authentication and CRUD-style endpoints for listing intercoms, unlocking doors, and managing access codes. This guide will walk you through creating that API, and have examples for requests/responses. If you need any support, contact `integrations@getseam.com`

{% hint style="info" %}
Seam can integrate with systems that use Authentication systems other than OAuth, to inquire about alternateAuthentication mechanism, briefly describe your system in an email to `integrations@getseam.com`
{% endhint %}

{% hint style="info" %}
No access codes on your intercom system? That's OK, as long as the system can be remotely unlocked most delivery providers are still compatible, just skip the access code CRUD endpoints.
{% endhint %}

## Get Started

There are three links below, each link will walk you through the endpoints you'll need to create for Seam to interact with your system.

You'll need to host these endpoints on a publicly accessible server. We recommend something like `devicecloud.companyname.com`. If you already have a server and a domain, you can use a _base path_ on your existing server, e.g. `companyname.com/somebasepath/...`. Seam will prepend the _base path_ to all of our requests.

1. [Creating OAuth Endpoints](creating-oauth-endpoints.md)
2. [Creating Door Lock CRUD Endpoints](creating-door-lock-crud-endpoints.md)
3. [Creating Access Code Endpoints](creating-access-code-crud-endpoints.md)
4. [Health Endpoint](creating-the-health-endpoint.md)
5. Example Project in Python (coming soon)
