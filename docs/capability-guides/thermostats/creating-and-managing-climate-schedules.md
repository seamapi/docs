---
description: >-
  Learn how to create, list, get, update, and delete thermostat schedules for
  thermostats.
---

# Creating and Managing Thermostat Schedules

Once you have created a set of [climate presets](creating-and-managing-climate-presets/) for a thermostat, you can define schedules using the `/thermostats/schedules/create` endpoint. The Seam API's scheduling mechanism is flexible and intelligent. It can prioritize and handle multiple scheduled climate presets. For example, you could [set a fallback](creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) energy-saving climate preset for whenever a short-term rental property is unoccupied. Then, you could schedule—in advance—a "comfort" climate preset to correspond to each upcoming guest's stay.

Each thermostat schedule can contain the following properties:

<table><thead><tr><th width="339">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>(Optional) User-friendly name to identify the thermostat schedule.</td></tr><tr><td><code>climate_preset_key</code></td><td>(Required) Key of the climate preset to use for the thermostat schedule.</td></tr><tr><td><code>max_override_period_minutes</code></td><td>Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled climate preset.<br>Default: <code>0</code><br>See also <a href="creating-and-managing-climate-schedules.md#specifying-manual-override-permissions">Specifying Manual Override Permissions</a>.</td></tr><tr><td><code>starts_at</code></td><td>(Required) Date and time at which the thermostat schedule starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format.</td></tr><tr><td><code>ends_at</code></td><td>(Required) Date and time at which the thermostat schedule ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format.</td></tr></tbody></table>

***

## Setting the Schedule

In the Seam API, use the `starts_at` and `ends_at` parameters to define the time period during which to apply an existing climate preset. For example, a short-term rental host could set `starts_at` to the beginning of a guest reservation or perhaps even slightly before the reservation starts so that the property reaches a comfortable temperature in time for guest arrival. The host could set `ends_at` to coincide with the end of the reservation.

`starts_at` is required and must be unique within all the schedules for the thermostat. However, if you want to schedule a climate preset that starts immediately, set `start_at` to a time in the past. Alternately, you can [activate a climate preset](creating-and-managing-climate-presets/activating-a-climate-preset.md) immediately.

***

## Specifying Manual Override Permissions

When creating a thermostat schedule for a thermostat, you can also specify the `max_override_period_minutes`. This parameter defines the period for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled climate preset. At the end of this override period, Seam sets the thermostat back to the active climate preset. The override period starts again each time a person makes a change at the thermostat.

Through this override period setting, the Seam API provides you with the flexibility to customize the thermostat behavior to suit your needs. For example, a multifamily property manager may want to give complete control of the thermostat to a unit's residents as soon as they move into the unit. However, a short-term rental host may want to enforce stricter rules to ensure that their guests are using the associated HVAC system in a reasonable manner.

To allow complete control at the thermostat, set `max_override_period_minutes` to `0`. To disable manual overrides entirely, set `manual_override_allowed` to `false` on the climate preset that you assign to the thermostat schedule.

***

## Create a Thermostat Schedule

