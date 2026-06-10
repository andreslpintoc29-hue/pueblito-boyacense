-- ============================================================
-- Pueblito Boyacense - Row Level Security (RLS)
-- Supabase / PostgreSQL
-- Migracion: 002_rls_policies.sql
-- Depende de: 001_initial_schema.sql
-- ============================================================

-- ============================================================
-- 1. ACTIVAR RLS EN TODAS LAS TABLAS
-- ============================================================
alter table profiles enable row level security;
alter table service_categories enable row level security;
alter table services enable row level security;
alter table service_images enable row level security;
alter table events enable row level security;
alter table event_images enable row level security;
alter table plazas enable row level security;
alter table plaza_images enable row level security;
alter table gallery_categories enable row level security;
alter table gallery_images enable row level security;
alter table app_settings enable row level security;
alter table contact_info enable row level security;
alter table useful_info enable row level security;
alter table faqs enable row level security;

-- ============================================================
-- 2. PROFILES
-- ============================================================
-- Lectura: el usuario autenticado puede leer su propio perfil
create policy "profiles_select_own"
    on profiles for select
    using (auth.uid() = id);

-- Insercion: solo usuarios autenticados pueden insertar su propio perfil
create policy "profiles_insert_authenticated"
    on profiles for insert
    with check (auth.role() = 'authenticated' and auth.uid() = id);

-- Actualizacion: el usuario autenticado puede actualizar su propio perfil
create policy "profiles_update_own"
    on profiles for update
    using (auth.uid() = id)
    with check (auth.uid() = id);

-- ============================================================
-- 3. SERVICE CATEGORIES
-- ============================================================
-- Lectura publica
create policy "service_categories_public_read"
    on service_categories for select
    using (true);

-- Escritura: solo autenticados
create policy "service_categories_insert_authenticated"
    on service_categories for insert
    with check (auth.role() = 'authenticated');

create policy "service_categories_update_authenticated"
    on service_categories for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "service_categories_delete_authenticated"
    on service_categories for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 4. SERVICES
-- ============================================================
-- Lectura publica solo si status = 'visible'
create policy "services_public_read_visible"
    on services for select
    using (status = 'visible');

-- Escritura: solo autenticados
create policy "services_insert_authenticated"
    on services for insert
    with check (auth.role() = 'authenticated');

create policy "services_update_authenticated"
    on services for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "services_delete_authenticated"
    on services for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 5. SERVICE IMAGES
-- ============================================================
-- Lectura publica si el servicio relacionado esta visible
create policy "service_images_public_read_if_service_visible"
    on service_images for select
    using (
        exists (
            select 1 from services
            where services.id = service_images.service_id
              and services.status = 'visible'
        )
    );

-- Escritura: solo autenticados
create policy "service_images_insert_authenticated"
    on service_images for insert
    with check (auth.role() = 'authenticated');

create policy "service_images_update_authenticated"
    on service_images for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "service_images_delete_authenticated"
    on service_images for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 6. EVENTS
-- ============================================================
-- Lectura publica solo si status = 'published'
create policy "events_public_read_published"
    on events for select
    using (status = 'published');

-- Escritura: solo autenticados
create policy "events_insert_authenticated"
    on events for insert
    with check (auth.role() = 'authenticated');

create policy "events_update_authenticated"
    on events for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "events_delete_authenticated"
    on events for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 7. EVENT IMAGES
-- ============================================================
-- Lectura publica si el evento relacionado esta published
create policy "event_images_public_read_if_event_published"
    on event_images for select
    using (
        exists (
            select 1 from events
            where events.id = event_images.event_id
              and events.status = 'published'
        )
    );

-- Escritura: solo autenticados
create policy "event_images_insert_authenticated"
    on event_images for insert
    with check (auth.role() = 'authenticated');

create policy "event_images_update_authenticated"
    on event_images for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "event_images_delete_authenticated"
    on event_images for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 8. PLAZAS
