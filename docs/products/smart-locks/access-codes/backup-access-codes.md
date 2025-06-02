---
description: >-
  Learn how to bullet proof your access code implementation with back up access
  codes.
---

# Managing Backup Access Codes

A backup access code pool is a collection of pre-programmed access codes stored on a device, ready for use. These codes are programmed in addition to the regular access codes on Seam, serving as a safety net for any issues with the primary codes.

If there's ever a complication with a primary access code—be it due to intermittent connectivity, manual removal from a device, or provider outages—a backup code can be retrieved. Its end time can then be adjusted to align with the original code, facilitating seamless and uninterrupted access.

To bulletproof your implementation of access codes, it's essential to maintain a pool of backup access codes for each device. Seam provides a robust implementation of this backup pool system, and this article will help you learn how to use our backup access pool system.

{% hint style="info" %}
Seam supports backup access codes for [time-bound access codes](./#time-bound-access-codes) only.
{% endhint %}

***

## Before You Begin

To confirm that Seam supports back up code pools for your device, check the device's `properties` by inspecting the response from [Get Device](../../../api-clients/devices/get.md) or [List Devices](../../../api-clients/devices/list.md). Ensure that the device's `properties.supports_backup_access_code_pool` is `true`.

After you've done that, come back here and keep reading.

**Example Payload:**

```
{
    "device_id": "00000000-0000-0000-0000-000000000000",
    "properties": {
        "supports_backup_access_code_pool": true,
        ...
    },
    ...
}
```

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device = seam.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
pprint("Supports backup access code pool: "
    + str(device.properties.supports_backup_access_code_pool))
```

**Response:**

```
'Supports backup access code pool: True'
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
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    .
    .
    .

    "properties": {
      .
      .
      .
      "supports_backup_access_code_pool": true
    },
    .
    .
    .
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.devices.get({
  device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}))
