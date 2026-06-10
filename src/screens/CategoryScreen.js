import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme/theme';
import { getServices } from '../services/contentService';
import ServiceCard from '../components/ServiceCard';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';

export default function CategoryScreen({ route }) {
  const { categoryId } = route.params || {};
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices(categoryId).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <Loading message="Cargando informacion..." />;
  if (!items.length) {
    return <EmptyState title="Sin contenido" message="Pronto publicaremos informacion en esta categoria." />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <ServiceCard
            name={item.name}
            description={item.description}
            schedule={item.schedule}
            imageUrl={item.image_url}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
});
