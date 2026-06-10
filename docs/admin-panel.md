# Panel Interno — Pueblito Boyacense

## 1. Resumen

El **panel interno** será una **herramienta privada del proveedor/desarrollador** destinada a **administrar el contenido** de la app Pueblito Boyacense. Desde este panel se gestionarán los servicios, eventos, plazoletas, galería, contacto, configuración e información que consume la app móvil.

---

## 2. Acceso

- El **cliente final NO tendrá acceso** al panel.
- El acceso queda **restringido únicamente a usuarios autorizados del proveedor**.

---

## 3. Tecnología sugerida

Se recomienda construir el panel con:

- **Next.js** — Framework web para la interfaz de administración.
- **Supabase Auth** — Autenticación de usuarios internos.
- **Supabase Storage** — Almacenamiento y gestión de imágenes.

---

## 4. Funciones principales

El panel debe permitir administrar:

- **Servicios**
- **Eventos**
- **Plazoletas**
- **Galería**
- **Contacto**
- **Configuración general**
- **Información útil**
- **Preguntas frecuentes**

---

## 5. Imágenes

El panel permitirá **subir y cambiar fotos por módulo** utilizando **Supabase Storage**, gestionando las imágenes de servicios, eventos, plazoletas y galería de forma organizada.

---

## 6. Seguridad

El panel debe implementar:

- **Login** de acceso.
- **Roles internos** para los usuarios autorizados.
- **Variables de entorno** para credenciales y configuración sensible.
- **RLS (Row Level Security)** en la base de datos para proteger los datos.

---

## 7. Modelo comercial

El panel permite al **proveedor** ofrecer la **actualización mensual de contenidos** como parte de su **servicio administrado**, manteniendo el control de la operación y el mantenimiento de la app.

---

## 8. No incluido en MVP

El MVP del panel **NO incluye**:

- **Pagos**
- **Reservas**
- **Chat**
- **Marketplace**
- **Login de turistas**
- **Notificaciones avanzadas**

---

## 9. Pendientes

- Falta **crear la app web en `apps/admin`**.
- Falta **conectarla con Supabase** (Auth, base de datos y Storage).
