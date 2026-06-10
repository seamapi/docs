# Update a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a [connected account](https://docs.seam.co/latest/core-concepts/connected-accounts).


{% tabs %}
{% tab title="JavaScript" %}

Updates a connected account.

#### Code:

```javascript
await seam.connectedAccounts.update({
  connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d",
  automatically_manage_new_devices: true,
  custom_metadata: { id: "internalId1" },
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a connected account.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "automatically_manage_new_devices": true,
  "custom_metadata": {
    "id": "internalId1"
  }
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a connected account.

#### Code:

```python
seam.connected_accounts.update(
    connected_account_id="a289aa54-5488-4707-9a4b-eeea4edf311d",
    automatically_manage_new_devices=true,
    custom_metadata={"id": "internalId1"},
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a connected account.

#### Code:

```ruby
seam.connected_accounts.update(
  connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d",
  automatically_manage_new_devices: true,
  custom_metadata: {
    id: "internalId1",
  },
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a connected account.

#### Code:

```php
$seam->connected_accounts->update(
    connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d",
    automatically_manage_new_devices: true,
    custom_metadata: ["id" => "internalId1"],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a connected account.

#### Code:

```seam_cli
seam connected-accounts update --connected_account_id "a289aa54-5488-4707-9a4b-eeea4edf311d" --automatically_manage_new_devices true --custom_metadata {"id":"internalId1"}
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

**`connected_account_id`** *String* (Required)

ID of the connected account that you want to update.

---

**`accepted_capabilities`** *Array* *of Enums*

List of accepted device capabilities that restrict the types of devices that can be connected through this connected account. Valid values are `lock`, `thermostat`, `noise_sensor`, and `access_control`.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>lock</code>
- <code>thermostat</code>
- <code>noise_sensor</code>
- <code>access_control</code>
- <code>camera</code>
</details>

---

**`automatically_manage_new_devices`** *Boolean*

Indicates whether newly-added devices should appear as [managed devices](https://docs.seam.co/latest/core-concepts/devices/managed-and-unmanaged-devices).

---

**`custom_metadata`** *Object*

Custom metadata that you want to associate with the connected account. Entirely replaces the existing custom metadata object. If a new Connect Webview contains custom metadata and is used to reconnect a connected account, the custom metadata from the Connect Webview will entirely replace the entire custom metadata object on the connected account. Supports up to 50 JSON key:value pairs. [Adding custom metadata to a connected account](https://docs.seam.co/latest/core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account) enables you to store custom information, like customer details or internal IDs from your application. Then, you can [filter connected accounts by the desired metadata](https://docs.seam.co/latest/core-concepts/connected-accounts/filtering-connected-accounts-by-custom-metadata).

---

**`customer_key`** *String*

The customer key to associate with this connected account. If provided, the connected account and all resources under the connected account will be moved to this customer. May only be provided if the connected account is not already associated with a customer.

---

**`display_name`** *String*

Human-readable name for the connected account, shown in the dashboard. For example, `Booking from Airbnb House 1`.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

