---
description: Learn the device errors for which you should add handling to your app.
---

# Handling Device Errors

Seam provides both generic and more specific device errors. We recommend that you add error handling logic to your app for each of the following generic errors:

<table><thead><tr><th width="263">Error Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_disconnected</code></td><td>Device is disconnected.</td></tr><tr><td><code>device_removed</code></td><td>Device has been removed from the connected account. Seam can no longer sync with this device.</td></tr><tr><td><code>hub_disconnected</code></td><td>Hub to which the device is connected is offline. Seam is unable to sync updates to this device.</td></tr></tbody></table>

Your app should also include a fallback case if it encounters an unknown generic error code.

When Seam is able to provide more specific information beyond one of the generic errors, your app can display additional context or suggest provider-specific resolutions.

{% hint style="info" %}
If the connected account associated with a device has an error, it is attached to the device alongside any other device errors. Treat these errors as specific errors.
{% endhint %}
