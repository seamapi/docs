# Pull a Backup Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).

A backup access code pool is a collection of pre-programmed access codes stored on a device, ready for use. These codes are programmed in addition to the regular access codes on Seam, serving as a safety net for any issues with the primary codes. If there's ever a complication with a primary access code—be it due to intermittent connectivity, manual removal from a device, or provider outages—a backup code can be retrieved. Its end time can then be adjusted to align with the original code, facilitating seamless and uninterrupted access.

You can pull a backup access code from the pool at any time. These backup codes are guaranteed to work immediately and automatically programmed to be removed from the device after the access code ends.

You can only pull backup access codes for time-bound access codes.

Before pulling a backup access code, make sure that the device's `properties.supports_backup_access_code_pool` is `true`. Then, to activate the backup pool, set `use_backup_access_code_pool` to `true` when creating an access code.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/pull_backup_access_code ⇒ { access_code }
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

**`access_code_id`** *string* (Required)

ID of the access code for which you want to pull a backup access code.

---


## Response

[access\_code](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of access_code
}
```
{% endtab %}
{% endtabs %}
