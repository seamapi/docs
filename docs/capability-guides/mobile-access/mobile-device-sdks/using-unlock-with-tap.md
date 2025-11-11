---
description: >-
  This feature enables your app to perform unlock operations using mobile
  credentials.
---

# Using Unlock With Tap

Unlocking with SeamSDK uses proximity to communicate credentials to door readers. When a user initiates an unlock, the SDK performs scanning, error handling, and unlock events using `Seam.shared.unlock(using:)`.

Using this process involves the following steps:

1. Retrieve available mobile credentials.
2. Monitor for permission or credential errors. Unhandled errors are thrown as `credentialErrors([SeamCredentialError])`.
3. Perform the unlock operation.
4. Handle unlock status events.
5. Cancel the unlock operation if needed.

***

## 1. Retrieve Mobile Credentials

Access the current credentials through the published `credentials` array on `Seam.shared`:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
import SeamSDK
import Combine

// Access credentials
let credentials = Seam.shared.credentials

// Observe updates with Combine
let credentialsSubscription = Seam.shared.$credentials
    .sink { creds in
        // Update UI with new credentials array.
    }
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
import co.seam.core.api.SeamCredential
import co.seam.core.api.SeamSDK

// Collect credentials
SeamSDK.getInstance().credentials.collect { credentials ->
    // Update UI with new credentials array.
}
```
{% endtab %}
{% endtabs %}

## 2. Monitor Credential Errors

Permission or setup issues appear in each credential’s `errors` property. Observe like this:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
import SeamSDK
import Combine

let errorSubscription = Seam.shared.$credentials
    .flatMap { creds in creds.publisher }
    .map { $0.errors }
    .sink { errors in
        // Handle errors, for example, `.userInteractionRequired`, `.expired`, etc.
    }
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
import co.seam.core.api.SeamCredential
import co.seam.core.api.SeamSDK
import co.seam.core.sdkerrors.SeamCredentialError
import co.seam.core.sdkerrors.SeamError
import co.seam.core.sdkerrors.SeamRequiredUserInteraction

SeamSDK.getInstance().credentials.collect { credentialsList ->
    val errors = credentialsList.flatMap { it.errors }
    errors.forEach { error ->
        when (error) {
            is SeamCredentialError.Expired -> { /* handle credential expiration error */}
            is SeamCredentialError.Loading -> { /* handle not loaded yet */ }
            is SeamCredentialError.Unknown -> { /* handle unknown error */}
            is SeamCredentialError.UserInteractionRequired -> {
                handleUserInteractionRequired(error.interaction)
            }
        }
    }
}

fun handleUserInteractionRequired(interaction: SeamRequiredUserInteraction) {
    when (interaction) {
        is SeamRequiredUserInteraction.CompleteOtpAuthorization -> { /* handle OTP authorization */ }
        is SeamRequiredUserInteraction.EnableBluetooth -> { /* handle Bluetooth error */ }
        is SeamRequiredUserInteraction.EnableInternet -> { /* handle Internet connection error*/ }
        is SeamRequiredUserInteraction.GrantPermissions -> { /* handle permissions error*/ }
    }
}
```
{% endtab %}
{% endtabs %}

> **Note:** The `.errors` array on credentials represents per-credential issues, though some issues may be repeated across several credentials (for example, bluetooth requirements). SDK- or credential-level errors (such as invalid token or expired credential) are thrown directly by methods like `unlock(using:)` because `SeamError` or `SeamCredentialError` and must be handled through `do/catch`.

## 3. Perform Unlock Operation

The call to `Seam.shared.unlock(using:)` may throw:

* `SeamError`: For SDK-level issues (for example, invalid token, uninitialized SDK).
* `SeamCredentialError`: For credential-specific issues (for example, expired credential, device not eligible). Ensure that you wrap the call in `do/catch` blocks to handle these errors.

Use Async/Await or Combine to initiate an unlock with a selected credential:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
import SeamSDK
import Combine

let credentialId = credentials.first!.id

// Async/Await example
Task {
    do {
        for try await event in try Seam.shared.unlock(using: credentialId).values {
            switch event {
            case .grantedAccess:
                // The lock granted access. Show a success indicator.
            default:
                print("Unlock event: \(event)")
                // Access wasn't granted. Inform the user and offer retry.
            }
        }
    } catch {
        // Handle unlock error, for example, invalid credential or SDK error
        print("Unlock error: \(error)")
    }
}

// Combine example
do {
    let unlockPublisher = try Seam.shared.unlock(using: credentialId)
    let unlockSubscription = unlockPublisher.sink(
        receiveCompletion: { _ in
            // Unlock completed.
        },
        receiveValue: { event in
            switch event {
            case .grantedAccess:
                // The lock granted access—show a success indicator.
            default:
                // Access wasn't granted, inform the user and offer retry.
                print("Unlock event: \(event)")
            }
        }
    )
    // Retain `unlockSubscription`; discarding it will cancel the unlock attempt.
} catch {
    // Handle unlock initialization error.
    print("Unlock error: \(error)")
}
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
import co.seam.core.api.SeamCredential
import co.seam.core.api.SeamSDK
import co.seam.core.events.SeamUnlockEvent
import co.seam.core.sdkerrors.SeamCredentialError
import co.seam.core.sdkerrors.SeamError
import co.seam.core.sdkerrors.SeamRequiredUserInteraction

