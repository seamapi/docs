---
description: >-
  This feature enables your app to scan for nearby door readers and unlock
  authorized doors.
---

# Using Unlock With Tap

Unlock With Tap in mobile apps functions similarly to using a traditional proximity card. The app launches an unlock scanning process. When the user holds their phone close to the lock that they want to open, the phone communicates wirelessly with the lock and transmits an access credential. Once the lock verifies this credential and confirms that access is granted, it unlocks.

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
```swift
// Retrieve mobile credentials explicitly.
if (seam.phone.get().nativeMetadata.isInitialized) { // Coming soon!
  let credentials = seam.phone.native.credentials.list()
}

// Retrieve mobile credentials as soon as when they're refreshed.
func handleEvent(event: SeamEvent) {
    switch (event) {
    case .phone(.native(.credentials(.refreshed))):
        let credentials = seam.phone.native.credentials.list()
        // show credentials in the ui
        
    }
}
```
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
```swift
let requiredPermissions = seam.phone.native.listRequiredIosPermissions( // Coming soon!
  enableUnlockWithTap: true
)

if (!requiredPermissions.isEmpty) {
  // ...
}
```
{% endtab %}
{% endtabs %}

Check the error list—for example, in an event handler—to identify any current obstructions.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun handleEvent(
  event: SeamEvent
) {
  // Check if there's a change in the phone state, under the phone namespace.
  if (event is SeamEvent.Phone) {
    val phone = seam.phone.get().nativeMetadata

    if (
      // Check if unlocking with tap is not possible.
      !phone.canUnlockWithTap
    ) {
      // Gather the missing permissions required for unlocking with tap.
      if (phone.errors.any {
        it is SeamError.Phone.Native.MissingRequiredAndroidPermissions
      }) {
        val requiredPermissions = seam.phone.native.listRequiredAndroidPermissions(
          enableUnlockWithTap = true
        )

        // Here, implement logic to request these permissions from the user.
      }
    }
  }
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
fun handleEvent(event: SeamEvent) {
  // Check for changes in the phone state under the phone namespace.
  switch (event) {
  case .phone:
    let phone = seam.phone.get().nativeMetadata // Coming soon!
    
    // Verify if the phone cannot unlock with tap.
    if(!phone.canUnlockWithTap) {
    
      // Gather the missing permissions required for unlocking with tap.
      if phone.errors.contains(where: {
        $0 == .phone(.native(.missingRequiredIosPermissions))
      }) {
        let requiredPermissions = seam.phone.native
          .listRequiredIosPermissions(enableUnlockWithTap: true)
        
        // Here, implement logic to request these permissions from the user.
      }
    }
    break
  }
}
```
{% endtab %}
{% endtabs %}

***

## 3. Launch the "Unlock With Tap" Process

Once the required permissions are enabled, the app can launch the "Unlock With Tap" Process.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
// Launch the "Unlock With Tap" Process.
if (seam.phone.get().can_unlock_with_tap) {
  try {
    seam.phone.native.unlockWithTap.launch(
      foreground = true,
      notification = /* Platform-specific notification object */,
    )
  } catch (e: SeamError) {
    // Handle unrecoverable errors, such as missing permissions.
  }
} else {
  // Process the error list if unlocking with a tap isn't available.
}

fun handleEvent(event: SeamEvent) {
  // Check for changes in the phone state, under the phone namespace.
  if (event is SeamEvent.Phone) {
    unlockWithTap = seam.phone.native.unlockWithTap.get() // Coming soon!

    if (unlockWithTap.isRunning) {
      if (!unlockWithTap.isScanning) {
        // Set the UI state to indicate that the phone is not scanning.
        // Check the error map because scanning is expected but is not occurring.
        seam.phone.get().nativeMetadata.errors
          // Potential errors:
          // - BluetoothConnectionRequired: Indicates Bluetooth is off.
          // - NoCredential: Indicates missing credentials.
      } else {
        // Update UI to show that the phone is actively scanning.
      }
    }
  }
}
```


{% endtab %}

{% tab title="iOS Swift" %}
```swift
// Launch the "Unlock With Tap" Process.
if (seam.phone.get().can_unlock_with_tap) {
  do {
    try seam.phone.native.unlockWithTap.launch(foreground: true)
  } catch {
    // Handle unrecoverable errors, such as missing permissions.
  }
} else {
  // Process the error list if unlocking with a tap isn't available.
}

func handleEvent(event: SeamEvent) {
  // Check for changes in the phone state, under the phone namespace.
  switch(event) {
  case .phone: 
    let unlockWithTap = seam.phone.native.unlockWithTap.get() // Coming soon!
    if unlockWithTap.isRunning {
      if !unlockWithTap.isScanning {
        // Set the UI state to indicate that the phone is not scanning.
        // Check the error map because scanning is expected but is not occurring.
        let errors = seam.phone.get().nativeMetadata.errors // Coming soon!
        // Errors to look out for could include:
        // - BluetoothConnectionRequired: Bluetooth is turned off.
        // - NoCredential: Missing credentials for operation.
      } else {
        // Update UI to show that the phone is actively scanning.
      }
    }
  }
}
```
{% endtab %}
{% endtabs %}

***

## 4. Handle Unlock Status Updates

Use an event handler to handle unlock-related status updates. Use these events to initiate changes to the user interface.

{% hint style="info" %}
The `ReaderCommunicationSuccess`/`readerCommunicationSuccess` event indicates that the phone has communicated successfully with the door reader. That is, depending on the events that the underlying ACS API returns, the Seam mobile SDK may not be able to determine whether the door reader granted access. For some ACSs, the Seam API can only determine whether the communication with the reader succeeded. Other underlying ACS APIs may return events that indicate whether the door reader unlocked successfully.
{% endhint %}

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

    is SeamEvent.Phone.Native.ReaderCommunicationSuccess -> {
      // Set the UI state to indicate that the communication with the
      // reader or lock was successful.
      // This indicates either the lock has been successfully unlocked
      // or the key has been sent to the reader.
    }

    is SeamEvent.Internal.Phone.Native.ReaderConnectionFailed -> {
      // Set the UI state to indicate that the phone failed to unlock the reader.
    }

    // ...
  }
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
func handleEvent(
  event: SeamEvent
) {
  switch(event) {
  case .phone(.native(.readerConnected)):
    // Set the UI state to indicate that the phone is connected to the reader.
    break
  case .phone(.native(.readerCommunicationSuccess)):
    // Set the UI state to indicate that the communication with the
    // reader or lock was successful.
    // This indicates either the lock has been successfully unlocked
    // or the key has been sent to the reader.
    break
  case .internal(.phone(.native(.readerConnectionFailed))):
    // Set the UI state to indicate that the phone failed to unlock the reader.
    break
  }
}
```
{% endtab %}
{% endtabs %}

***

## 5. Stop the "Unlock With Tap" Process

`unlockWithTap` continues attempting to scan, until you explicitly stop this function. For example, you may want to disable scanning if the user changes the focus on their phone to a different app. Or after an unlock has been completed successfully.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
seam.phone.native.unlockWithTap.stop()
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
Task {
    let response = await seam.phone.native.unlockWithTapping.stop()
    switch(response) {
    case .success():
      //Display unlock stop success message to user.
      break
    case .failure(error):
      // Display unlock stop failure message to user
    }
} 
```
{% endtab %}
{% endtabs %}
