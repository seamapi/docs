---
description: >-
  A guide to implementing OAuth2 so Seam can securely connect to your platform
  and access user devices.
---

# Implementing Authentication

A Seam integration starts when a user signs in to their device provider and gives your platform permission to access their account. The easiest way to support this is through [OAuth2](https://oauth.net/2/), because it gives users a familiar login screen and lets your API issue secure, long-lasting tokens without exposing passwords.

***

## OAuth2 with Access + Refresh Tokens

Your API should use the standard [OAuth2 Authorization Code flow](https://oauth.net/2/).

### 1. Authorization request launches the flow

As the first step, Seam makes a GET request to your authorization URL. This should show the user a login screen from your service.

#### Example authorization request

```http
GET https://api.provider.com/oauth/authorize?
  response_type=code&
  client_id=seam_prod_123&
  redirect_uri=https://example.com/oauth_redirect&
  scope=locks.read%20locks.write&
  prompt=login&
  state=xyz123
```

**Key expectations:**

* `prompt=login` must force the user to re-authenticate even if they have an existing session.
* `redirect_uri` should match one of the URIs Seam registers with your platform.
* `state` must be returned unchanged to prevent CSRF.

***

### 2. User login + consent screen

After Seam sends the authorization request in [step 1](implementing-authentication.md#id-1.-authorization-request-launches-the-flow), your service should display a login and consent screen. The user signs in, reviews what Seam will be able to access, and decides whether to continue.



{% columns %}
{% column %}
<figure><img src="../../.gitbook/assets/google sign in copy.png" alt="" width="375"><figcaption><p>Example login screen from Google</p></figcaption></figure>


{% endcolumn %}

{% column %}
<figure><img src="../../.gitbook/assets/image (48).png" alt="" width="375"><figcaption><p>Example consent screen from Google</p></figcaption></figure>


{% endcolumn %}
{% endcolumns %}

Your UI should:

* ask the user to log in
* clearly show what Seam will access
* allow them to approve or deny

This step should feel identical to signing into your own product.

***

### 3. Redirect back to Seam with a code

After approval, redirect the browser back to the provided redirect URL:

```
https://example.com/oauth_redirect
```

Your service must append the authorization code (`code`) and `state`:

```http
https://example.com/oauth_redirect?
  code=abc123_code_from_provider&
  state=xyz123
```

**Key expectations:**

* the redirect URL must exactly match one that Seam registered with your platform.
* `code` is the temporary value Seam will exchange for tokens.
* `state` must match what Seam originally sent in [Step 1](implementing-authentication.md#id-1.-authorization-request-launches-the-flow).

***

### 4. Exchange the code for tokens

Seam will exchange the authorization code for tokens:

```http
POST https://api.provider.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=abc123_code_from_callback&
redirect_uri=https://connect.getseam.com/oauth/callback&
client_id=seam_prod_123&
client_secret=shhh_very_secret
```

**Expected response:**

```json
{
  "access_token": "ya29.a0ARt76ExampleAccess",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1//0exampleRefreshToken",
  "user_id": "provider_user_491829"
}
```

**Best practices:**

* `access_token` expires quickly (`1h` is typical)
* `refresh_token` lasts long and is stable
* `user_id` must be stable across all future authentications

***

### 5. Calling your API with the access token

Seam can call your APIs using the access token. A common way is to do it using the the standard `Authorization` header:

```http
GET https://api.provider.com/v1/locks/123
Authorization: Bearer ya29.a0ARt76ExampleAccess
```

***

### 6. Refreshing tokens over time

Seam refreshes tokens frequently, sometimes from multiple workflows running at once.

<pre class="language-http"><code class="lang-http"><strong>POST https://api.provider.com/oauth/token
</strong>Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&#x26;
refresh_token=1//0exampleRefreshToken&#x26;
client_id=seam_prod_123&#x26;
client_secret=shhh_very_secret
</code></pre>

**Expected response:**

```json
{
  "access_token": "ya29.newAccessTokenHere",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1//0exampleRefreshToken", 
  "user_id": "provider_user_491829"
}
```

#### Key requirements

* issue a new access token
* keep existing unexpired access tokens valid
* keep the refresh token usable until Seam rotates it

***

## Additional integration requirements

### Stable User Identifier

Seam needs a permanent, account-level ID in every OAuth response so it can reconnect accounts and avoid duplicates. This ID must:

* remain the same for the lifetime of the account
* not depend on email addresses
* not change when tokens or sessions rotate

**Example access token response:**

```json
{
  "user_id": "provider_user_491829", // stable account identifier
  "access_token": "ya29.a0ARt76ExampleAccess",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1//0exampleRefreshToken"
}
```

***

### Multiple Redirect URLs

Seam generally likes to use separate redirect URIs for production, staging, and local development. It's preferable if your provider allows registering multiple URLs.

**Typical examples:**

```
https://connect.getseam.com/oauth/callback
https://staging.connect.getseam.com/oauth/callback
http://localhost:3020/oauth/callback
```

***

### Token Stability Requirements

Seam may refresh tokens from multiple workflows at the same time, so refreshing can’t interrupt active requests.

**Requirements:**

* issue a new access token during refresh
* let previously issued, unexpired access tokens keep working
* keep the refresh token valid until Seam rotates it
* do not force the user to sign in again or return 401s after refresh

This protects long-running provisioning jobs, onboarding polling, and parallel credential updates from unexpected failures.

***
