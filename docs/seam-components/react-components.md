---
description: 2 mins
---

# Components Guide

## \<SeamProvider/>

The SeamProvider component accepts a `clientSessionToken` that enables descendants of the SeamProvider to use the Seam API. A Client Session Token allows a device owner to make API requests to Seam where interactions are restricted only to devices they own. To enable your users to interact with their devices, you'll need to create a client session and pass its token to the `<SeamProvider />` .

See [this guide](get-started-with-react-components-and-client-session-tokens.md) for instructions on how to create a client session token.

```
<SeamProvider clientSessionToken={clientSessionToken}>
  <DeviceTable />
</SeamProvider>
```

### Props

| Name                                                 | Type   | Description                                                                                                                           |
| ---------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| clientSessionToken<mark style="color:red;">\*</mark> | string | A Client Session Token allows a device owner to make API requests to Seam where interactions are restricted only to devices they own. |

## \<ConnectAccountButton/> [(preview)](https://react.seam.co/?path=/docs/example-connectaccountbutton--docs)

The connect account button opens a new Connect Webview. Accounts connected from this webview will be associated with the active client session.

```
<ConnectAccountButton />
```

### Size: Desktop

<figure><img src="../.gitbook/assets/react-connect-account-button.png" alt="Connect Account Button"><figcaption></figcaption></figure>

### Props

| Name      | Type   | Description                                                                |
| --------- | ------ | -------------------------------------------------------------------------- |
| className | string | Optional class name to add to the rendered component's containing element. |

## \<DeviceTable /> [(preview)](https://react.seam.co/?path=/docs/example-devicetable--docs)

The devices table shows a list of devices and their statuses.

```
<DeviceTable />
```

### Size: Desktop

<figure><img src="../.gitbook/assets/device-table.png" alt=""><figcaption></figcaption></figure>

### Size: Modal

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.05.25 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name                        | Type     | Description                                                                                                                                        |
| --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| deviceIds                   | array    | Optional list of specific device ids to return when requesting devices from the Seam API.                                                          |
| connectedAccountIds         | array    | Optional list of connected account ids to filter devices by when requesting devices from the Seam API.                                             |
| disableLockUnlock           | boolean  | Hide the lock/unlock button for devices. Default: `false`.                                                                                         |
| deviceFilter                | function | <p>Optional filter function to filter the listed devices.<br><br>Signature: <code>(device: Device, searchInputValue: string) => boolean</code></p> |
| deviceComparator            | function | <p>Optional comparator function to order the listed devices.<br><br>Signature: <code>(deviceA: Device, deviceB: Device) => number</code></p>       |
| onDeviceClick               | function | <p>Optional callback fired when a device is clicked.<br><br>Signature: <code>(deviceId: string) => void</code></p>                                 |
| preventDefaultOnDeviceClick | boolean  | Prevent the default behavior when a device is clicked. Default: `false`                                                                            |
| onBack                      | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p>                                  |
| className                   | string   | Optional class name to add to the rendered component's containing element.                                                                         |

## \<DeviceDetails /> [(preview)](https://react.seam.co/?path=/docs/example-devicedetails--docs)

The device details component shows the properties, settings, and issues for a device.

```
<DeviceDetails deviceId={deviceId} />
```

### Size: Modal

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.47.17 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name                                       | Type     | Description                                                                                                       |
| ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| deviceId<mark style="color:red;">\*</mark> | string   | The id for the device that will be shown in the table.                                                            |
| disableLockUnlock                          | boolean  | Hide the lock/unlock button for devices. Default: `false`.                                                        |
| onBack                                     | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |
| className                                  | string   | Optional class name to add to the rendered component's containing element.                                        |

## \<AccessCodeTable /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodetable--docs)

The access codes table shows a list of current and future access codes and their statuses.

```
<AccessCodeTable deviceId={deviceId} />
```

### Size: Mobile

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.00 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Size: Desktop

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.28 PM (1).png" alt=""><figcaption></figcaption></figure>

### Props

| Name                                       | Type     | Description                                                                                                                                                       |
| ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deviceId<mark style="color:red;">\*</mark> | string   | The id for the device whose access codes will be shown in the table.                                                                                              |
| disableLockUnlock                          | boolean  | Hide the lock/unlock button for devices. Default: `false`.                                                                                                        |
| accessCodeFilter                           | function | <p>Optional filter function to filter the listed access codes.<br><br>Signature: <code>(accessCode: AccessCode, searchInputValue: string) => boolean</code></p>   |
| accessCodeComparator                       | function | <p>Optional comparator function to order the listed access codes.<br><br>Signature: <code>(accessCodeA: AccessCode, accessCodeB: AccessCode) => number</code></p> |
| onAccessCodeClick                          | function | <p>Optional callback fired when an access code is clicked.<br><br>Signature: <code>(accessCodeId: string) => void</code></p>                                      |
| preventDefaultOnAccessCodeClick            | boolean  | Prevent the default behavior when an access code is clicked. Default: `false`                                                                                     |
| onBack                                     | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p>                                                 |
| className                                  | string   | Optional class name to add to the rendered component's containing element.                                                                                        |

## \<AccessCodeDetails /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodedetails--docs)

The access code details component shows the properties, settings, and issues for an access code.

```
<AccessCodeDetails accessCodeId={accessCodeId} />
```

### Size: Mobile

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 10.01.03 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name              | Type     | Description                                                                |
| ----------------- | -------- | -------------------------------------------------------------------------- |
| accessCodeId\*    | string   | The id for the access code to be displayed.                                |
| disableLockUnlock | boolean  | Hide the lock/unlock button for devices. Default: `false`.                 |
| onBack            | function | true                                                                       |
| className         | string   | Optional class name to add to the rendered component's containing element. |

## \<SupportedDeviceTable /> [(preview)](https://react.seam.co/?path=/docs/example-supporteddevicetable--docs)

The supported device table allows you to filter, sort, and view all the devices compatible with Seam. You can use this table to indicate what devices are supported by your platform.

```ts
<SupportedDeviceTable brands={["august"]}/>
```

### Props

<table><thead><tr><th width="188">Name</th><th width="125.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td>disableFilter</td><td>boolean</td><td>Hide the controls to filter the table. Default: <code>false</code></td></tr><tr><td>brands</td><td>array</td><td>Only show devices from specified brands. Default: <code>[]</code> (show devices for all brands).</td></tr><tr><td>className</td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>

<figure><img src="../.gitbook/assets/Screen Shot 2023-06-30 at 9.46.33 AM.png" alt=""><figcaption></figcaption></figure>
