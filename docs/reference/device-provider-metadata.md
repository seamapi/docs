---
description: >-
  Device provider metadata is used to provide data on a device that can't be or
  hasn't yet been standardized across all providers.
---

# Device Provider Metadata

When integrating with a device provider, Seam adds any information that doesn't fit nicely into a cross-provider standard field into the provider metadata for a device. Device provider metadata can be found on an object on devices named like so:

&#x20;`device.properties.PROVIDER_metadata`

Examples of provider metadata include `august_metadata`, `schlage_metadata` and `lockly_metadata`.

Sometimes provider metadata contains fields where Seam is still coming up with a standard representation, so you can use these fields to "get ahead" of Seam's standardized implementation.

## Getting Provider Metadata

To access provider metadata, make any call that returns device properties, here are some examples of how you can get August metadata for a variety of SDKs.

{% hint style="info" %}
Provider metadata is available in sandboxes, so if you want to see typical examples of provider metadata, you can just create a webview and connect devices in a sandbox workspace to read the properties.
{% endhint %}

{% tabs %}
{% tab title="HTTP" %}
```bash
curl \
  -H 'Authorization: Bearer MY_API_KEY' \
  https://connect.getseam.com/devices/list
  
#{
#  "devices": [
#    {
#      "device_id": "3c196474-d2eb-4e07-b1d0-e2996eeb40d0",
#      "device_type": "smartthings_lock",
#      "properties": {
#        "smartthings_metadata": {
#          "model": "0129-8002-0600",
#          "device_id": "750ed15f-93f2-4ff1-8944-47e93b10f7d6",
#          "device_name": "Yale Door Lock"
#        },
# ...
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const devices = await seam.devices.list()

console.log(devices[0].properties.smartthings_metadata)
/*
{
  "model": "0129-8002-0600",
  "device_id": "750ed15f-93f2-4ff1-8944-47e93b10f7d6",
  "device_name": "Yale Door Lock"
}
*/
```
{% endtab %}
{% endtabs %}

## Provider Metadata Definitions

{% hint style="danger" %}
Do not use `PROVIDER_metadata.model`, `model` is being deprecated for a standardized model object across providers, and is likely to be changed or removed in the future.
{% endhint %}

### August Metadata

August metadata is stored in `device.properties.august_metadata`

| Property    | Description                                                                                      | Typical Value                      |
| ----------- | ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| lock\_id    | Identifier for lock as stored by August                                                          | "348350520F06446Q940E2F67E21D351A" |
| lock\_name  | Name for lock, typically named by host                                                           | "Front Door"                       |
| house\_name | House name that the host placed the lock in from the August App or Yale Access App               | "123 Amy Lane"                     |
| has\_keypad | Boolean indicating whether or not a keypad is paired to the lock, or the lock has a keypad on it | true                               |

### Schlage Metadata

Schlage metadata is stored on `device.properties.schlage_metadata`

| Property             | Description                                              | Typical Value                          |
| -------------------- | -------------------------------------------------------- | -------------------------------------- |
| device\_id           | Id for device as stored by Schlage                       | "c7dd9f62-2b3f-4135-b092-160fc1b4179b" |
| device\_name         | Name given to Schlage device, usually via the host's app | "My Door"                              |
| access\_code\_length | Length of access codes supported on device.              | 4                                      |

### Smartthings Metadata

Smartthings metadata is stored on `device.properties.smartthings_metadata`

| Property     | Description                                                                 | Typical Value                          |
| ------------ | --------------------------------------------------------------------------- | -------------------------------------- |
| device\_id   | Id for device as stored by Smartthings                                      | "750ed15f-93f2-4ff1-8944-47e93b10f7d6" |
| device\_name | Name for device, set in the Smartthings app or from a Smartthings dashboard | "Front Door"                           |

### Lockly Metadata

Lockly metadata is stored on `device.properties.lockly_metadata`

| Property     | Description                    | Typical Value               |
| ------------ | ------------------------------ | --------------------------- |
| device\_id   | Device Id as stored by Lockly  | "750ed15f93f24ff1894447e93" |
| device\_name | Device name as given by Lockly | "Front Door"                |

### Salto Metadata

Salto metadata is stored on `device.properties.salto_metadata`

| Property            | Description                                               | Typical Value  |
| ------------------- | --------------------------------------------------------- | -------------- |
| lock\_id            | Identifier for lock as stored by Salto                    |                |
| customer\_reference | Name of the device as given by Installer or User in Salto | "BACK DOOR"    |
| lock\_type          | Lock type as given by Salto                               | "wall\_reader" |
| battery\_level      | Battery level enums as provided by Salto.                 | "fresh"        |
| locked\_state       | Locked state as given Salto                               | "locked"       |

### Genie Metadata

Genie metadata is stored on `device.properties.genie_metadata.`

| Property     | Description | Typical Value |
| ------------ | ----------- | ------------- |
| device\_name |             | "Model 3155D" |
| door\_name   |             | "Front Door"  |

### Brivo Metadata

Brivo metadata is stored on `device.properties.brivo_metadata`

| Property     | Description                  | Typical Value |
| ------------ | ---------------------------- | ------------- |
| device\_name | Name as set by user in Brivo | "Front Door"  |

### Igloo Metadata

Igloo metadata is stored on `device.properties.igloo_metadata`

| Property   | Description                         | Typical Value |
| ---------- | ----------------------------------- | ------------- |
| device\_id | Device Id as stored by Igloo        |               |
| bridge\_id | Id of Bridge device stored by Igloo |               |
