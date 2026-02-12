# Temperature Reached

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) reaching a specified temperature. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).


{% tabs %}
{% tab title="JavaScript" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```javascript
await seam.thermostats.simulate.temperatureReached({
  device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
  temperature_celsius: 25,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/simulate/temperature_reached" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
  "temperature_celsius": 25
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```python
seam.thermostats.simulate.temperature_reached(device_id="278a72ba-7deb-45e3-a0c0-573fd360ee7b", temperature_celsius=25)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```ruby
seam.thermostats.simulate.temperature_reached(device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b", temperature_celsius: 25)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```php
$seam->thermostats->simulate->temperature_reached(
    device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
    temperature_celsius: 25,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates a thermostat reaching a specified temperature.

#### Code:

```seam_cli
seam thermostats simulate temperature-reached --device_id "278a72ba-7deb-45e3-a0c0-573fd360ee7b" --temperature_celsius 25
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device that you want to simulate reaching a specified temperature.

---

**`temperature_celsius`** *Number*

Temperature in °C that you want simulate the thermostat reaching. You must set `temperature_celsius` or `temperature_fahrenheit`.

---

**`temperature_fahrenheit`** *Number*

Temperature in °F that you want simulate the thermostat reaching. You must set `temperature_fahrenheit` or `temperature_celsius`.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

