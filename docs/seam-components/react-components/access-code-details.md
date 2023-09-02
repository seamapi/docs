# Access Code Details

## \<AccessCodeDetails /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodedetails--docs)

The access code details component shows the properties, settings, and issues for an access code.

```
<AccessCodeDetails accessCodeId={accessCodeId} />
```

### Size: Mobile

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 10.01.03 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

| Name                    | Type     | Description                                                                                                       |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| accessCodeId\*          | string   | The id for the access code to be displayed.                                                                       |
| disableLockUnlock       | boolean  | Hide the lock/unlock button for devices. Default: `false`.                                                        |
| disableDeleteAccessCode | boolean  | Hide the delete button. Default: `false`.                                                                         |
| onBack                  | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |
| className               | string   | Optional class name to add to the rendered component's containing element.                                        |
