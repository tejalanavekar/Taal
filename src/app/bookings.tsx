import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function BookingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Bookings</ThemedText>
      <ThemedText themeColor="textSecondary">Coming soon</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
