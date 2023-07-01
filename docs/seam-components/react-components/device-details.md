# Device Details

## \<DeviceDetails /> [(preview)](https://react.seam.co/?path=/docs/example-devicedetails--docs)

The device details component shows the properties, settings, and issues for a device.

```
<DeviceDetails deviceId={deviceId} />
```

### Size: Modal

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.47.17 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name                                       | Type     | Description                                                                                                       |
| ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| deviceId<mark style="color:red;">\*</mark> | string   | The id for the device that will be shown in the table.                                                            |
| disableLockUnlock                          | boolean  | Hide the lock/unlock button for devices. Default: `false`.                                                        |
| onBack                                     | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |
| className                                  | string   | Optional class name to add to the rendered component's containing element.                                        |
