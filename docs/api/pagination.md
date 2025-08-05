
# Pagination

For endpoints that can return long lists of resources, using pagination makes your app faster and more efficient. The Seam API and our JavaScript, Python, PHP, and Ruby SDKs support pagination for `list` endpoints.

{% hint style="info" %}
Currently, we support pagination for access codes, access system users, Connect Webviews, connected accounts, and devices.
{% endhint %}

To fetch and process resources across multiple pages in the Seam API, use the `limit` and `page_cursor` parameters, along with the `pagination` response object. The `pagination` object provides the following information:

<table><thead><tr><th width="186">Property</th><th width="89.4000244140625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>next_page_cursor</code></td><td>String</td><td>Opaque value that you use to select the next page of results through the <code>page_cursor</code> parameter.</td></tr><tr><td><code>has_next_page</code></td><td>Boolean</td><td>Indicates whether there is another page of results after this one.</td></tr><tr><td><code>next_page_url</code></td><td>String (URI)</td><td>URL to get the next page of results.</td></tr></tbody></table>

For pagination in the Seam SDKs, use the corresponding paginator class, for example, `SeamPaginator` in the Seam JavaScript and Python SDKs and `Paginator` in the Seam PHP and Ruby SDKs.

The following examples show you how to use pagination in a variety of scenarios:

## Manually Fetch Pages

You can specify the number of records per page and the desired page of results. The first `list` request returns the first set of records, as well as the `pagination` object. If `pagination.has_next_page` is `true`, you can request an additional page of records. For all `list` requests after the first, use the `pagination.next_page_cursor` as the value for the `page_cursor` parameter.

The following example gets the first page of 20 devices and then the second page of 20 devices:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
paginator = seam.create_paginator(seam.devices.list, {"limit": 20})

devices, pagination = paginator.first_page()

if pagination.has_next_page:
    more_devices, _ = paginator.next_page(pagination.next_page_cursor)
```

**Output:**

```
[
  Device(
    device_id='11111111-1111-1111-1111-444444444444',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 20
  }'

curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"limit\": 20
    \"page_cursor\": \"${next_page_cursor}\"
  }"
