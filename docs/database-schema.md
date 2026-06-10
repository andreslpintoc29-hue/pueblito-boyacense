# Esquema de Base de Datos — Pueblito Boyacense

## 1. Resumen

**Pueblito Boyacense** utiliza **Supabase / PostgreSQL** como capa de datos. La base de datos almacena toda la información de la aplicación turística:

- **Servicios** y sus categorías.
- **Eventos**.
- **Plazoletas** (plazas).
- **Galería** de imágenes.
- **Información de contacto**.
- **Configuración** global de la app.
- **Información útil** y preguntas frecuentes.

---

## 2. Migraciones

El esquema se construye mediante migraciones SQL ubicadas en `supabase/migrations/`:

- **`001_initial_schema.sql`** — Crea las tablas base del sistema.
- **`002_rls_policies.sql`** — Define las políticas de **Row Level Security (RLS)**.
- **`003_seed_initial_data.sql`** — Carga los **datos iniciales** (categorías, plazoletas, galería, configuración, etc.).
- **`004_app_settings_keyvalue.sql`** — Ajusta la tabla `app_settings` al modelo **key/value**.

---

## 3. Orden recomendado

Para una inicialización correcta, ejecutar las migraciones en este orden:

```
001 → 003 → 004 → 002
```

- **001** crea las tablas.
- **003** inserta los datos iniciales (usando aún `name/description` en `app_settings`).
- **004** transforma `app_settings` a `key/value` y consolida los valores base.
- **002** activa RLS y aplica las políticas de seguridad al final, sobre el esquema y datos ya preparados.

---

## 4. Tablas principales

- **`profiles`** — Perfiles de usuario, vinculados a `auth.users`.
- **`service_categories`** — Categorías de servicios (restaurantes, hospedajes, etc.).
- **`services`** — Servicios turísticos publicados.
- **`service_images`** — Imágenes asociadas a cada servicio.
- **`events`** — Eventos del pueblo.
- **`event_images`** — Imágenes asociadas a cada evento.
- **`plazas`** — Plazoletas / municipios destacados.
- **`plaza_images`** — Imágenes asociadas a cada plazoleta.
- **`gallery_categories`** — Categorías de la galería.
- **`gallery_images`** — Imágenes de la galería.
- **`app_settings`** — Configuración global de la app (modelo key/value).
- **`contact_info`** — Información de contacto mostrada en la app.
- **`useful_info`** — Información útil (horarios, recomendaciones, normas, tarifas).
- **`faqs`** — Preguntas frecuentes.

---

## 5. Seguridad RLS

La base de datos aplica **Row Level Security (RLS)** en todas las tablas:

- **Lectura pública** únicamente para el **contenido visible/publicado** (por ejemplo, servicios y plazoletas con `status = 'visible'`, eventos con `status = 'published'`). Las imágenes relacionadas se leen solo si su contenido padre está visible/publicado.
- **Escritura (insert/update/delete)** restringida exclusivamente a **usuarios autenticados del proveedor**.
- **`profiles`** tiene reglas específicas: cada usuario solo puede leer y actualizar su propio perfil.

---

## 6. app_settings

La tabla **`app_settings`** queda en un **modelo key/value** para almacenar la **configuración global** de la aplicación. Cada ajuste se representa como un par:

- **`key`** — identificador del ajuste (por ejemplo, `app_name`, `primary_color`).
- **`value`** — valor asociado al ajuste.

Este modelo facilita agregar nuevos parámetros de configuración sin alterar el esquema.

---

## 7. Storage

Para el almacenamiento de archivos en Supabase Storage se sugieren los siguientes **buckets**:

- **`app-assets`** — Recursos generales de la app (banners, logos, etc.).
- **`services`** — Imágenes de servicios.
- **`events`** — Imágenes de eventos.
- **`plazas`** — Imágenes de plazoletas.
- **`gallery`** — Imágenes de la galería.

---

## 8. Nota

> Los **datos reales** (fotos, textos definitivos, información de contacto, eventos, etc.) deben **cargarse posteriormente** desde **Supabase** o desde el **panel interno** del proveedor. Las migraciones solo dejan la estructura y un contenido base de ejemplo.
