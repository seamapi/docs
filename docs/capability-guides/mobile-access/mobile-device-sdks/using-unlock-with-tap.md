---
description: >-
  This feature enables your app to perform unlock operations using mobile credentials.
---

# Unlocking

Unlocking with SeamSDK uses proximity to communicate credentials to door readers. When a user initiates an unlock, the SDK performs scanning, error handling, and unlock events via `SeamSDKManager.shared.unlock(using:)`.

Using this process involves the following steps:

1. Retrieve available mobile credentials.  
2. Monitor for permission or credential errors unhandled errors will be thrown as `credentialErrors([SeamSDKCredentialError])`  
3. Perform the unlock operation.  
4. Handle unlock status events.  
5. Cancel the unlock operation when needed.

***

## 1. Retrieve Mobile Credentials

Access the current credentials via the published `credentials` array on `SeamSDKManager.shared`:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
// Access credentials
let credentials = SeamSDKManager.shared.credentials

// Observe updates with Combine
let credentialsSubscription = SeamSDKManager.shared.$credentials
    .sink { creds in
        // Update UI with new credentials array
    }
```
{% endtab %}
{% endtabs %}

## 2. Monitor Credential Errors

Permission or setup issues appear in each credential’s `errors` property. Observe like this:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
let errorSubscription = SeamSDKManager.shared.$credentials
    .flatMap { creds in creds.publisher }
    .map { $0.errors }
    .sink { errors in
        // Handle errors, e.g. `.userInteractionRequired`, `.expired`, etc.
    }
```
{% endtab %}
{% endtabs %}

> **Note:** The `.errors` array on credentials represents per-credential issues though some issues may be repeated across several credentials (e.g. bluetooth requirements). SDK- or credential-level errors (such as invalid token or expired credential) are thrown directly by methods like `unlock(using:)` as `SeamSDKV2Error` or `SeamSDKCredentialError` and must be handled via `do/catch`.

## 3. Perform Unlock Operation

The call to `SeamSDKManager.shared.unlock(using:)` may throw:
- `SeamSDKV2Error`: for SDK-level issues (e.g., invalid token, uninitialized SDK).
- `SeamSDKCredentialError`: for credential-specific issues (e.g., expired credential, device not eligible).
Ensure you wrap the call in `do/catch` to handle these errors.

Use Async/Await or Combine to initiate an unlock with a selected credential:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
let credentialID = credentials.first!.id

// Async/Await example
Task {
    do {
        for try await event in SeamSDKManager.shared.unlock(using: credentialID) {
            switch event {
            case .grantedAccess:
                // The lock granted access—show a success indicator.
            default:
                // Access wasn't granted, inform the user and offer retry.
            }
        }
    } catch {
        // Handle unlock error, e.g., invalid credential or SDK error
        print("Unlock error: \(error)")
    }
}

// Combine example
do {
    let unlockPublisher = try SeamSDKManager.shared.unlock(using: credentialID)
    let unlockSubscription = unlockPublisher.sink(
        receiveCompletion: { completion in
            if case .failure(let error) = completion {
                // Show unlock error UI, e.g., "Unlock failed: \(error)"
            }
        },
        receiveValue: { event in
            switch event {
            case .grantedAccess:
                // The lock granted access—show a success indicator.
            default:
                // Access wasn't granted, inform the user and offer retry.
            }
        }
    )
    // Retain `unlockSubscription` as needed
} catch {
    // Handle unlock initialization error
    print("Unlock initialization error: \(error)")
}
```
{% endtab %}
{% endtabs %}

## 4. Handle Unlock Events

Handle each `SeamUnlockEvent` to update your UI and logic. Available events:

- **launched**  
  Unlock operation has started.
- **connected**  
  Connection to the lock hardware was successful.
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
        for try await event in SeamSDKManager.shared.unlock(using: credentialID) {
            switch event {
            case .launched:
                // Show scanning indicator
            case .connected:
                // Show connected indicator
            case .grantedAccess:
                // Show access granted
            case .timedOut:
                // Show timeout and offer retry
            case .connectionFailed(let debugDescription):
                // Show error with debugDescription
            }
        }
    } catch {
        // Handle thrown errors
    }
}
```

Combine example:

```swift
do {
    let unlockPublisher = try SeamSDKManager.shared.unlock(using: credentialID)
    let unlockSubscription = unlockPublisher
        .receive(on: RunLoop.main)
        .sink(
            receiveCompletion: { completion in
                if case .failure(let error) = completion {
                    // Show unlock error UI, e.g., "Unlock failed: \(error)"
                }
            },
            receiveValue: { event in
                switch event {
                case .grantedAccess:
                    // Show success indicator.
                case .retry:
                    // Retry scanning or credential presentation.
                case .deniedAccess:
                    // Access denied—inform the user.
                case .timedOut:
                    // Operation timed out—offer retry.
                case .connectionFailed(let debugDescription):
                    // Show debugDescription details.
                }
            }
        )
    // Retain `unlockSubscription` as a property and cancel when appropriate (e.g., in deinit or viewWillDisappear).
} catch {
    // Handle unlock initialization error
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

// For Async/Await, cancel the Task as needed
```
{% endtab %}
{% endtabs %}
