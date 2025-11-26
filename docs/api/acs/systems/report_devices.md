# Report Devices

- [Request Parameters](#request-parameters)
- [Response](#response)

Reports ACS system device status including encoders and entrances.


{% tabs %}
{% tab title="JavaScript" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```javascript
await seam.acs.systems.reportDevices({
  acs_system_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  acs_encoders: [
    { hotek_metadata: { encoder_number: "1" } },
    { is_removed: true, hotek_metadata: { encoder_number: "2" } },
  ],
  acs_entrances: [
    { hotek_metadata: { room_number: "203" } },
    { is_removed: true, hotek_metadata: { room_number: "500" } },
    { hotek_metadata: { common_area_name: "Gym", common_area_number: "2" } },
  ],
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/report_devices" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_system_id": "182ea706-8e14-4921-8e57-ee18d5a7de31",
  "acs_encoders": [
    {
      "hotek_metadata": {
        "encoder_number": "1"
      }
    },
    {
      "is_removed": true,
      "hotek_metadata": {
        "encoder_number": "2"
      }
    }
  ],
  "acs_entrances": [
    {
      "hotek_metadata": {
        "room_number": "203"
      }
    },
    {
      "is_removed": true,
      "hotek_metadata": {
        "room_number": "500"
      }
    },
    {
      "hotek_metadata": {
        "common_area_name": "Gym",
        "common_area_number": "2"
      }
    }
  ]
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```python
seam.acs.systems.report_devices(acs_system_id="182ea706-8e14-4921-8e57-ee18d5a7de31", acs_encoders=[{"hotek_metadata":{"encoder_number":"1"}},{"is_removed":true,"hotek_metadata":{"encoder_number":"2"}}], acs_entrances=[{"hotek_metadata":{"room_number":"203"}},{"is_removed":true,"hotek_metadata":{"room_number":"500"}},{"hotek_metadata":{"common_area_name":"Gym","common_area_number":"2"}}])
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```ruby
seam.acs.systems.report_devices(acs_system_id: "182ea706-8e14-4921-8e57-ee18d5a7de31", acs_encoders: [{"hotek_metadata":{"encoder_number":"1"}},{"is_removed":true,"hotek_metadata":{"encoder_number":"2"}}], acs_entrances: [{"hotek_metadata":{"room_number":"203"}},{"is_removed":true,"hotek_metadata":{"room_number":"500"}},{"hotek_metadata":{"common_area_name":"Gym","common_area_number":"2"}}])
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```php
$seam->acs->systems->report_devices(
    acs_system_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
    acs_encoders: [
        ["hotek_metadata" => ["encoder_number" => "1"]],
        ["is_removed" => true, "hotek_metadata" => ["encoder_number" => "2"]],
    ],
    acs_entrances: [
        ["hotek_metadata" => ["room_number" => "203"]],
        ["is_removed" => true, "hotek_metadata" => ["room_number" => "500"]],
        [
            "hotek_metadata" => [
                "common_area_name" => "Gym",
                "common_area_number" => "2",
            ],
        ],
    ],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Inform Seam that devices are connected to the ACS system or were removed.

#### Code:

```seam_cli
seam acs systems report-devices --acs_system_id "182ea706-8e14-4921-8e57-ee18d5a7de31" --acs_encoders [{"hotek_metadata":{"encoder_number":"1"}},{"is_removed":true,"hotek_metadata":{"encoder_number":"2"}}] --acs_entrances [{"hotek_metadata":{"room_number":"203"}},{"is_removed":true,"hotek_metadata":{"room_number":"500"}},{"hotek_metadata":{"common_area_name":"Gym","common_area_number":"2"}}]
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

**`acs_system_id`** *String* (Required)

ID of the ACS system to report resources for

---

**`acs_encoders`** *Array* *of Objects*

Array of ACS encoders to report

<details>

<summary><b><code>hotek_metadata</code></b> <i>Object</i></summary>

Hotek-specific metadata associated with the entrance.

</details>

---



<details>

<summary><b><code>hotek_metadata.encoder_number</code></b> <i>String</i></summary>

The encoder number determined by the USB port connection.

</details>

---



<details>

<summary><b><code>is_removed</code></b> <i>Boolean</i></summary>

Whether the encoder is removed

</details>

---


**`acs_entrances`** *Array* *of Objects*

Array of ACS entrances to report

<details>

<summary><b><code>hotek_metadata</code></b> <i>Object</i></summary>

Hotek-specific metadata associated with the entrance.

</details>

---



<details>

<summary><b><code>hotek_metadata.common_area_name</code></b> <i>String</i></summary>

The common area name

</details>

---



<details>

<summary><b><code>hotek_metadata.common_area_number</code></b> <i>String</i></summary>

The room number identifier

</details>

---



<details>

<summary><b><code>hotek_metadata.room_number</code></b> <i>String</i></summary>

The room number identifier

</details>

---



<details>

<summary><b><code>is_removed</code></b> <i>Boolean</i></summary>

Whether the entrance is removed

</details>

---



## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

