---
description: >-
  Style key card components with custom gradients, logos, corner radius, and
  shadows.
---

# Keycard styles

Controls the look of key card UI (background gradient, logo, shadow, corner radius, etc.).

```kotlin
data class SeamKeyCardStyle(
    val brandLogoUrl: String? = null,
    @DrawableRes val brandLogoRes: Int? = null,
    @DrawableRes val backgroundTextureRes: Int? = null,
    val textColor: Color? = null,
    val backgroundGradient: List<Color>? = null,
    val errorColor: Color? = null,
    val accentColor: Color? = null,
    val headerLogoTint: Color? = null,
    val cornerRadius: Dp? = null,
    val shadowColor: Color? = null,
    val shadowYOffset: Dp? = null,
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

    // Create a SeamTheme with keyCardStyle as a parameter
    val seamTheme = SeamTheme(
        keyCard = keyCardStyle,
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
