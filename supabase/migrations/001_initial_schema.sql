-- ============================================================
-- Pueblito Boyacense - Esquema inicial
-- Supabase / PostgreSQL
-- Migracion: 001_initial_schema.sql
-- ============================================================

-- Extension para gen_random_uuid()
create extension if not exists pgcrypto;

-- ============================================================
-- PROFILES (vinculado a auth.users)
-- ============================================================
create table if not exists profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    name text,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- SERVICE CATEGORIES
-- ============================================================
create table if not exists service_categories (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- SERVICES
-- ============================================================
create table if not exists services (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique,
    description text,
    image_url text,
    category_id uuid references service_categories (id) on delete set null,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- SERVICE IMAGES
-- ============================================================
create table if not exists service_images (
    id uuid primary key default gen_random_uuid(),
    service_id uuid references services (id) on delete cascade,
    image_url text,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- EVENTS
-- ============================================================
create table if not exists events (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text unique,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- EVENT IMAGES
-- ============================================================
create table if not exists event_images (
    id uuid primary key default gen_random_uuid(),
    event_id uuid references events (id) on delete cascade,
    image_url text,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- PLAZAS
-- ============================================================
create table if not exists plazas (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- PLAZA IMAGES
-- ============================================================
create table if not exists plaza_images (
    id uuid primary key default gen_random_uuid(),
    plaza_id uuid references plazas (id) on delete cascade,
    image_url text,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- GALLERY CATEGORIES
-- ============================================================
create table if not exists gallery_categories (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- GALLERY IMAGES
-- ============================================================
create table if not exists gallery_images (
    id uuid primary key default gen_random_uuid(),
    category_id uuid references gallery_categories (id) on delete set null,
    title text,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- APP SETTINGS
-- ============================================================
create table if not exists app_settings (
    id uuid primary key default gen_random_uuid(),
    name text,
    description text,
    image_url text,
    status text default 'visible',
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- CONTACT INFO
-- ============================================================
create table if not exists contact_info (
    id uuid primary key default gen_random_uuid(),
    name text,
    description text,
    image_url text,
    status text default 'visible',
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- USEFUL INFO
-- ============================================================
create table if not exists useful_info (
    id uuid primary key default gen_random_uuid(),
    title text,
    description text,
    image_url text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- FAQS
-- ============================================================
create table if not exists faqs (
    id uuid primary key default gen_random_uuid(),
    title text,
    description text,
    status text default 'visible',
    is_featured boolean default false,
    sort_order int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- ============================================================
-- INDICES BASICOS (status y slug)
-- ============================================================
create index if not exists idx_profiles_status on profiles (status);

create index if not exists idx_service_categories_status on service_categories (status);
create index if not exists idx_service_categories_slug on service_categories (slug);

create index if not exists idx_services_status on services (status);
create index if not exists idx_services_slug on services (slug);

create index if not exists idx_events_status on events (status);
create index if not exists idx_events_slug on events (slug);

create index if not exists idx_plazas_status on plazas (status);
create index if not exists idx_plazas_slug on plazas (slug);

create index if not exists idx_gallery_categories_status on gallery_categories (status);
create index if not exists idx_gallery_categories_slug on gallery_categories (slug);

create index if not exists idx_gallery_images_status on gallery_images (status);

create index if not exists idx_app_settings_status on app_settings (status);
create index if not exists idx_contact_info_status on contact_info (status);
create index if not exists idx_useful_info_status on useful_info (status);
create index if not exists idx_faqs_status on faqs (status);
