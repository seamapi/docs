# Delete a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [connected account](../../core-concepts/connected-accounts/README.md).

Deleting a connected account triggers a `connected_account.deleted` event and removes the connected account and all data associated with the connected account from Seam, including devices, events, access codes, and so on. For every deleted resource, Seam sends a corresponding deleted event, but the resource is not deleted from the provider.

For example, if you delete a connected account with a device that has an access code, Seam sends a `connected_account.deleted` event, a `device.deleted` event, and an `access_code.deleted` event, but Seam does not remove the access code from the device.


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified connected account.

#### Code:

```javascript
await seam.connectedAccounts.delete({
  connected_account_id: "35a07a42-4eb2-4080-9bf9-ee08aa2bf62e",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified connected account.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "35a07a42-4eb2-4080-9bf9-ee08aa2bf62e"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified connected account.

#### Code:

```python
seam.connected_accounts.delete(
    connected_account_id="35a07a42-4eb2-4080-9bf9-ee08aa2bf62e"
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified connected account.

#### Code:

```ruby
seam.connected_accounts.delete(connected_account_id: "35a07a42-4eb2-4080-9bf9-ee08aa2bf62e")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified connected account.

#### Code:

```php
$seam->connected_accounts->delete(
    connected_account_id: "35a07a42-4eb2-4080-9bf9-ee08aa2bf62e",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified connected account.

#### Code:

```seam_cli
seam connected-accounts delete --connected_account_id "35a07a42-4eb2-4080-9bf9-ee08aa2bf62e"
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

**`connected_account_id`** *String* (Required)

ID of the connected account that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

