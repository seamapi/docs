# List Thermostat Schedules

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```javascript
await seam.thermostats.schedules.list({
  device_id: "b5d58842-32be-46d2-b161-26787a0bd5ea",
});
```

#### Output:

```javascript
[
  {
    "climate_preset_key": "Eco",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "b5d58842-32be-46d2-b161-26787a0bd5ea",
    "ends_at": "2025-07-14T16:54:17.946313Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Unoccupied",
    "starts_at": "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "b5d58842-32be-46d2-b161-26787a0bd5ea"
}
EOF
```

#### Output:

```curl
{
  "thermostat_schedules": [
    {
      "climate_preset_key": "Eco",
      "created_at": "2025-06-14T16:54:17.946316Z",
      "device_id": "b5d58842-32be-46d2-b161-26787a0bd5ea",
      "ends_at": "2025-07-14T16:54:17.946313Z",
      "errors": [],
      "is_override_allowed": true,
      "max_override_period_minutes": 90,
      "name": "Unoccupied",
      "starts_at": "2025-07-12T16:54:17.946313Z",
      "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
      "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```python
seam.thermostats.schedules.list(device_id="b5d58842-32be-46d2-b161-26787a0bd5ea")
```

#### Output:

```python
[
    ThermostatSchedule(
        climate_preset_key="Eco",
        created_at="2025-06-14T16:54:17.946316Z",
        device_id="b5d58842-32be-46d2-b161-26787a0bd5ea",
        ends_at="2025-07-14T16:54:17.946313Z",
        errors=[],
        is_override_allowed=true,
        max_override_period_minutes=90,
        name="Unoccupied",
        starts_at="2025-07-12T16:54:17.946313Z",
        thermostat_schedule_id="af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
        workspace_id="58419b36-6103-44e5-aa83-2163e90cce01",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```ruby
seam.thermostats.schedules.list(device_id: "b5d58842-32be-46d2-b161-26787a0bd5ea")
```

#### Output:

```ruby
[
  {
    "climate_preset_key" => "Eco",
    "created_at" => "2025-06-14T16:54:17.946316Z",
    "device_id" => "b5d58842-32be-46d2-b161-26787a0bd5ea",
    "ends_at" => "2025-07-14T16:54:17.946313Z",
    "errors" => [],
    "is_override_allowed" => true,
    "max_override_period_minutes" => 90,
    "name" => "Unoccupied",
    "starts_at" => "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```php
$seam->thermostats->schedules->list(
    device_id: "b5d58842-32be-46d2-b161-26787a0bd5ea"
);
```

#### Output:

```php
[
    [
        "climate_preset_key" => "Eco",
        "created_at" => "2025-06-14T16:54:17.946316Z",
        "device_id" => "b5d58842-32be-46d2-b161-26787a0bd5ea",
        "ends_at" => "2025-07-14T16:54:17.946313Z",
        "errors" => [],
        "is_override_allowed" => true,
        "max_override_period_minutes" => 90,
        "name" => "Unoccupied",
        "starts_at" => "2025-07-12T16:54:17.946313Z",
        "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
        "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all thermostat schedules for a specified thermostat, using a device ID.

#### Code:

```seam_cli
seam thermostats schedules list --device_id "b5d58842-32be-46d2-b161-26787a0bd5ea"
```

#### Output:

```seam_cli
[
  {
    "climate_preset_key": "Eco",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "b5d58842-32be-46d2-b161-26787a0bd5ea",
    "ends_at": "2025-07-14T16:54:17.946313Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Unoccupied",
    "starts_at": "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
]
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

ID of the thermostat device for which you want to list schedules.

---

**`user_identifier_key`** *String*

User identifier key by which to filter the list of returned thermostat schedules.

---


## Response

{% hint style="success" %}
Returns:
**Array of [thermostat\_schedules](.)**

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

---

## Examples


### List thermostat schedules by user identifier key

Returns a list of all thermostat schedules for a specified thermostat, using a user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.thermostats.schedules.list({
  user_identifier_key: "b5c8bf4e-c231-474f-b4dc-adad38c25d3f",
});
```

#### Output:

```javascript
[
  {
    "climate_preset_key": "Eco",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
    "ends_at": "2025-07-14T16:54:17.946313Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Unoccupied",
    "starts_at": "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "b5c8bf4e-c231-474f-b4dc-adad38c25d3f"
}
EOF
```

#### Output:

```curl
{
  "thermostat_schedules": [
    {
      "climate_preset_key": "Eco",
      "created_at": "2025-06-14T16:54:17.946316Z",
      "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
      "ends_at": "2025-07-14T16:54:17.946313Z",
      "errors": [],
      "is_override_allowed": true,
      "max_override_period_minutes": 90,
      "name": "Unoccupied",
      "starts_at": "2025-07-12T16:54:17.946313Z",
      "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
      "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.thermostats.schedules.list(
    user_identifier_key="b5c8bf4e-c231-474f-b4dc-adad38c25d3f"
)
```

#### Output:

```python
[
    ThermostatSchedule(
        climate_preset_key="Eco",
        created_at="2025-06-14T16:54:17.946316Z",
        device_id="dc1dfc4b-8082-453f-a953-276941af8650",
        ends_at="2025-07-14T16:54:17.946313Z",
        errors=[],
        is_override_allowed=true,
        max_override_period_minutes=90,
        name="Unoccupied",
        starts_at="2025-07-12T16:54:17.946313Z",
        thermostat_schedule_id="af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
        workspace_id="58419b36-6103-44e5-aa83-2163e90cce01",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.thermostats.schedules.list(user_identifier_key: "b5c8bf4e-c231-474f-b4dc-adad38c25d3f")
```

#### Output:

```ruby
[
  {
    "climate_preset_key" => "Eco",
    "created_at" => "2025-06-14T16:54:17.946316Z",
    "device_id" => "dc1dfc4b-8082-453f-a953-276941af8650",
    "ends_at" => "2025-07-14T16:54:17.946313Z",
    "errors" => [],
    "is_override_allowed" => true,
    "max_override_period_minutes" => 90,
    "name" => "Unoccupied",
    "starts_at" => "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->thermostats->schedules->list(
    user_identifier_key: "b5c8bf4e-c231-474f-b4dc-adad38c25d3f"
);
```

#### Output:

```php
[
    [
        "climate_preset_key" => "Eco",
        "created_at" => "2025-06-14T16:54:17.946316Z",
        "device_id" => "dc1dfc4b-8082-453f-a953-276941af8650",
        "ends_at" => "2025-07-14T16:54:17.946313Z",
        "errors" => [],
        "is_override_allowed" => true,
        "max_override_period_minutes" => 90,
        "name" => "Unoccupied",
        "starts_at" => "2025-07-12T16:54:17.946313Z",
        "thermostat_schedule_id" => "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
        "workspace_id" => "58419b36-6103-44e5-aa83-2163e90cce01",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam thermostats schedules list --user_identifier_key "b5c8bf4e-c231-474f-b4dc-adad38c25d3f"
```

#### Output:

```seam_cli
[
  {
    "climate_preset_key": "Eco",
    "created_at": "2025-06-14T16:54:17.946316Z",
    "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
    "ends_at": "2025-07-14T16:54:17.946313Z",
    "errors": [],
    "is_override_allowed": true,
    "max_override_period_minutes": 90,
    "name": "Unoccupied",
    "starts_at": "2025-07-12T16:54:17.946313Z",
    "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
    "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
  }
]
```
{% endtab %}

{% endtabs %}
