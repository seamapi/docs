---
description: >-
  Define semantic colors for text, backgrounds, states, and accents
---

# Colors

Use Material 3 to customize colors. Here is a suggestion of how to customize your app colors.

### Define a data class to hold the colors values:
{% code title="AppColors.kt" %}
```kotlin
data class AppColors(
    val background: Color,
    val headerBackground: Color,
    val accentColor: Color,
    val accentColorLight: Color,
    val textColor: Color,
    val textInvert: Color,
    val iconIdleColor: Color,
    val iconActiveColor: Color ,
    val successColor: Color,
    val errorColor: Color,
    val buttonGradient: List<Color>,
    val cardBackgroundGradient: List<Color>,
)
```
{% endcode %}

### Create instances of `AppColors` for light and dark modes:

{% code title="ColorConstants.kt" %}
```kotlin
// 
val lightAppColors = AppColors(
    background = Color(0xFFF8FAFC),
    headerBackground = Color(0xFFDADCDE),
    accentColor = Color(0xFF334155),
    accentColorLight = Color(0xFF1F2D41),
    textColor = Color(0xFF334155),
    textInvert = Color(0xFFF8FAFC),
    iconIdleColor = Color(0xFFFFFFFF),
    iconActiveColor = Color(0xFF334155),
    successColor = Color(0xFF059669),
    errorColor = Color(0xFFDC2626),
    buttonGradient = listOf(Color(0xFF334155), Color(0xFF1F2D41)),
    cardBackgroundGradient = listOf(Color(0xFFE4E8EF), Color(0xFFEEF2F9))
)

val darkAppColors = AppColors(
    background = Color(0xFF0F172A),
    headerBackground = Color(0xFF1E293B),
    accentColor = Color(0xFF64748B),
    accentColorLight = Color(0xFF94A3B8),
    textColor = Color(0xFFE2E8F0),
    textInvert = Color(0xFF0F172A),
    iconIdleColor = Color(0xFF475569),
    iconActiveColor = Color(0xFFE2E8F0),
    successColor = Color(0xFF10B981),
    errorColor = Color(0xFFEF4444),
    buttonGradient = listOf(Color(0xFF475569), Color(0xFF64748B)),
    cardBackgroundGradient = listOf(Color(0xFF1E293B), Color(0xFF334155))
)
```
{% endcode %}

### Set the color scheme to `SeamComponentsTheme`

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

    // Set the color scheme
    SeamComponentsTheme(
        colorScheme = colorScheme
    ) {
        SeamAccessView(
            clientSessionToken = "your-token"
        )
    }
}
```
{% endcode %}