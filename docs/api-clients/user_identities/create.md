---
description: Create a new user identity
---

# Create a User Identity

Creates a new [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the characteristics of the new user identity by including the corresponding parameters in the request body. Note that if you specify one or more of the `user_identity_key`, `email_address`, or `phone_number`, each of these values must be unique within your [workspace](../../core-concepts/workspaces/).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_key</code></td><td>String<br><em>Optional</em></td><td>Unique key for the user identity</td></tr><tr><td><code>email_address</code></td><td>String<br><em>Optional</em></td><td>Unique email address for the user identity</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Unique phone number for the user identity in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Full name of the user associated with the user identity</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "full_name": "Jean Doe"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
userIdentity, uErr := client.UserIdentities.Create(context.Background(), &useridentities.UserIdentitiesCreateRequest{
    UserIdentityKey: api.String("jenny_lee"),
    EmailAddress: api.String("jenny@example.com"),
    PhoneNumber: api.String("+15555550111"),
    FullName: api.String("Jenny Lee"),
})

if uErr != nil {
    return uErr
}

fmt.Println(userIdentity)
return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns a `user_identity` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>ID of the user identity</td></tr><tr><td><code>user_identity_key</code></td><td>Unique key for the user identity</td></tr><tr><td><code>email_address</code></td><td>Unique email address for the user identity</td></tr><tr><td><code>display_name</code></td><td>Display name for the user identity</td></tr><tr><td><code>full_name</code></td><td>Full name of the user associated with the user identity</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the user identity was created</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the user identity</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "user_identity": {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}