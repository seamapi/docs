---
description: >-
  This guide covers how to ensure that codes created via the Seam API are easily
  identified and can be edited inside the smart lock manufacturer app.
---

# Accommodating Manufacturer Mobile Apps

Most smart lock manufacturers provide a mobile (or web) app that device owners can use to manage their devices. This includes seeing and editing access codes that are programmed on their smart locks. When creating access codes using the Seam API, it's important to keep in mind that smart lock device owners may also be using their device manufacturer mobile app to look up codes you've created and perhaps edit them. To ensure that these can easily be done, Seam provides a couple of API features for enabling this.

## Access Code Name

When creating an access code, the Seam API lets you set a `name` attribute for the code. This `name` can be used to identify the code on Seam. In addition, smart lock device owners can also use this name to identify the code you created inside their smart lock manufacturer app.&#x20;

#### Naming Codes & Best Practices

When creating an access code, it's important to use a simple & recognizable name to help device owners identify code(s) you've created. For example, if the access code is for an Airbnb reservation, it may be helpful to name the code "Anna Smith, Reservation-12345". Long `uuid` or random strings are generally not recommended.

#### Code Name vs Appearance in App

The `name` you set for an access code may not necessarily match exactly the name that appears inside the smart lock manufacturer app. This is because Seam has to account for manufacturer naming constraints.&#x20;

For example, some lock providers may restrict name length, uniqueness, or the use of certain characters (e.g. emojis). Some lock providers may even break down access code names into components such as first name and last name. Seam automatically takes these factors into consideration.

Since the exact name displayed inside the app may differ as a result, Seam provides an `appearance` property on the access code object. This property shows the exact name used inside the smart lock manufacturer app, which can be helpful for your customer support when guiding a device owner.



## Access Code Editing by User

At times, a smart lock device owner may wish to edit the access code that you've created using the Seam API. For example, they may wish to edit the `starts_at` time of the code to allow for early access to their home. Alternatively, they want want to delete the code altogether to restrict access to their home.

#### Default Overwriting Behavior

The default behavior of the Seam API is to immediately override those changes made by the device owner. This is because Seam's default behavior is to keep the access code on the device in sync with the declared state of the access code on Seam.&#x20;

#### Get Notified of Changes

When external modifications are detected, Seam will send an `access_code.modified_external_to_seam` event to your application. Seam will also add a `code_modified_external_to_seam` error on the access code. You can use these to inform your user that changes made inside their smart lock device manufacturer app are automatically overwritten.

#### Allow for Access Code Modification

If you wish to allow device owners to be able to edit access codes you've created via the Seam API, set the `allow_external_modification` flag to true when creating an access code. This will prevent Seam from overwriting any changes made by the device owner to the access code. Seam will also set `code_modified_external_to_seam` as a warning on the code instead of an error when a change is detected. Note that the `allow_external_modification` flag can  also be passed when updating an access code or when converting an access code from unmanaged to managed.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

const createdAccessCode = await seam.accessCodes.create({
    device_id: deviceId,
    name: "my ongoing code",
    allow_external_modification: true
})
  
console.log(createdAccessCode)

/*
{
  access_code_id: 'aa5a89e6-fe68-4082-ae16-d192b0759670',
  device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
  name: 'my ongoing code',
  appearance: null,
  code: '4456',
  common_code_key: null,
  type: 'ongoing',
  status: 'setting',
  is_backup_access_code_available: false,
  created_at: '2023-08-29T05:01:07.435Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"

created_access_code = seam.access_codes.create(
  device=device_id,
  name="my ongoing code",
  allow_external_modification=True
)

print(created_access_code)

# AccessCode(access_code_id='0cf60b3a-2364-4d21-924e-64c7cb20bb62',
#            type='ongoing',
#            code='9846',
#            starts_at=None,
#            ends_at=None,
#            name='my ongoing code',
#            status='setting',
#            common_code_key=None)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"

created_access_code = seam.access_codes.create(
  device_id: device_id,
  name: "my ongoing code",
  allow_external_modification: true
)

puts created_access_code.inspect

# <Seam::AccessCode:0x00438
#   code="1275"
#   name="my ongoing code"
#   type="ongoing"
#   errors=[]
#   warnings=[]
#   access_code_id="0e2e1d48-c694-4430-8a4f-2dc98b6ec570">
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

{% tab title="Curl" %}
### Request:

```sh
$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Ongoing Access Code",
  "code": "1234",
  "allow_external_modification": true
 }'
```

### Response:

```sh
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-1111-1111-1111-111111111111",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "22222222-2222-2222-2222-222222222222",
    "device_id": "00000000-0000-0000-0000-000000000000",
    "name": "Ongoing Access Code",
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "allow_external_modification": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}



