import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, radius } from '../theme/theme';
import { getEvents } from '../services/contentService';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';

function formatDate(value) {
  if (!value) return '';
  try {
    const d = new Date(value);
    return d.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    return value;
  }
}

export default function EventsScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading message="Cargando eventos..." />;
  if (!events.length) return <EmptyState title="Sin eventos" message="Aun no hay eventos programados." />;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <FlatList
        data={events}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image_url ? (
              <Image source={{ uri: item.image_url }} style={styles.image} />
            ) : (
              <View style={[styles.image, styles.placeholder]} />
            )}
            <View style={styles.body}>
              <Text style={styles.date}>{formatDate(item.date)}</Text>
              <Text style={styles.title}>{item.title}</Text>
              {!!item.description && <Text style={styles.description}>{item.description}</Text>}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: '100%', height: 150, backgroundColor: colors.accentLight },
  placeholder: { backgroundColor: colors.accentLight },
  body: { padding: spacing.md },
  date: { fontSize: 13, color: colors.accent, fontWeight: '700', marginBottom: 4 },
  title: { fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: 4 },
  description: { fontSize: 14, color: colors.textSecondary },
});
