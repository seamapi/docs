# Create Climate Setting Schedule Form

## \<CreateClimateSettingScheduleForm /> (Coming soon!)

The create climate setting schedule form component allows you to create a climate setting schedule.

```
<CreateClimateSettingScheduleForm deviceId={deviceId}/>
```

<figure><img src="../../.gitbook/assets/set default.png" alt="" width="406"><figcaption><p>Set Default Climate Setting pane; when no default is set, this will be shown.</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/select device (1).png" alt="" width="406"><figcaption><p>Select Device pane. When no device is selected, this wil be shown.</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/New code 02.png" alt="" width="406"><figcaption><p>Name &#x26; Time Frame pane</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/New code 3 (2).png" alt="" width="406"><figcaption><p>Climate Setting pane</p></figcaption></figure>

### Props

<table><thead><tr><th width="194">Name</th><th width="130.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td>deviceId</td><td>string</td><td>Optional. The ID for the device for which the climate setting schedule will be created for. When set, it will skip the device selection pane.</td></tr><tr><td>onSuccess</td><td>function</td><td><p>Optional callback fired when a climate setting schedule is created.<br><br>Signature:</p><p><code>(climateSettingSchedule: ClimateSettingSchedule) => void</code></p></td></tr><tr><td>onError</td><td>function</td><td><p>Optional callback triggered if an error occurs during the creation of a climate setting schedule.<br><br>Signature:</p><p><code>(err: SeamError, params: UseCreateClimateSettingScheduleParams) => void</code></p></td></tr><tr><td>onBack</td><td>function</td><td>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></td></tr><tr><td>className</td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>
