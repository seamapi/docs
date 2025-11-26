# Deactivate a Phone

- [Request Parameters](#request-parameters)
- [Response](#response)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).


{% tabs %}
{% tab title="JavaScript" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```javascript
await seam.phones.deactivate({
  device_id: "6481cd6a-579f-4d8c-9adb-b42bf9fb697e",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/phones/deactivate" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "6481cd6a-579f-4d8c-9adb-b42bf9fb697e"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```python
seam.phones.deactivate(device_id="6481cd6a-579f-4d8c-9adb-b42bf9fb697e")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```ruby
seam.phones.deactivate(device_id: "6481cd6a-579f-4d8c-9adb-b42bf9fb697e")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```php
$seam->phones->deactivate(device_id: "6481cd6a-579f-4d8c-9adb-b42bf9fb697e");
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code:

```seam_cli
seam phones deactivate --device_id "6481cd6a-579f-4d8c-9adb-b42bf9fb697e"
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

**`device_id`** *String* (Required)

Device ID of the phone that you want to deactivate.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

