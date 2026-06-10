import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, radius } from '../theme/theme';
import { getBanners, getCategories } from '../services/contentService';
import Loading from '../components/Loading';

export default function HomeScreen({ navigation }) {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    const [b, c] = await Promise.all([getBanners(), getCategories()]);
    setBanners(b);
    setCategories(c);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    load();
  };

  if (loading) return <Loading message="Cargando Pueblito Boyacense..." />;

  const banner = banners[0];

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.banner}>
          {banner?.image_url ? (
            <Image source={{ uri: banner.image_url }} style={styles.bannerImage} />
          ) : (
            <View style={[styles.bannerImage, styles.bannerPlaceholder]} />
          )}
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>{banner?.title || 'Pueblito Boyacense'}</Text>
            {!!banner?.subtitle && <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Descubre Pueblito Boyacense</Text>
        <View style={styles.grid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.cell}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Category', { categoryId: cat.id, title: cat.name })}
            >
              <Text style={styles.cellName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
  banner: { borderRadius: radius.lg, overflow: 'hidden', marginBottom: spacing.lg },
  bannerImage: { width: '100%', height: 200, backgroundColor: colors.primaryLight },
  bannerPlaceholder: { backgroundColor: colors.primary },
  bannerOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: spacing.md, backgroundColor: colors.overlay },
  bannerTitle: { color: colors.white, fontSize: 22, fontWeight: '800' },
  bannerSubtitle: { color: colors.white, fontSize: 14, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: spacing.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cell: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  cellName: { fontSize: 15, fontWeight: '600', color: colors.text, textAlign: 'center' },
});
