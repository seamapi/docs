---
description: >-
  Control unlock card appearance, including header, key button, progress,
  instructions, and status states.
---

# UnlockCard styles

Used by `SeamUnlockCardView` and related UI (container, header, key button, progress, instructions, status colors).

```kotlin
data class SeamUnlockCardStyle(
    val cardBackground: Color? = null,
    val headerBackground: Color? = null,
    val headerTitleColor: Color? = null,
    val headerSubtitleColor: Color? = null,
    val keyIconColorIdle: Color? = null,
    val keyIconColorActive: Color? = null,
    val keyButtonGradient: List<Color>? = null,
    val keyButtonShadowRadius: Dp? = null,
    val instructionTextColor: Color? = null,
    val bulletBackground: Color? = null,
    val bulletTextColor: Color? = null,
    val successColor: Color? = null,
    val successIconColor: Color? = null,
    val errorColor: Color? = null,
)
```

#### Examples:

Check [colors](./colors.md) section to understand how to create `darkAppColors` and `lightAppColors` objects.

{% code title="MainActivity.kt" %}
```kotlin
@Composable
fun MyApp() {
    // Check if is in dark theme
    val darkTheme = isSystemInDarkTheme()
    // get AppColors for light or dark mode
    val appColors = when {
        darkTheme -> darkAppColors
        else -> lightAppColors
    }
    
    // Create the color scheme
    val colorScheme = when {
        darkTheme -> darkColorScheme(
            primary = appColors.accentColor,
            onPrimary = appColors.textInvert,
            onSurface = appColors.textColor,
            background = appColors.background,
            secondary = appColors.background,
            onSecondary = appColors.textColor,
        )
        else -> lightColorScheme(
            primary = appColors.accentColor,
            onPrimary = appColors.textInvert,
            onSurface = appColors.textColor,
            background = appColors.background,
            secondary = appColors.background,
            onSecondary = appColors.textColor,
        )
    }

    // Create the SeamKeyCardStyle object
    val keyCardStyle = SeamKeyCardStyle(
        backgroundGradient = appColors.cardBackgroundGradient,
        accentColor = appColors.accentColor,
        textColor = appColors.textColor,
        headerLogoTint = appColors.iconActiveColor,
        cornerRadius = 16.dp,
    )

        // Define Unlock Card Style
    val unlockCardStyle = SeamUnlockCardStyle(
        keyButtonGradient = appColors.buttonGradient,
        keyButtonShadowRadius = 12.dp,
        bulletBackground = appColors.accentColor,
        bulletTextColor = appColors.textInvert,
        instructionTextColor = appColors.textColor,
        headerBackground = appColors.headerBackground,
        headerTitleColor = appColors.textColor,
        headerSubtitleColor = appColors.textColor,
        keyIconColorIdle = appColors.iconIdleColor,
        keyIconColorActive = appColors.iconActiveColor,
        successColor = appColors.successColor,
        successIconColor = appColors.textInvert,
        errorColor = appColors.errorColor,
    )

    // Create a SeamTheme with keyCardStyle and unlockCardStyle as a parameter
    // Both parameters are optional
    val seamTheme = SeamTheme(
        keyCard = keyCardStyle,
        unlockCard = unlockCardStyle
    )

    // Set the seamTheme to SeamComponentsTheme
    SeamComponentsTheme(
        seamTheme = seamTheme,
        colorScheme = colorScheme
    ) {
        SeamAccessView(
            clientSessionToken = "your-token"
        )
    }
}
```
{% endcode %}

