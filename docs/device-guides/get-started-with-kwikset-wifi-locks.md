---
description: Learn how to connect and control your Kwikset Halo lock with the Seam API.
---

# Get started with Kwikset Halo Locks

<figure><img src="../.gitbook/assets/guides/kwikset-getting-started-guide-cover.jpg" alt=""><figcaption><p>Kwikset Halo Smart Locks</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of smart locks. This guide provides a rapid introduction to connecting and controlling your [Kwikset Halo](https://www.seam.co/manufacturers/kwikset) lock using the Seam API. To learn more about other smart lock brands supported by Seam such as Yale, Schlage, and August, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

## 1 — Install Seam SDK

Seam provides client libraries for many languages such as Javascript, Python, Ruby, and PHP, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

- **Javascript:** `npm i seamapi` ([npm](https://www.npmjs.com/package/seamapi), [github](https://github.com/seamapi/javascript))
- **Python:** `pip install seamapi` ([pip](https://pypi.org/project/seamapi/), [github](https://github.com/seamapi/python))
- **Ruby:** `bundle add seamapi` ([rubygem](https://rubygems.org/gems/seamapi), [github](https://github.com/seamapi/ruby))
- **PHP:** `composer require seamapi/seam` ([packagist](https://packagist.org/packages/seamapi/seam), [github](https://github.com/seamapi/php))

Once installed, [sign-up for Seam](https://dashboard.getseam.com/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a Sandbox Workspace. Only virtual devices can be connected. If you need to connect a real Kwikset Halo Lock, use a non-sandbox workspace and API key.
{% endhint %}

## 2 — Link Kwikset Account with Seam

To control your Kwikset Halo lock via the Seam API, you must first authorize your Seam workspace against your Kwikset account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews.md): pre-built UX flows that walk you through authorizing your application to control your Kwikset Halo lock.

#### Request a Connect Webview

{% tabs %}
{% tab title="Python" %}

```python
from seamapi import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["kwikset"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
```

{% endtab %}

{% tab title="Javascript" %}

```javascript
import Seam from 'seamapi'

const seam = new Seam()

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ['kwikset'],
})

console.log(connectWebview.login_successful) // false

// Send the webview URL to your user
console.log(connectWebview.url)
```

{% endtab %}

{% tab title="Ruby" %}

<pre class="language-ruby"><code class="lang-ruby">require "seamapi"

<strong>seam = Seam::Client.new(api_key: "MY_API_KEY")
</strong>
webview = seam.connect_webviews.create(
  accepted_providers: ["kwikset"]
)

puts webview.login_successful # false

# Send the webview URL to your user 
puts webview.url
</code></pre>

{% endtab %}
{% endtabs %}

#### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the Kwikset [sandbox test accounts ](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data)credentials below:

- **email:** jane@example.com
- **password:** 1234
- **2-factor-auth:** 123456

<figure><img src="../.gitbook/assets/guides/kwikset-connect-flow-screens.jpg" alt=""><figcaption><p>Seam Connect Webview flow to connect Kwikset account with Seam</p></figcaption></figure>

Confirm the Connect Webview was successful by querying its status:

{% tabs %}
{% tab title="Python" %}

```python
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

assert updated_webview.login_successful # true
```

{% endtab %}

{% tab title="Javascript" %}

```javascript
const updatedWebview = await seam.connectWebviews.get(
  connectWebview.connect_webview_id,
)

console.log(updatedWebview.login_successful) // true
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

puts updated_webview.login_successful # true
```

{% endtab %}
{% endtabs %}

## 3 — Retrieve Kwikset Halo Lock Devices

After a Kwikset account is linked with Seam, you can retrieve devices for this Kwikset account. The Seam API exposes most of the device's properties such as battery level or door lock status.

{% tabs %}
{% tab title="Python" %}

```python
all_locks = seam.locks.list()

some_lock = all_locks[0]

assert some_lock.properties["online"] is True
assert some_lock.properties["locked"] is True

print(some_lock)
```

{% endtab %}

{% tab title="Javascript" %}

```javascript
const allLocks = await seam.locks.list()

const someLock = allLocks[0]

console.log(someLock.properties.online) // true
console.log(someLock.properties.locked) // true

console.log(someLock)
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
some_lock = seam.locks.list.first

puts some_lock.properties['online'] # true
puts some_lock.properties['locked'] # true

puts some_lock
```

{% endtab %}
{% endtabs %}

### 4 — Locking & Unlocking a Door

Next, you can perform the basic action of locking and unlocking the door.

{% swagger src="../.gitbook/assets/openapi (1).json" path="/locks/lock_door" method="post" %}
[openapi (1).json](<../.gitbook/assets/openapi (1).json>)
{% endswagger %}

{% swagger method="post" path="/locks/unlock_door" baseUrl="https://connect.getseam.com" summary="Unlock a door" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="false" %}

{% endswagger-parameter %}
{% endswagger %}

{% tabs %}
{% tab title="Python" %}

```python
# lock the door
seam.locks.lock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
assert updated_lock.properties["locked"] is True

# Now unlock the door
seam.locks.unlock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
assert updated_lock.properties["locked"] is False
```

{% endtab %}

{% tab title="Javascript" %}

```javascript
// lock the door
await seam.locks.lockDoor(someLock.device_id)
const updatedLock = await seam.locks.get(someLock.device_id)
console.log(updatedLock.properties.locked) // true

// unlock the door
await seam.locks.unlockDoor(someLock.device_id)
updatedLock = await seam.locks.get(someLock.device_id)
console.log(updatedLock.properties.locked) // false
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
# lock the door
seam.locks.lock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
puts updated_lock.properties['locked'] # true

# unlock the door
seam.locks.unlock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
puts updated_lock.properties['locked'] # false
```

{% endtab %}
{% endtabs %}

### 5 — Setting Access Code on Kwikset Halo Lock

Kwikset Halo locks also support access codes. These codes can be entered on the lock's keypad to unlock the door.

The Seam API makes it easy to program both `ongoing` codes and `timebound` codes on a Kwikset Halo lock. You can find out more about Kwikset Halo lock access codes in our [core concept section on access codes.](../core-concepts/access-codes.md)

![Kwikset Halo Lock with Keypad](../.gitbook/assets/kwikset-halo-lock.jpg)

{% tabs %}
{% tab title="Python" %}

```python
# create an ongoing code
seam.access_codes.create(
    device=some_lock, code="123456", name="Personal Access Code"
)

# create a timebound code
seam.access_codes.create(
    device=some_lock,
    code="888888",
    name="My Temp Access Code",
    starts_at="2028-08-12T19:23:42+0000",
    ends_at="2028-08-13T19:23:42+0000"
)

# you can use a device or a device_id as the "device" parameter
access_codes = seam.access_codes.list(device=some_lock)
print(access_codes)
```

{% endtab %}

{% tab title="Javascript" %}

```javascript
// create an ongoing code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '123456',
  name: 'Personal Access Code',
})

// create a timebound code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '888888',
  name: 'My Temp Access Code',
  starts_at: '2028-11-12T19:23:42+0000',
  ends_at: '2028-11-13T19:23:42+0000',
})

// use a device_id as the "device_id" parameter
const accessCodes = await seam.accessCodes.list({
  device_id: someLock.device_id,
})

console.log(accessCodes)
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
# create an ongoing code
seam.access_codes.create(
  device_id: some_lock.device_id, code: '123456', name: 'Personal Access Code'
)

# create a timebound code
seam.access_codes.create(
  device_id: some_lock.device_id,
  code: '888888',
  name: 'My Temp Access Code',
  starts_at: '2028-08-12T19:23:42+0000',
  ends_at: '2028-08-13T19:23:42+0000'
)

# you can use a device or a device_id as the "device" parameter
access_codes = seam.access_codes.list(some_lock)

puts access_codes
```

{% endtab %}
{% endtabs %}

## Next Steps

Now that you've completed this guide, you can try to connect a real Kwikset Halo device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

In addition, if you'd like to explore other aspects of Seam, here is a list of helpful resources:

- [Yale Getting Started Guide](get-started-with-yale-locks.md)
- [Schlage Getting Started Guide](get-started-with-schlage-locks.md)
- [August Getting Started Guide](get-started-with-august-locks.md)
- [SmartThings Getting Started Guide](get-started-with-smartthings-hubs-+-smart-locks.md)
- [Receiving webhook](../core-concepts/webhooks.md) for [device events](../api-clients/events/list-events.md)
- [Core Concepts](../core-concepts/README.md)

If you have any questions or want to report an issue, email us at support@seam.co.
