---
description: >-
  This feature enables your app to scan for nearby door readers and unlock
  authorized doors.
---

# Using Unlock With Tap

Unlock With Tap in mobile apps functions similarly to using a traditional proximity card. The app launches an unlock scanning process. When the user holds their phone close to the lock they wish to open, the phone communicates wirelessly with the lock and transmits an access credentials. Once the lock verifies these credentials and confirms access is granted, it unlocks.

In your app, you use `seam.phone.native.unlockWithTap.launch` to initiate this unlock scanning process. Note that `unlockWithTap` automatically starts scanning whenever it is possible to scan and stops scanning whenever it is not possible to scan. That is, when an issue obstructs the phone from scanning, the `can_scan` capability changes to `false`, and Seam adds the resulting error to the error list. Further, the error explains to the user how to fix the causing issue.

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption><p>A Sample App Flow for launching the Unlock With Tap process.</p></figcaption></figure>

Using the "Unlock With Tap" process involves the following steps:

1. [Retrieve the user's mobile credentials.](using-unlock-with-tap.md#id-1.-retrieve-mobile-credentials)
2. [Check the System Requirements.](using-unlock-with-tap.md#id-2.-check-the-system-requirements)
3. [Launch the "Unlock With Tap" Process.](using-unlock-with-tap.md#id-3.-launch-the-unlock-with-tap-process)
4. [Handle Unlock Status Updates.](using-unlock-with-tap.md#id-4.-handle-unlock-status-updates)
5. [Stop the "Unlock With Tap" Process](using-unlock-with-tap.md#id-5.-stop-the-unlock-with-tap-process)

***

## 1. Retrieve Mobile Credentials

Before initiating the "Unlock With Tap" process, the user's phone must have the necessary mobile credentials loaded onto it. To verify that the credentials are loaded, these credentials can be retrieved either explicitly or through an event handler.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
// Retrieve mobile credentials explicitly.
if (seam.phone.get().nativeMetadata.isInitialized) {
  val credentials = seam.phone.native.credentials.list()
}

// Retrieve mobile credentials using an event handler.
class MyEventHandler implements ISeamEventHandler {
    handle(event: SeamEvent) = when(event) {
        is SeamEvent.Phone.Native.Credentials.Refreshed -> {
            val credentials = seam.phone.native.credentials.list()
            
            // Show the credentials in the UI.
        }
    }
}
```
{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}

***

## 2. Check the System Requirements

Before you launch the "Unlock With Tapping" process, verify that all the required permissions are enabled.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
val requiredPermissions = seam.phone.native.listRequiredAndroidPermissions(
  enableUnlockWithTap = true
)

if (requiredPermissions.isNotEmpty()) {
  // ...
}
```
{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}

Check the error list—for example, in an event handler—to identify any current obstructions.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun handleEvent(
  event: SeamEvent
) {
  // Check whether the phone state has changed.
  // Note that these events are located under the phone namespace.
  if (event is SeamEvent.Phone) {
    val phone = seam.phone.get().nativeMetadata

    if (
      // The desired state has not been met.
      !phone.canUnlockWithTap
    ) {
      if (phone.errors.any { it is SeamError.Phone.Native.MissingRequiredAndroidPermissions }) {
        // Need to update the required permissions.
        val requiredPermissions = seam.phone.native.listRequiredAndroidPermissions(
          enableUnlockWithTap = true
        )

        // Request the requiredPermissions or prompt the user to do so.
      }
    }
  }
}
```
{% endtab %}

{% tab title="Second Tab" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}

***

## 3. Launch the "Unlock With Tap" Process

Once the required permissions are enabled, the app can launch the "Unlock With Tap" Process.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
if (seam.phone.get().can_unlock_with_tap) {
  try {
    seam.phone.native.unlockWithTap.launch(
      foreground = true,
      notification = /* Platform-specific notification object */,
    )
  } catch (e: SeamError) {
    // Unrecoverable errors, such as missing permissions
  }
} else {
  // Check the error list.
}

fun handleEvent(
  event: SeamEvent
) {
  // Check whether the phone state has changed.
  // Note that these events are located under the phone namespace.
  if (event is SeamEvent.Phone) {
    unlockWithTap = seam.phone.native.unlockWithTap.get()
    if (unlockWithTap.isRunning) {
      if (!unlockWithTap.isScanning) {
        // Set the UI state to indicate that the phone is not scanning.
        // Check the error map because scanning is expected but is not occurring.
        seam.phone.get().nativeMetadata.errors
          // For example:
          // SeamError.Phone.Native.BluetoothConnectionRequired: No Bluetooth.
          // SeamError.Phone.Native.NoCredential: No credentials.
      } else {
        // Set the UI state to indicate that the phone is scanning.
      }
    }
  }
}
```


{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work in Progress
{% endtab %}
{% endtabs %}

Some providers require that the user explicitly initiate the scanning process, usually through a button. For that, your application will want to show an "Unlock" button (or a similar mechanism) that will launch the process.

{% tabs %}
{% tab title="Android Kotlin" %}
Display an **Unlock** button (or a similar mechanism) to the user and link this button to an `UNLOCK_NEAREST` command.

In this example, we apply an on-click listener to a button named `unlockNearestButton` to call `UNLOCK_NEAREST` when the user clicks this button:

```kotlin
unlockNearestButton?.setOnClickListener {
  runBlocking {
    val res = seamDeviceController?.issueCommand(SeamDeviceCommand.UNLOCK_NEAREST)

    if (res?.isSuccess == true) {
      //Display unlock success message to user.
    } else {
      // Display unlock failure message to user.
    }
  }
}
```
{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}

***

## 4. Handle Unlock Status Updates

Use an event handler to handle unlock-related status updates. Use these events to initiate changes to the user interface.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun handleEvent(
  event: SeamEvent
) =
  when (event) {
    is SeamEvent.Phone.Native.ReaderConnected -> {
      // Set the UI state to indicate that the phone is connected to the reader.
    }

    is SeamEvent.Phone.Native.ReaderGrantedAccess -> {
      // Set the UI state to indicate that the phone has unlocked the reader.
    }

    is SeamEvent.Internal.Phone.Native.ReaderConnectionFailed -> {
      // Set the UI state to indicate that the phone failed to unlock the reader.
    }

    // ...
  }
```
{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}

***

## 5. Stop the "Unlock With Tap" Process

`unlockWithTap` continues attempting to scan, until you stop this function explicitly. For example, you may want to disable scanning if the user changes the focus on their phone to a different app.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
seam.phone.native.unlockWithTap.stop()
```
{% endtab %}

{% tab title="iOS Swift" %}
:construction: Work In Progress!
{% endtab %}
{% endtabs %}
