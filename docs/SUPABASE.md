# Modelo de datos - Supabase

Este documento describe las tablas que alimentan la app **Pueblito Boyacense** y el SQL para crearlas. El contenido lo administra el proveedor.

## Tablas

### categories
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | text (PK) | Identificador (ej. `restaurantes`) |
| name | text | Nombre visible |
| icon | text | Nombre de icono (opcional) |

### services
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | uuid (PK) | Identificador |
| category_id | text (FK) | Categoria asociada |
| name | text | Nombre del servicio |
| description | text | Descripcion |
| schedule | text | Horario |
| image_url | text | URL de imagen (Storage) |

### events
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | uuid (PK) | Identificador |
| title | text | Titulo del evento |
| description | text | Descripcion |
| date | date | Fecha del evento |
| image_url | text | URL de imagen |

### banners
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | uuid (PK) | Identificador |
| title | text | Titulo |
| subtitle | text | Subtitulo |
| image_url | text | URL de imagen |

### gallery
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | uuid (PK) | Identificador |
| image_url | text | URL de imagen |

### contact
| Columna | Tipo | Descripcion |
|---------|------|-------------|
| id | uuid (PK) | Identificador |
| address | text | Direccion |
| phone | text | Telefono |
| email | text | Correo |
| latitude | float8 | Latitud |
| longitude | float8 | Longitud |
| schedule | text | Horario general |

## SQL de inicializacion

```sql
-- Categorias
create table if not exists categories (
  id text primary key,
  name text not null,
  icon text
);

-- Servicios
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  category_id text references categories(id),
  name text not null,
  description text,
  schedule text,
  image_url text
);

-- Eventos
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date date,
  image_url text
);

-- Banners
create table if not exists banners (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  image_url text
);

-- Galeria
create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null
);

-- Contacto
create table if not exists contact (
  id uuid primary key default gen_random_uuid(),
  address text,
  phone text,
  email text,
  latitude float8,
  longitude float8,
  schedule text
);
```

## Politicas de seguridad (RLS)

Habilita RLS y permite **solo lectura** al rol anonimo:

```sql
alter table categories enable row level security;
alter table services enable row level security;
alter table events enable row level security;
alter table banners enable row level security;
alter table gallery enable row level security;
alter table contact enable row level security;

create policy "lectura publica categories" on categories for select using (true);
create policy "lectura publica services"   on services   for select using (true);
create policy "lectura publica events"     on events     for select using (true);
create policy "lectura publica banners"    on banners    for select using (true);
create policy "lectura publica gallery"    on gallery    for select using (true);
create policy "lectura publica contact"    on contact    for select using (true);
```

La **escritura** queda reservada a usuarios autenticados (proveedor) mediante politicas adicionales o el rol `service_role` desde el panel.

## Storage

Crea un bucket publico (por ejemplo `media`) para las imagenes de servicios, eventos, banners y galeria. Guarda en `image_url` la URL publica del archivo.
