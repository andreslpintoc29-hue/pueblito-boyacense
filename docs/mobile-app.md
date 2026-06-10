# App Móvil — Pueblito Boyacense

## 1. Resumen

La **app móvil** de Pueblito Boyacense está construida con **React Native + Expo**, lo que permite desplegar una sola base de código para **Android** e **iOS**. Expo facilita el desarrollo, las pruebas y la posterior publicación en las tiendas de aplicaciones.

---

## 2. Nombre de la app

- **Nombre oficial:** **Pueblito Boyacense**.

---

## 3. Módulos principales

La aplicación se organiza en los siguientes módulos:

- **Inicio** — Pantalla principal con bienvenida y contenido destacado.
- **Servicios** — Listado de servicios turísticos (restaurantes, hospedajes, tiendas, etc.).
- **Eventos** — Calendario y listado de eventos del pueblo.
- **Galería** — Imágenes organizadas por categorías.
- **Contacto** — Información de contacto de la app.
- **Categorías o detalles** — Vistas de detalle por categoría o por elemento individual.

---

## 4. Navegación

La app utiliza **navegación por pestañas (tabs)** para los módulos principales y **pantallas internas** para las vistas de detalle, permitiendo una experiencia fluida y familiar para el usuario.

---

## 5. Supabase

La app **consume contenido desde Supabase** utilizando la **anon key**. El acceso está limitado a **lectura pública** únicamente para el **contenido visible/publicado**, en línea con las políticas RLS definidas en la base de datos. La app no requiere claves privadas ni service_role.

---

## 6. Datos fallback

Existen **datos de respaldo (fallback)** integrados en la app para **evitar que quede vacía** si Supabase aún no está configurado o no responde. De esta forma, la aplicación siempre muestra contenido base de ejemplo.

---

## 7. Configuración

La configuración sensible se gestiona mediante un archivo **`.env`**, que incluye:

- **URL de Supabase**.
- **Anon key de Supabase**.

---

## 8. Ejecución local

Para ejecutar la app en local:

```bash
cd apps/mobile
npm install
cp .env.example .env
npm start
```

> Recuerda completar los valores de Supabase en el archivo `.env` antes de iniciar.

---

## 9. Publicación

La app se preparará para su publicación en **Google Play** y **App Store** utilizando **Expo / EAS** (Expo Application Services) para la generación de builds y el envío a las tiendas.

---

## 10. Pendientes

- Falta completar la **migración de `src/` a `apps/mobile/src/`** usando `git mv`.
- Tras la migración, **validar las rutas** e imports para asegurar que la app siga funcionando correctamente.
