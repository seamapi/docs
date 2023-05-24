---
description: Use Seam's prebuilt components to make a Supported Devices page
---

# Make a Supported Devices Page with React

## Overview

Seam adds supports for smart devices every week and by integrating with
Seam, you also get access to all the new devices we add support for!

This guide will show you how to drop in [`<SupportedDevices />`](https://seam-react.vercel.app/?path=/docs/example-supporteddevices--docs) to your
React application.

## 1 - Install `@seamapi/react` in your React application

```bash
npm install --save @seamapi/react
# or via yarn
yarn add @seamapi/react
```

## 2 — Import and Drop In the [\<SupportedDevices /> Component](https://seam-react.vercel.app/?path=/docs/example-supporteddevices--docs)

```javascript
import { SeamProvider, DeviceTable } from "@seamapi/react"

export const App = () => {
  return <SupportedDevices />
}
```

You should see a list of device models like what's shown below:

<figure><img src="../.gitbook/assets/2023-05-24_02-07.png" alt="" width="375"><figcaption></figcaption></figure>

## Next Steps

- View and play with other components in the [interactive storybook component library](https://seam-react.vercel.app/)
- Check out some [Full Example Apps](https://github.com/seamapi/react/tree/main/examples)

If you have any questions or want to report an issue, email us at support@seam.co.
