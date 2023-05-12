---
description: Learn how to use Seam's prebuilt React components with your React application
---

# Get started with React Components and Client Session Tokens

<!-- <figure><img src="../.gitbook/assets/august-getting-started-guide-cover.jpg" alt=""><figcaption><p>August Smart Locks</p></figcaption></figure> -->

## Overview

Seam provides React Components and hooks to connect and control many types of smart devices. This guide provides a rapid introduction to using React
Components with Client Session Tokens.

For this guide, we expect you to have a **backend server** and a **client frontend react application**. If you want to integrate Seam using only a client without
a backend, you'll need to use a `publishable_key` (guide coming soon!)

### What are Client Session Tokens?

Client Session Tokens are tokens that allow a device owner to make API requests
to Seam, but only interact with their own devices. You'll need to create a
client session token and give it to the `<SeamProvider />` in order for your
user to interact with their devices.

## 1 — Install Seam SDK on your Server

Seam provides client libraries for many languages such as Javascript, Python, Ruby, and PHP, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

- **Javascript:** `npm i seamapi` ([npm](https://www.npmjs.com/package/seamapi), [github](https://github.com/seamapi/javascript))
- **Python:** `pip install seamapi` ([pip](https://pypi.org/project/seamapi/), [github](https://github.com/seamapi/python))
- **Ruby:** `bundle add seamapi` ([rubygem](https://rubygems.org/gems/seamapi), [github](https://github.com/seamapi/ruby))
- **PHP:** `composer require seamapi/seam` ([packagist](https://packagist.org/packages/seamapi/seam), [github](https://github.com/seamapi/php))

Once installed, [sign-up for Seam](https://console.seam.co/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a Sandbox Workspace. Only virtual devices can be connected. If you need to connect a real August Lock, use a non-sandbox workspace and API key.
{% endhint %}

## 2 - Install `@seamapi/react`

```bash
npm install --save @seamapi/react
# or via yarn
yarn add @seamapi/react
```

## 3 — Create a Client Session on your Server, and pass it to the Client

We'll start by writing some server code that returns a client session. There
are a lot of ways to do this depending on your server framework:

- Create an endpoint such as `/api/seam/get_client_session_token` and call it
  from your frontend app
- Inject the client session token in your html if you're using an HTML
  templating engine.

For this guide, we'll assume you're creating an endpoint that will return
a client session token. This is often appropriate for Single Page Applications.

{% tabs %}
{% tab title="Javascript/NextJS API Endpoint" %}

```javascript
import { Seam } from "seamapi"

export default (req, res) => {
  // Do authentication logic
  const userId = "<from your internal authentication>"

  // Pull any accounts associated with this user
  // You can also use connect webview ids, or just pass an empty array if you'd
  // like the user to make the connect webviews themselves in the frontend!
  const accountsAssociatedWithUser = [{ seamConnectedAccountId: "..." }]

  const seam = new Seam()

  const clientSession = seam.client_sessions.create({
    connected_account_ids: accountsAssociatedWithUser.map(
      (acc) => acc.seamConnectedAccountId
    ),
  })

  res.status(200).json({
    seamClientSessionToken: clientSession.token,
  })
}
```

{% endtab %}
{% endtabs %}

Awesome! We can now request this from the frontent client application using
something a hook like this:

```javascript
// lib/hooks/use-seam-cst.js
import { useState, useEffect } from "react"

export const useSeamCST = () => {
  const [cst, setCST] = useState()

  useEffect(() => {
    const res = fetch("/api/seam/get_client_session_token", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${myAppAuthToken}`,
      },
    }).json()
    setCST(res.seamClientSessionToken)
  }, [])

  return cst
}
```

{% hint style="info" %}
Why do we need the backend for getting the Client Session Token? It allows you
to use your application's existing authentication! If you want to have Seam
handle all the user authentication, you can use a publishable key, but we
recommend using client session tokens!
{% endhint %}

## 4 - Use Your Client Session Token to Display a User's Devices

```javascript
import { SeamProvider, DevicesView } from "@seamapi/react"
import { useSeamCST } from "lib/hooks/use-seam-cst"

export const App = () => {
  const cst = useSeamCST()
  return (
    <SeamProvider clientSessionToken={cst}>
      <DevicesView />
    </SeamProvider>
  )
}
```

## Next Steps

Now that you've completed this guide, you can try to connect a real August device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

In addition, if you'd like to explore other aspects of Seam, here is a list of helpful resources:

- [Schlage Getting Started Guide](broken-reference/)
- [Yale Getting Started Guide](get-started-with-yale-locks.md)
- [SmartThings Getting Started Guide](get-started-with-smartthings-hubs-+-smart-locks.md)
- [Receiving webhook](../core-concepts/webhooks.md) for [device events](../api-clients/events/list-events.md)
- [Core Concepts](broken-reference/)

If you have any questions or want to report an issue, email us at support@seam.co.
