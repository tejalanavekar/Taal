import { Colors } from '@/constants/theme';

// Taal uses one fixed brand palette regardless of system color scheme.
// Revisit this (reintroduce useColorScheme) if/when we design a dark mode.
export function useTheme() {
  return Colors.light;
}
