# Set to Off Mode

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% hint style="success" %}
```
POST /thermostats/off ⇒ { action_attempt }
```
{% endhint %}

## Parameters

**`device_id`** **
 (Required)

ID of the desired thermostat device.

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

### The `SET_HVAC_MODE` Resource

Setting HVAC mode.

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

