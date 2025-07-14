# Handling System Permissions

Missing or required system permissions (Bluetooth, internet connectivity, etc.) are surfaced as `CredentialError.userInteractionRequired(action)` entries on each credential’s `errors` array. Observe these errors after activation and handle the specified actions. Errors are automatically updated to reflect current requirements.

## Monitoring Permission Errors

{% tabs %}
{% tab title="iOS Swift" %}

Use Combine to watch the published credentials array and handle permission-related errors:


```swift
func startMonitoringPermissionErrors() {
    permissionCancellable = Seam.shared.$credentials
        .map { credentials in
            credentials.flatMap { credential in
                credential.errors.compactMap { error in
                    guard case .userInteractionRequired(let action) = error else { return nil }
                    return action
                }
            }
        }
        .receive(on: RunLoop.main)
        .sink { actions in
            actions.forEach { handlePermissionAction($0) }
        }
}
```
{% endtab %}
{% endtabs %}


The Seam SDK automatically clears resolved permission errors once the required permission is granted, reflecting the updated credential state.

## Handling Permission Actions

Implement your handler for each action:

{% tabs %}
{% tab title="iOS Swift" %}
```swift
func handlePermissionAction(_ action: CredentialUserAction) {
    switch action {
    case .enableInternet:
        // Prompt the user to enable network connectivity.
    case .enableBluetooth:
        // Prompt the user to turn on Bluetooth.
    case .grantBluetoothPermission:
        // Prompt the user to grant Bluetooth permission in Settings.
    }
}
```
{% endtab %}
{% endtabs %}


## See also

For a complete SwiftUI-based implementation of credential error handling for iOS, see the `SeamUnlockCardView` in the SeamComponents library, which demonstrates observing credential errors and updating the UI accordingly.