val seamSDK = SeamSDK.getInstance()

// Perform unlock
try {
    val credentialId = credential.id
    // Timeout is optional
    seamSDK.unlock(
        credentialId = credentialId,
        timeout = 30.seconds
    )
} catch (seamError: SeamError) {
    when (seamError) {
        is SeamError.ActivationRequired -> {
            // handle error when SDK is not activated
        }
        is SeamError.CredentialErrors -> {
            val credentialErrors = seamError.errors
            handleCredentialErrors(credentialErrors)
            // handle error when there are credential errors
        }
        is SeamError.InitializationRequired -> {
            // handle error when SDK is not initialized
        }
        is SeamError.IntegrationNotFound -> {
            // handle error when integration is not found, Such as Assa Abloy, Latch and Salto
        }
        is SeamError.InternetConnectionRequired -> {
            // handle error when internet connection is required
        }
        is SeamError.InvalidClientSessionToken -> {
            // handle error when client session token is invalid
        }
        else -> {
            // handle other errors
        }
    }
}

// Handle credential errors on unlock
fun handleCredentialErrors(credentialErrors: List<SeamCredentialError>) {
    credentialErrors.forEach { credentialError ->
        when (credentialError) {
            is SeamCredentialError.Invalid -> {
                // handle error when credential is invalid
            }

            is SeamCredentialError.Expired -> {
                // handle error when credential is expired
            }

            is SeamCredentialError.Loading -> {
                // handle error when credential is not loaded yet
            }

            is SeamCredentialError.UserInteractionRequired -> {
                // handle user interaction required credential error
            }

            is SeamCredentialError.Unknown -> {
                // handle unknown credential error
            }
        }
    }
}

```
{% endtab %}
{% endtabs %}

## 4. Handle Unlock Events

Handle each `SeamUnlockEvent` to update your UI and logic. Available events:

* **launched**\
  Unlock operation has started.
* **grantedAccess**\
  Access was granted by the lock.
* **timedOut**\
  Unlock operation timed out without success.
* **connectionFailed(debugDescription:)**\
  Unlock operation failed to connect; `debugDescription` may contain additional details.

{% tabs %}
{% tab title="iOS Swift" %}
Async/Await example:

```swift
Task {
    do {
        for try await event in Seam.shared.unlock(using: credentialID) {
            switch event {
            case .launched:
                // Show scanning indicator.
            case .grantedAccess:
                // Show access granted.
            case .timedOut:
                // Show timeout and offer retry.
            case .connectionFailed(let debugDescription):
                // Show error with debugDescription.
            }
        }
    } catch {
        // Handle thrown errors.
    }
}
```

Combine example:

```swift
do {
    let unlockPublisher = try Seam.shared.unlock(using: credentialID)
    let unlockSubscription = unlockPublisher
        .receive(on: RunLoop.main)
        .sink(
            receiveCompletion: { _ in
                // unlock completed.
            },
            receiveValue: { event in
                switch event {
                case .launched:
                    // Show scanning indicator.
                case .grantedAccess:
                    // Show success indicator.
                case .timedOut:
                    // Operation timed out—offer retry.
                case .connectionFailed(let debugDescription):
                    // Show debugDescription details.
                }           
            }
        )
    // Retain `unlockSubscription` as a property and cancel when appropriate (for example, in deinit or viewWillDisappear).
} catch {
    // Handle unlock initialization error.
    print("Unlock initialization error: \(error)")
}
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
// Start collecting unlock events before unlock
coroutineScope.launch {
    seamSDK.unlockStatus.collect { event ->
        when (event) {
            is SeamUnlockEvent.ScanningStarted -> { /* handle scanning started */}
            is SeamUnlockEvent.Connecting -> { /* handle connecting */}
            is SeamUnlockEvent.AccessGranted -> { /* handle access granted */}
            is SeamUnlockEvent.Timeout -> { /* handle timeout */}
            is SeamUnlockEvent.ReaderError -> { /* handle reader error */}
            else -> { /* handle other events */}
        }
    }
}
```
{% endtab %}
{% endtabs %}

## 5. Cancel the Unlock Operation

Stop scanning by canceling your active task or subscription.

{% tabs %}
{% tab title="iOS Swift" %}
```swift
// For Combine
unlockSubscription.cancel()

// For Async/Await, cancel the Task as needed.
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
val seamSDK = SeamSDK.getInstance()
// The unlock function returns a Job
val job = seamSDK.unlock(
    credentialId = credentialId,
    timeout = 30.seconds
)

// Canceling the job stops the unlock process
job.cancel()
```
{% endtab %}
{% endtabs %}
