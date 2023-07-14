# Access Codes

## Overview

The core concepts behind access codes are discussed in the [Access Codes](/core-concepts/access-codes.md) core concepts overview.
We recommend reading the core concepts overview before reading this guide on implementing access codes.

## Basic Implementation

A basic implementation for access codes will involve creating codes, and then confirming that they were successfully set on the device.
Because programming access codes on a smart lock can take time and may sometimes fail due to a variety of factors such as the reliability of the device's
connection to the internet, even a basic implementation of access codes should verify the status of the code after it is created, and
handle any errors that may occur.

### Creating an access code

Before creating an access code, you should check if the device supports access codes by inspecting the response from `/devices/get` or `/devices/list`.
Supported devices will have `capabilities_supported.access_codes` set to `true`.

Once you've confirmed that the device supports access codes:

- Call the `POST /access_codes/create` endpoint with the appropriate parameters. Refer to the [API Reference](/api-clients/access-codes/create-an-access-code.md) for more details on the parameters you can pass to this endpoint. Also keep in mind that particular device providers may have constraints on access code pins and names. You can find more details on these constraints in the [Access Code Constraints Reference](/api-clients/devices##access-code-constraints) of the docs.
- Use the `access_code_id` returned in the response to the `create` endpoint to call the `GET /access_codes/get` endpoint. A basic implementation would poll using this endpoint until the `status` of the access code is `set`. It's important to remember that for `time_bound` codes, the `status` will not be `set` until the `starts_at` time, so you should wait until that time to poll for the status.

### Updating an access code

An access code can be updated by calling the `POST /access_codes/update` endpoint with the appropriate parameters. Refer to the [API Reference](/api-clients/access-codes/update-an-access-code.md) for more details on the parameters you can pass to this endpoint.

If you update an access code prior to the code getting set on a device, you can use the same polling mechanism described above to confirm that the code was successfully set. If you update an access code after the code has already been set on a device, you will need to listen for `access_code.*` events described in the Advanced Implementation section below to confirm that an access code is set.

### Handling errors

Access codes can fail to program for a variety of reasons, including but not limited to connectivity issues with the device. If an error occurs, Seam will add to the `warnings` or `errors` field on the access code object returned from the `GET /access_codes/get` endpoint. When you poll for the status of an access code, you should inspect the `warnings` and `errors` fields to determine if there are any issues with the access code. You should refer to the [API Reference](/api-clients/access-codes/README.md) for more details on the various warnings and errors that can occur, and the mitigations you can take, or your users can take, to resolve them.

## Listening to events

The implementation described above relies on polling to know when an access code has been set on a device. In a production system, we recommend listening to events to know when an access code has been set on a device. Seam will emit `access_code.*` events as an access code goes through its lifecycle. You can listen to these events to know when an access code has been set on a device, and to handle any errors that may occur.

Receiving events requires that you have a webhook endpoint set up and registered. You can learn more about setting up a webhook and registering it in the [Webhooks](/core-concepts/webhooks.md) core concepts overview. Once you have a webhook registered (make sure to subscribe to the `access_code.*` events), you should receive events whenever an access code is created, updated, or deleted, or if there are any errors during the lifecycle. You can find descriptions of the various events, and the data they contain, in the [Events Reference](/api-clients/events/README.md).

At a minimum, we recommend listening for the `access_code.set_on_device`, `access_code.removed_from_device`, `access_code.delay_in_setting_on_device` and `access_code.failed_to_set_on_device` events. Handling these events should serve as an alternative to polling for the status of an access code. Upon receiving an access code event, you should call the `GET /access_codes/get` endpoint to get the latest status, warnings and errors on an access code.

## Advanced Implementation

### Migrating unmanaged access codes

Unmanaged access codes are access codes that were created outside of Seam, e.g., by a user manually programming a code on a device. Seam will generally allow you to migrate them into Seam in order to manage them using Seam, though some exceptions apply. Refer to the guide on [Migrating Unmanaged Access Codes](/device-guides/migrating-existing-codes.md) for more details.

### Backup Access Codes

In order to ensure a good experience for your users even when codes fail to set, we highly recommend using the backup access code mechanism that Seam provides in order to provide an alternative for users relying on being able to have access. Refer to our guide on backup access codes for more details.

## Configuring features via the Console

Access codes can be managed via the Seam Console. You can create, update, and delete access codes via the Console. You will also see the status of access codes, and view any warnings or errors that may have occurred when programming the access code.

## How would a user incorporate this feature into their Dashboard?

Seam provides some pre-built UI components that allow you to build access code management features into your UI. You can get an overview of these components in the [Seam Components](/seam-components/README.md) section of the docs. For access code management, we provide an `AccessCodesTable` component, and a `AccessCodeDetails` component.
