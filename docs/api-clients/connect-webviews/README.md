---
description: Use Connect Webview to connect to your users' smart devices with the Seam API
---

# Connect Webviews

## Introduction to Connect Webview



Connect Webview is a component that your users will interact with in order to link their smart devices to Seam and allow you to access their devices via the Seam API.

Seam Connect Webview will handle credential validation, multi-factor authentication, and error handling for each device type that we support.

To allow a user to sign in, you need to create a `connect_webview` . After creating the webview, you'll receive a URL that you can use to open an iframe or new window containing a login page for your user.

![](<../../.gitbook/assets/image (12).png>)

## The Connect Webview Object

| **`connect_webview_id`**          | uuid             | ID of the Connect Webview                                                                                                          |
| --------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **`accepted_providers`**          | string\[]        | List of accepted [device providers keys](./#device-provider-keys)                                                                  |
| **`selected_provider`**          | string        | Selected provider of the webview, one of [device providers keys](./#device-provider-keys)                                                                  |
| **`custom_metadata`**             | object, optional | Specify up to 50 keys, with key names up to 40 characters long. Use any non-object value. Strings are limited to 500 characters.   |
| **`custom_redirect_url`**         | string, optional | If set, the Connect Webview will redirect to this url when the user successfully pairs a device, or runs into an unexpected error. |
| **`custom_redirect_failure_url`** | string, optional | If set, the Connect Webview will redirect to this url when an unexpected error occurs.                                             |
| **`status`**                      | string           | `pending` or `authorized`                                                                                                          |
| **`url`**                         | string           | URL to the webview                                                                                                                 |
| **`login_successful`**            | boolean          | Whether the user logged in successfully using the webview                                                                          |
| **`connected_account_id`**        | uuid             | ID of the Connected Account that was created after the user successfully logged in                                                 |

### Device Provider Keys

| Brand Name                                                                     | Device Provider Key | Device Features supported                                                    |
| ------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------- |
| [August Home](https://august.com/)                                             | `august`            | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Noiseaware](https://noiseaware.com/)                                          | `noiseaware`        | [Noise Detection](broken-reference)                                          |
| [Schlage Connect](https://www.schlage.com/en/home/smart-locks/connect.html)    | `schlage`           | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [SmartThings](https://www.smartthings.com/)                                    | `smartthings`       | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [ButterflyMX](https://butterflymx.com/)                                        | `butterflymx`       | [Locks](../locks/)                                                           |
| [Genie Aladdin Connect](https://www.geniecompany.com/aladdin-connect-by-genie) | `genie`             | [Locks](../locks/)                                                           |
| [Salto](https://saltosystems.com/)                                             | `salto`             | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Yale](https://www.yalehome.com/)                                              | `yale_access`       | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Brivo](https://www.brivo.com/)                                                | `brivo`             | [Locks](../locks/)                                                           |
| [Akuvox](https://akuvox.com/)                                                  | `akuvox`            | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [DoorKing](https://www.doorking.com/)                                          | `doorking`          | [Remote Unlock](../locks/unlock-a-lock.md)                                   |
| [Linear](https://linear-solutions.com/)                                        | `linear`            | [Access Codes](../access-codes/), [Remote Unlock](../locks/unlock-a-lock.md) |

### List of Methods

| [Create a Connect Webview](create-a-connect-webview.md) | Create a Connect Webview   |
| ------------------------------------------------------- | -------------------------- |
| [List Connect Webviews](list-connect-webviews.md)       | List Connect Webviews      |
| [Checking a Connect Webview](get-a-connect-webview.md)  | Checking a Connect Webview |
| [Delete Webview](broken-reference)                      | Delete Webview             |
| [View Connect Webview](broken-reference)                | View Connect Webview       |

