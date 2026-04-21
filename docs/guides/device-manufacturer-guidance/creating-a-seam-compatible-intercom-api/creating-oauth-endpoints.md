---
description: How to create a Seam-Compatible OAuth endpoint.
---

# Creating OAuth Endpoints

This guide will you implement the two endpoints required for OAuth 2.0 with the Authorization Code Flow, `/authorize` and `/oauth/token`. We'll also go over some OAuth concepts to make it as easy as possible.

## Terminology

* **Resource Owner** **(Intercom Owner):** The person,  installer, company or end-user who owns the intercoms or can grant access to a building. This person will sign in to your server.
* **Resource/Authorization Server (Your Server)**: The server granting access to the intercom, that's what we're creating here!
* **Client (Seam)**: Application requesting access to the intercom on behalf of the Intercom Owner. This is Seam! We're a client requesting access on behalf of the intercom owner, so that the intercom owner can get delivery services.

{% hint style="info" %}
If you use an external authorization provider like Auth0 or Clerk, you'll have a separate Resource and Authorization server. We can handle this! Contact `integrations@getseam.com`
{% endhint %}

## Endpoints

### Overview

* **/authorize** - This endpoint provides a web page for the Intercom Owner to sign into
* **/oauth/token** - Client (Seam) calls this after the user signs in

### GET /authorize

This endpoint can return the HTML for a webpage for a user to sign into (expand this box to see an example!). You can use your own internal endpoints to validate the user, then, using your database, create an authorization code that we'll use in a later step. The authorization code just represents that a user successfully logged in. It can be a UUID or a random string. To avoid storing codes in your database, you may consider using a signed JWT for the authorization code.\
\
It is very important that you validate that the `redirect_uri` goes to `*.integrations.getseam.com`, or a malicious actor could gain access to your system by redirecting the Intercom Owner to their domain.

{% swagger method="get" path="/authorize" baseUrl="https://devicecloud.example.com" summary="Provide a webpage for the Intercom Owner to sign into" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="redirect_uri" type="String" required="true" %}
URL to redirect Intercom Owner to after they sign in
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Return a login web page" %}
```javascript
<!-- Just an example, this page will look ugly! --!>
<html>
  <body>
    email: <input type="text" id="email" /><br/>
    password: <input type="text" id="password" /><br/>
    <button id="submit">submit</button>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script>
      // When the user hits submit, we 
      $("#submit").on("click", async () => {
        const res = await fetch("/yourinternalapi/login", {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: $("#email").val(),
            password: $("#password").val()
          })
        }).then(r => r.json())
        
        // Our login response contains the OAuth Authorization Code
        window.location.href = redirect_uri + "&code=" + res.authorization_code
      })
    </script>
  </body>
</html>
```
{% endswagger-response %}
{% endswagger %}

### POST /oauth/token

Seam sends you an Authorization code it got from `/authorize`, as well as a Client ID of "seam" and Client Secret, which we will provide you. While testing your login flow, you can use "seamsecret" as your Client Secret.

You should return an Access Token, which can be a long random string, UUID, or signed JWT. You'll use this access token to allow seam to access Devices and Access Codes.

Seam will attach the access token in it's `Authorization` header like so: `Authorization: Bearer <access_token>`

{% swagger method="post" path="/oauth/token" baseUrl="https://devicecloud.example.com" summary="Exchange an Authorization Code for an Access Token" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="code" required="true" %}
Authorization code from /authorize
{% endswagger-parameter %}

{% swagger-parameter in="body" name="client_id" required="true" %}
The client_id should be "seam"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="client_secret" required="true" %}
A secret provided to you by Seam.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "access_token": "MODojXFjngsV8Z2xAymEi5CdCTo9ZpQf4tXTLO2L061ae"
}
```
{% endswagger-response %}
{% endswagger %}

## Resources

* [Auth0 Authorization Code Flow documentation](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
