# Delete a Thermostat Schedule

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```javascript
await seam.thermostats.schedules.delete();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```python
seam.thermostats.schedules.delete()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```ruby
seam.thermostats.schedules.delete()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```php
<?php
$seam->thermostats->schedules->delete();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a thermostat schedule for a specified thermostat.

#### Code

```seam_cli
seam thermostats schedules delete
```

#### Output

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

void

