import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/theme';

export default function EmptyState({ title = 'Sin contenido', message = 'Pronto encontraras informacion aqui.' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🏞️</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  icon: { fontSize: 48, marginBottom: spacing.md },
  title: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  message: { fontSize: 14, color: colors.textSecondary, textAlign: 'center' },
});
