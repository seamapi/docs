# Set the Fan Mode Setting

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/set_fan_mode ⇒ { action_attempt }
```
{% endhint %}

## Parameters

**`device_id`** *String* (Required)

---

**`fan_mode`** *String*

---

**`fan_mode_setting`** *String*

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for the thermostat.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[action\_attempt](./)

### The `SET_FAN_MODE` Resource

Setting fan mode.

{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}

---

### Properties

**`action_attempt_id`** *UUID*

ID of the action attempt.


---

**`action_type`** *String*


---

**`status`** *Enum*

<details>

<summary>Enum values</summary>

- `success`
- `pending`
- `error`
</details>


---

