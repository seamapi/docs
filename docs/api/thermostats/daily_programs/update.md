# Update a Thermostat Daily Program

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified thermostat daily program. The periods that you specify overwrite any existing periods for the daily program.


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified thermostat daily program.

#### Code:

```javascript
await seam.thermostats.dailyPrograms.update({
  thermostat_daily_program_id: "6baf3a53-ba83-4052-8ea5-143584e18f03",
  name: "Weekday Program",
  periods: [
    { starts_at_time: "07:00:00", climate_preset_key: "Home" },
    { starts_at_time: "09:00:00", climate_preset_key: "Away" },
    { starts_at_time: "17:00:00", climate_preset_key: "Home" },
    { starts_at_time: "22:30:00", climate_preset_key: "Sleep" },
  ],
});
```

#### Output:

```javascript
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified thermostat daily program.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/daily_programs/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "thermostat_daily_program_id": "6baf3a53-ba83-4052-8ea5-143584e18f03",
  "name": "Weekday Program",
  "periods": [
    {
      "starts_at_time": "07:00:00",
      "climate_preset_key": "Home"
    },
    {
      "starts_at_time": "09:00:00",
      "climate_preset_key": "Away"
    },
    {
      "starts_at_time": "17:00:00",
      "climate_preset_key": "Home"
    },
    {
      "starts_at_time": "22:30:00",
      "climate_preset_key": "Sleep"
    }
  ]
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "action_type": "PUSH_THERMOSTAT_PROGRAMS",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified thermostat daily program.

#### Code:

```python
seam.thermostats.daily_programs.update(thermostat_daily_program_id="6baf3a53-ba83-4052-8ea5-143584e18f03", name="Weekday Program", periods=[{"starts_at_time":"07:00:00","climate_preset_key":"Home"},{"starts_at_time":"09:00:00","climate_preset_key":"Away"},{"starts_at_time":"17:00:00","climate_preset_key":"Home"},{"starts_at_time":"22:30:00","climate_preset_key":"Sleep"}])
```

#### Output:

```python
ActionAttempt(action_attempt_id="a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d", action_type="PUSH_THERMOSTAT_PROGRAMS", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified thermostat daily program.

#### Code:

```ruby
seam.thermostats.daily_programs.update(thermostat_daily_program_id: "6baf3a53-ba83-4052-8ea5-143584e18f03", name: "Weekday Program", periods: [{"starts_at_time":"07:00:00","climate_preset_key":"Home"},{"starts_at_time":"09:00:00","climate_preset_key":"Away"},{"starts_at_time":"17:00:00","climate_preset_key":"Home"},{"starts_at_time":"22:30:00","climate_preset_key":"Sleep"}])
```

#### Output:

```ruby
{"action_attempt_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","action_type" => "PUSH_THERMOSTAT_PROGRAMS","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified thermostat daily program.

#### Code:

```php
$seam->thermostats->daily_programs->update(
    thermostat_daily_program_id: "6baf3a53-ba83-4052-8ea5-143584e18f03",
    name: "Weekday Program",
    periods: [
        ["starts_at_time" => "07:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "09:00:00", "climate_preset_key" => "Away"],
        ["starts_at_time" => "17:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "22:30:00", "climate_preset_key" => "Sleep"],
    ],
);
```

#### Output:

```php
[
    "action_attempt_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "action_type" => "PUSH_THERMOSTAT_PROGRAMS",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified thermostat daily program.

#### Code:

```seam_cli
seam thermostats daily-programs update --thermostat_daily_program_id "6baf3a53-ba83-4052-8ea5-143584e18f03" --name "Weekday Program" --periods [{"starts_at_time":"07:00:00","climate_preset_key":"Home"},{"starts_at_time":"09:00:00","climate_preset_key":"Away"},{"starts_at_time":"17:00:00","climate_preset_key":"Home"},{"starts_at_time":"22:30:00","climate_preset_key":"Sleep"}]
```

#### Output:

```seam_cli
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`name`** *String* (Required)

Name of the thermostat daily program that you want to update.

---

**`periods`** *Array* *of Objects* (Required)

Array of thermostat daily program periods. The periods that you specify overwrite any existing periods for the daily program.

<details>

<summary><b><code>climate_preset_key</code></b> <i>String</i></summary>

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to activate at the `starts_at_time`.

</details>

---



<details>

<summary><b><code>starts_at_time</code></b> <i>String</i></summary>

Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

---


**`thermostat_daily_program_id`** *String* (Required)

ID of the thermostat daily program that you want to update.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
