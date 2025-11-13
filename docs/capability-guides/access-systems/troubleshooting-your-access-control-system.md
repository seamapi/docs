---
description: Learn about ACS-related errors and warnings, as well as how to resolve them.
---

# Troubleshooting Your Access Control System

The Seam API provides a set of errors and warnings that help you to troubleshoot your ACS.

## On-Premises Access Control System Errors

These errors alert you to issues involving the connection between your on-premises ACS and Seam.

### `acs_system.errors.seam_bridge_disconnected`

This error indicates that the Seam API cannot communicate with your [Seam Bridge](../seam-bridge/), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. This error might also occur if your Seam Bridge is connected to the wrong [workspace](../../core-concepts/workspaces/).

To troubleshoot this error:

* Make sure that you are running the [latest version of the Seam Bridge](https://www.seam.co/seam-bridge/releases/latest). If not, reinstall and then start the Seam Bridge executable. See the [Seam Bridge installation instructions](../seam-bridge/#installation-instructions).
* Reconnect the Seam Bridge. To reconnect, you can go to your ACS in the **Access Systems** area of the [Seam Console](https://console.seam.co/) or use a [Connect Webview](../../api/connect_webviews/). For more information, see [Pairing the Seam Bridge with Your Workspace](../seam-bridge/#pairing-the-seam-bridge-with-your-workspace).
* Restart the Seam Bridge executable.

***

### `acs_system.errors.visionline_instance_unreachable`

This error indicates that your Seam Bridge is functioning correctly and the Seam API can communicate with your Seam Bridge, but the Seam API cannot connect to your on-premises [Visionline ACS](../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/). For example, the IP address of the on-premises ACS may be set incorrectly within your Seam workspace.

To troubleshoot this error:

* Reconnect your on-premises ACS to correct the IP address configuration. To reconnect, you can go to **Access Systems** in the [Seam Console](https://console.seam.co/) or use a [Connect Webview](../../api/connect_webviews/). See the setup instructions within the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your on-premises ACS.
* Make sure that your on-premises ACS is running correctly.

***

## Cloud-based Access Control System Errors

These errors alert you to issues involving your cloud-based ACS.

### `acs_system.errors.salto_ks_subscription_limit_exceeded`

You have reached the maximum number of users allowed for your site. This means that new access codes cannot be created.

To troubleshoot this error, contact Salto support to increase your user limit, or delete some users from your site.

***

### `acs_system.errors.acs_system_disconnected`

Your access system has been disconnected.

To troubleshoot this error:

* Use a [Connect Webview](../../core-concepts/connect-webviews/) to reconnect the account.
* Unblock the "Seam Integration" user within the [Salto KS dashboard](https://app.saltoks.com/).

***

### `acs_system.errors.account_disconnected`

Your login credentials for your ACS account are invalid.

To troubleshoot this error, use a [Connect Webview](../../core-concepts/connect-webviews/) to reconnect the account.

***

## Cloud-based Access Control System Warnings

These warnings alert you to issues involving your cloud-based ACS.

### `acs_system.warnings.salto_ks_subscription_limit_almost_reached`

the Salto KS site has exceeded 80% of the maximum number of allowed users.

To troubleshoot this warning, contact Salto support to increase your subscription limit, or delete some users from your site.

***

## ACS User Errors

These errors alert you to issues involving your ACS users.

### `acs_user.errors.salto_ks_subscription_limit_exceeded`

This Salto KS user could not be subscribed on Salto KS because the site's user subscription limit has been exceeded.

To troubleshoot this error, increase your subscription limit, or delete some users from your site.

***

### `acs_user.errors.failed_to_create_on_acs_system`

The ACS user was not created on the ACS system. This is likely due to an unexpected internal error.

This error occurs in any of the following situations:

* The site user role does not exist.
* The email address provided is already in use.

To troubleshoot this error, contact [Seam support](mailto:support@seam.co) or, if applicable, consider updating the user's email address.

***

### `acs_user.errors.failed_to_update_on_acs_system`

The ACS user was not updated on the ACS system. This is likely due to an unexpected internal error. This error also occurs if the provided email address is already in use.

To troubleshoot this error, contact [Seam support](mailto:support@seam.co) or, if applicable, consider updating the user's email address.

***

### `acs_user.errors.failed_to_delete_on_acs_system`

The ACS user was not deleted on the ACS system. This is likely due to an unexpected internal error.

To troubleshoot this error, contact [Seam support](mailto:support@seam.co).

***

### `acs_user.errors.deleted_externally`

The ACS user was deleted from the ACS system outside of Seam.

***

## ACS User Warnings

These warnings alert you to issues involving your ACS users.

### `acs_user.warnings.salto_ks_user_not_subscribed`

This ACS user is not subscribed on Salto KS, so they cannot unlock doors or perform any actions.

This warning occurs in any of the following situations:

* The ACS user's access schedule has not started yet.
* The ACS user's access schedule has ended.
* The site has reached its limit of active users (subscription slots).
* The ACS user has been manually unsubscribed.

***

### `acs_user.warnings.being_deleted`

The ACS user is being deleted from the ACS system. This is a temporary state, and the deletion will complete shortly.

***

## Credential Errors

These errors alert you to issues involving your credentials.

### `acs_credential.invalidated`

An credential was invalidated and cannot be used anymore. The implications of this error vary by brand and access control system.

For Visionline, if a card is considered invalid if it is overridden, discarded, canceled, or overwritten. If you receive this event for a Visionline credential, check its `visionline_metadata.is_valid` property.
