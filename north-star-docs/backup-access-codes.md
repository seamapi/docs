# Backup Access Codes

## Overview

Scheduled `time_bound` access codes can fail to program for a variety of reasons outside of Seam's control. When creating scheduled codes on your users' behalf, **it's critical** to have a backup access code available to ensure a good user experience.

You could manually handle backup codes yourself, but Seam provides a battle-tested backup access code system that's easy to use. When this feature is enabled on a device, Seam maintains a pool of backup access codes on the device and automatically creates new backup access codes when necessary.

## Basic Implementation

### Enable the backup pool

1. First, check if a device supports backup access codes by inspecting the response from `/devices/get` or `/devices/list`. Supported devices will have `properties.supports_backup_access_code_pool` set to `true`.
2. Enable the backup access code pool on the device by setting `use_backup_access_code_pool` to `true` when creating an access code via `/access_codes/create`. Seam will begin to fill the backup access code pool.

### Use a backup access code

When you receive the `failed_to_set_on_device` access code error for a scheduled code, you should

1. Fetch the access code from `/access_codes/get` and inspect the `is_backup_access_code_available` property to determine if you can use a backup access code.
2. If `is_backup_access_code_available` is `true`, call `POST /access_codes/pull_backup_access_code` with the access code ID to retrieve a backup access code. This will:
- mark the backup code as pulled (remove it from the pool)
- associate the backup code with the original access code (future calls to `/access_codes/pull_backup_access_code` will return the same backup access code)
- update the backup code to have the same `ends_at` as the original access code

Seam will automatically attempt to refill the backup pool after a backup access code is pulled.

The backup access code will be removed from the device whenever the original access code was set to end.

## Notes

- When a device is unmanaged, any backup access codes are removed.
- Once the backup access code pool is enabled, it cannot be disabled.

## Troubleshooting Steps

When a backup access code pool is enabled on a device, there are a few new possible warnings and errors.

### Warning: `many_active_backup_codes`

This warning indicates that there are multiple active backup access codes, which likely indicates an issue with device. You should inspect any other warnings or errors on the device to determine why your system has been relying on backup access codes. One common cause could be that the device is offline (will appear as a `device_disconnected` error).

### Warning: `partial_backup_access_code_pool`

This warning indicates that we were unable to fully populate the backup access code pool. This could indicate a device connection issue or an issue on the device itself (e.g. there are no remaining code slots).

### Error: `empty_backup_access_code_pool`

This error indicates that the backup access code pool is empty. It can occur on a device when:

- first enabling the backup access code pool
- after the backup access code pool has been used and exhausted

In both cases, a device issue is preventing us from filling the pool. You should inspect any other warnings or errors on the device to determine the root cause.

## Configuring features via the Console

Cannot be configured via Console.

## How would a user incorporate this feature into their Dashboard?

N/A
