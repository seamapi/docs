# Climate Setting Schedule Table

## \<ClimateSettingScheduleTable /> [(preview)](https://react.seam.co/?path=/docs/components-climatesettingscheduletable--docs)

The climate setting schedule table shows a list of current and future scheduled climates and their statuses.

```
<ClimateSettingScheduleTable deviceId={deviceId} />
```

### Size: Mobile

<figure><img src="../../.gitbook/assets/Mod - Code List.png" alt="" width="420"><figcaption></figcaption></figure>

### Size: Desktop

<figure><img src="../../.gitbook/assets/Scroll Window.png" alt="" width="516"><figcaption></figcaption></figure>

### Props

<table><thead><tr><th width="250.33333333333331">Name</th><th width="147.03587903639163">Type</th><th>Description</th></tr></thead><tbody><tr><td>deviceId<mark style="color:red;">*</mark></td><td>string</td><td>The id for the device whose climate setting schedules will be shown in the table.</td></tr><tr><td>disableCreateClimateSettingSchedule</td><td>boolean</td><td>Hide the create climate setting schedule button for devices. Default: <code>false</code>.</td></tr><tr><td><code>disableSearch</code></td><td>boolean</td><td>Hide the search box. Default: <code>false</code>.</td></tr><tr><td>climateSettingScheduleFilter</td><td>function</td><td>Optional filter function to filter the listed access codes.<br><br>Signature: <code>(climateSettingSchedule: ClimateSettingSchedule, searchInputValue: string) => boolean</code></td></tr><tr><td>climateSettingScheduleComparator</td><td>function</td><td>Optional comparator function to order the listed climate setting schedules.<br><br>Signature: <code>(climateSettingScheduleA: ClimateSettingSchedule, climateSettingScheduleB: ClimateSettingSchedule) => number</code></td></tr><tr><td>onBack</td><td>function</td><td>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></td></tr><tr><td>heading</td><td>string</td><td>Sets the title at the top of the component</td></tr><tr><td>className</td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>
