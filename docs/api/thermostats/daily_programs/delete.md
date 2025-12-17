# Delete a Thermostat Daily Program

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a thermostat daily program.


{% tabs %}
{% tab title="JavaScript" %}

Deletes a thermostat daily program.

#### Code:

```javascript
await seam.thermostats.dailyPrograms.delete({
  thermostat_daily_program_id: "a8665859-629e-4696-88b1-1eda1976250a",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a thermostat daily program.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/daily_programs/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_daily_program_id": "a8665859-629e-4696-88b1-1eda1976250a"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a thermostat daily program.

#### Code:

```python
seam.thermostats.daily_programs.delete(
    thermostat_daily_program_id="a8665859-629e-4696-88b1-1eda1976250a"
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a thermostat daily program.

#### Code:

```ruby
seam.thermostats.daily_programs.delete(
  thermostat_daily_program_id: "a8665859-629e-4696-88b1-1eda1976250a",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a thermostat daily program.

#### Code:

```php
$seam->thermostats->daily_programs->delete(
    thermostat_daily_program_id: "a8665859-629e-4696-88b1-1eda1976250a",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a thermostat daily program.

#### Code:

```seam_cli
seam thermostats daily-programs delete --thermostat_daily_program_id "a8665859-629e-4696-88b1-1eda1976250a"
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

**`thermostat_daily_program_id`** *String* (Required)

ID of the thermostat daily program that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

