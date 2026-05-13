---
description: >-
  Embed the Seam Custom Device Database web component to show a filterable list
  of compatible devices on your site
---

# Make a Supported Devices Page

## Overview

Seam adds support for new smart devices every week, and by integrating with Seam, you get access to those new devices too.

This guide shows you how to embed a filterable list of devices on your site using the [Seam Custom Device Database web component](https://github.com/seamapi/custom-device-db-web). The component is a standard custom element served from the Seam CDN, so it works in plain HTML and any framework that supports web components.

{% hint style="warning" %}
**Migrating from the previous version?** The earlier `<seam-supported-device-table>` component has been retired and will no longer load. If your site embeds it today, replace it with `<device-list-by-capability>` as shown below.
{% endhint %}

## 1 — Request an API Token

The `<device-list-by-capability>` component reads from Seam's Custom Device Database, which requires an API token. Email [support@seam.co](mailto:support@seam.co) to request a token for your workspace.

## 2 — Add the Component

{% tabs %}
{% tab title="Plain HTML" %}
Add the script tag and custom element anywhere on your page. You can serve this any way you like, or even open it directly in your browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Supported Devices</title>
  </head>
  <body>
    <main>
      <device-list-by-capability
        capability-name="remoteunlock"
        token="your-api-token"
      ></device-list-by-capability>
    </main>
    <script
      type="module"
      src="https://cdn.devicedb.seam.co/v/latest/DeviceListByCapability.global.js"
    ></script>
  </body>
</html>
```

{% endtab %}

{% tab title="Any JavaScript Framework" %}
Because `<device-list-by-capability>` is a standard custom element, you can use it in any framework that supports web components, including React, Vue, Angular, and Svelte.

Include the script tag once in your application's entrypoint (for example, `index.html`):

```html
<script
  type="module"
  src="https://cdn.devicedb.seam.co/v/latest/DeviceListByCapability.global.js"
></script>
```

Then render the element wherever you need the device list:

```html
<device-list-by-capability
  capability-name="remoteunlock"
  token="your-api-token"
></device-list-by-capability>
```

Some frameworks require additional configuration to enable web component support. See the [Angular](getting-started-with-seam-components/angular.md) and [Vue](getting-started-with-seam-components/vue.md) guides for examples.
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
**Pin to a specific version in production.** The `/v/latest/` URL tracks the most recent release. To avoid surprise updates, pin to an immutable version such as `https://cdn.devicedb.seam.co/v/0.0.6/DeviceListByCapability.global.js`. See the [release list](https://github.com/seamapi/custom-device-db-web/releases) for available versions.
{% endhint %}

## 3 — Configure the Component

The `<device-list-by-capability>` element accepts the following attributes:

| Attribute            | Type    | Default | Description                                                                                            |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `capability-name`    | string  | —       | **Required.** Comma-separated capability names, for example `remoteunlock` or `remoteunlock,walletkeys`. |
| `token`              | string  | —       | **Required.** API token issued by Seam.                                                                |
| `max-visible-rows`   | number  | `4`     | Maximum device rows shown per manufacturer before a "show more" control appears.                       |
| `hide-search`        | boolean | `false` | Hide the search input.                                                                                 |
| `manufacturers`      | string  | —       | Comma-separated manufacturer slugs to restrict the device list.                                        |
| `initial-capability` | string  | —       | Which capability to display first when `capability-name` contains multiple values.                     |

### Show multiple capabilities

When you provide more than one capability, the component renders a dropdown selector. Use `initial-capability` to control which capability is active on load.

```html
<device-list-by-capability
  capability-name="remoteunlock,walletkeys"
  initial-capability="remoteunlock"
  token="your-api-token"
></device-list-by-capability>
```

### Filter to specific manufacturers

```html
<device-list-by-capability
  capability-name="remoteunlock"
  manufacturers="schlage,yale"
  token="your-api-token"
></device-list-by-capability>
```

## Next Steps

- Browse live examples in the [interactive component storybook](https://seamapi.github.io/custom-device-db-web).
- Review source, release notes, and version history in the [`custom-device-db-web` repository](https://github.com/seamapi/custom-device-db-web).

If you have any questions or want to report an issue, email us at [support@seam.co](mailto:support@seam.co).
