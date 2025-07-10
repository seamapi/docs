---
description: Learn how to create and manage daily and weekly programs for thermostats.
---

# Creating and Managing Thermostat Programs

You can create thermostat weekly programs in a unified manner across the variety of thermostats that Seam supports. This standard feature of smart thermostats enables you to define full-week programs that are made up of reusable daily programs. Each daily program consists of a set of thermostat daily program periods, that is, time blocks with associated [climate presets](creating-and-managing-climate-presets/).

To set a thermostat weekly program:

1. [Create the climate presets](creating-and-managing-climate-presets/#create-a-climate-preset) that you want to use in your weekly program.
2. [Create the daily programs](creating-and-managing-thermostat-programs.md#create-a-daily-program) that you want to use in your weekly program. In each daily program, define a set of time periods. For each of these time periods, specify the starting time for the period and the key that identifies the climate preset that you want to activate at the starting time.
3. [Update the weekly program](creating-and-managing-thermostat-programs.md#update-the-weekly-program) on the thermostat. To define the weekly program, specify the configured daily program that you want to apply to each day of the week.

You can update daily programs, and you can update the weekly program again as desired. You can also delete any daily programs that are not being used in a weekly program.

***

## Daily Program Period Properties

Each daily program period contains the following properties:

| Property             | Description                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `starts_at_time`     | Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. |
| `climate_preset_key` | Key of the climate preset to activate at the `starts_at_time`.                                                                          |

***

## Daily Program Properties

Each daily program contains the following properties:

| Property                      | Description                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------- |
| `thermostat_daily_program_id` | ID of the thermostat daily program.                                              |
| `device_id`                   | ID of the thermostat device on which the thermostat daily program is configured. |
| `name`                        | User-friendly name to identify the thermostat daily program.                     |
| `periods`                     | Array of thermostat daily program periods.                                       |
| `created_at`                  | Date and time at which the thermostat daily program was created.                 |

***

## Weekly Program Properties

Each weekly program contains the following properties:

| Property               | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `device_id`            | ID of the thermostat device on which the weekly program is configured. |
| `monday_program_id`    | ID of the thermostat daily program to run on Mondays.                  |
| `tuesday_program_id`   | ID of the thermostat daily program to run on Tuesdays.                 |
| `wednesday_program_id` | ID of the thermostat daily program to run on Wednesdays.               |
| `thursday_program_id`  | ID of the thermostat daily program to run on Thursdays.                |
| `friday_program_id`    | ID of the thermostat daily program to run on Fridays.                  |
| `saturday_program_id`  | ID of the thermostat daily program to run on Saturdays.                |
| `sunday_program_id`    | ID of the thermostat daily program to run on Sundays.                  |
| `created_at`           | Date and time at which the thermostat weekly program was created.      |

***

## Create a Daily Program

To define a daily program, use `/thermostats/daily_programs/create`, specifying the thermostat that you want to program, a name for the daily program, and the desired set of daily program periods.

The following example creates a weekday daily program with four period, each of which is linked to a configured climate preset:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.daily_programs.create(
  device_id = "11111111-1111-1111-2222-444444444444",
  name = "Weekday Program",
  periods = [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
)
```

**Response:**

```
ThermostatDailyProgram(
  thermostat_daily_program_id='99999999-1111-1111-1111-111111111111',
  device_id='11111111-1111-1111-2222-444444444444',
  name="Weekday Program",
  periods=[
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ],
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/daily_programs/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-2222-444444444444",
    "name":  "Weekday Program",
    "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
}'
```

**Response:**

```json
{
  "thermostat_daily_program": {
    "thermostat_daily_program_id": "99999999-1111-1111-1111-111111111111",
    "device_id": "11111111-1111-1111-2222-444444444444",
    "name": "Weekday Program",
    "periods": [
      {"starts_at_time": "07:00:00", "climate_preset_key": "Home"},
      {"starts_at_time": "09:00:00", "climate_preset_key": "Away"},
      {"starts_at_time": "16:00:00", "climate_preset_key": "Home"},
      {"starts_at_time": "22:30:00", "climate_preset_key": "Sleep"}
    ],
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.dailyPrograms.create({
  device_id: "11111111-1111-1111-2222-444444444444",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
});
```

**Response:**

```json
{
  thermostat_daily_program_id: '99999999-1111-1111-1111-111111111111',
  device_id: '11111111-1111-1111-2222-444444444444',
  name: 'Weekday Program',
  periods: [
      {'starts_at_time': '07:00:00', 'climate_preset_key': 'Home'},
      {'starts_at_time': '09:00:00', 'climate_preset_key': 'Away'},
      {'starts_at_time': '16:00:00', 'climate_preset_key': 'Home'},
      {'starts_at_time': '22:30:00', 'climate_preset_key': 'Sleep'}
    ],
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.thermostats.daily_programs.create(
  device_id: "11111111-1111-1111-2222-444444444444",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
)
```

**Response:**

```
<Seam::Resources::ThermostatDailyProgram:0x005f0
  thermostat_daily_program_id="99999999-1111-1111-1111-111111111111"
  device_id="11111111-1111-1111-2222-444444444444"
  name="Weekday Program"
  periods: [
    {"starts_at_time": "07:00:00", "climate_preset_key": "Home"},
    {"starts_at_time": "09:00:00", "climate_preset_key": "Away"},
    {"starts_at_time": "16:00:00", "climate_preset_key": "Home"},
    {"starts_at_time": "22:30:00", "climate_preset_key": "Sleep"}
  ],
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->daily_programs->create(
  device_id: "11111111-1111-1111-2222-444444444444",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
);
```

**Response:**

```json
{
  "thermostat_daily_program_id": "99999999-1111-1111-1111-111111111111",
  "device_id": "11111111-1111-1111-2222-444444444444",
  "name": "Weekday Program",
  "periods": [
    {"starts_at_time": "07:00:00", "climate_preset_key": "Home"},
    {"starts_at_time": "09:00:00", "climate_preset_key": "Away"},
    {"starts_at_time": "16:00:00", "climate_preset_key": "Home"},
    {"starts_at_time": "22:30:00", "climate_preset_key": "Sleep"}
  ],
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Update a Daily Program

To update a daily program, use `/thermostats/daily_programs/update`, specifying the ID of the daily program that you want to change. You can edit the name for the daily program and the desired replacement set of daily program periods. To delete a daily program period, simply omit it when specifying the complete set of replacement program periods for the daily program.

Updating a daily program returns an [action attempt](../../core-concepts/action-attempts.md) so that you can track the status of pushing this program change to the thermostat.

The following example changes the climate preset for the second period and the starting time of the third period:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.daily_programs.update(
  thermostat_daily_program_id = "99999999-1111-1111-1111-111111111111",
  name = "Weekday Program",
  periods = [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Eco" },
    { "starts_at_time": "18:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='11111111-2222-3333-4444-555555555555',
  action_type='PUSH_THERMOSTAT_PROGRAMS',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/daily_programs/update' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "thermostat_daily_program_id": "99999999-1111-1111-1111-111111111111",
    "name":  "Weekday Program",
    "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Eco" },
    { "starts_at_time": "18:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type":"PUSH_THERMOSTAT_PROGRAMS",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error":null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.dailyPrograms.update({
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Eco" },
    { "starts_at_time": "18:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
});
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-555555555555',
  action_type: 'PUSH_THERMOSTAT_PROGRAMS',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.thermostats.daily_programs.update(
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Eco" },
    { "starts_at_time": "18:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
)
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="PUSH_THERMOSTAT_PROGRAMS"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->daily_programs->update(
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111",
  name: "Weekday Program",
  periods: [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Eco" },
    { "starts_at_time": "18:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ]
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-555555555555',
  action_type: 'PUSH_THERMOSTAT_PROGRAMS',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Delete a Daily Program

To delete a daily program, use `/thermostats/daily_programs/delete`, specifying the ID of the daily program that you want to delete. You cannot delete a daily program that's currently assigned to a weekly program.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.daily_programs.delete(
  thermostat_daily_program_id = "99999999-1111-1111-1111-111111111111"
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/daily_programs/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "thermostat_daily_program_id": "99999999-1111-1111-1111-111111111111"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.dailyPrograms.delete({
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111"
});
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.thermostats.daily_programs.delete(
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111"
)
```

**Response:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->daily_programs->delete(
  thermostat_daily_program_id: "99999999-1111-1111-1111-111111111111"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Update the Weekly Program

You set or update the weekly program using `/thermostats/update_weekly_program`. In this command, specify the ID of the thermostat for which you want to set or update the weekly program, as well as the ID of the configured daily program that you want to use for each day of the week. You can use a different daily program for each day of the week, or you can assign the same daily program to multiple days. If you do not want to specify a program for a day, set the corresponding program ID parameter to null.

To replace a weekly program, use `/thermostats/update_weekly_program`, specifying the desired replacement daily program IDs. The new weekly program overwrites any previous weekly program. To clear all daily programs from the weekly program, set all daily program ID parameters to null.

Updating the weekly program returns an [action attempt](../../core-concepts/action-attempts.md) so that you can track the status of pushing this program change to the thermostat.

The following example assigns the same weekday program to each weekday and the same weekend program to each weekend day:&#x20;

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.update_weekly_program(
  device_id = "11111111-1111-1111-2222-444444444444",
  monday_program_id = "99999999-1111-1111-1111-111111111111",
  tuesday_program_id = "99999999-1111-1111-1111-111111111111",
  wednesday_program_id = "99999999-1111-1111-1111-111111111111",
  thursday_program_id = "99999999-1111-1111-1111-111111111111",
  friday_program_id = "99999999-1111-1111-1111-111111111111",
  saturday_program_id = "99999999-1111-1111-1111-222222222222",
  sunday_program_id = "99999999-1111-1111-1111-222222222222"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='11111111-2222-3333-4444-666666666666',
  action_type='PUSH_THERMOSTAT_PROGRAMS',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/update_weekly_program' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-2222-444444444444",
    "monday_program_id": "99999999-1111-1111-1111-111111111111",
    "tuesday_program_id": "99999999-1111-1111-1111-111111111111",
    "wednesday_program_id": "99999999-1111-1111-1111-111111111111",
    "thursday_program_id": "99999999-1111-1111-1111-111111111111",
    "friday_program_id": "99999999-1111-1111-1111-111111111111",
    "saturday_program_id": "99999999-1111-1111-1111-222222222222",
    "sunday_program_id": "99999999-1111-1111-1111-222222222222"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type":"PUSH_THERMOSTAT_PROGRAMS",
    "action_attempt_id": "11111111-2222-3333-4444-666666666666",
    "result": null,
    "error":null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.updateWeeklyProgram({
  device_id: "11111111-1111-1111-2222-444444444444",
  monday_program_id: "99999999-1111-1111-1111-111111111111",
  tuesday_program_id: "99999999-1111-1111-1111-111111111111",
  wednesday_program_id: "99999999-1111-1111-1111-111111111111",
  thursday_program_id: "99999999-1111-1111-1111-111111111111",
  friday_program_id: "99999999-1111-1111-1111-111111111111",
  saturday_program_id: "99999999-1111-1111-1111-222222222222",
  sunday_program_id: "99999999-1111-1111-1111-222222222222"
});
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-666666666666',
  action_type: 'PUSH_THERMOSTAT_PROGRAMS',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.thermostats.update_weekly_program(
  device_id: "11111111-1111-1111-2222-444444444444",
  monday_program_id: "99999999-1111-1111-1111-111111111111",
  tuesday_program_id: "99999999-1111-1111-1111-111111111111",
  wednesday_program_id: "99999999-1111-1111-1111-111111111111",
  thursday_program_id: "99999999-1111-1111-1111-111111111111",
  friday_program_id: "99999999-1111-1111-1111-111111111111",
  saturday_program_id: "99999999-1111-1111-1111-222222222222",
  sunday_program_id: "99999999-1111-1111-1111-222222222222"
)
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="PUSH_THERMOSTAT_PROGRAMS"
  action_attempt_id="11111111-2222-3333-4444-666666666666"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->update_weekly_program(
  device_id: "11111111-1111-1111-2222-444444444444",
  monday_program_id: "99999999-1111-1111-1111-111111111111",
  tuesday_program_id: "99999999-1111-1111-1111-111111111111",
  wednesday_program_id: "99999999-1111-1111-1111-111111111111",
  thursday_program_id: "99999999-1111-1111-1111-111111111111",
  friday_program_id: "99999999-1111-1111-1111-111111111111",
  saturday_program_id: "99999999-1111-1111-1111-222222222222",
  sunday_program_id: "99999999-1111-1111-1111-222222222222"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-666666666666',
  action_type: 'PUSH_THERMOSTAT_PROGRAMS',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}