To create a thermostat schedule, issue a `/thermostats/schedules/create` request, providing the `device_id` of the desired thermostat, as well as the `climate_preset_key`, and the `starts_at` and `ends_at` timestamps. You can also specify a `name` for the thermostat schedule and the desired `max_override_period_minutes`. If you omit `max_override_period_minutes`, it defaults to `0`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.schedules.create(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  name = "Jim's stay",
  climate_preset_key = "occupied",
  starts_at = "2024-11-01T15:00:00Z",
  ends_at = "2024-11-05T12:00:00Z",
  max_override_period_minutes = 90
)
```

**Response:**

```
ThermostatSchedule(
  thermostat_schedule_id='56d29fcf-0674-4db5-8e03-b2370a77460a',
  name="Jim's stay",
  device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key='occupied',
  starts_at='2024-11-01T15:00:00.000Z',
  ends_at='2024-11-05T12:00:00.000Z',
  max_override_period_minutes=90,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/schedules/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "name":  "Jim'\''s stay",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-01T15:00:00Z",
    "ends_at": "2024-11-05T12:00:00Z",
    "max_override_period_minutes": 90
}'
```

**Response:**

```json
{
  "thermostat_schedule": {
    "thermostat_schedule_id": "56d29fcf-0674-4db5-8e03-b2370a77460a",
    "name": "Jim's stay",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-01T15:00:00.000Z",
    "ends_at": "2024-11-05T12:00:00.000Z",
    "max_override_period_minutes": 90,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.schedules.create({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  name: "Jim's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-01T15:00:00Z",
  ends_at: "2024-11-05T12:00:00Z",
  max_override_period_minutes: 90
});
```

**Response:**

```json
{
  thermostat_schedule_id: '4a5bd61f-b402-41a5-9757-d92ba1e20708',
  name: "Jim's stay",
  device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key: 'occupied',
  starts_at: '2024-11-01T15:00:00.000Z',
  ends_at: '2024-11-05T12:00:00.000Z',
  max_override_period_minutes: 90,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->schedules->create(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  name: "Jim's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-01T15:00:00Z",
  ends_at: "2024-11-05T12:00:00Z",
  max_override_period_minutes: 90
);
```

**Response:**

```json
{
  "thermostat_schedule_id": "a05960b9-d787-4621-a7b0-ab76a566e5e8",
  "name": "Jim's stay",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-01T15:00:00.000Z",
  "ends_at": "2024-11-05T12:00:00.000Z",
  "max_override_period_minutes": 90,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Schedule Multiple Climate Presets

Suppose a short-term rental host wants to set a fallback "unoccupied" climate preset that takes effect immediately, as well as scheduling an "occupied" climate preset for two periods that correspond to guest reservations.

<figure><img src="../../.gitbook/assets/multiple-climate-schedules.png" alt="Seam handles a fallback climate preset, along with multiple thermostat schedules."><figcaption><p>Seam handles a fallback climate preset, along with multiple thermostat schedules.</p></figcaption></figure>

The following example shows how to set up these schedules:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
)

# Set the fallback climate preset.
seam.thermostats.set_fallback_climate_preset(
  device_id = thermostat.device_id,
  climate_preset_key = "unoccupied"
)

# Create the thermostat schedule for the first reservation.
seam.thermostats.schedules.create(
  device_id = thermostat.device_id,
  name = "Joe's stay",
  climate_preset_key = "occupied",
  starts_at = "2024-11-10T15:00:00Z",
  ends_at = "2024-11-15T12:00:00Z",
  max_override_period_minutes = 90
)

# Create the thermostat schedule for the second reservation.
seam.thermostats.schedules.create(
  device_id = thermostat.device_id,
  name = "Jane's stay",
  climate_preset_key = "occupied",
  starts_at = "2024-11-16T15:00:00Z",
  ends_at = "2024-11-18T12:00:00Z",
  max_override_period_minutes = 90
)
```

**Response:**

```
ThermostatSchedule(
  thermostat_schedule_id='c02a3cc5-87f2-409d-b21d-164f2c94d37c'
  name="Joe's stay",
  device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key='occupied',
  starts_at='2024-11-10T15:00:00.000Z',
  ends_at='2024-11-15T12:00:00.000Z',
  max_override_period_minutes=90,
  ...
)
ThermostatSchedule(
  thermostat_schedule_id='ed14ed8d-c012-4d89-af96-053e0c16197d',
  name="Jane's stay",
  device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key='occupied',
  starts_at='2024-11-16T15:00:00.000Z',
  ends_at='2024-11-18T12:00:00.000Z',
  max_override_period_minutes=90,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
  }')
  
# Set the fallback climate preset.
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/set_fallback_climate_preset' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
    \"climate_preset_key\": \"unoccupied\"
}"

# Create the thermostat schedule for the first reservation.
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/schedules/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
    \"name\":  \"Joe's stay\",
    \"climate_preset_key\": \"occupied\",
    \"starts_at\": \"2024-11-10T15:00:00Z\",
    \"ends_at\": \"2024-11-15T12:00:00Z\",
    \"max_override_period_minutes\": 90
}"

# Create the thermostat schedule for the second reservation.
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/schedules/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
    \"name\":  \"Jane's stay\",
    \"climate_preset_key\": \"occupied\",
    \"starts_at\": \"2024-11-16T15:00:00Z\",
    \"ends_at\": \"2024-11-18T12:00:00Z\",
    \"max_override_period_minutes\": 90
}"
```

**Response:**

```json
{
  "thermostat_schedule":{
    "thermostat_schedule_id":"a46b96bf-7b4c-408d-b7c6-74ff7c747ff1",
    "name":"Joe's stay",
    "device_id":"2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key":"occupied",
    "starts_at":"2024-11-10T15:00:00.000Z",
    "ends_at":"2024-11-15T12:00:00.000Z",
    "max_override_period_minutes":90,
    ...
  },
  "ok":true
}
{
  "thermostat_schedule":{
    "thermostat_schedule_id":"5acded62-dc35-4d37-b94c-35bc68352ea5",
    "name":"Jane's stay",
    "device_id":"2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key":"occupied",
    "starts_at":"2024-11-16T15:00:00.000Z",
    "ends_at":"2024-11-18T12:00:00.000Z",
    "max_override_period_minutes":90,
    ...
  },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
});

