# Create a Thermostat Schedule

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.schedules.create({
  device_id: "d710aa35-232d-442b-a817-c28045de1c74",
  name: "Jane's Stay",
  climate_preset_key: "Occupied",
  max_override_period_minutes: 90,
  starts_at: "2025-06-19T15:00:00.000Z",
  ends_at: "2025-06-22T11:00:00.000Z",
  is_override_allowed: true,
});
```

#### Output:

```javascript
{
  "climate_preset_key": "Occupied",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "d710aa35-232d-442b-a817-c28045de1c74",
  "ends_at": "2025-06-22T11:00:00.000Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "Jane's Stay",
  "starts_at": "2025-06-22T11:00:00.000Z",
  "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
  "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "d710aa35-232d-442b-a817-c28045de1c74",
  "name": "Jane's Stay",
  "climate_preset_key": "Occupied",
  "max_override_period_minutes": 90,
  "starts_at": "2025-06-19T15:00:00.000Z",
  "ends_at": "2025-06-22T11:00:00.000Z",
  "is_override_allowed": true
}
EOF
```

#### Output:

```curl
{
  "thermostat_schedule": {
    "climate_preset_key": "Occupied",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "d710aa35-232d-442b-a817-c28045de1c74",
    "ends_at": "2025-06-22T11:00:00.000Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Jane's Stay",
    "starts_at": "2025-06-22T11:00:00.000Z",
    "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```python
seam.thermostats.schedules.create(
    device_id="d710aa35-232d-442b-a817-c28045de1c74",
    name="Jane's Stay",
    climate_preset_key="Occupied",
    max_override_period_minutes=90,
    starts_at="2025-06-19T15:00:00.000Z",
    ends_at="2025-06-22T11:00:00.000Z",
    is_override_allowed=true,
)
```

#### Output:

```python
ThermostatSchedule(
    climate_preset_key="Occupied",
    created_at="2025-06-14T16:54:17.946316Z",
    device_id="d710aa35-232d-442b-a817-c28045de1c74",
    ends_at="2025-06-22T11:00:00.000Z",
    errors=[],
    is_override_allowed=true,
    max_override_period_minutes=90,
    name="Jane's Stay",
    starts_at="2025-06-22T11:00:00.000Z",
    thermostat_schedule_id="af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    workspace_id="58419b36-6103-44e5-aa83-2163e90cce01",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```ruby
seam.thermostats.schedules.create(
  device_id: "d710aa35-232d-442b-a817-c28045de1c74",
  name: "Jane's Stay",
  climate_preset_key: "Occupied",
  max_override_period_minutes: 90,
  starts_at: "2025-06-19T15:00:00.000Z",
  ends_at: "2025-06-22T11:00:00.000Z",
  is_override_allowed: true,
)
```

#### Output:

```ruby
{
  "climate_preset_key" => "Occupied",
  "created_at" => "2025-06-14T16:54:17.946316Z",
  "device_id" => "d710aa35-232d-442b-a817-c28045de1c74",
  "ends_at" => "2025-06-22T11:00:00.000Z",
  "errors" => [],
  "is_override_allowed" => true,
  "max_override_period_minutes" => 90,
  "name" => "Jane's Stay",
  "starts_at" => "2025-06-22T11:00:00.000Z",
  "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
  "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```php
$seam->thermostats->schedules->create(
    device_id: "d710aa35-232d-442b-a817-c28045de1c74",
    name: "Jane's Stay",
    climate_preset_key: "Occupied",
    max_override_period_minutes: 90,
    starts_at: "2025-06-19T15:00:00.000Z",
    ends_at: "2025-06-22T11:00:00.000Z",
    is_override_allowed: true
);
```

#### Output:

```php
[
    "climate_preset_key" => "Occupied",
    "created_at" => "2025-06-14T16:54:17.946316Z",
    "device_id" => "d710aa35-232d-442b-a817-c28045de1c74",
    "ends_at" => "2025-06-22T11:00:00.000Z",
    "errors" => [],
    "is_override_allowed" => true,
    "max_override_period_minutes" => 90,
    "name" => "Jane's Stay",
    "starts_at" => "2025-06-22T11:00:00.000Z",
    "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new thermostat schedule for a specified thermostat.

#### Code:

```seam_cli
seam thermostats schedules create --device_id "d710aa35-232d-442b-a817-c28045de1c74" --name "Jane's Stay" --climate_preset_key "Occupied" --max_override_period_minutes 90 --starts_at "2025-06-19T15:00:00.000Z" --ends_at "2025-06-22T11:00:00.000Z" --is_override_allowed true
```

#### Output:

```seam_cli
{
  "climate_preset_key": "Occupied",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "d710aa35-232d-442b-a817-c28045de1c74",
  "ends_at": "2025-06-22T11:00:00.000Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "Jane's Stay",
  "starts_at": "2025-06-22T11:00:00.000Z",
  "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
  "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
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

**`climate_preset_key`** *String* (Required)

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the new thermostat schedule.

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to create a schedule.

---

**`ends_at`** *String* (Required)

Date and time at which the new thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`starts_at`** *String* (Required)

Date and time at which the new thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`is_override_allowed`** *Boolean*

Indicates whether a person at the thermostat or using the API can change the thermostat's settings while the new schedule is active. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`max_override_period_minutes`** *Number*

Number of minutes for which a person at the thermostat or using the API can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`name`** *String*

Name of the thermostat schedule.

---


## Response

{% hint style="success" %}
**Returns:**
[thermostat\_schedule](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "climate_preset_key": "eco",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
  "ends_at": "2025-07-14T16:54:17.946313Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "My Thermostat Schedule",
  "starts_at": "2025-07-12T16:54:17.946313Z",
  "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
  "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
}
```
{% endtab %}
{% endtabs %}
