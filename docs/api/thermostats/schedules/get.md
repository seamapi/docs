# Get a Thermostat Schedule

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified thermostat schedule.

#### Code:

```javascript
await seam.thermostats.schedules.get({
  thermostat_schedule_id: "408f3f85-11ae-4111-bec1-0f2408a2b218",
});
```

#### Output:

```javascript
{
  "climate_preset_key": "Occupied",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
  "ends_at": "2025-07-14T16:54:17.946313Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "Jane's Stay",
  "starts_at": "2025-07-12T16:54:17.946313Z",
  "thermostat_schedule_id": "408f3f85-11ae-4111-bec1-0f2408a2b218",
  "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified thermostat schedule.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_schedule_id": "408f3f85-11ae-4111-bec1-0f2408a2b218"
}
EOF
```

#### Output:

```curl
{
  "thermostat_schedule": {
    "climate_preset_key": "Occupied",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
    "ends_at": "2025-07-14T16:54:17.946313Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Jane's Stay",
    "starts_at": "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id": "408f3f85-11ae-4111-bec1-0f2408a2b218",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified thermostat schedule.

#### Code:

```python
seam.thermostats.schedules.get(
    thermostat_schedule_id="408f3f85-11ae-4111-bec1-0f2408a2b218"
)
```

#### Output:

```python
ThermostatSchedule(
    climate_preset_key="Occupied",
    created_at="2025-06-14T16:54:17.946316Z",
    device_id="dc1dfc4b-8082-453f-a953-276941af8650",
    ends_at="2025-07-14T16:54:17.946313Z",
    errors=[],
    is_override_allowed=true,
    max_override_period_minutes=90,
    name="Jane's Stay",
    starts_at="2025-07-12T16:54:17.946313Z",
    thermostat_schedule_id="408f3f85-11ae-4111-bec1-0f2408a2b218",
    workspace_id="58419b36-6103-44e5-aa83-2163e90cce01",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified thermostat schedule.

#### Code:

```ruby
seam.thermostats.schedules.get(thermostat_schedule_id: "408f3f85-11ae-4111-bec1-0f2408a2b218")
```

#### Output:

```ruby
{
  "climate_preset_key" => "Occupied",
  "created_at" => "2025-06-14T16:54:17.946316Z",
  "device_id" => "dc1dfc4b-8082-453f-a953-276941af8650",
  "ends_at" => "2025-07-14T16:54:17.946313Z",
  "errors" => [],
  "is_override_allowed" => true,
  "max_override_period_minutes" => 90,
  "name" => "Jane's Stay",
  "starts_at" => "2025-07-12T16:54:17.946313Z",
  "thermostat_schedule_id" => "408f3f85-11ae-4111-bec1-0f2408a2b218",
  "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified thermostat schedule.

#### Code:

```php
$seam->thermostats->schedules->get(
    thermostat_schedule_id: "408f3f85-11ae-4111-bec1-0f2408a2b218"
);
```

#### Output:

```php
[
    "climate_preset_key" => "Occupied",
    "created_at" => "2025-06-14T16:54:17.946316Z",
    "device_id" => "dc1dfc4b-8082-453f-a953-276941af8650",
    "ends_at" => "2025-07-14T16:54:17.946313Z",
    "errors" => [],
    "is_override_allowed" => true,
    "max_override_period_minutes" => 90,
    "name" => "Jane's Stay",
    "starts_at" => "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id" => "408f3f85-11ae-4111-bec1-0f2408a2b218",
    "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified thermostat schedule.

#### Code:

```seam_cli
seam thermostats schedules get --thermostat_schedule_id "408f3f85-11ae-4111-bec1-0f2408a2b218"
```

#### Output:

```seam_cli
{
  "climate_preset_key": "Occupied",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
  "ends_at": "2025-07-14T16:54:17.946313Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "Jane's Stay",
  "starts_at": "2025-07-12T16:54:17.946313Z",
  "thermostat_schedule_id": "408f3f85-11ae-4111-bec1-0f2408a2b218",
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

**`thermostat_schedule_id`** *String* (Required)

ID of the thermostat schedule that you want to get.

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