// Set the fallback climate preset.
await seam.thermostats.setFallbackClimatePreset({
  device_id: thermostat.device_id,
  climate_preset_key: "unoccupied"
});

// Create the thermostat schedule for the first reservation.
await seam.thermostats.schedules.create({
  device_id: thermostat.device_id,
  name: "Joe's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-10T15:00:00Z",
  ends_at: "2024-11-15T12:00:00Z",
  max_override_period_minutes: 90
});

// Create the thermostat schedule for the second reservation.
await seam.thermostats.schedules.create({
  device_id: thermostat.device_id,
  name: "Jane's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-16T15:00:00Z",
  ends_at: "2024-11-18T12:00:00Z",
  max_override_period_minutes: 90
});
```

**Response:**

```json
{
  thermostat_schedule_id: '4082a585-cf6e-4f6c-889d-d208fde226d0',
  name: "Joe's stay",
  device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key: 'occupied',
  starts_at: '2024-11-10T15:00:00.000Z',
  ends_at: '2024-11-15T12:00:00.000Z',
  max_override_period_minutes: 90,
  ...
}
{
  thermostat_schedule_id: '9d2b1c55-68cc-4c86-8478-dea3249e26b7',
  name: "Jane's stay",
  device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key: 'occupied',
  starts_at: '2024-11-16T15:00:00.000Z',
  ends_at: '2024-11-18T12:00:00.000Z',
  max_override_period_minutes: 90,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);

// Set the fallback climate preset.
$seam->thermostats->set_fallback_climate_preset(
  device_id: $thermostat->device_id,
  climate_preset_key: "unoccupied"
);

// Create the thermostat schedule for the first reservation.
$seam->thermostats->schedules->create(
  device_id: $thermostat->device_id,
  name: "Joe's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-10T15:00:00Z",
  ends_at: "2024-11-15T12:00:00Z",
  max_override_period_minutes: 90
);

