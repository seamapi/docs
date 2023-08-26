---
description: Learn about how to diagnose and fix access code issues.
---

# Troubleshooting access code issues

Seam might encounter issues when programming an access code onto a lock. If access codes aren't being programmed as expected, this article will help you determine the cause of the issue and fix the problem.

When scheduling an access code, Seam will try to set the code on the device up to 9 days before its start time. Any errors or warnings will be recorded on the access code at least 3 days before its scheduled activation. This approach ensures you have ample time to address any issues, using the mitigation steps provided below.

## Determine the issue

The first step is to figure out what the issue is from Seam's point of view. Make a [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) or [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request, and look at the `errors` and `warnings` payloads on the access code object. Look at the error and warning codes, and go to the matching remedy below for next steps.

{% tabs %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/get' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

#### Response:

```json
{
  "access_code": {
    "access_code_id": "00000000-0000-0000-0000-000000000000",
    "errors": [
      {
        "error_code": "device_disconnected",
        "message": "Device Disconnected, you may need to reconnect the device.",
        "created_at": "2023-01-05T00:00:00Z",
        "is_device_error": true
      },
      {
        "error_code": "failed_to_set_on_device",
        "message": "Device Disconnected, you may need to reconnect the device.",
        "created_at": "2023-01-05T00:00:00Z",
        "is_access_code_error": true
      }
    ],
    "warnings": [],
    ...
  }
}
```
{% endtab %}
{% endtabs %}

***

## How to investigate and fix access code errors

See our list of recommended mitigations for different error codes:



| Error Code                                         | Recommended remedies                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `failed_to_set_on_device`                          | Check the error message for more specific mitigation steps or use a [backup access code](backup-access-codes.md)                                                                                                                                                                                                                                                                                                     |
| `failed_to_remove_from_device`                     | Check the error message for more specific mitigation steps. Confirm using the provider's app if the access code is still on the device, as it may have been deleted through another source.                                                                                                                                                                                                                          |
| `code_modified_external_to_seam`                   | To resolve a conflict due to a Seam access code being modified or created by an external source, you can delete and re-create the code through Seam or convert the code from an unmanaged to managed access code (if it was created by an external source). By default, Seam will attempt to reset the code.                                                                                                         |
| `august_device_programming_delay`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                                |
| `august_device_slots_full`                         | Delete existing access codes on the device to free up slots for new access codes. This should be done through Seam if possible.                                                                                                                                                                                                                                                                                      |
| `august_lock_bad_access_code_format`               | Review the pin code and name requirements specific to your August device and update the access code on Seam to match these requirements.                                                                                                                                                                                                                                                                             |
| `august_lock_temporarily_offline`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                                |
| `duplicate_code_on_device`                         | Check for [unmanaged access codes](migrating-existing-access-codes.md) through the provider's app or Seam with the same pin code or name. If a duplicate is found, either delete the duplicate code or convert it to a managed code.                                                                                                                                                                                 |
| `salto_site_user_not_subscribed`                   | Check the Salto user's subscription and your Salto site's subscription limit.                                                                                                                                                                                                                                                                                                                                        |
| `smartthings_failed_to_set_after_multiple_retries` | Check for duplicate codes caused by third-party software managing the device. RBoy Apps in particular can cause this, so disable these for devices that are managed using Seam if possible.                                                                                                                                                                                                                          |
| `smartthings_no_free_slots_available`              | Delete existing access codes on the device to free up slots for new access codes. Note that in addition to the codes managed by Seam, there are 3 other codes on the device.                                                                                                                                                                                                                                         |
| `kwikset_unable_to_confirm_code`                   | This error is usually caused by a duplicate pin code on the device that was set outside of Seam. Try to update this access code's 'code' value through Seam Console or by using our [Update Access Code](../../../api-clients/access-codes/update-an-access-code.md) endpoint                                                                                                                                        |
| `kwikset_unable_to_confirm_deletion`               | You can see a master list of access codes from the Kwikset mobile app (**must be from a mobile device connected to the lock through bluetooth**). If the code is not in the list, it may have already been deleted by a source other than Seam. Please contact us in this case and we will remove our record of the access code. Otherwise we will continue to attempt and confirm deletion of the code on the lock. |
