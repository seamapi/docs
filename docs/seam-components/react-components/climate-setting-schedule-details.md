# Climate Setting Schedule Details

## \<ClimateSettingScheduleDetails /> [(preview)](https://react.seam.co/?path=/docs/components-climatesettingscheduledetails--docs)

The climate setting schedule details component shows the properties, settings, and issues for a climate setting schedule.

```
<ClimateSettingScheduleDetails climateSettingScheduleId={climateSettingScheduleId} />
```



<figure><img src="../../.gitbook/assets/schedule climate.png" alt="" width="420"><figcaption></figcaption></figure>

### Props

| Name                                | Type     | Description                                                                                                       |
| ----------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| climateSettingScheduleId\*          | string   | The id for the climate setting schedule to be displayed.                                                          |
| disableDeleteClimateSettingSchedule | boolean  | Hide the delete button. Default: `false`.                                                                         |
| onBack                              | function | <p>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></p> |
| className                           | string   | Optional class name to add to the rendered component's containing element.                                        |
