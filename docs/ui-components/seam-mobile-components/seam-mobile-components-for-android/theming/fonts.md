---
description: Set typography roles with Material 3 Typography.
---

### Custom Typography Integration

You can integrate custom typography with Material 3's typography system:

{% code title="MainActivity.kt" %}
```kotlin
@Composable
fun MyApp() {
    val customTypography = Typography(
        headlineLarge = TextStyle(
            fontFamily = FontFamily.Serif,
            fontWeight = FontWeight.Bold,
            fontSize = 32.sp
        ),
        bodyLarge = TextStyle(
            fontFamily = FontFamily.SansSerif,
            fontWeight = FontWeight.Normal,
            fontSize = 16.sp
        ),
        labelMedium = TextStyle(
            fontFamily = FontFamily.Monospace,
            fontWeight = FontWeight.Medium,
            fontSize = 12.sp,
            letterSpacing = 0.5.sp
        )
    )

    // Set the custom typography
    SeamComponentsTheme(
        typography = customTypography,
        colorScheme = colorScheme
    ) {
        SeamAccessView(
            clientSessionToken = "your-token"
        )
    }
}
```
{% endcode %}