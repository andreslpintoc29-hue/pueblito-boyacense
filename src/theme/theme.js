// Tema visual de Pueblito Boyacense
// Paleta inspirada en la arquitectura colonial boyacense: verde, terracota y blanco.

export const colors = {
  primary: '#1B5E20',
  primaryDark: '#0E3B12',
  primaryLight: '#4C8C4A',
  accent: '#C0392B',
  accentLight: '#E07A5F',
  background: '#F7F5F0',
  surface: '#FFFFFF',
  text: '#1F2A24',
  textSecondary: '#5A6B61',
  border: '#E2DED5',
  muted: '#9AA39B',
  white: '#FFFFFF',
  overlay: 'rgba(0,0,0,0.35)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 999,
};

export const typography = {
  title: { fontSize: 26, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 18, fontWeight: '600', color: colors.text },
  body: { fontSize: 15, fontWeight: '400', color: colors.text },
  caption: { fontSize: 13, fontWeight: '400', color: colors.textSecondary },
};

export default { colors, spacing, radius, typography };
