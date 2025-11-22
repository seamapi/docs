---
description: >-
  A guide to implementing OAuth2 so Seam can securely connect to your platform
  and access user devices.
---

# Implementing Authentication

A Seam integration starts with a user linking their account to your platform. We prefer [OAuth2](https://oauth.net/2/) because it provides a standardized, secure way to authenticate users and issue long-lived tokens while ensuring Seam never needs direct access to a user’s private credentials. A clean OAuth2 implementation is the foundation for a stable, reliable integration.

***

## OAuth2 with Access + Refresh Tokens

Your API should use the standard [OAuth2 Authorization Code flow](https://oauth.net/2/).

#### Authorization Request Example

```http
GET https://api.provider.com/oauth/authorize?
  response_type=code&
  client_id=seam_prod_123&
  redirect_uri=https://connect.getseam.com/oauth/callback&
  scope=locks.read%20locks.write&
  prompt=login&
  state=xyz123
```

**Key expectations:**

* `prompt=login` must force the user to re-authenticate even if they have an existing session.
* `redirect_uri` should match one of the URIs Seam registers with your platform.
* `state` must be returned unchanged to prevent CSRF.

***

#### OAuth Callback Example

```http
POST https://api.provider.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=abc123_code_from_callback&
redirect_uri=https://connect.getseam.com/oauth/callback&
client_id=seam_prod_123&
client_secret=shhh_very_secret
```

#### Token Response Example

Your API should return both `access_token`, `refresh_token`, and a stable user or account ID:

```json
{
  "access_token": "ya29.a0ARt76ExampleAccess",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1//0exampleRefreshToken",
  "user_id": "provider_user_491829"
}
```

**Requirements:**

* `access_token` expires quickly (`1h` is typical)
* `refresh_token` lasts long and is stable
* `user_id` must be stable across all future authentications

***

### Use of Bearer Tokens

Seam can call your APIs using the standard `Authorization` header:

```http
GET https://api.provider.com/v1/locks/123
Authorization: Bearer ya29.a0ARt76ExampleAccess
```

***

### Token Refresh

Seam refreshes tokens frequently and concurrently. Refreshing must not invalidate other live tokens.

#### Refresh Request Example

```http
POST https://api.provider.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&
refresh_token=1//0exampleRefreshToken&
client_id=seam_prod_123&
client_secret=shhh_very_secret
```

#### Refresh Response Example

```json
{
  "access_token": "ya29.newAccessTokenHere",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1//0exampleRefreshToken", 
  "user_id": "provider_user_491829"
}
```

**Critical behavior:**

* You may issue a _new_ refresh token, but you must keep the previous one valid until it is used or explicitly expires.
* You should _not_ revoke existing access tokens when a refresh occurs.

This guarantees reliability during:

* Parallel background jobs
* Mobile app and cloud usage at the same time
* Long-running lock provisioning tasks

***

### Stable User Identifier

Every OAuth interaction must return a stable account-level ID. It should:

* Never change for a given user
* Not depend on email address (emails change)
* Not depend on tokens
* Not be session-based

#### Example

```
{
  "user_id": "provider_user_491829"
}
```

Seam uses this to:

* Deduplicate reconnections
* Reconnect an account after token expiry
* Maintain mapping between providers and Seam workspaces

#### Example Scenario: Reconnect Flow

| Event                 | Expected Provider Behavior                        |
| --------------------- | ------------------------------------------------- |
| User connects account | Returns `user_id = provider_user_491829`          |
| User disconnects      | No change                                         |
| User reconnects later | Returns the same `user_id = provider_user_491829` |

If it changes, Seam must treat it as a new account — which breaks reconnect flows.

***

### Multiple Redirect URLs

Your OAuth app should allow Seam to register multiple redirect URIs.

**Typical examples:**

```
https://connect.getseam.com/oauth/callback
https://staging.connect.getseam.com/oauth/callback
http://localhost:3020/oauth/callback
```

#### Registration Object Example

If your API exposes an endpoint for app registration:

```json
{
  "client_id": "seam_prod_123",
  "redirect_uris": [
    "https://connect.getseam.com/oauth/callback",
    "https://staging.connect.getseam.com/oauth/callback",
    "http://localhost:3020/oauth/callback"
  ],
  "scopes": ["locks.read", "locks.write"]
}
```

If you allow redirect URLs via dashboard, ensure multiple can be entered without replacing each other.

***

### Token Stability Requirements

Seam often runs concurrent jobs using different access tokens.

#### Correct Behavior

* Token refresh returns a new access token
* Existing unexpired access tokens remain valid
* Refresh token remains usable until explicitly rotated

#### Incorrect Behavior (Do Not Do)

* Refreshing invalidates all previous access tokens
* Refreshing invalidates the previous refresh token immediately
* Refreshing requires user reauthentication
* API responds with 401 after every refresh

#### Why It Matters

Seam must support:

* Lock provisioning pipelines
* High-frequency device polling during onboarding
* Parallel credential updates across many devices

Breaking token stability results in lockouts, expired access grants, and repeated user re-auth flows.

***
