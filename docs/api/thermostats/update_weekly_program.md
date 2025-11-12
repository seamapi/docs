# Update the Thermostat Weekly Program

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates the thermostat weekly program for a thermostat device. To configure a weekly program, specify the ID of the daily program that you want to use for each day of the week. When you update a weekly program, the set of programs that you specify overwrites any previous weekly program for the thermostat.


{% tabs %}
{% tab title="JavaScript" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```javascript
await seam.thermostats.updateWeeklyProgram({
  device_id: "076546e8-966c-47dd-831b-8d98413bf070",
  monday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  tuesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  wednesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  thursday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  friday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  saturday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
  sunday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/update_weekly_program" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "076546e8-966c-47dd-831b-8d98413bf070",
  "monday_program_id": "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  "tuesday_program_id": "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  "wednesday_program_id": "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  "thursday_program_id": "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  "friday_program_id": "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  "saturday_program_id": "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
  "sunday_program_id": "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "action_type": "PUSH_THERMOSTAT_PROGRAMS",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```python
seam.thermostats.update_weekly_program(
    device_id="076546e8-966c-47dd-831b-8d98413bf070",
    monday_program_id="a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    tuesday_program_id="a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    wednesday_program_id="a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    thursday_program_id="a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    friday_program_id="a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    saturday_program_id="3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
    sunday_program_id="3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
)
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    action_type="PUSH_THERMOSTAT_PROGRAMS",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```ruby
seam.thermostats.update_weekly_program(
  device_id: "076546e8-966c-47dd-831b-8d98413bf070",
  monday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  tuesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  wednesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  thursday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  friday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
  saturday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
  sunday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
)
```

#### Output:

```ruby
{
  "action_attempt_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type" => "PUSH_THERMOSTAT_PROGRAMS",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```php
$seam->thermostats->update_weekly_program(
    device_id: "076546e8-966c-47dd-831b-8d98413bf070",
    monday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    tuesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    wednesday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    thursday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    friday_program_id: "a36dccaa-aeb9-47da-bf1d-43a08ba5c870",
    saturday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28",
    sunday_program_id: "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28"
);
```

#### Output:

```php
[
    "action_attempt_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "action_type" => "PUSH_THERMOSTAT_PROGRAMS",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates the thermostat weekly program for a thermostat device.

#### Code:

```seam_cli
seam thermostats update-weekly-program --device_id "076546e8-966c-47dd-831b-8d98413bf070" --monday_program_id "a36dccaa-aeb9-47da-bf1d-43a08ba5c870" --tuesday_program_id "a36dccaa-aeb9-47da-bf1d-43a08ba5c870" --wednesday_program_id "a36dccaa-aeb9-47da-bf1d-43a08ba5c870" --thursday_program_id "a36dccaa-aeb9-47da-bf1d-43a08ba5c870" --friday_program_id "a36dccaa-aeb9-47da-bf1d-43a08ba5c870" --saturday_program_id "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28" --sunday_program_id "3bf5a788-caf8-40c5-a7d5-78b72e9b3a28"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
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

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to update the weekly program.

---

**`friday_program_id`** *String*

ID of the thermostat daily program to run on Fridays.

---

**`monday_program_id`** *String*

ID of the thermostat daily program to run on Mondays.

---

**`saturday_program_id`** *String*

ID of the thermostat daily program to run on Saturdays.

---

**`sunday_program_id`** *String*

ID of the thermostat daily program to run on Sundays.

---

**`thursday_program_id`** *String*

ID of the thermostat daily program to run on Thursdays.

---

**`tuesday_program_id`** *String*

ID of the thermostat daily program to run on Tuesdays.

---

**`wednesday_program_id`** *String*

ID of the thermostat daily program to run on Wednesdays.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  "action_type": "PUSH_THERMOSTAT_PROGRAMS",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
