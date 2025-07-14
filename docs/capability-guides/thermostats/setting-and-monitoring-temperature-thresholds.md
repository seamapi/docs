---
description: >-
  Learn how to use temperature thresholds to monitor your thermostat for
  potential HVAC system misuse or malfunctioning.
---

# Setting and Monitoring Temperature Thresholds

You can configure Seam to emit a [`thermostat.temperature_threshold_exceeded` event](../../api/events/#event-types) if a thermostat reports a temperature outside a specific threshold range. This capability helps you to monitor your thermostats proactively, alerting you to potential HVAC system misuse or malfunctioning.

Use the [`/thermostats/set_temperature_threshold`](../../api/thermostats/set\_temperature\_threshold.md) endpoint to set upper and lower acceptable temperature bounds. Then, you can use a [webhook](../../core-concepts/webhooks.md) to monitor for `thermostat.temperature_threshold_exceeded` events.

When the thermostat reports a temperature outside the threshold range, Seam also adds a warning on the thermostat. You can use the [`/devices/get`](../../api/devices/get.md) endpoint to get the thermostat and then inspect its `device.warnings` property.

***

## Set a Temperature Threshold

To set a temperature threshold for a thermostat, issue a [`/thermostats/set_temperature_threshold`](../../api/thermostats/set\_temperature\_threshold.md) request, providing the `device_id` of the desired thermostat. Also, include the following parameters:

* `lower_limit_celsius` or `lower_limit_fahrenheit`
* `upper_limit_celsius` or `upper_limit_fahrenheit`

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.set_temperature_threshold(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius = 4,
  upper_limit_celsius = 30
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
  'https://connect.getseam.com/thermostats/set_temperature_threshold' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "lower_limit_celsius": 4,
    "upper_limit_celsius": 30
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
await seam.thermostats.setTemperatureThreshold({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius: 4,
  upper_limit_celsius: 30
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
$seam->thermostats->set_temperature_threshold(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius: 4,
  upper_limit_celsius: 30
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



{% endtabs %}

***

## View a Temperature Threshold

The temperature threshold range that you set for a thermostat is a property of the [`thermostat`](../../api/thermostats/) resource itself. To view the threshold values, use the [`/devices/get`](../../api/devices/get.md) endpoint and inspect the `thermostat.temperature_threshold`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)
```

**Response:**

```
Device(
  device_id='a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
  temperature_threshold={
    lower_limit_celsius: 4,
    lower_limit_fahrenheit: 39.2,
    upper_limit_celsius: 30,
    upper_limit_fahrenheit: 86
  },
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
    "temperature_threshold": {
      "lower_limit_celsius": 4,
      "lower_limit_fahrenheit": 39.2,
      "upper_limit_celsius": 30,
      "upper_limit_fahrenheit": 86
    },
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});
```

**Response:**

```json
{
  device_id: 'a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
  temperature_threshold: {
    lower_limit_celsius: 4,
    lower_limit_fahrenheit: 39.2,
    upper_limit_celsius: 30,
    upper_limit_fahrenheit: 86
  },
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
$seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
);
```

**Response:**

```json
{
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  "temperature_threshold": {
    "lower_limit_celsius": 4,
    "lower_limit_fahrenheit": 39.2,
    "upper_limit_celsius": 30,
    "upper_limit_fahrenheit": 86
  },
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

```
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Change a Temperature Threshold

To change the temperature threshold range for a thermostat, issue a new [`/thermostats/set_temperature_threshold`](../../api/thermostats/set\_temperature\_threshold.md) request. The new threshold values replace the previous ones.

***

## Monitor a Temperature Threshold

To monitor a thermostat for temperatures outside the bounds of the configured threshold range, you can configure a [webhook](../../core-concepts/webhooks.md) to receive `thermostat.temperature_threshold_exceeded` events. This event includes the `device_id` of the affected thermostat, as well as the configured threshold values and the reported temperature that exceeded this threshold range.

When the reported temperature for a thermostat returns to within the configured threshold range, Seam emits a `thermostat.temperature_threshold_no_longer_exceeded` event.

***

## Delete a Temperature Threshold

To delete the temperature threshold range for a thermostat, issue a `/thermostats/set_temperature_threshold` request, providing either of the following parameter combinations:

* Provide only the `device_id` of the desired thermostat.
* Provide the `device_id` of the desired thermostat and set the following parameters to null:
  * `lower_limit_celsius` or `lower_limit_fahrenheit`
  * `upper_limit_celsius` or `upper_limit_fahrenheit`

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.set_temperature_threshold(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
)
```

or

```python
seam.thermostats.set_temperature_threshold(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius = None,
  upper_limit_celsius = None
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
  'https://connect.getseam.com/thermostats/set_temperature_threshold' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
}'
```

or

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/set_temperature_threshold' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "lower_limit_celsius": null,
    "upper_limit_celsius": null
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
await seam.thermostats.setTemperatureThreshold({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
});
```

or

```javascript
await seam.thermostats.setTemperatureThreshold({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius: null,
  upper_limit_celsius: null
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
$seam->thermostats->set_temperature_threshold(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);
```

or

```php
$seam->thermostats->set_temperature_threshold(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  lower_limit_celsius: null,
  upper_limit_celsius: null
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



{% endtabs %}