// Create the thermostat schedule for the second reservation.
$seam->thermostats->schedules->create(
  device_id: $thermostat->device_id,
  name: "Jane's stay",
  climate_preset_key: "occupied",
  starts_at: "2024-11-16T15:00:00Z",
  ends_at: "2024-11-18T12:00:00Z",
  max_override_period_minutes: 90
);
```

**Response:**

```json
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "name": "Joe's stay",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-10T15:00:00.000Z",
  "ends_at": "2024-11-15T12:00:00.000Z",
  "max_override_period_minutes": 90,
  ...
}
{
  "thermostat_schedule_id": "665553d1-94f9-4e92-9739-06ac6362c959",
  "name": "Jane's stay",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-16T15:00:00.000Z",
  "ends_at": "2024-11-18T12:00:00.000Z",
  "max_override_period_minutes": 90,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## List All Thermostat Schedules for a Thermostat

To retrieve all thermostat schedules for a thermostat, issue a `/thermostats/schedules/list` request, specifying the `device_id` of the desired thermostat.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.schedules.list(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
)
```

**Response:**

```
[
  ThermostatSchedule(
    thermostat_schedule_id='89d3507e-60e3-4101-bd1b-ba066ec30ad4',
    name="Joe's stay",
    device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
    climate_preset_key='occupied',
    starts_at='2024-11-10T15:00:00.000Z',
    ends_at='2024-11-15T12:00:00.000Z',
    max_override_period_minutes=90,
    ...
  ),
  ThermostatSchedule(
    thermostat_schedule_id='665553d1-94f9-4e92-9739-06ac6362c959',
    name="Jane's stay",
    device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
    climate_preset_key='occupied',
    starts_at='2024-11-16T15:00:00.000Z',
    ends_at='2024-11-18T12:00:00.000Z',
    max_override_period_minutes=90,
    ...
  )
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/schedules/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
}'
```

**Response:**

```json
{
  "thermostat_schedules": [
    {
      "thermostat_schedule_id":"89d3507e-60e3-4101-bd1b-ba066ec30ad4",
      "name":"Joe's stay",
      "device_id":"2d488679-6f07-4810-aed2-e726872c1dd5",
      "climate_preset_key":"occupied",
      "starts_at":"2024-11-10T15:00:00.000Z",
      "ends_at":"2024-11-15T12:00:00.000Z",
      "max_override_period_minutes":90,
      ...
    },
    {
      "thermostat_schedule_id":"665553d1-94f9-4e92-9739-06ac6362c959",
      "name":"Jane's stay",
      "device_id":"2d488679-6f07-4810-aed2-e726872c1dd5",
      "climate_preset_key":"occupied",
      "starts_at":"2024-11-16T15:00:00.000Z",
      "ends_at":"2024-11-18T12:00:00.000Z",
      "max_override_period_minutes":90,
      ...
    }
  ],
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.schedules.list({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
});
```

**Response:**

```json
[
  {
    thermostat_schedule_id: '89d3507e-60e3-4101-bd1b-ba066ec30ad4',
    name: "Joe's stay",
    device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
    climate_preset_key: 'occupied',
    starts_at: '2024-11-10T15:00:00.000Z',
    ends_at: '2024-11-15T12:00:00.000Z',
    max_override_period_minutes: 90,
    ...
  },
  {
    thermostat_schedule_id: '665553d1-94f9-4e92-9739-06ac6362c959',
    name: "Jane's stay",
    device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
    climate_preset_key: 'occupied',
    starts_at: '2024-11-16T15:00:00.000Z',
    ends_at: '2024-11-18T12:00:00.000Z',
    max_override_period_minutes: 90,
    ...
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->schedules->list(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);
```

**Response:**

```json
[
  {
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name": "Joe's stay",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-10T15:00:00.000Z",
    "ends_at": "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes": 90,
    ...
  },
  {
    "thermostat_schedule_id": "665553d1-94f9-4e92-9739-06ac6362c959",
    "name": "Jane's stay",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-16T15:00:00.000Z",
    "ends_at": "2024-11-18T12:00:00.000Z",
    "max_override_period_minutes": 90,
    ...
  }
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Get an Individual Thermostat Schedule

To get a specific thermostat schedule, issue a `/thermostats/schedules/get` request, including the `thermostat_schedule_id` of the desired thermostat schedule.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.schedules.get(
  thermostat_schedule_id = "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
)
```

**Response:**

```
ThermostatSchedule(
  thermostat_schedule_id='89d3507e-60e3-4101-bd1b-ba066ec30ad4',
  name="Joe's stay",
  device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key='occupied',
  starts_at='2024-11-10T15:00:00.000Z',
  ends_at='2024-11-15T12:00:00.000Z',
  max_override_period_minutes=90,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/schedules/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
}'
```

**Response:**

```json
{
  "thermostat_schedule": {
    "thermostat_schedule_id":"89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name":"Joe's stay",
    "device_id":"2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key":"occupied",
    "starts_at":"2024-11-10T15:00:00.000Z",
    "ends_at":"2024-11-15T12:00:00.000Z",
    "max_override_period_minutes":90,
    ...
  },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.schedules.get({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
});
```

**Response:**

```json
{
  thermostat_schedule_id: '89d3507e-60e3-4101-bd1b-ba066ec30ad4',
  name: "Joe's stay",
  device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
  climate_preset_key: 'occupied',
  starts_at: '2024-11-10T15:00:00.000Z',
  ends_at: '2024-11-15T12:00:00.000Z',
  max_override_period_minutes: 90,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->schedules->get(
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
);
```

**Response:**

```json
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "name": "Joe's stay",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-10T15:00:00.000Z",
  "ends_at": "2024-11-15T12:00:00.000Z",
  "max_override_period_minutes": 90,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Update a Thermostat Schedule

To update a thermostat schedule, issue a `/thermostats/schedules/update` request, providing the `thermostat_schedule_id` of the desired thermostat schedule and the desired updated settings.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.schedules.update(
  thermostat_schedule_id = "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at = "2024-11-15T15:00:00Z"
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
  'https://connect.getseam.com/thermostats/schedules/update' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "ends_at": "2024-11-15T15:00:00Z"
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
await seam.thermostats.schedules.update({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z"
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
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->schedules->update(
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Delete a Thermostat Schedule

To delete a thermostat schedule, issue a `/thermostats/schedules/delete` request, providing the `thermostat_schedule_id` of the desired thermostat schedule.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.schedules.delete(
  thermostat_schedule_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
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
  'https://connect.getseam.com/thermostats/schedules/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "thermostat_schedule_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
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
await seam.thermostats.schedules.delete({
  thermostat_schedule_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
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
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->schedules->delete(
  thermostat_schedule_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}
