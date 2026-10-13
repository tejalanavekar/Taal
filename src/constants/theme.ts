/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

// Taal ships one fixed brand palette for now (see src/hooks/use-theme.ts,
// which always resolves to `light`). Dark mode is a separate future task.
export const Colors = {
  light: {
    text: '#1A1A1A',
    background: '#FFF8F7',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#FFE8E5',
    textSecondary: '#8A7A78',

    primary: '#D95A4A',
    primaryLight: '#FFBDB8',
    cardBorder: '#FFBDB8',

    live: '#D92B2B',
    upcoming: '#E08A1E',
    virtual: '#3B6FD9',
    beginner: '#2E9E5B',
  },
  dark: {
    text: '#1A1A1A',
    background: '#FFF8F7',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#FFE8E5',
    textSecondary: '#8A7A78',

    primary: '#D95A4A',
    primaryLight: '#FFBDB8',
    cardBorder: '#FFBDB8',

    live: '#D92B2B',
    upcoming: '#E08A1E',
    virtual: '#3B6FD9',
    beginner: '#2E9E5B',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  default: {
    mono: 'monospace',
  },
  web: {
    mono: 'var(--font-mono)',
  },
});

// Outfit ships as separate static files per weight (loaded in _layout.tsx),
// so components must pick the matching fontFamily explicitly rather than
// relying on a numeric fontWeight to switch files.
export const FontFamily = {
  regular: 'Outfit_400Regular',
  medium: 'Outfit_500Medium',
  semiBold: 'Outfit_600SemiBold',
  bold: 'Outfit_700Bold',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
