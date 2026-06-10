# Guia de publicacion - Pueblito Boyacense

Esta guia resume los pasos para publicar la app en **Google Play Store** y **Apple App Store** usando Expo (EAS Build).

## Requisitos

- Cuenta de **Expo** (gratuita).
- **EAS CLI**: `npm install -g eas-cli`.
- Cuenta de **Google Play Console** (pago unico de desarrollador).
- Cuenta de **Apple Developer Program** (membresia anual, para iOS).

## 1. Configurar EAS

```bash
eas login
eas build:configure
```

Esto agrega `eas.json` al proyecto. Define el `projectId` en `app.json` (campo `extra.eas.projectId`).

## 2. Iconos y splash

Coloca en `assets/`:
- `icon.png` (1024x1024)
- `adaptive-icon.png` (Android)
- `splash.png` (pantalla de carga)

El nombre mostrado es **Pueblito Boyacense** (definido en `app.json`).

## 3. Compilar

### Android (AAB para Play Store)
```bash
eas build --platform android --profile production
```

### iOS (para App Store)
```bash
eas build --platform ios --profile production
```

## 4. Publicar

### Google Play Store
1. Crea la app en Play Console con el nombre **Pueblito Boyacense**.
2. Completa ficha: descripcion, capturas, icono, categoria (Viajes y guias locales).
3. Sube el `.aab` generado por EAS.
4. Configura clasificacion de contenido y politica de privacidad.
5. Envia a revision.

### Apple App Store
1. Crea el identificador `com.pueblitoboyacense.app` en Apple Developer.
2. Crea la app en App Store Connect con el nombre **Pueblito Boyacense**.
3. Sube el build con EAS Submit o Transporter:
   ```bash
   eas submit --platform ios
   ```
4. Completa metadatos, capturas y privacidad.
5. Envia a revision.

## 5. Ficha de tienda (store listing)

- **Nombre:** Pueblito Boyacense
- **Descripcion corta:** Guia turistica de Pueblito Boyacense: servicios, eventos y atractivos.
- **Descripcion larga:** Descubre Pueblito Boyacense: restaurantes, hospedajes, artesanias, cafeterias, spa, capilla, galeria, plazoletas, eventos, ubicacion y contacto.
- **Categoria:** Viajes / Guias locales.
- **Politica de privacidad:** requerida por ambas tiendas.

## Notas

- La app es de solo lectura; no recolecta datos sensibles del usuario final.
- El contenido se actualiza desde Supabase sin necesidad de republicar la app, salvo cambios de codigo.
