-- ============================================================
-- Pueblito Boyacense - Datos iniciales (seed)
-- Supabase / PostgreSQL
-- Migracion: 003_seed_initial_data.sql
-- Depende de: 001_initial_schema.sql
-- ============================================================
-- Notas:
-- * No se insertan imagenes reales (image_url queda vacio).
-- * No se insertan telefonos ni correos reales (datos genericos).
-- * Para tablas con slug unico se usa ON CONFLICT (slug).
-- * Para tablas sin restriccion unica (app_settings, contact_info,
--   useful_info, faqs) se usa WHERE NOT EXISTS para evitar duplicados.
-- ============================================================

-- ============================================================
-- 1. SERVICE CATEGORIES
-- ============================================================
insert into service_categories (name, slug, status, sort_order) values
    ('Restaurantes', 'restaurantes', 'visible', 1),
    ('Hospedajes', 'hospedajes', 'visible', 2),
    ('Tiendas', 'tiendas', 'visible', 3),
    ('Cafeterias', 'cafeterias', 'visible', 4),
    ('Artesanias', 'artesanias', 'visible', 5),
    ('Spa', 'spa', 'visible', 6),
    ('Capilla', 'capilla', 'visible', 7),
    ('Otros servicios turisticos', 'otros-servicios-turisticos', 'visible', 8)
on conflict (slug) do nothing;

-- ============================================================
-- 2. PLAZAS
-- ============================================================
insert into plazas (name, slug, status, sort_order) values
    ('Villa de Leyva', 'villa-de-leyva', 'visible', 1),
    ('Tibasosa', 'tibasosa', 'visible', 2),
    ('Tenza', 'tenza', 'visible', 3),
    ('Sachica', 'sachica', 'visible', 4),
    ('El Cocuy', 'el-cocuy', 'visible', 5),
    ('Mongui', 'mongui', 'visible', 6),
    ('Raquira', 'raquira', 'visible', 7)
on conflict (slug) do nothing;

-- ============================================================
-- 3. GALLERY CATEGORIES
-- ============================================================
insert into gallery_categories (name, slug, status, sort_order) values
    ('General', 'general', 'visible', 1),
    ('Eventos', 'eventos', 'visible', 2),
    ('Plazoletas', 'plazoletas', 'visible', 3),
    ('Gastronomia', 'gastronomia', 'visible', 4),
    ('Hospedaje', 'hospedaje', 'visible', 5),
    ('Artesanias', 'artesanias', 'visible', 6),
    ('Navidad', 'navidad', 'visible', 7),
    ('Semana Santa', 'semana-santa', 'visible', 8)
on conflict (slug) do nothing;

-- ============================================================
-- 4. APP SETTINGS
-- ============================================================
-- app_settings no tiene columna slug/key unica en el esquema 001,
-- se modela cada ajuste como una fila usando name (clave) y
-- description (valor). Se evita duplicado con WHERE NOT EXISTS.
insert into app_settings (name, description, image_url, status, sort_order)
select 'app_name', 'Pueblito Boyacense', '', 'visible', 1
where not exists (select 1 from app_settings where name = 'app_name');

insert into app_settings (name, description, image_url, status, sort_order)
select 'welcome_title', 'Bienvenidos a Pueblito Boyacense', '', 'visible', 2
where not exists (select 1 from app_settings where name = 'welcome_title');

insert into app_settings (name, description, image_url, status, sort_order)
select 'welcome_text', 'Descubre la magia de los pueblos de Boyaca: arquitectura colonial, gastronomia tradicional, artesanias y eventos culturales para toda la familia.', '', 'visible', 3
where not exists (select 1 from app_settings where name = 'welcome_text');

insert into app_settings (name, description, image_url, status, sort_order)
select 'main_banner_url', '', '', 'visible', 4
where not exists (select 1 from app_settings where name = 'main_banner_url');

insert into app_settings (name, description, image_url, status, sort_order)
select 'primary_color', 'terracota', '', 'visible', 5
where not exists (select 1 from app_settings where name = 'primary_color');

insert into app_settings (name, description, image_url, status, sort_order)
select 'secondary_color', 'blanco colonial', '', 'visible', 6
where not exists (select 1 from app_settings where name = 'secondary_color');

-- ============================================================
-- 5. CONTACT INFO
-- ============================================================
-- Registro base con datos genericos (sin telefonos ni correos reales).
insert into contact_info (name, description, image_url, status, sort_order)
select 'Informacion de contacto', 'Datos de contacto pendientes de configurar.', '', 'visible', 1
where not exists (select 1 from contact_info where name = 'Informacion de contacto');

-- ============================================================
-- 6. USEFUL INFO
-- ============================================================
insert into useful_info (title, description, image_url, status, sort_order)
select 'Horarios', 'Informacion de horarios pendiente de configurar.', '', 'visible', 1
where not exists (select 1 from useful_info where title = 'Horarios');

insert into useful_info (title, description, image_url, status, sort_order)
select 'Recomendaciones', 'Recomendaciones para el visitante pendientes de configurar.', '', 'visible', 2
where not exists (select 1 from useful_info where title = 'Recomendaciones');

insert into useful_info (title, description, image_url, status, sort_order)
select 'Normas', 'Normas de convivencia y uso de espacios pendientes de configurar.', '', 'visible', 3
where not exists (select 1 from useful_info where title = 'Normas');

insert into useful_info (title, description, image_url, status, sort_order)
select 'Tarifas', 'Informacion de tarifas pendiente de configurar.', '', 'visible', 4
where not exists (select 1 from useful_info where title = 'Tarifas');

-- ============================================================
-- 7. FAQS
-- ============================================================
insert into faqs (title, description, status, sort_order)
select 'Que es Pueblito Boyacense?', 'Es una app turistica que reune servicios, eventos, plazoletas y galeria de los pueblos de Boyaca.', 'visible', 1
where not exists (select 1 from faqs where title = 'Que es Pueblito Boyacense?');

insert into faqs (title, description, status, sort_order)
select 'Como encuentro servicios turisticos?', 'Puedes explorar las categorias de servicios como restaurantes, hospedajes, tiendas y artesanias dentro de la app.', 'visible', 2
where not exists (select 1 from faqs where title = 'Como encuentro servicios turisticos?');

insert into faqs (title, description, status, sort_order)
select 'La aplicacion tiene costo?', 'El uso de la aplicacion es informativo y gratuito para los visitantes.', 'visible', 3
where not exists (select 1 from faqs where title = 'La aplicacion tiene costo?');
