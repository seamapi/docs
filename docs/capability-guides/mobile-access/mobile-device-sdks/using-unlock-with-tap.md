---
description: >-
  This feature enables your app to perform unlock operations using mobile credentials.
---

# Unlocking

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
{% endtabs %}

> **Note:** The `.errors` array on credentials represents per-credential issues, though some issues may be repeated across several credentials (for example, bluetooth requirements). SDK- or credential-level errors (such as invalid token or expired credential) are thrown directly by methods like `unlock(using:)` because `SeamError` or `SeamCredentialError` and must be handled through `do/catch`.

## 3. Perform Unlock Operation

The call to `Seam.shared.unlock(using:)` may throw:
- `SeamError`: For SDK-level issues (for example, invalid token, uninitialized SDK).
- `SeamCredentialError`: For credential-specific issues (for example, expired credential, device not eligible).
Ensure that you wrap the call in `do/catch` blocks to handle these errors.

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
{% endtabs %}

## 4. Handle Unlock Events

Handle each `SeamUnlockEvent` to update your UI and logic. Available events:

- **launched**  
  Unlock operation has started.
- **grantedAccess**  
  Access was granted by the lock.
- **timedOut**  
  Unlock operation timed out without success.
- **connectionFailed(debugDescription:)**  
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
{% endtabs %}

## 5. Cancel the Unlock Operation

Stop scanning by cancelling your subscription or task:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
// For Combine
unlockSubscription.cancel()

// For Async/Await, cancel the Task as needed.
```
{% endtab %}
{% endtabs %}
