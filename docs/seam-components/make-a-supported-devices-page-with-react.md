---
description: Use Seam's prebuilt components to make a Supported Devices page
---

# Make a Supported Devices Page with React

## Overview

Seam adds supports for smart devices every week and by integrating with
Seam, you also get access to all the new devices we add support for!

This guide will show you how to drop [`<SupportedDeviceTable />`](https://react.seam.co/?path=/docs/example-supporteddevicetable--docs) into your
React application.

## 1 - Install `@seamapi/react` in your React application

```bash
npm install --save @seamapi/react
# or via yarn
yarn add @seamapi/react
```

## 2 - Get a Publishable Key from the Seam Console

To access the Seam API, you'll need a publishable key. This key
identifies your application when making requests to Seam and is
okay to embed in your frontend code.

Go to [console.seam.co](https://console.seam.co) and select
"Client Sessions" from the sidebar. You should then see a
"Publishable Key" that you can copy.

<figure><img src="../.gitbook/assets/publishable-key-copy.png" alt="" width="375"><figcaption></figcaption></figure>

## 3 — Import and Drop In the [\<SupportedDeviceTable /> Component](https://react.seam.co/?path=/docs/example-supporteddevicetable--docs)

```javascript
import { SeamProvider, SupportedDeviceTable } from "@seamapi/react"

export const App = () => (
  <SeamProvider publishableKey="YOUR_PUBLISHABLE_KEY">
    <SupportedDeviceTable />
  </SeamProvider>
)
```

You should see a list of device models like what's shown below:

<figure><img src="../.gitbook/assets/supported-device-table.png" alt="" width="375"><figcaption></figcaption></figure>

## Next Steps

- View and play with other components in the [interactive storybook component library](https://seam-react.vercel.app/)
- Check out some [Full Example Apps](https://github.com/seamapi/react/tree/main/examples)

If you have any questions or want to report an issue, email us at support@seam.co.
