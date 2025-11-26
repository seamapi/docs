---
description: >-
  Learn how to set up Seam Mobile Components in your Android project using GitHub
  Packages, drop in SeamAccessView for a complete unlock flow, and
  customize the look with SeamComponentsTheme.
---

# Seam Mobile Components for Android

#### Prerequisites

*   **Compile SDK:** 35
*   **Kotlin Version:** 2.1.0 or greater
*   **Minimum Android SDK:** The required `minSdk` depends on the specific Seam integration modules you include:
    *   Base SDK (Core, API, Common, Network, Analytics): **API Level 24** (Android 7.0)
    *   Including `saltoks` or `saltospace`: **API Level 24** (Android 7.0)
    *   Including `latch`: **API Level 26** (Android 8.0)
    *   Including `assaabloy`: **API Level 28** (Android 9.0)

    Your application's `minSdk` must be set to the **highest** level required by any of the Seam modules you use.


You should already have a Seam workspace and API key set up. If you’re new to Seam, start with the [Seam Mobile SDK](https://docs.seam.co/latest/developer-tools/mobile-sdks/android-sdk).

***

### Installation

Setup your project to get the Android SDK Packages form GitHub, as described [here](https://docs.seam.co/latest/capability-guides/mobile-access/mobile-device-sdks/initializing-the-seam-mobile-sdk).

Add the Seam Components library and required SDK modules to your app's `build.gradle.kts` (or `build.gradle` for Groovy):

**Kotlin DSL (`build.gradle.kts`):**
```kotlin
dependencies {
    val seamVersion = "3.1.1" // Check for latest version

    // Required: Seam Components UI library
    implementation("co.seam:seam-phone-sdk-android-seamcomponents:$seamVersion")

    // Required: Core SDK functionality
    implementation("co.seam:seam-phone-sdk-android-core:$seamVersion")

    // Optional: Add integration modules as needed based on your lock providers
    implementation("co.seam:seam-phone-sdk-android-assaabloy:$seamVersion")  // minSdk 28
    implementation("co.seam:seam-phone-sdk-android-latch:$seamVersion")      // minSdk 26
    implementation("co.seam:seam-phone-sdk-android-saltoks:$seamVersion")    // minSdk 24
    implementation("co.seam:seam-phone-sdk-android-saltospace:$seamVersion") // minSdk 24
}
```

**Groovy (`build.gradle`):**
```groovy
dependencies {
    def seamVersion = "3.1.1" // Check for latest version

    // Required: Seam Components UI library
    implementation "co.seam:seam-phone-sdk-android-seamcomponents:$seamVersion"

    // Required: Core SDK functionality
    implementation "co.seam:seam-phone-sdk-android-core:$seamVersion"

    // Optional: Add integration modules as needed
    implementation "co.seam:seam-phone-sdk-android-assaabloy:$seamVersion"  // minSdk 28
    implementation "co.seam:seam-phone-sdk-android-latch:$seamVersion"      // minSdk 26
    implementation "co.seam:seam-phone-sdk-android-saltoks:$seamVersion"    // minSdk 24
    implementation "co.seam:seam-phone-sdk-android-saltospace:$seamVersion" // minSdk 24
}
```

### Quick Start: `SeamAccessView`

### Quick Start - Complete Integration

#### SeamAccessView - Your Complete Solution

`SeamAccessView` is the main entry point composable for the Seam access management interface. This powerful component manages the entire user flow for accessing and managing credentials through the Seam SDK, making it the perfect choice for most applications.

**What SeamAccessView handles for you:**
- **SDK Initialization**: Automatically initializes the Seam SDK with your session token
- **Navigation Management**: Handles screen transitions and navigation state
- **UI State Management**: Manages loading, error handling, and different application states
- **OTP Authorization**: Automatically handles OTP verification flows when required
- **Bluetooth Permissions**: Guides users through Bluetooth setup when needed for credential operations

**Screen Orchestration:**
SeamAccessView automatically navigates between these screens based on application state:
- **Credentials List Screen**: For viewing available keys with pull-to-refresh functionality
- **OTP Authorization Screen**: For completing authentication flows in a WebView
- **Bluetooth Redirect Screen**: For handling Bluetooth permission and setup
- **Unlock Overlay**: For interacting with individual credentials through a modal interface

#### Basic Usage

For most use cases, you can use `SeamAccessView` as a complete solution:

```kotlin
@Composable
fun MyApp() {
    MyAppTheme {
        SeamAccessView(
            clientSessionToken = "your-session-token-here"
        )
    }
}
```

#### With Custom Navigation

If you need more control over navigation or want to integrate with your existing navigation setup:

```kotlin
@Composable
fun MyApp() {
    val navController = rememberNavController()

    MyAppTheme {
        SeamAccessView(
            clientSessionToken = "your-session-token-here",
            context = LocalContext.current,
            navController = navController
        )
    }
}
```

**Parameters:**
- `clientSessionToken`: Required session token for SDK authentication and initialization
- `context`: Android context (defaults to current composition's local context)
- `navController`: Navigation controller for screen transitions (defaults to a new instance)

### Initialization & Authentication

#### Client Session Token (CST) Management

Client Session Tokens authenticate your mobile app with Seam's backend. These tokens should be generated by your backend server using Seam's API.

#### Obtaining a CST
Ask Seam about how to obtain a CST.
For more details see [Seam's Client Session Token documentation](https://docs.seam.co/latest/core-concepts/authentication/client-session-tokens).


#### SDK Initialization

When using individual components instead of `SeamAccessView`, you must manually initialize the Seam SDK:

```kotlin
@Composable
fun MyCredentialsScreen(clientSessionToken: String) {
    val context = LocalContext.current

    LaunchedEffect(clientSessionToken) {
        try {
            // Initialize the SDK. This part is usually done in a ViewModel
            SeamSDK.initialize(
                context = context,
                clientSessionToken = clientSessionToken
            )

            // Activate the SDK after initialization
            SeamSDK.getInstance().activate()
        } catch (error: SeamError) {
            // handle error
        }
    }

    SeamCredentialsView(
        onNavigateToUnlock = { /* Handle navigation */ }
    )
}
```

### Screen Components

When you need more granular control than `SeamAccessView` provides, you can use individual screen components to build custom flows while still benefiting from Seam's pre-built UI.

#### SeamCredentialsView

**What it does:** A composable screen that displays cards for user credentials (keys) with comprehensive state management and user interaction support.

**Key Features:**
- **State Management**: Automatically handles loading, success with data, and empty states
- **Pull-to-Refresh**: Built-in refresh functionality for updating credential data
- **Error Handling**: Displays appropriate user feedback for error states
- **Navigation Integration**: Provides callback for seamless navigation to unlock interfaces
- **Internet Status**: Shows connection status and handles offline scenarios

**When to use:** When you want a complete credentials listing screen but need to customize the navigation or integrate with your own view models and navigation system.

```kotlin
@Composable
fun CredentialsScreen() {
    // viewModel is optional
    val viewModel: KeysViewModel = viewModel()

    // Remember to initialize the SDK before using the view. See previous section for details.
    SeamCredentialsView(
        viewModel = viewModel,
        onNavigateToUnlock = { keyCard ->
            // Navigate to unlock screen
            println("Unlocking key: ${keyCard.name}")
        }
    )
}
```

#### SeamUnlockCardView

**What it does:** A modal bottom sheet composable that provides a complete user interface for unlocking credentials with phase-based state management.

**Key Features:**
- **Modal Presentation**: Displays as an overlay bottom sheet that doesn't disrupt the main UI
- **Unlock Phases**: Manages different states (idle, scanning, success, failed) with appropriate UI feedback
- **Theme Integration**: Supports customization through SeamUnlockCardStyle theming
- **Automatic State Reset**: Handles cleanup when dismissed or navigation occurs
- **Error Recovery**: Built-in error states with retry functionality

**When to use:** When you want to provide unlock functionality in a modal format, either triggered from your custom credential list or integrated into your own navigation flow.

```kotlin
@Composable
fun UnlockModal(keyCard: KeyCard) {

    val viewModel: KeysViewModel = viewModel()

    var showUnlock by remember { mutableStateOf(false) }
    var selectedKeyCard by remember { mutableStateOf<KeyCard?>(null) }

    // Remember to initialize the SDK before using the view. See previous section for details.
    SeamCredentialsView(
        viewModel = viewModel,
        onNavigateToUnlock = { keyCard ->
            // Navigate to unlock screen
            selectedKeyCard = keyCard
            showUnlock = true
        }
    )

    // The simplest way to use the unlock view is to call it on `onNavigateToUnlock`
    // callback from `SeamCredentialsView`, as it already provides the keyCard

    SeamUnlockCardView(
        keyCard = keyCard,
        onNavigateBack = { showUnlock = false }
    )
}
```

#### SeamOtpView

**What it does:** A full-screen dialog composable that displays an OTP (One-Time Password) verification interface using a WebView for interactive authentication flows.

**Key Features:**
- **Full-Screen Presentation**: Renders as a dialog that overlays the host app's UI completely
- **WebView Integration**: Handles OTP verification flows with JavaScript enabled for interactivity
- **Custom Navigation**: Includes a styled top bar with back navigation controls
- **URL Handling**: Loads the provided OTP URL and manages the verification process
- **Dialog Management**: Proper dismissal handling that integrates with your app's navigation

**When to use:** When your authentication flow requires OTP verification and you want a seamless, full-screen experience that doesn't disrupt your main app navigation.

```kotlin
@Composable
fun OtpScreen() {
    SeamOtpView(
        otpUrl = "https://example.com/otp-verification",
        onNavigateBack = {
            // Handle navigation back
        }
    )
}
```

#### See Also

* Explore [Seam Mobile SDK](https://docs.seam.co/latest/developer-tools/mobile-sdks/android-sdk)
