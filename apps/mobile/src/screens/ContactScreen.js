import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, radius } from '../theme/theme';
import { getContact } from '../services/contentService';
import Loading from '../components/Loading';

export default function ContactScreen() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContact().then((data) => {
      setContact(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading message="Cargando contacto..." />;

  const openMaps = () => {
    if (contact?.latitude && contact?.longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${contact.latitude},${contact.longitude}`;
      Linking.openURL(url);
    }
  };

  const call = () => contact?.phone && Linking.openURL(`tel:${contact.phone}`);
  const email = () => contact?.email && Linking.openURL(`mailto:${contact.email}`);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Pueblito Boyacense</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Direccion</Text>
          <Text style={styles.value}>{contact?.address}</Text>
        </View>

        {!!contact?.schedule && (
          <View style={styles.card}>
            <Text style={styles.label}>Horario</Text>
            <Text style={styles.value}>{contact.schedule}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={call} activeOpacity={0.85}>
          <Text style={styles.buttonText}>📞 Llamar {contact?.phone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={email} activeOpacity={0.85}>
          <Text style={styles.buttonText}>✉️ Escribir a {contact?.email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonAccent]} onPress={openMaps} activeOpacity={0.85}>
          <Text style={styles.buttonText}>📍 Ver ubicacion en el mapa</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
  title: { fontSize: 22, fontWeight: '800', color: colors.text, marginBottom: spacing.md },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: { fontSize: 13, color: colors.textSecondary, marginBottom: 4, fontWeight: '600' },
  value: { fontSize: 16, color: colors.text },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  buttonAccent: { backgroundColor: colors.accent },
  buttonText: { color: colors.white, fontWeight: '700', fontSize: 15 },
});
