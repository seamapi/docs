# Access Code Table

## \<AccessCodeTable /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodetable--docs)

The access codes table shows a list of current and future access codes and their statuses.

```
<AccessCodeTable deviceId={deviceId} />
```

### Size: Mobile

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.00 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Size: Desktop

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.28 PM (1).png" alt=""><figcaption></figcaption></figure>

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
