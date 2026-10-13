import { Pressable, StyleSheet, View } from 'react-native';

import { Avatar } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getActionLabel, getStatusLabel } from '@/lib/workshop-display';
import { Spacing } from '@/constants/theme';
import { Workshop } from '@/types/workshop';

type WorkshopCardProps = {
  workshop: Workshop;
  // Unused on mobile; kept so the prop signature matches workshop-card.web.tsx,
  // since TypeScript type-checks against this file regardless of platform.
  rank?: number;
  onPressAction?: () => void;
};

export function WorkshopCard({ workshop, onPressAction }: WorkshopCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.headerRow}>
        <Avatar initials={workshop.instructorInitials} color={workshop.avatarColor} />
        <View style={styles.titleColumn}>
          <ThemedText type="smallBold" numberOfLines={1}>
            {workshop.title}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
            {workshop.instructorName} · {workshop.dateLabel}
          </ThemedText>
        </View>
        <Badge label={getStatusLabel(workshop)} variant={workshop.status} />
      </View>

      <View style={styles.badgeRow}>
        <Badge label={workshop.style.toUpperCase()} variant="style" />
        <Badge label={workshop.level.toUpperCase()} variant="level" />
        {workshop.isVirtual && <Badge label="VIRTUAL" variant="virtual" />}
      </View>

      <View style={styles.footerRow}>
        <View>
          <ThemedText type="smallBold" themeColor="primary" style={styles.price}>
            ₹{workshop.priceInRupees.toLocaleString('en-IN')}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            ⭐ {workshop.rating} · {workshop.attendingCount} {workshop.attendingLabel}
          </ThemedText>
        </View>
        <Pressable onPress={onPressAction} style={styles.actionButton}>
          <ThemedText type="smallBold" style={styles.actionLabel}>
            {getActionLabel(workshop)}
          </ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.four,
    borderWidth: 1,
    borderColor: '#FFBDB8',
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  titleColumn: {
    flex: 1,
    gap: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.one,
  },
  price: {
    fontSize: 18,
    lineHeight: 24,
  },
  actionButton: {
    backgroundColor: '#D95A4A',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.four,
  },
  actionLabel: {
    color: '#FFFFFF',
  },
});