```

**Response:**

```json
{
  "devices": [
    {
      "device_id": "11111111-1111-1111-1111-444444444444",
      ...
    },
    ...
  ],
  "pagination": {
    "next_page_cursor": "[string]",
    "has_next_page": true,
    "next_page_url": "[URI]"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const pages = seam.createPaginator(
  seam.devices.list({
    limit: 20,
  }),
)

const [devices, { hasNextPage, nextPageCursor }] = await pages.firstPage()

if (hasNextPage) {
  const [moreDevices] = await pages.nextPage(nextPageCursor)
}
```

**Output:**

```json
[
  {
    device_id: '11111111-1111-1111-1111-444444444444',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
paginator = seam.create_paginator(seam.devices.method(:list), {limit: 20})

devices, pagination = paginator.first_page

if pagination.has_next_page?
  more_devices, _ = paginator.next_page(pagination.next_page_cursor)
end
```

**Output:**

```
[
  <Seam::Device:0x004d8
    device_id="11111111-1111-1111-1111-444444444444"
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$pages = $seam->createPaginator(
    fn($params) => $seam->devices->list(...$params),
    ["limit" => 2]
);

[$devices, $pagination] = $pages->firstPage();

if ($pagination->has_next_page) {
    [$moreDevices] = $pages->nextPage($pagination->next_page_cursor);
}
```

**Output:**

```json
[
  {
    "device_id": "11111111-1111-1111-1111-444444444444",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Resume Pagination

You can get the first page on initial load, store the state, and then get the next page at a later time using the stored state.

The following example gets the first page of 20 records from the list of devices and, later, gets the next page of 20 devices:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the first page.
params = {"limit": 20}
paginator = seam.create_paginator(seam.devices.list, params)

devices, pagination = paginator.first_page()

# Store the state, for example, in memory, a file, or a database.
pagination_state = {
    "params": params,
    "next_page_cursor": pagination.next_page_cursor,
    "has_next_page": pagination.has_next_page,
}
with open("/tmp/seam_devices_list.json", "w") as f:
    json.dump(pagination_state, f)
    
# Get the next page at a later time using the stored state.
with open("/tmp/seam_devices_list.json", "r") as f:
    pagination_state = json.load(f)

if pagination_state.get("has_next_page"):
    paginator = seam.create_paginator(
        seam.devices.list, pagination_state["params"]
    )
    more_devices, _ = paginator.next_page(
        pagination_state["next_page_cursor"]
    )
```

**Output:**

```
[
  Device(
    device_id='11111111-1111-1111-1111-444444444444',
    ...
  ),
  ...
]

[
  Device(
    device_id='11111111-1111-1111-2222-444444444444',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the first page.
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 20
  }'

# Store the state, for example, in memory, a file, or a database.

# At a later time, retrieve the stored state.
# Then, get the next page using the stored state.
curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"limit\": 20
    \"page_cursor\": \"${next_page_cursor}\"
  }"
```

**Response:**

```json
{
  "devices": [
    {
      "device_id": "11111111-1111-1111-1111-444444444444",
      ...
    },
    ...
  ],
  "pagination": {
    "next_page_cursor": "[string]",
    "has_next_page": true,
    "next_page_url": "[URI]"
  },
  "ok": true
}

{
  "devices": [
    {
      "device_id": "11111111-1111-1111-2222-444444444444",
      ...
    },
    ...
  ],
  "pagination": {
    "next_page_cursor": "[string]",
    "has_next_page": true,
    "next_page_url": "[URI]"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the first page of devices.
const params = { limit: 20 }

const pages = seam.createPaginator(seam.devices.list(params))

const [devices, pagination] = await pages.firstPage()

// Store the state, for example, in memory, a file, or a database.
localStorage.setItem('/seam/devices/list', JSON.stringify([params, pagination]))

// Later, get the next page of devices.
const [params = {}, { hasNextPage = false, nextPageCursor = null } = {}] =
  JSON.parse(localStorage.getItem('/seam/devices/list') ?? '[]')

if (hasNextPage) {
  const pages = seam.createPaginator(seam.devices.list(params))
  const [moreDevices] = await pages.nextPage(nextPageCursor)
}
```

**Output:**

```json
[
  {
    device_id: '11111111-1111-1111-1111-444444444444',
    ...
  },
  ...
]

[
  {
    device_id: '11111111-1111-1111-2222-444444444444',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Get the first page.
params = {limit: 20}
paginator = seam.create_paginator(seam.devices.method(:list), params)

devices, pagination = paginator.first_page

# Store the state, for example, in memory, a file, or a database.
pagination_state = {
  "params" => params,
  "next_page_cursor" => pagination.next_page_cursor,
  "has_next_page" => pagination.has_next_page?
}
File.write("/tmp/seam_devices_list.json", JSON.dump(pagination_state))

# Get the next page at a later time using the stored state.
pagination_state_json = File.read("/tmp/seam_devices_list.json")
pagination_state = JSON.parse(pagination_state_json)

if pagination_state["has_next_page"]
  paginator = seam.create_paginator(
    seam.devices.method(:list), pagination_state["params"]
  )
  more_devices, _ = paginator.next_page(
    pagination_state["next_page_cursor"]
  )
```

**Output:**

```
[
  <Seam::Device:0x004d8
    device_id="11111111-1111-1111-1111-444444444444"
    ...
    >,
  ...
]

[
  <Seam::Device:0x004d8
    device_id="11111111-1111-1111-2222-444444444444"
    ...
    >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the first page.
$params = ["limit" => 20];

$pages = $seam->createPaginator(
    fn($p) => $seam->devices->list(...$p),
    $params
);

[$devices, $pagination] = $pages->firstPage();

// Store the state, for example, in memory, a file, or a database.
file_put_contents(
    "/tmp/seam_devices_list.json",
    json_encode([$params, $pagination])
);

// Get the next page at a later time using the stored state.
$stored_data = json_decode(
    file_get_contents("/tmp/seam_devices_list.json") ?: "[]",
    false
);

$params = $stored_data[0] ?? [];
$pagination =
    $stored_data[1] ??
    (object) ["has_next_page" => false, "next_page_cursor" => null];

if ($pagination->has_next_page) {
    $pages = $seam->createPaginator(
        fn($p) => $seam->devices->list(...$p),
        $params
    );
    [$moreDevices] = $pages->nextPage($pagination->next_page_cursor);
}
```

**Output:**

```json
[
  {
    "device_id": "11111111-1111-1111-1111-444444444444",
    ...
  },
  ...
]

[
  {
    "device_id": "11111111-1111-1111-2222-444444444444",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Iterate Over All Pages

You can iterate over all pages of records.

The following example uses a loop to get all pages of records for a list of 65 devices, at 20 records per page:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
pages = seam.create_paginator(
  seam.devices.list(
    limit=20
  )
)

for devices in pages:
  pprint(f"There are {len(devices)} devices on this page.")
```

**Output:**

```
There are 20 devices on this page.
There are 20 devices on this page.
There are 20 devices on this page.
There are 5 devices on this page.
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the first page.
# Use GET or POST.
response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 20
  }')

echo "$response" | jq -r '.devices | length' | xargs -I {} echo "There are {} devices on this page."

# Extract pagination info.
next_cursor=$(echo "$response" | jq -r '.pagination.next_page_cursor')
has_next=$(echo "$response" | jq -r '.pagination.has_next_page')

# Process subsequent pages.
while [ "$has_next" = "true" ] && [ ! -z "$next_cursor" ]; do
  response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"limit\": 20,
    \"page_cursor\": \"${next_cursor}\"
  }")

  echo "$response" | jq -r '.devices | length' | xargs -I {} echo "There are {} devices on this page."
  
  # Update pagination info.
  next_cursor=$(echo "$response" | jq -r '.pagination.next_page_cursor')
  has_next=$(echo "$response" | jq -r '.pagination.has_next_page')
done
```

**Response:**

```
There are 20 devices on this page.
There are 20 devices on this page.
There are 20 devices on this page.
There are 5 devices on this page.
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const pages = seam.createPaginator(
  seam.devices.list({
    limit: 20,
  }),
)

for await (const devices of pages) {
  console.log(`There are ${devices.length} devices on this page.`)
}
```

**Output:**

```
There are 20 devices on this page.
There are 20 devices on this page.
There are 20 devices on this page.
There are 5 devices on this page.
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
params = {limit: 20}
pages = seam.create_paginator(seam.devices.method(:list), params)

pages.each do |devices|
  puts "There are #{devices.length} devices on this page."
end
```

**Output:**

```
There are 20 devices on this page.
There are 20 devices on this page.
There are 20 devices on this page.
There are 5 devices on this page.
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$params = ["limit" => 20];

$paginator = $seam->createPaginator(
    fn($p) => $seam->devices->list(...$p),
    $params
);

foreach ($paginator as $page) {
    $devices = $page->devices;
    echo "There are " . count($devices) . " devices on this page." . PHP_EOL;
}
```

**Output:**

```
There are 20 devices on this page.
There are 20 devices on this page.
There are 20 devices on this page.
There are 5 devices on this page.
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Iterate Over All Resources

You can iterate over all resources within all pages.

The following example uses a loop to get all records for a list of devices, at 20 records per page, and then prints out the device ID for each record:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
paginator = seam.create_paginator(seam.devices.list, {"limit": 20})

for device in paginator.flatten():
    print(device.device_id)
```

**Output:**

```
'11111111-1111-1111-1111-444444444444'
'11111111-1111-1111-2222-444444444444'
...
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the first page.
# Use GET or POST.
response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 20
  }')

# Process all pages.
while true; do
  # Extract and print the device IDs from the current page.
  echo "$response" | jq -r '.devices[].device_id'
  
  # Check whether there are more pages.
  has_next=$(echo "$response" | jq -r '.pagination.has_next_page')
  if [ "$has_next" != "true" ]; then
      break
  fi
  
  # Get the next page cursor.
  next_cursor=$(echo "$response" | jq -r '.pagination.next_page_cursor')
  if [ -z "$next_cursor" ] || [ "$next_cursor" = "null" ]; then
      break
  fi
  
  # Fetch the next page.
  response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"limit\": 20,
    \"page_cursor\": \"${next_cursor}\"
  }")
done
```

**Response:**

```
"11111111-1111-1111-1111-444444444444"
"11111111-1111-1111-2222-444444444444"
...
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const pages = seam.createPaginator(
  seam.devices.list({
    limit: 20,
  }),
)

for await (const device of pages.flatten()) {
  console.log(device.device_id)
}
```

**Output:**

```
'11111111-1111-1111-1111-444444444444'
'11111111-1111-1111-2222-444444444444'
...
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
paginator = seam.create_paginator(seam.devices.method(:list), {limit: 20})

paginator.flatten.each do |device|
  puts device.device_id
end
```

**Output:**

```
"11111111-1111-1111-1111-444444444444"
"11111111-1111-1111-2222-444444444444"
...
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$pages = $seam->createPaginator(
    fn($p) => $seam->devices->list(...$p),
    ["limit" => 20]
);

foreach ($pages->flatten() as $device) {
    print $device->device_id . "\n";
}
```

**Output:**

```json
"11111111-1111-1111-1111-444444444444"
"11111111-1111-1111-2222-444444444444"
...
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Return All Resources Across All Pages as an Array

You can iterate over all resources within all pages and return a single array or list.

The following example returns an array containing all devices:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
paginator = seam.create_paginator(seam.devices.list, {"limit": 20})

all_devices = paginator.flatten_to_list()
```

**Output:**

```
[
  Device(
    device_id='11111111-1111-1111-1111-444444444444',
    ...
  ),
  Device(
    device_id='11111111-1111-1111-2222-444444444444',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the first page.
# Use GET or POST.
response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 20
  }')

# Process all pages.
while true; do
  # Extract all devices from the current page and add them
  # the all_devices array.
    devices=$(echo "$response" | jq -c '.devices[]')
    while IFS= read -r device; do
        [ -n "$device" ] && all_devices+=("$device")
    done <<< "$devices"
  
  # Check whether there are more pages.
  has_next=$(echo "$response" | jq -r '.pagination.has_next_page')
  if [ "$has_next" != "true" ]; then
      break
  fi
  
  # Get the next page cursor.
  next_cursor=$(echo "$response" | jq -r '.pagination.next_page_cursor')
  if [ -z "$next_cursor" ] || [ "$next_cursor" = "null" ]; then
      break
  fi
  
  # Fetch the next page.
  response=$(curl -X 'GET' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"limit\": 20,
    \"page_cursor\": \"${next_cursor}\"
  }")
done
```

**Response:**

```json
[
  {
    device_id: '11111111-1111-1111-1111-444444444444',
    ...
  },
  {
    device_id: '11111111-1111-1111-2222-444444444444',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const pages = seam.createPaginator(
  seam.devices.list({
    limit: 20,
  }),
)

const devices = await pages.flattenToArray()
```

**Output:**

```json
[
  {
    device_id: '11111111-1111-1111-1111-444444444444',
    ...
  },
  {
    device_id: '11111111-1111-1111-2222-444444444444',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
paginator = seam.create_paginator(seam.devices.method(:list), {limit: 20})

all_devices = paginator.flatten_to_list
```

**Output:**

```
[
  <Seam::Device:0x004d8
    device_id="11111111-1111-1111-1111-444444444444"
    ...
    >,
  <Seam::Device:0x004d8
    device_id="11111111-1111-1111-2222-444444444444"
    ...
    >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$pages = $seam->createPaginator(
    fn($p) => $seam->devices->list(...$p),
    ["limit" => 20]
);

$deviecs = $pages->flattenToArray();
```

**Output:**

```json
[
  {
    "device_id": "11111111-1111-1111-1111-444444444444",
    ...
  },
  {
    "device_id": "11111111-1111-1111-2222-444444444444",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