```

**Response:**

```json
{
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  .
  .
  .
  properties: {
    .
    .
    .
    supports_backup_access_code_pool: true
  },
  .
  .
  .
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.devices.get(device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

{% code overflow="wrap" %}
```
<Seam::Device:0x00438
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  .
  .
  .
  properties={..."supports_backup_access_code_pool"=>true}
  .
  .
  .
  >
```
{% endcode %}
{% endtab %}

{% tab title="PHP" %}
```php
# not yet implemented
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var device = seam.Devices.Get(deviceId: "6aae9d08-fed6-4ca5-8328-e36849ab48fe");
Console.WriteLine("Device ID: " + device.DeviceId);
Console.WriteLine("Supports backup access code pool: " + device.Properties.SupportsBackupAccessCodePool);
```

**Response:**

{% code overflow="wrap" %}
```
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Supports backup access code pool: True
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Device device = seam.devices()
        .get(DevicesGetRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(device);
```

**Response:**

```json
{
  "device_id" : "0168fba8-8275-49a3-acf5-b2bced519a2c",
  .
  .
  .
  "properties" : {
    .
    .
    .
    "supports_backup_access_code_pool" : true
  },
  .
  .
  .
}
```
{% endtab %}
{% endtabs %}

***

## Enabling and Retrieving Backup Codes

### 1. Activate the backup access code pool

To activate the backup pool, set `use_backup_access_code_pool` to `true` when [creating an access code](../../../api/access_codes/create.md). After activation, the backup access code pool cannot be turned off for that device. However, if you unmanage the device, any backup access codes are removed.

This activation is a one-time process for each device. Once initiated, Seam consistently maintains a backup code pool for the device. All access codes associated with the device utilize the same backup code pool.

{% hint style="info" %}
In the smart lock app, backup access codes appear as "Backup {CODE\_ID} (Seam)".
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my time-bound code",
  starts_at = "2025-01-01T16:00:00Z",
  ends_at = "2025-01-22T12:00:00Z",
  use_backup_access_code_pool = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='dc83d82d-55d2-4178-8c8c-10382311aed2',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='time_bound',
           code='9132',
           created_at='2023-10-19T05:07:03.693Z',
           errors=[],
           warnings=[],
           starts_at='2025-01-01T16:00:00.000Z',
           ends_at='2025-01-22T12:00:00.000Z',
           name='my time-bound code',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=True,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name": "my time-bound code",
  "starts_at": "2025-01-01T16:00:00Z",
  "ends_at": "2025-01-22T12:00:00Z",
  "use_backup_access_code_pool": true
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "7177edd7-3f99-46b9-bf4b-d3a9a16f6da9",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "ddb6e6b7-7156-471e-9199-4106db2f2e57",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my time-bound code",
    "appearance": null,
    "code": "1185",
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    "pulled_backup_access_code_id": null,
    "is_backup_access_code_available": true,
    "created_at": "2023-10-19T08:23:50.789Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

const createdAccessCode = await seam.accessCodes.create({
    device_id: deviceId,
    name: "my time-bound code",
    starts_at: "2025-01-01T16:00:00Z",
    ends_at: "2025-01-22T12:00:00Z",
    use_backup_access_code_pool: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'f863cb36-7f96-4b56-ac91-115742c31c00',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my time-bound code',
  appearance: null,
  code: '8030',
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  is_scheduled_on_device: false,
  starts_at: '2025-01-01T16:00:00.000Z',
  ends_at: '2025-01-22T12:00:00.000Z',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-10-19T11:41:27.273Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = client.access_codes.create(
  device_id: device_id,
  name: "my time-bound code",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z",
  use_backup_access_code_pool: true
)

puts created_access_code.inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  code="2239"
  name="my time-bound code"
  type="time_bound"
  errors=[]
  status="unset"
  ends_at=2025-01-22 12:00:00 UTC
  warnings=[]
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  starts_at=2025-01-01 16:00:00 UTC
  appearance=nil
  created_at=2023-10-25 04:17:43.323 UTC
  is_managed=true
  access_code_id="995d1927-e0db-4a97-b759-515193e6edbc"
  is_scheduled_on_device=false
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  is_external_modification_allowed=false>
```
{% endtab %}

{% tab title="PHP" %}
```php
$device_id = "5a9dee23-e50f-4da7-88f3-fef38bf07857";

$access_code = $seam->access_codes->create(
  device_id: $device_id,
  name: 'my timebound code',
  starts_at:  "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z",
  use_backup_access_code_pool: true
);

# Inspect this timebound code
echo json_encode($access_code, JSON_PRETTY_PRINT);


// {
//   "access_code_id": "a91604eb-ebae-420c-a51e-07a30422fd94",
//   "device_id": "5a9dee23-e50f-4da7-88f3-fef38bf07857",
//   "name": "my timebound code",
//   "type": "time_bound",
//   "status": "unset",
//   "starts_at": "2025-01-01T16:00:00.000Z",
//   "ends_at": "2025-01-22T12:00:00.000Z",
//   "code": "6837",
//   "created_at": "2023-09-16T20:54:20.872Z",
//   "errors": [],
//   "warnings": [],
//   "is_managed": true,
//   "common_code_key": null,
//   "is_waiting_for_code_assignment": null,
//   "is_scheduled_on_device": false,
//   "pulled_backup_access_code_id": null,
//   "is_backup_access_code_available": true,
//   "is_backup": null
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
var createdAccessCode = seam.AccessCodes.Create(
  deviceId: deviceId,
  name: "my time-bound code",
  startsAt: "2025-01-01T16:00:00Z",
  endsAt: "2025-01-22T12:00:00Z",
  useBackupAccessCodePool: true
);

Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
Console.WriteLine("Is backup access code available: " + createdAccessCode.IsBackupAccessCodeAvailable);
```

**Response:**

{% code overflow="wrap" %}
```
Created access code ID: 4ea6c172-cff7-4502-a766-f9293f36cba5
Is backup access code available: True
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";

AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
        .deviceId(deviceId)
        .name("my time-bound code")
        .startsAt("2025-01-01T16:00:00Z")
        .endsAt("2025-01-22T12:00:00Z")
        .useBackupAccessCodePool(true)
        .build());
System.out.println(CreatedAccessCode);
```

**Response:**

```json
{
  "is_scheduled_on_device" : false,
  "type" : "time_bound",
  "access_code_id" : "206491e0-000f-49cb-8f18-db47a12bc785",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my time-bound code",
  "code" : "0709",
  "created_at" : "2023-10-30T07:45:08.138Z",
  "errors" : [ ],
  "warnings" : [ ],
  "is_managed" : "true",
  "starts_at" : "2025-01-01T16:00:00Z",
  "ends_at" : "2025-01-22T12:00:00Z",
  "status" : "unset",
  "is_backup_access_code_available" : true
}
```
{% endtab %}
{% endtabs %}

### 2. Detect when an access code has failed to program

When you receive an `access_code.failed_to_set_on_device` event through your Webhook, or notice a `failed_to_set_on_device` error on the access code object, that means that the access code has failed to program.

You can retrieve a backup access code to use instead.

### 3. Confirm the availability of a backup access code

To confirm that a backup access code is available for retrieval, check the `is_backup_access_code_available` property on the access code by inspecting the response from [Get Access Code](../../../api/access_codes/get/) or [List Access Codes](../../../api/access_codes/list.md). If the backup code pool has been exhausted, this property returns `false`.

{% hint style="info" %}
Note that we only support pulling backup codes for `time_bound` codes at this time.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code = seam.access_codes.get("dc83d82d-55d2-4178-8c8c-10382311aed2")

pprint("Is backup access code available: "
    + str(access_code.is_backup_access_code_available))
```

**Response:**

```
'Is backup access code available: True'
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "ddb6e6b7-7156-471e-9199-4106db2f2e57"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "ddb6e6b7-7156-471e-9199-4106db2f2e57",
    .
    .
    .
    "is_backup_access_code_available": true,
    .
    .
    .
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const accessCode = await seam.accessCodes.get({
  access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
})

console.log("Is backup access code available: "
  + accessCode.is_backup_access_code_available)
```

**Response:**

```
Is backup access code available: true
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code = client.access_codes.get(access_code_id: "995d1927-e0db-4a97-b759-515193e6edbc")
puts "Is backup access code available: #{access_code.is_backup_access_code_available}"
```

**Response:**

```
Is backup access code available: true
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code_id = "a91604eb-ebae-420c-a51e-07a30422fd94";

$access_code = $seam->access_codes->get(
  access_code_id: $access_code_id
);

# Inspect access code is_backup_access_code_available
echo json_encode($access_code->is_backup_access_code_available);
# => true
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "4ea6c172-cff7-4502-a766-f9293f36cba5");
Console.WriteLine("Created access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Is backup access code available: " + accessCode.IsBackupAccessCodeAvailable);
```

**Response:**

{% code overflow="wrap" %}
```
Created access code ID: 4ea6c172-cff7-4502-a766-f9293f36cba5
Is backup access code available: True
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("206491e0-000f-49cb-8f18-db47a12bc785")
                .build());
System.out.println("Is backup access code available: "
  + accessCode.getIsBackupAccessCodeAvailable());
```

**Response:**

```
Is backup access code available: true
```
{% endtab %}
{% endtabs %}

### 4. Retrieve a backup access code

To retrieve a backup access code for an access code, include the `access_code_id` in the [Pull Backup Access Codes](../../../api/access_codes/pull_backup_access_code.md) request. In the response, you receive the new backup access code. Be sure to share the new backup PIN code with the user of the original access code.

Upon executing this action, Seam performs the following additional actions:

* Mark the backup access code as pulled (`"pulled": true`), meaning that it has been removed from the pool.
* Associate the backup access code with the original access code, ensuring that any future requests to the [Pull Backup Access Code](../../../api/access_codes/pull_backup_access_code.md) request return the same backup access code.
* Update the `ends_at` date for the backup access code to match that of the original access code.
* Attempt to refill the backup access code pool with a new backup code.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id = "dc83d82d-55d2-4178-8c8c-10382311aed2"

backup_code = seam.access_codes.pull_backup_access_code(
    access_code = access_code_id
)

pprint(backup_code)
```

**Response:**

```
AccessCode(access_code_id='6db16e34-48d4-467a-856c-32a56b9cf0da',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='time_bound',
           code='7768',
           created_at='2023-10-19T05:07:05.548Z',
           errors=[],
           warnings=[],
           starts_at='2023-10-19T05:22:37.082Z',
           ends_at='2025-01-22T12:00:00.000Z',
           name='Backup 6db16e34-48d4-467a-856c-32a56b9cf0da (Seam)',
           status='set',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=None,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=True,
           appearance={'first_name': 'Backup',
                       'last_name': '6db16e34-48d4-467a-856c-32a56b9cf0da '
                                    '(Seam)',
                       'name': 'Backup 6db16e34-48d4-467a-856c-32a56b9cf0da '
                               '(Seam)'},
           is_external_modification_allowed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/pull_backup_access_code' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "ddb6e6b7-7156-471e-9199-4106db2f2e57"
}'
```

**Response:**

```json
{
  "backup_access_code": {
    "access_code_id": "1e72a758-fbf5-433a-8c20-b379dd6df2d3",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "Backup 1e72a758-fbf5-433a-8c20-b379dd6df2d3 (Seam)",
    "appearance": {
      "name": "Backup 1e72a758-fbf5-433a-8c20-b379dd6df2d3 (Seam)",
      "last_name": "1e72a758-fbf5-433a-8c20-b379dd6df2d3 (Seam)",
      "first_name": "Backup"
    },
    "code": "4207",
    "common_code_key": null,
    "type": "time_bound",
    "status": "set",
    "starts_at": "2023-10-19T08:33:10.702Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    "is_backup": true,
    "is_backup_access_code_available": false,
    "created_at": "2023-10-19T05:07:05.205Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const backupAccessCode = await seam.accessCodes.pullBackupAccessCode({
    access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
})

console.log(backupAccessCode)
```

**Response:**

```json
{
  access_code_id: '284cc090-5d89-4e9d-a4ed-518c6cb68d99',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'Backup 284cc090-5d89-4e9d-a4ed-518c6cb68d99 (Seam)',
  appearance: {
    name: 'Backup 284cc090-5d89-4e9d-a4ed-518c6cb68d99 (Seam)',
    last_name: '284cc090-5d89-4e9d-a4ed-518c6cb68d99 (Seam)',
    first_name: 'Backup'
  },
  code: '1275',
  common_code_key: null,
  type: 'time_bound',
  status: 'set',
  starts_at: '2023-10-19T11:50:21.092Z',
  ends_at: '2025-01-22T12:00:00.000Z',
  is_backup: true,
  is_backup_access_code_available: false,
  created_at: '2023-10-19T05:07:05.369Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code_id="995d1927-e0db-4a97-b759-515193e6edbc"
puts client.access_codes.pull_backup_access_code(access_code_id: access_code_id).inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="9b0b88f1-160c-470f-b649-c8a7c9839b22"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="Backup 9b0b88f1-160c-470f-b649-c8a7c9839b22 (Seam)"
  appearance={"name"=>"Backup 9b0b88f1-160c-470f-b649-c8a7c9839b22 (Seam)", "last_name"=>"9b0b88f1-160c-470f-b649-c8a7c9839b22 (Seam)", "first_name"=>"Backup"}
  code="9501"
  type="time_bound"
  status="set"
  starts_at=2023-10-25 04:30:25.371 UTC
  ends_at=2025-01-22 12:00:00 UTC
  is_backup=true
  is_backup_access_code_available=false
  created_at=2023-10-19 05:07:05.963 UTC
  errors=[]
  warnings=[]
  is_managed=true
  is_external_modification_allowed=false>
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code_id = "a91604eb-ebae-420c-a51e-07a30422fd94";

$backup_code = $seam->access_codes->pull_backup_access_code(
  access_code_id: $access_code_id
);

# Inspect access codes
echo json_encode($backup_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "e9e353c9-acb1-454f-970b-2c011ba504d0",
//     "device_id": "5a9dee23-e50f-4da7-88f3-fef38bf07857",
//     "name": "Backup e9e353c9-acb1-454f-970b-2c011ba504d0 (Seam)",
//     "type": "time_bound",
//     "status": "set",
//     "starts_at": "2023-09-16T20:59:37.069Z",
//     "ends_at": "2025-01-22T12:00:00.000Z",
//     "code": "3835",
//     "created_at": "2023-09-16T20:18:26.070Z",
//     "errors": [],
//     "warnings": [],
//     "is_managed": true,
//     "common_code_key": null,
//     "is_waiting_for_code_assignment": null,
//     "is_scheduled_on_device": null,
//     "pulled_backup_access_code_id": null,
//     "is_backup_access_code_available": false,
//     "is_backup": true
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var backupAccessCode = seam.AccessCodes.PullBackupAccessCode(accessCodeId: "4ea6c172-cff7-4502-a766-f9293f36cba5");
Type t = backupAccessCode.GetType();
foreach (var property in t.GetProperties())
{
  Console.WriteLine(property.Name + ": " + property.GetValue(backupAccessCode));
}
```

**Response:**

{% code overflow="wrap" %}
```
CommonCodeKey:
IsScheduledOnDevice:
Type: TimeBound
IsWaitingForCodeAssignment:
AccessCodeId: eb140acf-c857-4a84-871b-52afa8c4f7b7
DeviceId: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Name: Backup eb140acf-c857-4a84-871b-52afa8c4f7b7 (Seam)
Code: 6219
CreatedAt: 2023-10-25T04:41:11.212Z
Errors: []
Warnings: []
IsManaged: True
StartsAt: 2023-10-28T03:40:08.035Z
EndsAt: 2025-01-22T12:00:00.000Z
Status: Set
IsBackupAccessCodeAvailable: False
IsBackup: True
PulledBackupAccessCodeId:
IsExternalModificationAllowed: False
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ccessCode backupAccessCode = seam.accessCodes().pullBackupAccessCode(AccessCodesPullBackupAccessCodeRequest.builder()
        .accessCodeId("206491e0-000f-49cb-8f18-db47a12bc785")
        .build());
System.out.println(backupAccessCode);
```

**Response:**

```json
{
  "type" : "time_bound",
  "access_code_id" : "b66ef4c2-d269-4a91-8839-19910a11e776",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "Backup b66ef4c2-d269-4a91-8839-19910a11e776 (Seam)",
  "code" : "6732",
  "created_at" : "2023-10-30T07:39:54.738Z",
  "errors" : [ ],
  "warnings" : [ ],
  "is_managed" : "true",
  "starts_at" : "2023-10-30T08:03:51.962Z",
  "ends_at" : "2025-01-22T12:00:00Z",
  "status" : "set",
  "is_backup_access_code_available" : false,
  "is_backup" : true
}
```
{% endtab %}
{% endtabs %}

***

## Troubleshooting

When you have the backup access code pool feature enabled for a device, be on the lookout for the following warnings and errors on the device:

### Warning: `many_active_backup_codes`

Multiple back up codes have been pulled from the device. This usually indicates that Seam is having issues programming access codes onto the device. Check if the device is offline or if there are other issues.

### Warning: `partial_backup_access_code_pool`

Seam is having trouble refilling the back up access code pool. This could result from device connection issues or from the device running out of space for new codes.

### Error: `empty_backup_access_code_pool`

There are no more back up codes available in the pool. This can happen when you've just enabled the back up pool feature, or when all of the backup access codes have been used.

***

## Supported Brands

All door locks with the `access_code` capability are expected to support this feature, with the exception of Lockly and Salto locks.
