import { Children } from 'react';
import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps, TabListProps } from 'expo-router/ui';
import { Pressable, StyleSheet, View } from 'react-native';

import { Avatar } from './avatar';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function AppTabs() {
  return (
    <Tabs>
      <TabList asChild>
        <NavBar>
          <TabTrigger name="explore" href="/" asChild>
            <NavLink label="Explore" />
          </TabTrigger>
          <TabTrigger name="ai-fit" href="/ai-fit" asChild>
            <AiDiscoverButton />
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <AvatarButton />
          </TabTrigger>
        </NavBar>
      </TabList>
      <TabSlot style={{ flex: 1 }} />
    </Tabs>
  );
}

// `TabList` only accepts `TabTrigger` elements as children (it statically
// scans them to register the app's screens). We still want each trigger's
// button rendered in a different part of the navbar, so we pull them out
// of `props.children` by position and place each where it visually belongs,
// rather than rendering `props.children` as one block.
function NavBar(props: TabListProps) {
  const [exploreTrigger, aiFitTrigger, profileTrigger] = Children.toArray(props.children);

  return (
    <View style={styles.navBar}>
      <ThemedView type="backgroundElement" style={styles.navInner}>
        <ThemedText type="subtitle" themeColor="primary" style={styles.logo}>
          Taal
        </ThemedText>

        <View style={styles.navLinks}>
          {exploreTrigger}
          {/* Live Now and For Instructors aren't built yet — static placeholders until those screens exist. */}
          <ThemedText type="smallBold" themeColor="textSecondary">
            Live Now
          </ThemedText>
          <ThemedText type="smallBold" themeColor="textSecondary">
            For Instructors
          </ThemedText>
        </View>

        <View style={styles.navActions}>
          {aiFitTrigger}
          {profileTrigger}
        </View>
      </ThemedView>
    </View>
  );
}

function NavLink({ label, isFocused, ...props }: TabTriggerSlotProps & { label: string }) {
  const theme = useTheme();
  const color = isFocused ? theme.primary : theme.text;

  return (
    <Pressable {...props}>
      <ThemedText type="smallBold" style={{ color }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

function AiDiscoverButton(props: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={styles.aiButton}>
      <ThemedText type="smallBold" style={styles.aiButtonLabel}>
        ✨ AI Discover
      </ThemedText>
    </Pressable>
  );
}

function AvatarButton(props: TabTriggerSlotProps) {
  return (
    <Pressable {...props}>
      <Avatar initials="A" color="#D95A4A" size={36} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFBDB8',
  },
  navInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    width: '100%',
    maxWidth: MaxContentWidth * 2,
  },
  logo: {
    fontSize: 24,
    lineHeight: 28,
    flexShrink: 0,
  },
  navLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.four,
    flex: 1,
    minWidth: 0,
  },
  navActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    flexShrink: 0,
  },
  aiButton: {
    backgroundColor: '#D95A4A',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.four,
  },
  aiButtonLabel: {
    color: '#FFFFFF',
  },
});
