
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const createdAccessCode = await seam.accessCodes.create({
  device_id: 'device3',
  name: 'Test Access Code',
  starts_at: new Date().toISOString(),
  ends_at: new Date(new Date().getTime() + ms('2 hours')).toISOString()
});

console.log(createdAccessCode);
```
```
{% endtab %}
{% tab title="Python" %}
```python
# Creating a new access code
created_access_code = seam.access_codes.create(
  device_id="device3",
  name="My Access Code"
)

print(created_access_code)
```
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
created_access_code = seam.access_codes.create(
  device_id: "device3",
  name: "Access Code Name",
  starts_at: "2021-12-01T00:00:00Z",
  ends_at: "2021-12-31T23:59:59Z",
  code: "1234"
)

puts created_access_code
```
```
{% endtab %}
{% tab title="PHP" %}
```php
$created_access_code = $seam->access_codes->create([
  'device_id' => 'device3',
  'name' => 'My Access Code',
  'code' => '123456'
]);

echo json_encode($created_access_code);
```
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->