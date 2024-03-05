# Android SDK \[WIP]

Integrate Seam’s mobile access SDK into your Android app with the `Phone` class.

## 1. Set up Seam

First you need a Seam workspace. [Register now](https://console.seam.co).

### Server-side

This integration requires endpoints on your server that talk to the Stripe API. Use the official libraries for access to the Stripe API from your server:

{% tabs %}
{% tab title="Javascript" %}
{% code title="Command Line" overflow="wrap" %}
```javascript
// Install with npm
npm i seam --save
```
{% endcode %}
{% endtab %}

{% tab title="Ruby" %}
{% code title="Command Line" %}
```ruby
# Available as a gem
sudo gem install seamapi
```
{% endcode %}

<pre class="language-ruby" data-title="Gemfile" data-overflow="wrap"><code class="lang-ruby"><strong># If you use a bundler, you can add this line to your Gemfile
</strong><strong>gem 'seamapi'
</strong></code></pre>
{% endtab %}

{% tab title="Go" %}

{% endtab %}
{% endtabs %}

### Client-side

The Stripe Android SDK is fully documented.

To install the SDK, add `seam` to the `dependencies` block of your [`app/build.gradle`](https://developer.android.com/studio/build/dependencies) file:

<pre class="language-kotlin" data-title="build.gradle.kts" data-overflow="wrap"><code class="lang-kotlin">plugins {
    id("com.android.application")
}

android { ... }
<strong>
</strong><strong>dependencies {
</strong>    // ...

    // Add the Seam Android SDK
    implementation("com.seam{insert rest}")
}
</code></pre>

***

## 2. Connect Access Control Systems and Credential Managers

View your&#x20;

Make sure you've completed the steps laid out below to set up to your workspace:

*   **Connect your ACS account to Seam using a** [**Connect Webview**](../../../core-concepts/connect-webviews/)

    This step requires the login details for your ACS account. For more information, see the guide for your specific ACS brand.
* **Connect your credential manager account to Seam using a Connect Webview**\
  This step requires the login details for your credential manager account. For more information, see the corresponding guide for your credential manager type.
* **Configure any Workspace settings required**\
  Some integrations require certain workspace-wide settings to be configured. For more information, see the guide for your specific ACS brand.

***

## 3. Add a User Identity

### Server-side Create User Identity and Generate a Client Session Token

```python
user_identity = seam.user_identities.create(
    email="jane@example.com"
)

seam.enrollment_automations.launch(
    credential_manager_acs_system_id=credential_manager.acs_system_id,
    user_identity_id=user_identity.user_identity_id
)

client_session = client_session.create(
    user_identity_ids=[user_identity.user_identity_id]
)

# Use this token to launch your mobile controller
token = client_session.token
```

### Use the Client Session Token to launch the Mobile Controller

Using the Client Session Token and the providers, launch the Mobile Controller.

```kotlin
import co.seam.sdk.SeamClient

// API call to retrieve token
val userAccount = requestUserAccountInformationFromYourAPI()

val seam = SeamClient(
    clientSessionToken = userAccount.seamClientSessionToken,
    androidContext = activity,
    
    seamEventHandler = { event ->
      is  -> {
      }
    }
)

// Initial phone set up action; should be initialize
seam.phone.native.initialize(
    errorIfMissingRequiredAndroidPermissions = false
)

// SHOW A LOADING SCREEN!

```

Document the `connect` function, and its parameters.

If you don't want to support NFC, you can configure that here.

See the Event section Handling in the bottom&#x20;

### Event Handler for knowing when to show Home Page

Initialization requires time; you must wait for the `SeamIsSetUp` event before indicating that the mobile credentials are loaded and we are ready to start BLE scanning.

```java
class MyEventHandler implements ISeamEventHandler {
  onEvent(event: SeamEvent) = when(event) {
    
    SeamEvent.Phone.Native.InitializationSucceeded -> {
      // Show your Credentials screen!
    }
    
    // initialization will keep re-trying on failure
    SeamEvent.Phone.Native.InitializationFailed -> {
      when (seam.phone.get().errors) {
              
      }
      
      // Could be many things!
    }
    // OTHER ERRORS
  }
}
```

### Show Errors from the Event Handler

#### Check Errors to there are errors during the phone set up process

Handle errors like:

* Endpoint is not set up, please connect to the internet.
* SDK version wrong
* Device model incorrect

<pre class="language-kotlin"><code class="lang-kotlin"><strong>if (seam.phone.get().nativeMetadata.errors.isNotEmpty()) {
</strong><strong>    // go through and     
</strong><strong>}
</strong></code></pre>

\[Show an Internet Connection required error if no endpoints are configured]

### Launch Background Service(?)



```
seam.phone.native.launchPolling()?
```

***

## 4. System Requirements

How to configure your application to ask for these permissions.

#### How do you show the BLE and Location Permissions require errors

```kotlin
class MyEventHandler implements ISeamEventHandler {
    handle(event: SeamEvent) = when(event) {
        is SeamEvent.Phone.Native.Error -> {
            when (seam.phone.get().nativeMetadata.errors) {
                is PhoneNativeError.MissingRequiredAndroidPermissions -> {
                     // show UI, etc...   
                }
            }
        }
    }
}
```

### `errorIfMissingRequiredAndroidPermissions = true`

***

## Showing and Using Credentials

### Retrieve Mobile Credentials

```kotlin
// get explicitly
if (seam.phone.get().nativeMetadata.isInitialized) {
  val credentials = seam.phone.native.credentials.list()
}

// get via event
class MyEventHandler implements ISeamEventHandler {
    handle(event: SeamEvent) = when(event) {
        is SeamEvent.Phone.Native.Credentials.Refreshed -> {
            val credentials = seam.phone.native.credentials.list()
            
            // show credentials in UI ...
        }
    }
}
```

### Unlocking by Tapping with Any Credential

```kotlin
// will keep trying to re-launch
seam.phone.native.unlockWithTap.launch(
  foreground = true,
  notification = /* ... */,
).getOrThrow()

// user needs to explicitly stop unlock with tapping on app unfocus (abloy checklist)

class MyEventHandler implements ISeamEventHandler {
    onEvent(event: SeamEvent) = when(event) {
      is SeamEvent.Phone.Native.UnlockWithTap.Started -> {
      
      }
      
      is SeamEvent.Phone.Native.UnlockWithTap.Stopped -> {
      }
    
      is SeamEvent.Phone.ReaderConnected -> {
        // set UI state to indicate that phone is connected to reader
      }
  
      is SeamEvent.Phone.ReaderGrantedAccess -> {
        // set UI state to indicate that phone has unlocked reader
      }

      is SeamEvent.Internal.Phone.ReaderConnectionFailed -> {
        // set UI state to indicate that phone failed to unlock reader
      }
    }
}
```

####

#### Handling Unlock Errors

***

## Event and Error handling

Show a list of all possible events and errors

```
// Some code
```

***

## Show Debug Logs

```
// Some code
```

