---
description: Learn how to use client sessions to control your users' access to devices.
---

# Implementing Client Sessions for Device Management in the Backend

If you are developing an application with multiple customers connecting their devices, [client sessions](../client-session-tokens.md) are a practical way to manage device access for each user. This topic provides an example of implementing client sessions in the backend, ensuring that users can access only the devices that they own.

***

## Connect Your Users' Accounts Using a Client Session

When connecting your customers' devices, you can create a client session for each customer and associate this session with any Connect Webviews that you issue to them.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Pass your API key to the Seam constructor to authorize access 
// to your Seam workspace.
// Set your API key. Remember to switch to your live API key 
// in production.
const seam = new Seam("YOUR_API_KEY")

// Get or create a client session using your own internal user 
// ID as the user_identifier_key.
const user_identifier_key = "xxxx"
const client_session = await seam.clientSessions.get_or_create({
    user_identifier_key
})
  
// Create a Connect Webview and link the Connect Webview to the 
// client session, using the user_identifier_key to identify the 
// desired client session.
const connect_webview = await seam.connectWebviews.create()
await seam.clientSessions.grant_access({
  user_identifier_key,
  connect_webview_ids: [connect_webview.connect_webview_id],
})
  
// Share the URL of the Connect Webview with the user to enable 
// them connect their devices.
const connect_webview_url = connect_webview.url
```
{% endtab %}
{% endtabs %}

***

## Filter for a User's Devices with the User Identifier Key

You can use the `user_identifier_key` to retrieve a list of devices that only includes the ones that a specific user owns.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const user_identifier_key = "xxxx"

const devices = await seam.devices.list({
  user_identifier_key
})
```
{% endtab %}
{% endtabs %}

***

## Authorize Requests Using the User Identifier Key

You can also use the `user_identifier_key` to ensure that a user has the authorization to interact with a device.

{% tabs %}
{% tab title="Node" %}
```javascript
const handleUnlock = async (req, res) => {
  // Retrieve the internal user ID used to set the 
  // user_identifier_key.
  const user_identifier_key = req.auth.userId
  
  // The application user specifies a device to unlock from 
  // among the filtered set of devices.
  const device_id = req.body.device_id
  
  // Confirm that the selected device is, indeed, among the 
  // set of devices that the user owns.
  const devices = await seam.devices.list({
    user_identifier_key,
    device_ids: [device_id],
  }) 
  if (devices.length === 0) return res.send(401).end()
  
  // Trigger an action on the device, like unlocking the door.
  await seam.devices.unlock_door({ device_id })
  
  res.send(204)
}
```
{% endtab %}
{% endtabs %}
