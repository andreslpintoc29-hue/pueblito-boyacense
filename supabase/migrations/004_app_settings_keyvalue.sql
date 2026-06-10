-- ============================================================
-- Pueblito Boyacense - Ajuste de app_settings a modelo key/value
-- Supabase / PostgreSQL
-- Migracion: 004_app_settings_keyvalue.sql
-- Depende de: 001_initial_schema.sql, 003_seed_initial_data.sql
-- ============================================================
-- Esta migracion transforma app_settings de un modelo
-- name/description hacia un modelo profesional key/value.
-- Es idempotente: usa comprobaciones de catalogo (information_schema)
-- para aplicar cada cambio solo si corresponde.
-- No modifica ninguna otra tabla.
-- ============================================================

-- ------------------------------------------------------------
-- 1. Renombrar columnas existentes (name -> key, description -> value)
-- ------------------------------------------------------------
do $$
begin
    -- name -> key (solo si existe name y aun no existe key)
    if exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'app_settings'
          and column_name = 'name'
    ) and not exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'app_settings'
          and column_name = 'key'
    ) then
        alter table app_settings rename column name to key;
    end if;

    -- description -> value (solo si existe description y aun no existe value)
    if exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'app_settings'
          and column_name = 'description'
    ) and not exists (
        select 1 from information_schema.columns
        where table_schema = 'public'
          and table_name = 'app_settings'
          and column_name = 'value'
    ) then
        alter table app_settings rename column description to value;
    end if;
end $$;

-- ------------------------------------------------------------
-- 2. Crear columna key si no existe
-- ------------------------------------------------------------
alter table app_settings add column if not exists key text;

-- ------------------------------------------------------------
-- 3. Crear columna value si no existe
-- ------------------------------------------------------------
alter table app_settings add column if not exists value text;

-- ------------------------------------------------------------
-- 4. Asegurar key NOT NULL cuando sea posible
--    (solo se aplica si no hay filas con key nula)
-- ------------------------------------------------------------
do $$
begin
    if not exists (select 1 from app_settings where key is null) then
        alter table app_settings alter column key set not null;
    end if;
end $$;

-- ------------------------------------------------------------
-- 5. Crear indice unique sobre key si no existe
-- ------------------------------------------------------------
create unique index if not exists app_settings_key_unique on app_settings (key);

-- ------------------------------------------------------------
-- 6. Eliminar columnas obsoletas de app_settings (solo si existen)
-- ------------------------------------------------------------
alter table app_settings drop column if exists image_url;
alter table app_settings drop column if exists status;
alter table app_settings drop column if exists sort_order;

-- ------------------------------------------------------------
-- 7. Insertar / actualizar valores base (upsert por key)
-- ------------------------------------------------------------
insert into app_settings (key, value) values
    ('app_name', 'Pueblito Boyacense'),
    ('welcome_title', 'Bienvenidos a Pueblito Boyacense'),
    ('welcome_text', 'Descubre la magia de los pueblos de Boyaca: arquitectura colonial, gastronomia tradicional, artesanias y eventos culturales para toda la familia.'),
    ('main_banner_url', ''),
    ('primary_color', 'terracota'),
    ('secondary_color', 'blanco colonial')
on conflict (key) do update set value = excluded.value;
