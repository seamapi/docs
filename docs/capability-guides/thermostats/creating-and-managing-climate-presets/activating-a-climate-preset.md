---
description: Learn how to activate a preconfigured climate preset immediately.
---

# Activating a Climate Preset

In addition to [scheduling](../creating-and-managing-thermostat-schedules.md) climate presets for a thermostat, you can activate a configured climate preset immediately. When you activate a climate preset, it overrides any scheduled climate preset that is already active on the thermostat.

Activating a climate preset returns an [action attempt](../../../core-concepts/action-attempts.md) that enables you to track the progress of the action. Poll this action attempt, until the action completes.

Further, Seam emits a [`thermostat.temperature_reached_set_point` event](../../../api-clients/events/#event-types) when the thermostat reports a temperature within 1° Celsius of the heating or cooling [set point](../understanding-thermostat-concepts/set-points.md) specified in the climate preset that you've activated. You can configure a [webhook](../../../core-concepts/webhooks.md) to watch for this event.

***

## Activate a Climate Preset

To activate a climate preset, issue a [`/thermostats/activate_climate_preset`](../../../api/thermostats/activate_climate_preset.md) request and specify the `climate_preset_key` of the desired climate preset.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.activate_climate_preset(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key = "occupied"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='05de2295-d1dc-4748-aae3-9931658bde20',
  action_type='ACTIVATE_CLIMATE_PRESET',
  error={},
  result={},
  status='success'
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/activate_climate_preset' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "ACTIVATE_CLIMATE_PRESET",
    "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.activateClimatePreset({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied"
});
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '05de2295-d1dc-4748-aae3-9931658bde20',
  action_type: 'ACTIVATE_CLIMATE_PRESET',
  result: {},
  error: null
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
$seam->thermostats->activate_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied"
);
```

**Response:**

```json
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "action_type": "ACTIVATE_CLIMATE_PRESET",
  "error": null,
  "result": {},
  "status": "success"
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



{% endtabs %}

***

## Poll the Action Attempt

Activating a climate preset returns an [action attempt](../../../core-concepts/action-attempts.md). Use the `action_attempt_id` from this response to poll the associated action attempt using the [`/action_attempts/get`](../../../api/action_attempts/get.md) request. When the activation completes successfully, the `status` of the action attempt changes to `success`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.action_attempts.get(
  action_attempt_id = "05de2295-d1dc-4748-aae3-9931658bde20"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='05de2295-d1dc-4748-aae3-9931658bde20',
  action_type='ACTIVATE_CLIMATE_PRESET',
  error={},
  result={},
  status='success'
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20"
}'
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
    "action_type": "ACTIVATE_CLIMATE_PRESET",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.actionAttempts.get(
  action_attempt_id: "05de2295-d1dc-4748-aae3-9931658bde20"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '05de2295-d1dc-4748-aae3-9931658bde20',
  action_type: 'ACTIVATE_CLIMATE_PRESET',
  result: {},
  error: null
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
$seam->action_attempts->get(
  action_attempt_id: "05de2295-d1dc-4748-aae3-9931658bde20"
);
```

**Response:**

```json
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "action_type": "ACTIVATE_CLIMATE_PRESET",
  "error": null,
  "result": {},
  "status": "success"
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
