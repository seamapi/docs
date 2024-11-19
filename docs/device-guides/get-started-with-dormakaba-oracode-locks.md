---
description: >-
  Learn how to connect and control your dormakaba Oracode 480 and 660 locks with
  the Seam API.
---

# Get started with dormakaba Oracode Locks

<figure><img src="../.gitbook/assets/guides/dormakaba-oracode-getting-started-seo-cover.jpg" alt=""><figcaption><p>Dormakaba Locks</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of locks. This guide provides a rapid introduction to connecting and controlling your [dormakaba Oracode](https://www.seam.co/manufacturers/dormakaba) locks using the Seam API. To learn more about other device brands supported by the Seam API, such as Yale, Schlage, and August, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

Note that dormakaba offers multiple lines of products, including Lyazon, Sapphire, Oracode, and more. This guide is specifically for dormakaba Oracode.

## 1 — Install the Seam SDK

Seam provides client libraries for many languages, such as JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seam), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* Java ([GitHub](https://github.com/seamapi/java))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))
* Go ([GitHub](https://github.com/seamapi/go))

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seam
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seam
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="Java" %}
**Gradle:**

```gradle
// build.gradle
dependencies {
    implementation 'io.github.seamapi:java:0.x.x'
}
```

**Maven:**

```xml
<!-- pom.xml -->
<dependency>
    <groupId>io.github.seamapi</groupId>
    <artifactId>java</artifactId>
    <version>0.x.x</version>
</dependency>
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}

{% tab title="Go" %}
```bash
go get github.com/seamapi/go
```
{% endtab %}
{% endtabs %}

Once installed, [sign-up for Seam](https://console.seam.co/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a sandbox [workspace](../core-concepts/workspaces/). You can only connect virtual devices to a sandbox workspace. If you need to connect real Oracode devices, use a non-sandbox workspace and API key.
{% endhint %}

## 2 — Link Your dormakaba Oracode Account with Seam

To control your dormakaba Oracode locks using the Seam API, the owner or manager of these locks must first authorize your Seam workspace to access their dormakaba Oracode account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews/), which are pre-built UX flows that walk the device owner or manager through authorizing your application to control Oracode locks.

{% hint style="info" %}
This guide discusses using a Seam sandbox workspace with virtual devices. However, to connect real devices to Seam, some manufacturers may require additional prerequisite setup steps. For dormakaba Oracode-specific instructions, see the [dormakaba Oracode device integration guide](dormakaba-oracode-locks.md#setup-instructions).
{% endhint %}

#### Request a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["dormakaba_oracode"])

assert webview.login_successful is False

# Send the Connect Webview URL to your user.
print(webview.url)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from 'seam'

const seam = new Seam()

const { connect_webview: connectWebview } = await seam.connectWebviews.create({
  accepted_providers: ['dormakaba_oracode'],
})

console.log(connectWebview.login_successful) // false

// Send the Connect Webview URL to your user.
console.log(connectWebview.url)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new(api_key: 'MY_API_KEY')

webview = seam.connect_webviews.create(accepted_providers: %w[dormakaba_oracode])

puts webview.login_successful # false

# Send the Connect Webview URL to your user.
puts webview.url
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$webview = $seam->connect_webviews->create(
  accepted_providers: ["dormakaba_oracode"]
);
```
{% endtab %}
{% endtabs %}

#### Authorize Your Workspace

Navigate to the URL that the Connect Webview object returned. Because you are using a sandbox workspace, complete the login flow by entering the following dormakaba Oracode [sandbox test account ](sandbox-and-sample-data/dormakaba-oracode-sample-data.md)credentials:

* **username:** jane
* **site:** Ocean Beach Vacations
* **time zone:** (Any)

<figure><img src="../.gitbook/assets/dormakaba-oracode_connect-flow-screens.png" alt="Seam Connect Webview flow to connect dormakaba Oracode account with Seam"><figcaption><p>Seam Connect Webview flow to connect dormakaba Oracode account with Seam</p></figcaption></figure>

Confirm the Connect Webview was successful by querying the status.

{% tabs %}
{% tab title="Python" %}
```python
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

assert updated_webview.login_successful # true
```
{% endtab %}

{% tab title="JavaScript" %}
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

{% tab title="PHP" %}
```php
$webview = $seam->connect_webviews->get('729847ff-98e0-418d-aeba-1e3cb38157c6');
assert($webview->status == 'pending');
```
{% endtab %}
{% endtabs %}

## 3 — Retrieve dormakaba Oracode Devices

After a dormakaba Oracode account is linked with Seam, you can retrieve the connected devices.

{% tabs %}
{% tab title="Python" %}
```python
all_locks = seam.locks.list()

some_lock = all_locks[0]

assert some_lock.properties["battery_level"] is True

print(some_lock)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const allLocks = await seam.locks.list()

const someLock = allLocks[0]

console.log(someLock.properties.battery_level)

console.log(someLock)

```
{% endtab %}

{% tab title="Ruby" %}
```ruby
some_lock = seam.locks.list.first

puts some_lock.properties['battery_level']

puts some_lock

```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient('YOUR_API_KEY');

$locks = $seam->locks->list();

echo json_encode($locks);

*/
```
{% endtab %}
{% endtabs %}

### 4 — Programming Access Codes on a dormakaba Oracode Lock

The Seam API enables you to create offline access codes on dormakaba Oracode devices, such as the 480i and 660i locks. Users can then enter these codes to unlock the door. For detailed instructions, see [Creating dormakaba Oracode Offline Access Codes](../device-and-system-integration-guides/dormakaba-oracode-locks/creating-dormakaba-oracode-offline-access-codes.md).

{% hint style="info" %}
dormakaba Oracode does not let you specify a code for an access code. Instead it auto-generates a six-digit code, which the Seam API returns. If you try to pass the `code` argument to the access code `create` function, the Seam API returns an error.
{% endhint %}

## Next Steps

Now that you've completed this guide, you can try to connect a real dormakaba Oracode device. To do so, make sure to switch to a non-sandbox workspace and API key because you cannot connect real devices to sandbox workspaces.

In addition, if you'd like to explore other aspects of Seam, check out the following helpful resources:

* [Schlage Getting Started Guide](get-started-with-schlage-locks.md)
* [Yale Getting Started Guide](get-started-with-yale-locks.md)
* [SmartThings Getting Started Guide](get-started-with-smartthings-hubs-+-smart-locks.md)
* [Configuring webhooks](../core-concepts/webhooks.md) for [device events](../api-clients/events/list.md)
* [Core Concepts](broken-reference)

If you have any questions or want to report an issue, email us at [support@seam.co](mailto:support@seam.co).
