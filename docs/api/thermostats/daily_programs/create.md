# Create a Thermostat Daily Program

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new thermostat daily program. A daily program consists of a set of periods, where each period includes a start time and the key of a configured climate preset. Once you have defined a daily program, you can assign it to one or more days within a weekly program.


{% tabs %}
{% tab title="JavaScript" %}

Creates a new thermostat daily program.

#### Code:

```javascript
await seam.thermostats.dailyPrograms.create({
  device_id: "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
  name: "Weekday Program",
  periods: [
    { starts_at_time: "07:00:00", climate_preset_key: "Home" },
    { starts_at_time: "09:00:00", climate_preset_key: "Away" },
    { starts_at_time: "16:00:00", climate_preset_key: "Home" },
    { starts_at_time: "22:30:00", climate_preset_key: "Sleep" },
  ],
});
```

#### Output:

```javascript
{
  "created_at": "2025-06-14T16:54:17.946642Z",
  "device_id": "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
  "name": "Weekday Program",
  "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ],
  "thermostat_daily_program_id": "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
  "workspace_id": "8da8d923-e55b-45cd-84a3-6c96b3d3d454"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new thermostat daily program.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/daily_programs/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
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
      "starts_at_time": "16:00:00",
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
  "thermostat_daily_program": {
    "created_at": "2025-06-14T16:54:17.946642Z",
    "device_id": "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
    "name": "Weekday Program",
    "periods": [
      { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
      { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
      { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
      { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
    ],
    "thermostat_daily_program_id": "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
    "workspace_id": "8da8d923-e55b-45cd-84a3-6c96b3d3d454"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new thermostat daily program.

#### Code:

```python
seam.thermostats.daily_programs.create(
    device_id="cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
    name="Weekday Program",
    periods=[
        {"starts_at_time": "07:00:00", "climate_preset_key": "Home"},
        {"starts_at_time": "09:00:00", "climate_preset_key": "Away"},
        {"starts_at_time": "16:00:00", "climate_preset_key": "Home"},
        {"starts_at_time": "22:30:00", "climate_preset_key": "Sleep"},
    ],
)
```

#### Output:

```python
ThermostatDailyProgram(
    created_at="2025-06-14T16:54:17.946642Z",
    device_id="cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
    name="Weekday Program",
    periods=[
        {"starts_at_time": "07:00:00", "climate_preset_key": "Home"},
        {"starts_at_time": "09:00:00", "climate_preset_key": "Away"},
        {"starts_at_time": "16:00:00", "climate_preset_key": "Home"},
        {"starts_at_time": "22:30:00", "climate_preset_key": "Sleep"},
    ],
    thermostat_daily_program_id="ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
    workspace_id="8da8d923-e55b-45cd-84a3-6c96b3d3d454",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new thermostat daily program.

#### Code:

```ruby
seam.thermostats.daily_programs.create(
  device_id: "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
  name: "Weekday Program",
  periods: [
    { starts_at_time: "07:00:00", climate_preset_key: "Home" },
    { starts_at_time: "09:00:00", climate_preset_key: "Away" },
    { starts_at_time: "16:00:00", climate_preset_key: "Home" },
    { starts_at_time: "22:30:00", climate_preset_key: "Sleep" },
  ],
)
```

#### Output:

```ruby
{
  "created_at" => "2025-06-14T16:54:17.946642Z",
  "device_id" => "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
  "name" => "Weekday Program",
  "periods" => [
    { starts_at_time: "07:00:00", climate_preset_key: "Home" },
    { starts_at_time: "09:00:00", climate_preset_key: "Away" },
    { starts_at_time: "16:00:00", climate_preset_key: "Home" },
    { starts_at_time: "22:30:00", climate_preset_key: "Sleep" },
  ],
  "thermostat_daily_program_id" => "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
  "workspace_id" => "8da8d923-e55b-45cd-84a3-6c96b3d3d454",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new thermostat daily program.

#### Code:

```php
$seam->thermostats->daily_programs->create(
    device_id: "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
    name: "Weekday Program",
    periods: [
        ["starts_at_time" => "07:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "09:00:00", "climate_preset_key" => "Away"],
        ["starts_at_time" => "16:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "22:30:00", "climate_preset_key" => "Sleep"],
    ],
);
```

#### Output:

```php
[
    "created_at" => "2025-06-14T16:54:17.946642Z",
    "device_id" => "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
    "name" => "Weekday Program",
    "periods" => [
        ["starts_at_time" => "07:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "09:00:00", "climate_preset_key" => "Away"],
        ["starts_at_time" => "16:00:00", "climate_preset_key" => "Home"],
        ["starts_at_time" => "22:30:00", "climate_preset_key" => "Sleep"],
    ],
    "thermostat_daily_program_id" => "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
    "workspace_id" => "8da8d923-e55b-45cd-84a3-6c96b3d3d454",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new thermostat daily program.

#### Code:

```seam_cli
seam thermostats daily-programs create --device_id "cc2d0fb9-1f5f-410f-80f1-a64b699de82a" --name "Weekday Program" --periods [{"starts_at_time":"07:00:00","climate_preset_key":"Home"},{"starts_at_time":"09:00:00","climate_preset_key":"Away"},{"starts_at_time":"16:00:00","climate_preset_key":"Home"},{"starts_at_time":"22:30:00","climate_preset_key":"Sleep"}]
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-14T16:54:17.946642Z",
  "device_id": "cc2d0fb9-1f5f-410f-80f1-a64b699de82a",
  "name": "Weekday Program",
  "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ],
  "thermostat_daily_program_id": "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
  "workspace_id": "8da8d923-e55b-45cd-84a3-6c96b3d3d454"
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

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to create a daily program.

---

**`name`** *String* (Required)

Name of the thermostat daily program.

---

**`periods`** *Array* *of Objects* (Required)

Array of thermostat daily program periods.

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



## Response

{% hint style="success" %}
Returns:
**[thermostat\_daily\_program](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "created_at": "2025-06-14T16:54:17.946642Z",
  "device_id": "58437d45-47ac-4ee6-ab27-7b2d1f2947d1",
  "name": "Weekday Program",
  "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ],
  "thermostat_daily_program_id": "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
  "workspace_id": "8da8d923-e55b-45cd-84a3-6c96b3d3d454"
}
```
{% endtab %}
{% endtabs %}
