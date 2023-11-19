---
description: >-
  This guide covers how to ensure that codes created via the Seam API are easily
  identified and can be editable within the smart lock manufacturer app.
---

# Streamlining Access Code Management from the Manufacturer App

Most smart lock manufacturers provide a mobile (or web) app that device owners can use to manage their devices. This includes seeing and editing access codes that are programmed on their smart locks. When creating access codes using the Seam API, it's important to keep in mind that smart lock device owners may also be using their device manufacturer app to look up codes you've created and perhaps edit them. To ensure that these can easily be done, Seam provides a couple of API features for enabling this.

## Access Code Name

When creating an access code, the Seam API lets you set a `name` attribute for the code. This `name` can be used to identify the code on Seam. In addition, smart lock device owners can also use this name to identify the code you created inside their smart lock manufacturer app.&#x20;

### Naming Codes & Best Practices

When creating an access code, it's important to use a simple & recognizable name to help device owners identify code(s) you've created. For example, if the access code is for an Airbnb reservation, it may be helpful to name the code "Anna Smith, Reservation-12345". Long `uuid` or random strings are generally not recommended.

### Code Name vs. Appearance in App

The `name` you set for an access code may not necessarily match exactly the name that appears inside the smart lock manufacturer app. This is because Seam has to account for manufacturer naming constraints.&#x20;

For example, some lock providers may restrict name length, uniqueness, or the use of certain characters (e.g. emojis). Some lock providers may even break down access code names into components such as first name and last name. Seam automatically takes these factors into consideration.

Since the exact name displayed inside the app may differ as a result, Seam provides an `appearance` property on the access code object. This property shows the exact name used inside the smart lock manufacturer app, which can be helpful for your customer support when guiding a device owner.

## Access Code Editing by User

At times, a smart lock device owner may wish to edit the access code that you've created using the Seam API. For example, they may wish to edit the `starts_at` time of the code to allow for early access to their home. Alternatively, they want want to delete the code altogether to restrict access to their home.

### Default Overwriting Behavior

The default behavior of the Seam API is to immediately override those changes made by the device owner. This is because Seam's default behavior is to keep the access code on the device in sync with the declared state of the access code on Seam.&#x20;

### Get Notified of Changes

When external modifications are detected, Seam will send an `access_code.modified_external_to_seam` event to your application. Seam will also add a `code_modified_external_to_seam` error on the access code. You can use these to inform your user that changes made inside their smart lock device manufacturer app are automatically overwritten.

### Allow for Access Code Modification

If you want to allow device owners to be able to edit access codes that you have created through the Seam API, set the `allow_external_modification` flag to `true` when creating an access code. This prevents Seam from overwriting any changes made by the device owner to the access code. Seam also sets `code_modified_external_to_seam` as a warning on the code, instead of an error, when a change is detected. Note that the `allow_external_modification` flag can  also be passed when updating an access code or when converting an access code from unmanaged to managed.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my ongoing code",
  allow_external_modification = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='1d9fe873-3393-4b29-b93e-87fe7f923462',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='ongoing',
           code='5629',
           created_at='2023-10-19T04:50:50.275Z',
           errors=[],
           warnings=[],
           starts_at=None,
           ends_at=None,
           name='my ongoing code',
           status='setting',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=None,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name": "my ongoing code",
  "allow_external_modification": true
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "8e2dace7-7304-43f1-b5f2-bd44b2a072a8",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "a7b85c1f-9963-4fa8-b106-7ce580a41256",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    "appearance": null,
    "code": "5048",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "pulled_backup_access_code_id": null,
    "is_backup_access_code_available": true,
    "created_at": "2023-10-19T08:10:24.248Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": true
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
    name: "my ongoing code",
    allow_external_modification: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: '38a569bb-40b9-4e42-97bd-bb78f8d96777',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  appearance: null,
  code: '1525',
  common_code_key: null,
  type: 'ongoing',
  status: 'setting',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-10-19T11:22:45.732Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: true
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = client.access_codes.create(
  device_id: device_id,
  name: "my ongoing code",
  allow_external_modification: true
)

puts created_access_code.inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  code="8667"
  name="my ongoing code"
  type="ongoing"
  errors=[]
  status="setting"
  warnings=[]
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  appearance=nil
  created_at=2023-10-25 03:54:05.532 UTC
  is_managed=true
  access_code_id="8f1f576f-ee52-4f12-97f6-7a1593965dec"
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  is_external_modification_allowed=true>
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$access_code = $seam->access_codes->create(
  device_id: $device_id,
  name: 'my ongoing code',
  allow_external_modification: true
);

# Inspect this created code
echo json_encode($access_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "bd7e8681-4df6-437c-a12a-e965ecca9caf",
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "name": "my ongoing code",
//     "type": "ongoing",
//     "status": "setting",
//     "starts_at": null,
//     "ends_at": null,
//     "code": "453419",
//     "created_at": "2023-09-04T05:29:08.084Z",
//     "errors": [],
//     "warnings": [],
//     "is_managed": true,
//     "common_code_key": null,
//     "is_waiting_for_code_assignment": null
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
var createdAccessCode = seam.AccessCodes.Create(
  deviceId: deviceId,
  name: "my ongoing code",
  allowExternalModification: true
);

Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
Console.WriteLine("Allow external modification: " + createdAccessCode.IsExternalModificationAllowed);
```

**Response:**

```
Created access code ID: 65f4a1d3-5f3a-45a4-a6b7-372c7f16c007
Allow external modification: True
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";

AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
        .deviceId(deviceId)
        .name("my ongoing code")
        .allowExternalModification(true)
        .build());
System.out.println(CreatedAccessCode);
```

**Response:**

```json
{
  "is_scheduled_on_device" : false,
  "type" : "ongoing",
  "access_code_id" : "cd7f5b14-56e3-48b1-a351-9cab819eea6a",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my ongoing code",
  "code" : "1234",
  "created_at" : "2023-10-30T03:50:17.802Z",
  "errors" : [ ],
  "warnings" : [ ],
  "is_managed" : "true",
  "status" : "unset",
  "is_backup_access_code_available" : false,
  "is_external_modification_allowed" : true
}
```
{% endtab %}
{% endtabs %}



