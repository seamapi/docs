---
description: >-
  Learn the requirements and restrictions for developing Android apps that
  integrate with the Salto KS ACS.
---

# Special Requirements for Android Mobile Access SDK Development

## Add Required Dependencies

To develop an Android mobile app that integrates with the Salto KS ACS, you must add a set of required dependencies, as follows:

1. Copy the Seam Android SDK `.aar` file (for example, `seam-phone-sdk-android-release.aar`) into the `libs` directory for your project.
2. Add the following lines to the [`app/build.gradle`](https://developer.android.com/studio/build/dependencies) file for your app:

{% code title="build.gradle.kts" %}
```gradle
gradle
repositories {
    flatDir {
        dirs 'libs'
    }
    mavenCentral()
}
dependencies {
    implementation(files('libs/seam-phone-sdk-android-release.aar'))

    // Required dependencies
    implementation("androidx.core:core-ktx:1.9.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
    implementation("io.ktor:ktor-client-core:2.3.5")
    implementation("io.ktor:ktor-client-cio:2.3.5")
    implementation("io.ktor:ktor-client-cio-jvm:2.3.5")
    implementation("org.bouncycastle:bcprov-jdk15on:1.69")
    implementation("com.google.code.gson:gson:2.8.5")
    implementation("org.slf4j:slf4j-api:1.7.25")
}
```
{% endcode %}
