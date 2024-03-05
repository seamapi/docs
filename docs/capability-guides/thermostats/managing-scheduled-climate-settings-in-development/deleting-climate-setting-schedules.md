---
description: Learn how to delete your climate setting schedules.
---

# Deleting Climate Setting Schedules

To delete a [climate setting schedule](thermostats-climate-setting-schedules.md#climate-setting-schedules), specify the desired `climate_setting_schedule_id` in the [Delete Climate Setting Schedule](../../../thermostats/climate-setting-schedules/delete-climate-setting-schedule.md) request. Note that if you delete an active climate setting schedule, the thermostat reverts back to the [default climate setting](setting-the-default-climate-setting.md#default-climate-setting).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
climate_setting_schedule_id="6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"

pprint(seam.thermostats.climate_setting_schedules.delete(climate_setting_schedule_id))
```

**Response:**

```
None
```

{% hint style="info" %}
Once the climate setting schedule has been deleted, a request to get the climate setting schedule returns a 404 error.
{% endhint %}

**Request:**

```python
climate_setting_schedule_id="6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"

try:
    seam.thermostats.climate_setting_schedules.get(climate_setting_schedule_id)
except Exception as e:
    print(e)
```

**Response:**

{% code overflow="wrap" %}
```
SeamAPIException: status=404, request_id=fe322a24-e00a-4747-a9c7-45f60e8a0a22, metadata={'type': 'climate_setting_schedule_not_found', 'message': 'Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id', 'data': {'climate_setting_schedule_id': '6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7'}, 'request_id': 'fe322a24-e00a-4747-a9c7-45f60e8a0a22'}
```
{% endcode %}
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
}'
```

**Response:**

```json
{
  "ok": true
}
```

{% hint style="info" %}
Once the climate setting schedule has been deleted, a request to get the climate setting schedule returns a 404 error.
{% endhint %}

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
}'
```

**Response:**

```json
{
  "error": {
    "type": "climate_setting_schedule_not_found",
    "message": "Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id",
    "data": {
      "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
    },
    "request_id": "0c9b6bb5-5752-4a96-9def-d32a76c40041"
  },
  "ok": false
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.thermostats.climateSettingSchedules.delete({
  climate_setting_schedule_id: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
}))
```

**Response:**

```json
undefined
```

{% hint style="info" %}
Once the climate setting schedule has been deleted, a request to get the climate setting schedule returns a 404 error.
{% endhint %}

**Request:**

```javascript
try {
  await seam.thermostats.climateSettingSchedules.get({
    climate_setting_schedule_id: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
  })
} catch(error) {
    console.log(error)
}
```

**Response:**

```json
SeamAPIError: Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id
    at file:///workspaces/api-docs/snippet-playground/javascript/node_modules/seamapi/dist/chunk-UQ5PRMFY.mjs:744:13
    at Generator.throw (<anonymous>)
    at rejected (file:///workspaces/api-docs/snippet-playground/javascript/node_modules/seamapi/dist/chunk-UQ5PRMFY.mjs:54:29)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  status: 404,
  requestId: '04b9f40e-11d6-4e27-ae82-b0da1c0593dd',
  metadata: {
    type: 'climate_setting_schedule_not_found',
    message: 'Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id',
    data: {
      climate_setting_schedule_id: '6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7'
    },
    request_id: '04b9f40e-11d6-4e27-ae82-b0da1c0593dd'
  }
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deletion = seam.ClimateSettingSchedulesThermostats.Delete(climateSettingScheduleId: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7");

Console.WriteLine(deletion);
```

**Response:**

```
None
```

{% hint style="info" %}
Once the climate setting schedule has been deleted, a request to get the climate setting schedule returns a 404 error.
{% endhint %}

**Request:**

```csharp
try
{
  seam.ClimateSettingSchedulesThermostats.Get(climateSettingScheduleId: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7");
}
catch (Exception e)
{
  Console.WriteLine(e.Message);
}
```

**Response:**

{% code overflow="wrap" %}
```
Error calling /thermostats/climate_setting_schedules/get: {"error":{"type":"climate_setting_schedule_not_found","message":"Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id","data":{"climate_setting_schedule_id":"6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"},"request_id":"355b04b9-c26b-4a77-9ec9-3af516fc013e"},"ok":false}
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var climateSettingScheduleId = "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7";
var deletion = seam.thermostats().climateSettingSchedules()
        .delete(ClimateSettingSchedulesDeleteRequest.builder()
                .climateSettingScheduleId(climateSettingScheduleId)
                .build());
System.out.println(deletion);
```

**Response:**

```json
{
  "ok" : true
}
```

{% hint style="info" %}
Once the climate setting schedule has been deleted, a request to get the climate setting schedule returns a 404 error.
{% endhint %}

**Request:**

```java
try {
  var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
        .get(ClimateSettingSchedulesGetRequest.builder()
                .climateSettingScheduleId("6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7")
                .build());
}
catch(Exception e) {
  System.out.println(e);
}
```

**Response:**

{% code overflow="wrap" %}
```json
ApiError{statusCode: 404, body: {error={type=climate_setting_schedule_not_found, message=Could not find an climate_setting_schedule with device_id or climate_setting_schedule_id, data={climate_setting_schedule_id=6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7}, request_id=ec55601c-9d1d-4224-86db-497c90734e81}, ok=false}}
```
{% endcode %}
{% endtab %}
{% endtabs %}
