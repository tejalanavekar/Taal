import { Href } from "expo-router";
import {
    TabList,
    Tabs,
    TabSlot,
    TabTrigger,
    TabTriggerSlotProps,
} from "expo-router/ui";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

type TabConfig = {
  name: string;
  href: Href;
  label: string;
  icon: SymbolViewProps["name"];
};

const TAB_CONFIG: TabConfig[] = [
  {
    name: "explore",
    href: "/",
    label: "Explore",
    icon: { ios: "house.fill", android: "home", web: "home" },
  },
  {
    name: "search",
    href: "/search",
    label: "Search",
    icon: { ios: "magnifyingglass", android: "search", web: "search" },
  },
  {
    name: "ai-fit",
    href: "/ai-fit",
    label: "AI Fit",
    icon: { ios: "sparkles", android: "auto_awesome", web: "auto_awesome" },
  },
  {
    name: "bookings",
    href: "/bookings",
    label: "Bookings",
    icon: {
      ios: "ticket.fill",
      android: "confirmation_number",
      web: "confirmation_number",
    },
  },
  {
    name: "profile",
    href: "/profile",
    label: "Profile",
    icon: { ios: "person.fill", android: "person", web: "person" },
  },
];

export default function AppTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot style={{ flex: 1 }} />
      <TabList asChild>
        <ThemedView
          type="backgroundElement"
          style={[
            styles.tabBar,
            { paddingBottom: insets.bottom + Spacing.two },
          ]}
        >
          {TAB_CONFIG.map((tab) => (
            <TabTrigger key={tab.name} name={tab.name} href={tab.href} asChild>
              <TabBarButton icon={tab.icon} label={tab.label} />
            </TabTrigger>
          ))}
        </ThemedView>
      </TabList>
    </Tabs>
  );
}

function TabBarButton({
  icon,
  label,
  isFocused,
  ...props
}: TabTriggerSlotProps & { icon: SymbolViewProps["name"]; label: string }) {
  const theme = useTheme();
  const color = isFocused ? theme.primary : theme.textSecondary;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}
    >
      <View style={styles.tabButtonContent}>
        <SymbolView name={icon} tintColor={color} size={22} />
        <ThemedText type="small" style={{ color }}>
          {label}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#FFBDB8",
    paddingTop: Spacing.two,
  },
  tabButton: {
    flex: 1,
  },
  tabButtonContent: {
    alignItems: "center",
    gap: 2,
  },
  pressed: {
    opacity: 0.7,
  },
});
