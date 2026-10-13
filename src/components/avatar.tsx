import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

type AvatarProps = {
  initials: string;
  color: string;
  size?: number;
};

export function Avatar({ initials, color, size = 44 }: AvatarProps) {
  return (
    <View
      style={[
        styles.circle,
        { backgroundColor: color, width: size, height: size, borderRadius: size / 2 },
      ]}>
      <ThemedText type="smallBold" style={styles.initials}>
        {initials}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#FFFFFF',
  },
});
