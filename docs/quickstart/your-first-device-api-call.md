---
description: 5 mins
---

# Your First Device API Call

So what exactly can you do with Jane's devices? Well, that depends on their Capabilities! Let's discuss what those are and then use them.



### Device Capabilities

A [Device Capability](../core-concepts/device-capabilities.md) is **a feature or function of a device.**&#x20;

For example, on a door-lock the `access_codes` capability lets you program pin-codes. These codes then let a user unlock the door without keys.

Each Capability decomposes into `actions`, `properties`, and `events`.&#x20;

* **Actions** — things you can do to it.&#x20;
* **Properties** — the current state of the device.
* **Events** — reports from the device describing state transitions.&#x20;

Taken as a whole, the capabilities of a device describe its programmatic interface. At Seam, we work as best we can toward standardizing each capability's API across brands. For example, our lock/unlock actions work the same across brands of door locks.&#x20;

![](<../.gitbook/assets/image (10).png>)



### Supported Device Capabilities

Let's inspect one of Jane's August devices to see its capabilities. Here we can see that her August locks support `lock` and `access_codes` capabilities.

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

const inspectDeviceCapabilities = async () => {
  const {
    devices: [someLock],
  } = await seam.locks.list();
  console.log(someLock.capabilities_supported);
};

inspectDeviceCapabilities();

/*
  [ 'access_code', 'lock' ]
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam, Device

seam = Seam()
some_lock = seam.locks.list()[0]

# Inspect the Lock
print(some_lock.capabilities_supported)
# ['access_code', 'lock']
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

some_lock = seam.locks.list().first

# Inspect the Lock
puts some_lock.capabilities_supported
# ['access_code', 'lock']
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];

echo json_encode($some_lock->capabilities_supported)
# ["access_code", "lock"]
```
{% endtab %}
{% endtabs %}



### Lock/Unlock the Door

The `lock` capability provides two actions: `LOCK` and `UNLOCK`. It also has a `locked` property to know its current status.&#x20;

Let's use this to toggle its state!

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

const toggleLock = async () => {
  const {
    devices: [someLock],
  } = await seam.locks.list();
  
  // If the lock is opened, lock it, else unlock it
  if (someLock.properties.locked) {
    await seam.locks.unlockDoor(someLock.device_id);
  } else {
    await seam.locks.lockDoor(someLock.device_id);
  }
};

toggleLock();
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam, Device

seam = Seam()
some_lock = seam.locks.list()[0]

# Unlock or lock the door
if some_lock.properties["locked"]:
    seam.locks.unlock_door(some_lock)
else:
    seam.locks.lock_door(some_lock)
    
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

some_lock = seam.locks.list().first

# Unlock or lock the door
if some_lock.properties["locked"]
    seam.locks.unlock_door(some_lock.device_id)
else
    seam.locks.lock_door(some_lock.device_id)
end
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];

if ($some_lock->properties->locked) {
  $seam->locks->unlock_door($lock->device_id);
} else {
  $seam->locks->lock_door($lock->device_id);
}
```
{% endtab %}
{% endtabs %}



### Setting an Access Code

The `access_code` capability lets you program pin code on a lock. This code can be used to unlock the door without keys.&#x20;

Let's program an access code.&#x20;

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

const createAccessCode = async () => {
  const {
    devices: [someLock],
  } = await seam.locks.list();

  await seam.accessCodes.create({
    device_id: someLock.device_id,
    name: "some-code",
  });
};

createAccessCode();

/*
{
  access_code_id: "6f9da26d-f5a3-4df9-9dc9-816251346bc5",
  type: "ongoing",
  code: "662156",
  starts_at: null,
  ends_at: null,
  name: "some-code",
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam, Device

seam = Seam()
some_lock = seam.locks.list()[0]

# Program an access code
access_code = seam.access_codes.create(some_lock, name="some-code")
print(access_code)
# AccessCode(access_code_id='6f9da26d-f5a3-4df9-9dc9-816251346bc5', 
#            type='ongoing', 
#            code='662156',  <======== this is the code!
#            starts_at=None, 
#            ends_at=None, 
#            name='some-code')
    
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

some_lock = seam.locks.list().first
access_code = seam.access_codes.create(
  device_id: some_lock.device_id, 
  name: 'some-code'
)

puts access_code
# <Seam::AccessCode:0x007cd58                                       
#   code="669781"  <============ this is the code!                                                   
#   name="some-code"                                            
#   type="ongoing"                                                  
#   created_at="2022-07-06T23:26:42.223Z"                           
#   access_code_id="6f9da26d-f5a3-4df9-9dc9-816251346bc5">
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];
$access_code = $seam->access_codes->create(
  device_id: $some_lock->device_id, name: "some-code"
);

echo json_encode($access_code)
/*
{
  access_code_id: "6f9da26d-f5a3-4df9-9dc9-816251346bc5",
  type: "ongoing",
  code: "662156",
  starts_at: null,
  ends_at: null,
  name: "some-code",
}
*/
```
{% endtab %}
{% endtabs %}

## Conclusion

This Quickstart Guide walked you through the main idea behind Seam.&#x20;

* Use [Connect Views](../core-concepts/connect-webviews.md) to authorize your application against your users' devices.&#x20;
* Leverage [Device Capabilities](../core-concepts/device-capabilities.md) to control those devices.

This guide is only the beginning of your journey into the world of connected devices. Next, you can check out the Core Concepts behind Seam, or pick up one of the device guides.&#x20;

If you have questions or comments, please reach out. We love to hear from developers and see what you are building!

&#x20;:heartbeat::relaxed:

