# Pueblito Boyacense

Aplicación móvil turística profesional para promocionar **Pueblito Boyacense**: sus servicios, eventos, atractivos, plazoletas, restaurantes, hospedajes, artesanías, cafeterías, spa, capilla, galería, ubicación y datos de contacto.

## Modelo de servicio

Esta app funciona bajo un **modelo de servicio administrado**:

- El **cliente final NO tiene acceso** al panel de administración.
- El **desarrollador/proveedor** actualiza contenidos, fotos, servicios, eventos, banners, horarios y datos generales como parte de una **mensualidad**.
- El contenido se gestiona en **Supabase** (base de datos + storage), y la app móvil únicamente **lee** la información publicada.

## Stack tecnológico

- **React Native + Expo** (app móvil iOS / Android)
- **Supabase** (base de datos PostgreSQL, autenticación administrativa y almacenamiento de imágenes)
- **React Navigation** (navegación entre pantallas)
- **GitHub** (control de versiones)
- Publicación en **Google Play Store** y **Apple App Store**

## Estructura del proyecto

```
pueblito-boyacense/
├── App.js                      # Punto de entrada
├── app.json                    # Configuración Expo (nombre, splash, íconos)
├── babel.config.js
├── package.json
├── .env.example                # Variables de entorno de ejemplo
├── assets/                     # Íconos y splash
├── src/
│   ├── navigation/             # Navegadores (stack / tabs)
│   ├── screens/                # Pantallas de la app
│   ├── components/             # Componentes reutilizables
│   ├── services/               # Conexión a Supabase y consultas
│   ├── theme/                  # Colores, tipografías y estilos
│   └── config/                 # Configuración general
└── docs/                       # Documentación del proyecto
```

## Requisitos previos

- Node.js 18 o superior
- npm o yarn
- Expo CLI (`npm install -g expo-cli`) o uso vía `npx`
- Una cuenta de Supabase con un proyecto creado

## Ejecutar localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de variables de entorno
cp .env.example .env
# Edita .env con tus credenciales reales de Supabase

# 3. Iniciar el proyecto
npm start
```

Luego escanea el código QR con la app **Expo Go** (Android/iOS) o ejecuta:

```bash
npm run android   # Emulador / dispositivo Android
npm run ios       # Simulador iOS (solo macOS)
```

## Variables de entorno

Consulta `.env.example`. Nunca subas tu archivo `.env` real al repositorio.

## Contenido turístico incluido

- Inicio con banner y bienvenida a Pueblito Boyacense
- Servicios: restaurantes, hospedajes, artesanías, cafeterías, spa
- Atractivos: plazoletas, capilla, galería
- Eventos y agenda cultural
- Galería de fotos
- Ubicación (mapa) y datos de contacto

## Documentación

Consulta la carpeta [`docs/`](./docs):

- `docs/ARQUITECTURA.md` — arquitectura de la app y modelo administrado
- `docs/SUPABASE.md` — modelo de datos y SQL de inicialización
- `docs/PUBLICACION.md` — guía de publicación en Google Play y App Store

## Licencia

Uso privado bajo contrato de servicio administrado.
