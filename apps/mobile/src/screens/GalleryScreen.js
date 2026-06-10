import React, { useEffect, useState } from 'react';
import { Image, FlatList, useWindowDimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme/theme';
import { getGallery } from '../services/contentService';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';

export default function GalleryScreen() {
  const { width } = useWindowDimensions();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const numColumns = 2;
  const gap = spacing.sm;
  const size = (width - spacing.md * 2 - gap) / numColumns;

  useEffect(() => {
    getGallery().then((data) => {
      setPhotos(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading message="Cargando galeria..." />;
  if (!photos.length) {
    return <EmptyState title="Galeria vacia" message="Pronto compartiremos fotos de Pueblito Boyacense." />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <FlatList
        data={photos}
        keyExtractor={(item) => String(item.id)}
        numColumns={numColumns}
        contentContainerStyle={styles.content}
        columnWrapperStyle={{ gap }}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image_url }} style={[styles.photo, { width: size, height: size }]} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: gap }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
  photo: { borderRadius: 10, backgroundColor: colors.border, marginBottom: spacing.sm },
});
