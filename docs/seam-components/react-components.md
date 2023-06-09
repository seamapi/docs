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

| Name   | Type     | Description                                                                                                       |
| ------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| onBack | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |

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
| onBack                                     | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |

## \<AccessCodeTable /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodetable--docs)

The access codes table shows a list of current and future access codes and their statuses.

```
<AccessCodeTable deviceId={deviceId} />
```

### Size: Mobile

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.00 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Size: Desktop

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.28 PM.png" alt=""><figcaption></figcaption></figure>

### Props

| Name                                       | Type     | Description                                                                                                       |
| ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| deviceId<mark style="color:red;">\*</mark> | string   | The id for the device whose access codes will be shown in the table.                                              |
| onBack                                     | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |

## \<AccessCodeDetails /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodedetails--docs)

The access code details component shows the properties, settings, and issues for an access code.

```
<AccessCodeDetails accessCodeId={accessCodeId} />
```

### Size: Mobile

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-18 at 10.01.03 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name           | Type     | Description                                 |
| -------------- | -------- | ------------------------------------------- |
| accessCodeId\* | string   | The id for the access code to be displayed. |
| onBack         | function | true                                        |

## \<SupportedDeviceTable /> [(preview)](https://react.seam.co/?path=/docs/example-supporteddevices--docs)

The supported device table allows you to filter, sort, and view all the devices compatible with Seam. You can use this table to indicate what devices are supported by your platform.

```ts
<SupportedDeviceTable />
```

### Props

| Name         | Type    | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
| cannotFilter | boolean | Hide the controls to filter the table. Default: `false` |

<figure><img src="../.gitbook/assets/supported-device-table.png" alt="" width="375"><figcaption></figcaption></figure>
