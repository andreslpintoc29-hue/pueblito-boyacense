# Arquitectura - Pueblito Boyacense

## Vision general

Pueblito Boyacense es una app movil (React Native + Expo) que consume contenido publicado en **Supabase**. La app es de **solo lectura**: el cliente final unicamente visualiza informacion.

```
+---------------------------+
|   App movil (Expo)        |
|   - Inicio / Banners      |
|   - Servicios             |
|   - Eventos               |
|   - Galeria               |
|   - Contacto / Mapa       |
+------------+--------------+
             |
             | Lectura (anon key, RLS solo lectura)
             v
+---------------------------+
|   Supabase                |
|   - PostgreSQL (contenido)|
|   - Storage (imagenes)    |
|   - Auth (solo admin)     |
+---------------------------+
             ^
             | Escritura (panel admin del proveedor)
             |
+---------------------------+
|   Proveedor / Desarrollador|
|   (servicio mensual)       |
+---------------------------+
```

## Modelo de servicio administrado

- El **cliente final NO** tiene acceso de administracion.
- El **proveedor** actualiza banners, servicios, eventos, galeria, horarios y contacto desde Supabase (Table Editor / Storage) o un panel propio.
- Estas actualizaciones son parte de una **mensualidad** de mantenimiento de contenido.

## Capas de la app

| Capa | Carpeta | Responsabilidad |
|------|---------|-----------------|
| Configuracion | `src/config` | Cliente Supabase y variables |
| Servicios | `src/services` | Consultas de contenido + respaldo |
| Navegacion | `src/navigation` | Tabs y stack |
| Pantallas | `src/screens` | Vistas de usuario |
| Componentes | `src/components` | UI reutilizable |
| Tema | `src/theme` | Colores, espaciado, tipografia |

## Estrategia de datos

`contentService.js` intenta leer desde Supabase; si la tabla no existe o esta vacia, usa **datos de respaldo** para que la app nunca quede en blanco durante el desarrollo o configuracion inicial.

## Seguridad

- La app usa la **anon key** publica de Supabase.
- Las tablas deben tener **Row Level Security (RLS)** con politica de **solo lectura** para el rol anonimo.
- La escritura se restringe a usuarios autenticados (proveedor).
- No se almacenan credenciales en el repositorio; se usan variables `EXPO_PUBLIC_*` mediante `.env`.
