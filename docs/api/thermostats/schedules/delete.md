# Delete a Thermostat Schedule

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.schedules.delete({
  thermostat_schedule_id: "0d42131f-ceb2-4fdf-b44e-3cc1143f98de",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_schedule_id": "0d42131f-ceb2-4fdf-b44e-3cc1143f98de"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```python
seam.thermostats.schedules.delete(
    thermostat_schedule_id="0d42131f-ceb2-4fdf-b44e-3cc1143f98de"
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```ruby
seam.thermostats.schedules.delete(thermostat_schedule_id: "0d42131f-ceb2-4fdf-b44e-3cc1143f98de")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```php
$seam->thermostats->schedules->delete(
    thermostat_schedule_id: "0d42131f-ceb2-4fdf-b44e-3cc1143f98de",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code:

```seam_cli
seam thermostats schedules delete --thermostat_schedule_id "0d42131f-ceb2-4fdf-b44e-3cc1143f98de"
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

ID of the thermostat schedule that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

