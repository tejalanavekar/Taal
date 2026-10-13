import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { WorkshopCard } from '@/components/workshop-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { mockWorkshops } from '@/lib/mock-workshops';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={{ gap: Spacing.three, alignSelf: 'stretch' }}>
          {mockWorkshops.slice(0, 2).map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} rank={index + 1} />
          ))}
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});
