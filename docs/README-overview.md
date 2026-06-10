# Pueblito Boyacense — Resumen del Proyecto

**Pueblito Boyacense** es una **app móvil turística** para **Android e iOS**, construida con **React Native + Expo** y **Supabase** como backend (base de datos, autenticación y almacenamiento).

---

## 1. Estado actual

El proyecto está en **reorganización hacia un monorepo**. Actualmente, la app móvil tiene **archivos en la raíz** y **parcialmente en `apps/mobile`**. Falta **migrar `src/`** a su ubicación definitiva usando `git mv`.

---

## 2. Estructura objetivo

```
apps/mobile
apps/admin
supabase/migrations
supabase/seed
supabase/storage
docs
packages/shared
```

---

## 3. Documentación disponible

- `docs/business-model.md`
- `docs/license-model.md`
- `docs/database-schema.md`
- `docs/mobile-app.md`
- `docs/admin-panel.md`

---

## 4. Migraciones Supabase

- `001_initial_schema.sql`
- `002_rls_policies.sql`
- `003_seed_initial_data.sql`
- `004_app_settings_keyvalue.sql`

---

## 5. Orden recomendado de migraciones

```
001 → 003 → 004 → 002
```

---

## 6. Cómo ejecutar app móvil

```bash
cd apps/mobile
npm install
cp .env.example .env
npm start
```

---

## 7. Migración pendiente

```bash
git mv src apps/mobile/src
git rm App.js app.json babel.config.js package.json
git commit -m "chore: completa migración a monorepo"
```

---

## 8. Modelo comercial

**Licencia de uso + servicio administrado mensual.** El cliente **no recibe el código fuente** ni el **panel interno**; obtiene el derecho de uso de la app publicada y la actualización mensual de contenidos como servicio.

---

## 9. Pendientes

- Completar la **migración de `src/`**.
- Crear el **panel interno**.
- **Conectar el contenido real** desde Supabase.
- **Preparar la publicación** en las tiendas.
