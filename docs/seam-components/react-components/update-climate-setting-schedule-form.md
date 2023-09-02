# Update Climate Setting Schedule Form

## \<UpdateClimateSettingScheduleForm /> (Coming soon!)

The update climate setting schedule form component allows you to modify a climate setting schedule.

```
<UpdateClimateSettingScheduleForm accessCodeId={accessCodeId}/>
```

<figure><img src="../../.gitbook/assets/New code 7.png" alt="" width="405"><figcaption></figcaption></figure>

### Props

<table><thead><tr><th width="274">Name</th><th width="133.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td>climateSettingScheduleId*</td><td>string</td><td>The ID for the climate setting schedule to be updated.</td></tr><tr><td>onSuccess</td><td>function</td><td>Optional callback fired when an access code is updated.<br><br>Signature: <code>(climateSettingSchedule: ClimateSettingSchedule) => void</code></td></tr><tr><td>onError</td><td>function</td><td>Optional callback triggered if an error occurs during the update of a climate setting schedule.<br><br>Signature: <code>(err: SeamError, params: UseUpdateClimateSettingScheduleParams) => void</code></td></tr><tr><td>onBack</td><td>function</td><td>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></td></tr><tr><td>className</td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>
