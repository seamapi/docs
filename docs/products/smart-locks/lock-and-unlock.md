# Lock and Unlock

Seam allows you to lock and unlock a smart lock, see the locked status of a door, and receive events when the door is locked or unlocked. This guide will walk you through how to do this with the API.

### Locking a Door

You can lock a door using the [Lock](../../api-clients/locks/lock-a-lock.md) endpoint. For example:

{% tabs %}
{% tab title="Javascript" %}
```javascript
// Replace with
// const Seam = require("seamapi")
// if not using ES6 modules and/or TypeScript.
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const {
  devices: [someLock],
} = await seam.locks.list();

await seam.locks.lockDoor(someLock.device_id);
```
{% endtab %}
{% endtabs %}

### Unlocking a Door

You can lock a door using the [Unlock](../../api-clients/locks/unlock-a-lock.md) endpoint. For example:

{% tabs %}
{% tab title="Javascript" %}
```javascript
// Replace with
// const Seam = require("seamapi")
// if not using ES6 modules and/or TypeScript.
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const {
  devices: [someLock],
} = await seam.locks.list();

await seam.locks.unlockDoor(someLock.device_id);
```
{% endtab %}
{% endtabs %}

### Checking the Locked status of a Lock

You can check locked status using the [Get ](../../api-clients/locks/get-lock.md)or [List](../../api-clients/locks/list-locks.md) Lock[ ](../../api-clients/locks/unlock-a-lock.md)endpoints. For example:

{% tabs %}
{% tab title="Javascript" %}
```javascript
// Replace with
// const Seam = require("seamapi")
// if not using ES6 modules and/or TypeScript.
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const {
  devices: [someLock],
} = await seam.locks.list();

console.log(someLock)

/*
{
  device_id: '087c535b-39a7-40cb-9633-ade3d58e5e0e',
  device_type: 'august_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: true,       // LOCKED STATUS
    online: true,
    door_open: false,
    august_metadata: {
      lock_id: 'lock-1',
      lock_name: 'FRONT DOOR',
      house_name: 'My House'
    }
  },
  location: null,
  connected_account_id: '0c1ad2ce-7824-433c-bd85-90a32fdafb78',
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  created_at: '2022-02-16T06:58:50.643Z'
}
*/
```
{% endtab %}
{% endtabs %}

### Set Up Webhooks

You can set up webhooks in the [console](https://console.seam.co/workspaces/\[:workspace\_id]/webhooks) with the `Add Webhook` button. All you need to do is fill in your URL, then select the event types you want to receive events for, then click `Create`.

<figure><img src="../../.gitbook/assets/Screen Shot 2023-08-13 at 4.39.14 PM.png" alt=""><figcaption></figcaption></figure>

### Monitor Events

Once your webhook is configured, you’ll be able to monitor events with the API. An event will look something like the code snippet below:

```json
{
  "access_code_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "connected_account_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "created_at": "2023-01-09T18:54:32.737Z",
  "device_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_type": "lock.locked",
  "method": "keycode",
  "occurred_at": "2023-01-09T18:54:32.737Z",
  "workspace_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37"
}
```

You can see more parameters for events [here](../../api-clients/events/).
