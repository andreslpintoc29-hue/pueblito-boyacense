import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme/theme';

export default function ServiceCard({ name, description, schedule, imageUrl }) {
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Pueblito Boyacense</Text>
        </View>
      )}
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        {!!description && <Text style={styles.description}>{description}</Text>}
        {!!schedule && <Text style={styles.schedule}>🕒 {schedule}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: '100%', height: 160, backgroundColor: colors.primaryLight },
  placeholder: { alignItems: 'center', justifyContent: 'center' },
  placeholderText: { color: colors.white, fontWeight: '600' },
  body: { padding: spacing.md },
  name: { fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: 4 },
  description: { fontSize: 14, color: colors.textSecondary, marginBottom: 6 },
  schedule: { fontSize: 13, color: colors.primary, fontWeight: '600' },
});
