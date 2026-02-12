# Update a Thermostat Schedule

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified thermostat schedule.

#### Code:

```javascript
await seam.thermostats.schedules.update({
  thermostat_schedule_id: "f29b8f4d-ef6e-4219-96e5-16fb2151ec6c",
  name: "Jane's Stay",
  climate_preset_key: "Occupied",
  max_override_period_minutes: 90,
  starts_at: "2025-06-20T03:24:25.000Z",
  ends_at: "2025-06-22T06:04:21.000Z",
  is_override_allowed: true,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified thermostat schedule.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "thermostat_schedule_id": "f29b8f4d-ef6e-4219-96e5-16fb2151ec6c",
  "name": "Jane's Stay",
  "climate_preset_key": "Occupied",
  "max_override_period_minutes": 90,
  "starts_at": "2025-06-20T03:24:25.000Z",
  "ends_at": "2025-06-22T06:04:21.000Z",
  "is_override_allowed": true
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified thermostat schedule.

#### Code:

```python
seam.thermostats.schedules.update(thermostat_schedule_id="f29b8f4d-ef6e-4219-96e5-16fb2151ec6c", name="Jane's Stay", climate_preset_key="Occupied", max_override_period_minutes=90, starts_at="2025-06-20T03:24:25.000Z", ends_at="2025-06-22T06:04:21.000Z", is_override_allowed=true)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified thermostat schedule.

#### Code:

```ruby
seam.thermostats.schedules.update(thermostat_schedule_id: "f29b8f4d-ef6e-4219-96e5-16fb2151ec6c", name: "Jane's Stay", climate_preset_key: "Occupied", max_override_period_minutes: 90, starts_at: "2025-06-20T03:24:25.000Z", ends_at: "2025-06-22T06:04:21.000Z", is_override_allowed: true)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified thermostat schedule.

#### Code:

```php
$seam->thermostats->schedules->update(
    thermostat_schedule_id: "f29b8f4d-ef6e-4219-96e5-16fb2151ec6c",
    name: "Jane's Stay",
    climate_preset_key: "Occupied",
    max_override_period_minutes: 90,
    starts_at: "2025-06-20T03:24:25.000Z",
    ends_at: "2025-06-22T06:04:21.000Z",
    is_override_allowed: true,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified thermostat schedule.

#### Code:

```seam_cli
seam thermostats schedules update --thermostat_schedule_id "f29b8f4d-ef6e-4219-96e5-16fb2151ec6c" --name "Jane's Stay" --climate_preset_key "Occupied" --max_override_period_minutes 90 --starts_at "2025-06-20T03:24:25.000Z" --ends_at "2025-06-22T06:04:21.000Z" --is_override_allowed true
```

#### Output:

```seam_cli
{}
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

ID of the thermostat schedule that you want to update.

---

**`climate_preset_key`** *String*

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the thermostat schedule.

---

**`ends_at`** *String*

Date and time at which the thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`is_override_allowed`** *Boolean*

Indicates whether a person at the thermostat or using the API can change the thermostat's settings while the schedule is active. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`max_override_period_minutes`** *Number*

Number of minutes for which a person at the thermostat or using the API can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`name`** *String*

Name of the thermostat schedule.

---

**`starts_at`** *String*

Date and time at which the thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

