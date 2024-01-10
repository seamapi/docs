---
description: Use Connect Webviews to connect to your users' smart devices to the Seam API
---

# Connect Webviews

The `connect_webview` object represents a [Connect Webview](../../core-concepts/connect-webviews/). Connect Webviews are fully-embedded client-side components that you add to your app. Your users interact with your embedded Connect Webviews to link their IoT device accounts to Seam. That is, Connect Webviews walk your users through the process of logging in to their device accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices using the Seam API.

Connect Webviews perform credential validation, multifactor authentication (when applicable), and error handling for each device brand that Seam supports. Further, Connect Webviews work across all modern browsers and platforms, including Chrome, Safari, and Firefox.

To enable a user to connect their device account to Seam through your app, you must first create a `connect_webview`. Once created, this `connect_webview` includes a URL that you can use to open an [iframe](https://www.w3schools.com/html/html\_iframe.asp) or new window containing the Connect Webview for your user.

![](<../../.gitbook/assets/image (12).png>)

## `connect_webview` Properties

| **`connect_webview_id`**          | uuid             | ID of the Connect Webview                                                                                                                |
| --------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **`accepted_providers`**          | string\[]        | List of accepted [device provider keys](./#device-provider-keys)                                                                         |
| **`selected_provider`**           | string           | Selected provider of the webview, one of [device provider keys](./#device-provider-keys)                                                 |
| **`custom_metadata`**             | object, optional | Specify up to 50 keys, with key names up to 40 characters long. Accepts string or boolean values. Strings are limited to 500 characters. |
| **`custom_redirect_url`**         | string, optional | If set, the Connect Webview will redirect to this url when the user successfully pairs a device, or runs into an unexpected error.       |
| **`custom_redirect_failure_url`** | string, optional | If set, the Connect Webview will redirect to this url when an unexpected error occurs.                                                   |
| **`status`**                      | string           | `pending` or `authorized`                                                                                                                |
| **`url`**                         | string           | URL to the webview                                                                                                                       |
| **`login_successful`**            | boolean          | Whether the user logged in successfully using the webview                                                                                |
| **`connected_account_id`**        | uuid             | ID of the Connected Account that was created after the user successfully logged in                                                       |

### Accepted Provider Category Keys

| key      | Description                                         |
| -------- | --------------------------------------------------- |
| `stable` | Only returns provider integration marked as stable. |

### Device Provider Keys

| Brand Name                                                                                                                                                                               | Device Provider Key             | Device Features Supported                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [2N](https://wiki.2n.com/is/en)                                                                                                                                                          | `my_2n`                         | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [4SUITES](https://www.4suiteshq.com/products/)                                                                                                                                           | `four_suites`                   | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Akuvox](https://akuvox.com/)                                                                                                                                                            | `akuvox`                        | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [ASSA ABLOY Credential Service](https://www.assaabloyglobalsolutions.com/en/hospitality-solutions/mobile-access-for-hospitality)                                                         | `assa_abloy_credential_service` | [Credentials Management](../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md)             |
| [ASSA ABLOY Visionline Access Control System](https://www.assaabloyglobalsolutions.com/en/hospitality-solutions/access-management-systems-for-hotels#gw-group-text-and-media-14987d7731) | `visionline`                    | [Access Control System](../access-control-systems/)                                                                                           |
| [August Home](https://august.com/)                                                                                                                                                       | `august`                        | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Avigilon Alta](https://www.avigilon.com/access-control/cloud)                                                                                                                           | `avigilon_alta`                 | [Access Codes](../access-codes/), [Locks](../locks/), [Access Control System](../access-control-systems/)                                     |
| [Brivo](https://www.brivo.com/)                                                                                                                                                          | `brivo`                         | [Locks](../locks/)                                                                                                                            |
| [ControlByWeb](https://www.controlbyweb.com/relays/)                                                                                                                                     | `controlbyweb`                  | [Locks](../locks/)                                                                                                                            |
| [DoorKing](https://www.doorking.com/)                                                                                                                                                    | `doorking`                      | [Remote Unlock](../locks/unlock-a-lock.md)                                                                                                    |
| [dormakaba Oracode](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503)                           | `dormakaba_oracode`             | [Access Codes](../access-codes/)                                                                                                              |
| [ecobee](https://www.ecobee.com/en-us/smart-thermostats/)                                                                                                                                | `ecobee`                        | [Thermostats](../../thermostats/)                                                                                                             |
| [Genie Aladdin Connect](https://www.geniecompany.com/aladdin-connect-by-genie)                                                                                                           | `genie`                         | [Locks](../locks/)                                                                                                                            |
| [Hubitat](https://hubitat.com/products)                                                                                                                                                  | `hubitat`                       | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [igloohome](https://store-us.igloohome.co/)                                                                                                                                              | `igloohome`                     | [Access Codes](../access-codes/), [Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md), [Locks](../locks/) |
| [Kwikset](https://www.kwikset.com/)                                                                                                                                                      | `kwikset`                       | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Linear](https://linear-solutions.com/)                                                                                                                                                  | `linear`                        | [Access Codes](../access-codes/), [Remote Unlock](../locks/unlock-a-lock.md)                                                                  |
| [Lockly](https://lockly.com/collections/door-lock)                                                                                                                                       | `lockly`                        | [Access Codes](../access-codes/)                                                                                                              |
| [Minut](https://www.minut.com/)                                                                                                                                                          | `minut`                         | [Noise Sensors](../noise-sensors/)                                                                                                            |
| [Nest](https://store.google.com/us/category/nest\_thermostats)                                                                                                                           | `google_nest`                   | [Thermostats](../../thermostats/)                                                                                                             |
| [Noiseaware](https://noiseaware.com/)                                                                                                                                                    | `noiseaware`                    | [Noise Sensors](../noise-sensors/)                                                                                                            |
| [Nuki](https://nuki.io/en/)                                                                                                                                                              | `nuki`                          | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [PTI Storlogix Cloud](https://ptisecurity.com/products/storlogixcloudplatform/)                                                                                                          | `pti`                           | [Access Control System](../access-control-systems/)                                                                                           |
| [Salto](https://saltosystems.com/)                                                                                                                                                       | `salto`                         | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Schlage](https://www.schlage.com/en/home/products/products-smart-locks.html)                                                                                                            | `schlage`                       | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [SmartThings](https://www.smartthings.com/)                                                                                                                                              | `smartthings`                   | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [TTLock](https://www.ttlock.com/#/)                                                                                                                                                      | `ttlock`                        | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Wyze](https://www.wyze.com/)                                                                                                                                                            | `wyze`                          | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |
| [Yale](https://www.yalehome.com/)                                                                                                                                                        | `yale`                          | [Access Codes](../access-codes/), [Locks](../locks/)                                                                                          |

## `connect_webview` Methods

You can perform the following actions on `connect_webview` objects:

* [Create a Connect Webview](create-a-connect-webview.md)
* [List Connect Webviews](list-connect-webviews.md)
* [Get a Connect Webview](get-a-connect-webview.md)
* [Check a Connect Webview](get-a-connect-webview.md)
* [Delete Webview](broken-reference/)
* [View Connect Webview](broken-reference/)
