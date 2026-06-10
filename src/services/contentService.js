import { supabase } from '../config/supabase';

// Datos de respaldo (fallback) para que la app muestre contenido
// aunque Supabase aun no este configurado. El proveedor reemplaza
// este contenido publicando registros reales en Supabase.
const fallback = {
  banners: [
    {
      id: 'b1',
      title: 'Bienvenido a Pueblito Boyacense',
      subtitle: 'Tradicion, arquitectura colonial y cultura boyacense',
      image_url: null,
    },
  ],
  categories: [
    { id: 'restaurantes', name: 'Restaurantes', icon: 'restaurant' },
    { id: 'hospedajes', name: 'Hospedajes', icon: 'bed' },
    { id: 'artesanias', name: 'Artesanias', icon: 'color-palette' },
    { id: 'cafeterias', name: 'Cafeterias', icon: 'cafe' },
    { id: 'spa', name: 'Spa', icon: 'flower' },
    { id: 'plazoletas', name: 'Plazoletas', icon: 'business' },
    { id: 'capilla', name: 'Capilla', icon: 'home' },
    { id: 'galeria', name: 'Galeria', icon: 'images' },
  ],
  services: [
    {
      id: 's1',
      category_id: 'restaurantes',
      name: 'Restaurante La Plazoleta',
      description: 'Comida tipica boyacense en un ambiente colonial.',
      schedule: 'Lun a Dom, 8:00 - 21:00',
      image_url: null,
    },
    {
      id: 's2',
      category_id: 'hospedajes',
      name: 'Hospedaje El Descanso',
      description: 'Habitaciones comodas con estilo tradicional.',
      schedule: 'Recepcion 24h',
      image_url: null,
    },
  ],
  events: [
    {
      id: 'e1',
      title: 'Festival Cultural Boyacense',
      description: 'Musica, danza y gastronomia regional.',
      date: '2026-08-15',
      image_url: null,
    },
  ],
  gallery: [],
  contact: {
    address: 'Pueblito Boyacense, Duitama, Boyaca, Colombia',
    phone: '+57 000 000 0000',
    email: 'contacto@pueblitoboyacense.co',
    latitude: 5.8245,
    longitude: -73.0345,
    schedule: 'Abierto todos los dias',
  },
};

async function safeSelect(table, fallbackData, orderBy) {
  try {
    let query = supabase.from(table).select('*');
    if (orderBy) query = query.order(orderBy, { ascending: true });
    const { data, error } = await query;
    if (error) throw error;
    if (!data || data.length === 0) return fallbackData;
    return data;
  } catch (e) {
    console.warn(`[content] No se pudo leer "${table}". Usando datos de respaldo.`, e.message);
    return fallbackData;
  }
}

export const getBanners = () => safeSelect('banners', fallback.banners);
export const getCategories = () => safeSelect('categories', fallback.categories);
export const getEvents = () => safeSelect('events', fallback.events, 'date');
export const getGallery = () => safeSelect('gallery', fallback.gallery);

export const getServices = async (categoryId) => {
  try {
    let query = supabase.from('services').select('*');
    if (categoryId) query = query.eq('category_id', categoryId);
    const { data, error } = await query;
    if (error) throw error;
    if (!data || data.length === 0) {
      return categoryId
        ? fallback.services.filter((s) => s.category_id === categoryId)
        : fallback.services;
    }
    return data;
  } catch (e) {
    console.warn('[content] No se pudo leer "services". Usando respaldo.', e.message);
    return categoryId
      ? fallback.services.filter((s) => s.category_id === categoryId)
      : fallback.services;
  }
};

export const getContact = async () => {
  try {
    const { data, error } = await supabase.from('contact').select('*').limit(1).single();
    if (error) throw error;
    return data || fallback.contact;
  } catch (e) {
    console.warn('[content] No se pudo leer "contact". Usando respaldo.', e.message);
    return fallback.contact;
  }
};

export default {
  getBanners,
  getCategories,
  getServices,
  getEvents,
  getGallery,
  getContact,
};
