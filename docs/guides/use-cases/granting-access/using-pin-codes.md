---
description: >-
  Learn how to create an Access Grant with a PIN code access method and deliver
  the code to your user.
---

# Using PIN Codes

PIN codes are the simplest access method. When you request a `code` access method in an Access Grant, Seam programs a PIN code onto the lock. Your user enters the code on the lock's keypad to unlock the door.

PIN codes work with:

- **Standalone smart locks** — August, Yale, Schlage, Lockly, TTLock, Tedee, igloohome, and other connected locks. Specify the locks with `device_ids`.
- **Access control systems** — Salto KS, Salto Space, Brivo, dormakaba, and other ACS platforms that support PIN-based credentials. Specify entrances with `acs_entrance_ids` or group access points into spaces and use `space_ids`.

## Before You Begin

To use PIN codes, you need:

- A [Seam API key](https://console.seam.co)
- One or more connected devices or ACS entrances that support PIN codes
- For standalone smart locks: confirm that `can_program_online_access_codes` is `true` on the device
- For ACS entrances: confirm that `can_unlock_with_code` is `true` on the entrance

## Step 1: Verify Device or Entrance Support

### Standalone Smart Locks

List your devices and confirm that `can_program_online_access_codes` is `true`.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const devices = await seam.devices.list()

const pinCapableDevices = devices.filter(
  (d) => d.can_program_online_access_codes
)
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/list' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```
{% endtab %}

{% tab title="Python" %}


```python
devices = seam.devices.list()

pin_capable_devices = [
    d for d in devices if d.can_program_online_access_codes
]
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
devices = seam.devices.list

pin_capable_devices = devices.select do |d|
  d.can_program_online_access_codes
end
```
{% endtab %}

{% tab title="PHP" %}


```php
$devices = $seam->devices->list();

$pinCapableDevices = array_filter(
  $devices,
  fn($d) => $d->can_program_online_access_codes
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var devices = seam.Devices.List();

var pinCapableDevices = devices
  .Where(d => d.CanProgramOnlineAccessCodes)
  .ToList();
```
{% endtab %}

{% tab title="Java" %}


```java
var devices = seam.devices().list(
  DevicesListRequest.builder().build()
);
```
{% endtab %}
{% endtabs %}

### ACS Entrances

List the entrances for your ACS and confirm that `can_unlock_with_code` is `true`.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const entrances = await seam.acs.entrances.list({
  acs_system_id: 'c359cba2-8ef2-47fc-bee0-1c7c2a886339',
})

const codeEntrances = entrances.filter(
  (e) => e.can_unlock_with_code
)
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/list' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
entrances = seam.acs.entrances.list(
    acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

code_entrances = [
    e for e in entrances if e.can_unlock_with_code
]
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
entrances = seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

code_entrances = entrances.select do |e|
  e.can_unlock_with_code
end
```
{% endtab %}

{% tab title="PHP" %}


```php
$entrances = $seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

$codeEntrances = array_filter(
  $entrances,
  fn($e) => $e->can_unlock_with_code
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var entrances = seam.Acs.Entrances.List(
  acsSystemId: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

var codeEntrances = entrances
  .Where(e => e.CanUnlockWithCode)
  .ToList();
```
{% endtab %}

{% tab title="Java" %}


```java
var entrances = seam.acs().entrances().list(
  AcsEntrancesListRequest.builder()
    .acsSystemId("c359cba2-8ef2-47fc-bee0-1c7c2a886339")
    .build()
);
```
{% endtab %}
{% endtabs %}

## Step 2: Create an Access Grant with a PIN Code

Create an [Access Grant](README.md) specifying `code` as the requested access method mode. You can target devices, entrances, or spaces.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessGrant = await seam.accessGrants.create({
  user_identity_id: '22222222-2222-2222-2222-222222222222',
  device_ids: ['6ba7b811-9dad-11d1-80b4-00c04fd430c8'],
  requested_access_methods: [
    { mode: 'code' }
  ],
  starts_at: '2025-07-13T15:00:00.000Z',
  ends_at: '2025-07-16T11:00:00.000Z',
})
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/create' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "device_ids": ["6ba7b811-9dad-11d1-80b4-00c04fd430c8"],
  "requested_access_methods": [{ "mode": "code" }],
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
access_grant = seam.access_grants.create(
    user_identity_id="22222222-2222-2222-2222-222222222222",
    device_ids=["6ba7b811-9dad-11d1-80b4-00c04fd430c8"],
    requested_access_methods=[{"mode": "code"}],
    starts_at="2025-07-13T15:00:00.000Z",
    ends_at="2025-07-16T11:00:00.000Z",
)
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
access_grant = seam.access_grants.create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  device_ids: ["6ba7b811-9dad-11d1-80b4-00c04fd430c8"],
  requested_access_methods: [{ mode: "code" }],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
)
```
{% endtab %}

{% tab title="PHP" %}


```php
$accessGrant = $seam->access_grants->create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  device_ids: ["6ba7b811-9dad-11d1-80b4-00c04fd430c8"],
  requested_access_methods: [["mode" => "code"]],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var accessGrant = seam.AccessGrants.Create(
  userIdentityId: "22222222-2222-2222-2222-222222222222",
  deviceIds: new List<string>
  {
    "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
  },
  requestedAccessMethods: new List<RequestedAccessMethod>
  {
    new RequestedAccessMethod { Mode = "code" }
  },
  startsAt: "2025-07-13T15:00:00.000Z",
  endsAt: "2025-07-16T11:00:00.000Z"
);
```
{% endtab %}

{% tab title="Java" %}


```java
var accessGrant = seam.accessGrants().create(
  AccessGrantsCreateRequest.builder()
    .userIdentityId("22222222-2222-2222-2222-222222222222")
    .deviceIds(List.of(
      "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
    ))
    .requestedAccessMethods(List.of(
      RequestedAccessMethod.builder()
        .mode("code")
        .build()
    ))
    .startsAt("2025-07-13T15:00:00.000Z")
    .endsAt("2025-07-16T11:00:00.000Z")
    .build()
);
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
In a sandbox workspace, PIN codes are issued almost instantly. On real devices, issuance can take a few moments. Poll the access method until `is_issued` is `true` or watch for the `access_method.issued` event.
{% endhint %}

## Step 3: Retrieve the PIN Code

Once the access method is issued, retrieve it to get the code. Share the code with your user through text, email, or your application.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessMethod = await seam.accessMethods.get({
  access_method_id:
    accessGrant.requested_access_methods[0].created_access_method_ids[0],
})

console.log(accessMethod.code) // => "1234"
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
access_method = seam.access_methods.get(
    access_method_id=access_grant.requested_access_methods[0].created_access_method_ids[0]
)

print(access_method.code)  # => "1234"
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
access_method = seam.access_methods.get(
  access_method_id: access_grant.requested_access_methods[0].created_access_method_ids[0]
)

puts access_method.code  # => "1234"
```
{% endtab %}

{% tab title="PHP" %}


```php
$accessMethod = $seam->access_methods->get(
  access_method_id: $accessGrant->requested_access_methods[0]->created_access_method_ids[0]
);

echo $accessMethod->code;  // => "1234"
```
{% endtab %}

{% tab title="C#" %}


```csharp
var accessMethod = seam.AccessMethods.Get(
  accessMethodId: accessGrant.RequestedAccessMethods[0].CreatedAccessMethodIds[0]
);

Console.WriteLine(accessMethod.Code);  // => "1234"
```
{% endtab %}

{% tab title="Java" %}


```java
var accessMethod = seam.accessMethods().get(
  AccessMethodsGetRequest.builder()
    .accessMethodId(
      accessGrant.getRequestedAccessMethods().get(0).getCreatedAccessMethodIds().get(0)
    )
    .build()
);
```
{% endtab %}
{% endtabs %}

**Output:**

```json
{
  "access_method_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "display_name": "PIN Code",
  "mode": "code",
  "is_issued": true,
  "issued_at": "2025-06-16T16:55:03.924353Z",
  "code": "1234",
  ...
}
```

## Next Steps

- [Delivering Access Methods](delivering-access-methods.md) — Learn how to deliver all access method types to your users.
- [Creating an Access Grant](creating-an-access-grant.md) — Learn more about specifying devices, entrances, and spaces.
- [Access Methods API Reference](https://docs.seam.co/latest/api/access_methods/) — See all access method properties and endpoints.