-- ============================================================
-- Lectura publica solo si status = 'visible'
create policy "plazas_public_read_visible"
    on plazas for select
    using (status = 'visible');

-- Escritura: solo autenticados
create policy "plazas_insert_authenticated"
    on plazas for insert
    with check (auth.role() = 'authenticated');

create policy "plazas_update_authenticated"
    on plazas for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "plazas_delete_authenticated"
    on plazas for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 9. PLAZA IMAGES
-- ============================================================
-- Lectura publica si la plazoleta relacionada esta visible
create policy "plaza_images_public_read_if_plaza_visible"
    on plaza_images for select
    using (
        exists (
            select 1 from plazas
            where plazas.id = plaza_images.plaza_id
              and plazas.status = 'visible'
        )
    );

-- Escritura: solo autenticados
create policy "plaza_images_insert_authenticated"
    on plaza_images for insert
    with check (auth.role() = 'authenticated');

create policy "plaza_images_update_authenticated"
    on plaza_images for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "plaza_images_delete_authenticated"
    on plaza_images for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 10. GALLERY CATEGORIES
-- ============================================================
-- Lectura publica
create policy "gallery_categories_public_read"
    on gallery_categories for select
    using (true);

-- Escritura: solo autenticados
create policy "gallery_categories_insert_authenticated"
    on gallery_categories for insert
    with check (auth.role() = 'authenticated');

create policy "gallery_categories_update_authenticated"
    on gallery_categories for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "gallery_categories_delete_authenticated"
    on gallery_categories for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 11. GALLERY IMAGES
-- ============================================================
-- Lectura publica solo si status = 'visible'
create policy "gallery_images_public_read_visible"
    on gallery_images for select
    using (status = 'visible');

-- Escritura: solo autenticados
create policy "gallery_images_insert_authenticated"
    on gallery_images for insert
    with check (auth.role() = 'authenticated');

create policy "gallery_images_update_authenticated"
    on gallery_images for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "gallery_images_delete_authenticated"
    on gallery_images for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 12. APP SETTINGS
-- ============================================================
-- Lectura publica (la app necesita mostrarlos)
create policy "app_settings_public_read"
    on app_settings for select
    using (true);

-- Escritura: solo autenticados
create policy "app_settings_insert_authenticated"
    on app_settings for insert
    with check (auth.role() = 'authenticated');

create policy "app_settings_update_authenticated"
    on app_settings for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "app_settings_delete_authenticated"
    on app_settings for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 13. CONTACT INFO
-- ============================================================
-- Lectura publica (la app necesita mostrarla)
create policy "contact_info_public_read"
    on contact_info for select
    using (true);

-- Escritura: solo autenticados
create policy "contact_info_insert_authenticated"
    on contact_info for insert
    with check (auth.role() = 'authenticated');

create policy "contact_info_update_authenticated"
    on contact_info for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "contact_info_delete_authenticated"
    on contact_info for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 14. USEFUL INFO
-- ============================================================
-- Lectura publica solo si status = 'visible'
create policy "useful_info_public_read_visible"
    on useful_info for select
    using (status = 'visible');

-- Escritura: solo autenticados
create policy "useful_info_insert_authenticated"
    on useful_info for insert
    with check (auth.role() = 'authenticated');

create policy "useful_info_update_authenticated"
    on useful_info for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "useful_info_delete_authenticated"
    on useful_info for delete
    using (auth.role() = 'authenticated');

-- ============================================================
-- 15. FAQS
-- ============================================================
-- Lectura publica solo si status = 'visible'
create policy "faqs_public_read_visible"
    on faqs for select
    using (status = 'visible');

-- Escritura: solo autenticados
create policy "faqs_insert_authenticated"
    on faqs for insert
    with check (auth.role() = 'authenticated');

create policy "faqs_update_authenticated"
    on faqs for update
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create policy "faqs_delete_authenticated"
    on faqs for delete
    using (auth.role() = 'authenticated');
