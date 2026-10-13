import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type BadgeVariant = 'style' | 'level' | 'live' | 'upcoming' | 'virtual';

type BadgeProps = {
  label: string;
  variant: BadgeVariant;
};

const VARIANT_TO_COLOR: Record<BadgeVariant, ThemeColor> = {
  style: 'primary',
  level: 'beginner',
  live: 'live',
  upcoming: 'upcoming',
  virtual: 'virtual',
};

export function Badge({ label, variant }: BadgeProps) {
  const theme = useTheme();
  const color = theme[VARIANT_TO_COLOR[variant]];
  const isSolid = variant === 'live' || variant === 'upcoming' || variant === 'virtual';

  return (
    <View
      style={[
        styles.badge,
        isSolid
          ? { backgroundColor: color }
          : { backgroundColor: `${color}1A`, borderWidth: 1, borderColor: color },
      ]}>
      {variant === 'live' && <View style={styles.liveDot} />}
      <ThemedText
        type="smallBold"
        style={[styles.label, isSolid && styles.labelOnSolid]}
        themeColor={isSolid ? undefined : VARIANT_TO_COLOR[variant]}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.half,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Spacing.four,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
  },
  labelOnSolid: {
    color: '#FFFFFF',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
});
