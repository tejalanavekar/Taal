import { Pressable, StyleSheet, View } from 'react-native';

import { Avatar } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getActionLabel, getSongsLine, getStatusLabel } from '@/lib/workshop-display';
import { Spacing } from '@/constants/theme';
import { Workshop } from '@/types/workshop';

type WorkshopCardProps = {
  workshop: Workshop;
  rank?: number;
  onPressAction?: () => void;
};

export function WorkshopCard({ workshop, rank, onPressAction }: WorkshopCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.headerRow}>
        <Avatar initials={workshop.instructorInitials} color={workshop.avatarColor} size={40} />
        <Badge label={workshop.style.toUpperCase()} variant="style" />
        <Badge label={workshop.level.toUpperCase()} variant="level" />
        {workshop.status === 'live' && <Badge label="LIVE NOW" variant="live" />}
        {workshop.isVirtual && <Badge label="VIRTUAL" variant="virtual" />}
        {rank !== undefined && (
          <ThemedText type="small" themeColor="textSecondary" style={styles.rank}>
            #{rank}
          </ThemedText>
        )}
      </View>

      <ThemedText type="smallBold" style={styles.title}>
        {workshop.title}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        ♪ {getSongsLine(workshop)}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        🕐 {workshop.dateLabel} 📍 {workshop.venue}, {workshop.city}
      </ThemedText>

      <View style={styles.footerRow}>
        <ThemedText type="smallBold" themeColor="primary" style={styles.price}>
          ₹{workshop.priceInRupees.toLocaleString('en-IN')}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          ⭐ {workshop.rating} · {workshop.attendingCount} {workshop.attendingLabel}
        </ThemedText>
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
    gap: Spacing.one,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  rank: {
    marginLeft: 'auto',
  },
  title: {
    fontSize: 16,
    marginTop: Spacing.one,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    marginTop: Spacing.one,
  },
  price: {
    fontSize: 18,
  },
  actionButton: {
    backgroundColor: '#D95A4A',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.four,
    marginLeft: 'auto',
  },
  actionLabel: {
    color: '#FFFFFF',
  },
});
