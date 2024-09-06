---
description: You can limit your users' access to a subset of devices.
---

# Using User Identities to Scope Users' Device Access

First, create the [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that corresponds to your user. Configure the user identity with your internal user ID or other identifying information. Then, use the [Grant Access to Device](../../api-clients/user-identities/grant\_access\_to\_device.md) method to assign the user identity access to specific devices.

After creating and configuring the user identity, create a [client session](../../core-concepts/authentication/client-session-tokens/) and capture the resulting [client session token](../../core-concepts/authentication/client-session-tokens/). When you use this token in your application, such as in a [Seam Component](../../seam-components/overview/), Seam limits you user's access to only the devices that you specified for the associated user identity.

{% tabs %}
{% tab title="Python" %}
```python
# Create the user identity.
user_identity = seam.user_identities.create(
    user_identity_key="user-1"
)

# Grant the user identity access to a specific device.
seam.user_identities.grant_access_to_device(
    user_identity_id=user_identity.user_identity_id,
    # Specify the ID of the device that you want your
    # user to be able to access.
    device_id="054765c8-a2fc-4599-b486-14c19f462c45"
)

# Create the client session.
client_session = seam.client_sessions.create(
    user_identity_ids=[user_identity.user_identity_id]
)

# Use this token in your app.
token = client_session.token
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Create the user identity.
user_identity=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
        "user_identity_key": "user-1"
  }')

# Get the user identity ID.
user_identity_id=$(echo $user_identity | jq -r '.user_identity.user_identity_id')

# Grant the user identity access to a specific device.
# For device_id, specify the ID of the device that you
# want your user to be able to access.
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/grant_access_to_device' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d "{
        \"user_identity_id\": \"$user_identity_id\",
        \"device_id\": \"054765c8-a2fc-4599-b486-14c19f462c45\"
  }"

# Create the client session.
client_session=$(curl -X 'POST' \
  'https://connect.getseam.com/client_sessions/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
        \"user_identity_ids\": [\"$user_identity_id\"]
  }")

# Get the resulting client session token and
# use this token in your app.
token=$(echo $client_session | jq -r '.client_session.token')
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
// Create the user identity.
const user_identity = await seam.userIdentities.create({
    user_identity_key: "user-1"
});

// Grant the user identity access to a specific device.
await seam.userIdentities.grantAccessToDevice(
    user_identity_id: user_identity.user_identity_id,
    // Specify the ID of the device that you want your
    // user to be able to access.
    device_id: "054765c8-a2fc-4599-b486-14c19f462c45"
)

// Create the client session.
const client_session = await seam.clientSessions.create({
    user_identity_ids: [user_identity.user_identity_id]
});

// Use this token in your app.
const token = client_session.token;
```
{% endtab %}

{% tab title="PHP" %}
```php
// Create the user identity.
$user_identity = $seam->user_identities->create(
  user_identity_key: "user-1"
);

// Grant the user identity access to a specific device.
$seam->user_identities->grant_access_to_device(
    user_identity_id: $user_identity->user_identity_id,
    // Specify the ID of the device that you want your
    // user to be able to access.
    device_id: "054765c8-a2fc-4599-b486-14c19f462c45"
);

// Create the client session.
$client_session = $seam->client_sessions->create(
  user_identity_ids: [$user_identity->user_identity_id]
);

// Use this token in your app.
$token = $client_session->token;
```
{% endtab %}

{% tab title="Go" %}
```go
// Create the user identity.
response, uErr := client.UserIdentities.Create(context.Background(), &api.UserIdentitiesCreateRequest{
    UserIdentityKey: api.String("user-1"),
})

if uErr != nil {
    return uErr
}

// Grant the user identity access to a specific device.
_, uErr := client.UserIdentities.GrantAccessToDevice(context.Background(), &api.UserIdentitiesGrantAccessToDeviceRequest{
    UserIdentityId: response.UserIdentity.UserIdentityId,
    // Specify the ID of the device that you want your
    // user to be able to access.
    DeviceId: "054765c8-a2fc-4599-b486-14c19f462c45",
})

if uErr != nil {
    return uErr
}

// Create the client session.
clientSession, uErr := client.ClientSessions.Create(context.Background(), &api.ClientSessionsCreateRequest{
  UserIdentityIds: []string{response.UserIdentity.UserIdentityId},
})

// Use this token in your app.
token := clientSession.Token
fmt.Println("Token:", token)

return nil
```
{% endtab %}
{% endtabs %}
