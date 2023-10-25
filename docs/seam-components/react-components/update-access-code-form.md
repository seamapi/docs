# Update Access Code Form

## \<UpdateAccessCodeForm /> (Coming soon!)

The update access code form component allows you to modify an access code.

```
<UpdateAccessCodeForm accessCodeId={accessCodeId}/>
```

<figure><img src="../../.gitbook/assets/Edit code 01 (1) (1).png" alt="" width="327"><figcaption></figcaption></figure>

### Props

| Name           | Type     | Description                                                                                                                                                                           |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accessCodeId\* | string   | The ID for the access code to be updated.                                                                                                                                             |
| onSuccess      | function | <p>Optional callback fired when an access code is updated.<br><br>Signature: <code>(accessCode: AccessCode) => void</code></p>                                                        |
| onError        | function | <p>Optional callback triggered if an error occurs during the update of an access code.<br><br>Signature: <code>(err: SeamError, params: UseUpdateAccessCodeParams) => void</code></p> |
| onBack         | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p>                                                                     |
| className      | string   | Optional class name to add to the rendered component's containing element.                                                                                                            |
