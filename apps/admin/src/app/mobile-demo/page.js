"use client";

import React, { useState } from "react";

const colors = {
  bg: "#F7F1E5",
  terracota: "#A64B2A",
  terracotaDark: "#6E2E18",
  verde: "#1B5E20",
  texto: "#2B2118",
  white: "#FFFFFF",
  muted: "rgba(43, 33, 24, 0.65)",
  line: "rgba(43, 33, 24, 0.08)",
};

const styles = {
  canvas: {
    backgroundColor: "#241B14",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  app: {
    width: "100%",
    maxWidth: "430px",
    minHeight: "100vh",
    backgroundColor: colors.bg,
    color: colors.texto,
    position: "relative",
    boxShadow: "0 0 80px rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },

  /* Header elegante con degradado */
  header: {
    background: "linear-gradient(135deg, #A64B2A 0%, #6E2E18 100%)",
    color: colors.white,
    padding: "22px 22px 24px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    boxShadow: "0 10px 28px rgba(166, 75, 42, 0.35)",
  },
  headerTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  headerLogo: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: 900,
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: 800,
    margin: 0,
    letterSpacing: "0.3px",
  },
  headerSub: {
    fontSize: "13px",
    margin: "2px 0 0",
    color: "rgba(255,255,255,0.85)",
    fontWeight: 500,
  },

  content: {
    flex: 1,
    padding: "22px 18px 120px",
    boxSizing: "border-box",
  },

  /* Home */
  welcome: {
    fontSize: "26px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "4px 0 6px",
  },
  welcomeText: {
    fontSize: "15px",
    lineHeight: 1.5,
    color: colors.muted,
    margin: "0 0 22px",
  },

  sectionLabel: {
    fontSize: "13px",
    fontWeight: 800,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    margin: "26px 0 12px",
  },

  quickRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "6px",
  },
  quickCard: {
    backgroundColor: colors.white,
    borderRadius: "18px",
    padding: "16px 10px",
    boxShadow: "0 10px 24px rgba(43, 33, 24, 0.1)",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  quickIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  quickLabel: {
    fontSize: "13px",
    fontWeight: 700,
    color: colors.texto,
    margin: 0,
  },

  /* Page title */
  pageTitle: {
    fontSize: "24px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "4px 0 18px",
  },

  /* Cards */
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 14px 32px rgba(43, 33, 24, 0.1)",
    marginBottom: "16px",
    boxSizing: "border-box",
  },
  cardHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "19px",
    fontWeight: 800,
    color: colors.verde,
    margin: 0,
  },
  cardText: {
    fontSize: "15px",
    lineHeight: 1.5,
    color: colors.texto,
    margin: "0 0 16px",
  },

  /* Badges */
  badgeDestacado: {
    backgroundColor: "rgba(166, 75, 42, 0.12)",
    color: colors.terracota,
    borderRadius: "999px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
  badgeCultural: {
    backgroundColor: "rgba(27, 94, 32, 0.12)",
    color: colors.verde,
    borderRadius: "999px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
  badgeDisponible: {
    backgroundColor: "rgba(37, 211, 102, 0.15)",
    color: "#128C3E",
    borderRadius: "999px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  /* Buttons */
  btnFull: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "15px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 8px 20px rgba(166, 75, 42, 0.3)",
  },
  btnFullGreen: {
    backgroundColor: colors.verde,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "15px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 8px 20px rgba(27, 94, 32, 0.3)",
  },
  btnBack: {
    backgroundColor: "transparent",
    color: colors.terracotaDark,
    border: "2px solid " + colors.terracotaDark,
    borderRadius: "14px",
    padding: "12px 18px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: "18px",
  },

  /* Highlight (próximo evento) */
  eventBanner: {
    background: "linear-gradient(135deg, #1B5E20 0%, #0F3D14 100%)",
    color: colors.white,
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 16px 34px rgba(27, 94, 32, 0.32)",
    marginBottom: "8px",
  },
  eventBannerLabel: {
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    opacity: 0.85,
    margin: "0 0 8px",
  },
  eventBannerTitle: {
    fontSize: "22px",
    fontWeight: 900,
    margin: "0 0 6px",
  },
  eventBannerText: {
    fontSize: "14px",
    lineHeight: 1.5,
    margin: 0,
    opacity: 0.92,
  },

  /* Info útil */
  infoItem: {
    backgroundColor: colors.white,
    borderRadius: "16px",
    padding: "16px 18px",
    boxShadow: "0 8px 20px rgba(43, 33, 24, 0.08)",
    marginBottom: "12px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: "22px",
  },
  infoTextWrap: { flex: 1 },
  infoTitle: {
    fontSize: "15px",
    fontWeight: 800,
    color: colors.texto,
    margin: "0 0 2px",
  },
  infoText: {
    fontSize: "13px",
    color: colors.muted,
    margin: 0,
  },

  /* Detail */
  detailTitle: {
    fontSize: "26px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "0 0 6px",
  },
  detailDesc: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: colors.texto,
    margin: "14px 0 22px",
  },
  detailRow: {
    marginBottom: "14px",
    borderBottom: "1px solid " + colors.line,
    paddingBottom: "14px",
  },
  detailLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: 800,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    marginBottom: "4px",
  },
  detailValue: {
    fontSize: "16px",
    color: colors.texto,
    margin: 0,
  },
  whatsapp: {
    backgroundColor: "#25D366",
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "18px",
    fontSize: "17px",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
    marginTop: "16px",
    boxShadow: "0 10px 24px rgba(37, 211, 102, 0.4)",
  },

  /* FAB WhatsApp */
  fab: {
    position: "fixed",
    bottom: "92px",
    left: "50%",
    transform: "translateX(135px)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: colors.white,
    border: "none",
    fontSize: "26px",
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 12px 28px rgba(37, 211, 102, 0.5)",
    zIndex: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Bottom nav */
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "430px",
    backgroundColor: colors.white,
    borderTop: "1px solid " + colors.line,
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 6px 14px",
    boxShadow: "0 -10px 28px rgba(43, 33, 24, 0.12)",
    zIndex: 20,
    boxSizing: "border-box",
  },
  navBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    padding: "6px 4px",
    flex: 1,
  },
  navIcon: {
    fontSize: "20px",
    lineHeight: 1,
  },
  navLabel: {
    fontSize: "11px",
    fontWeight: 700,
  },
  navIndicator: {
    width: "20px",
    height: "3px",
    borderRadius: "999px",
    marginTop: "2px",
  },
};

const servicios = [
  {
    id: "restaurante-boyacense",
    title: "Restaurante Boyacense",
    icon: "🍽️",
    badge: "Destacado",
    text: "Cocina tradicional de la región con sabores auténticos del altiplano.",
    horario: "Lunes a Domingo · 8:00 a.m. - 9:00 p.m.",
    ubicacion: "Plazoleta Villa de Leyva, Pueblito Boyacense",
  },
  {
    id: "hospedaje-colonial",
    title: "Hospedaje Colonial",
    icon: "🏨",
    badge: "Disponible",
    text: "Habitaciones acogedoras con arquitectura colonial y atención cálida.",
    horario: "Recepción 24 horas",
    ubicacion: "Plazoleta Tibasosa, Pueblito Boyacense",
  },
  {
    id: "cafe-colonial",
    title: "Café Colonial",
    icon: "☕",
    badge: "Destacado",
    text: "El mejor café de origen acompañado de repostería artesanal.",
    horario: "Lunes a Domingo · 7:00 a.m. - 8:00 p.m.",
    ubicacion: "Plazoleta Monguí, Pueblito Boyacense",
  },
  {
    id: "artesanias-del-pueblito",
    title: "Artesanías del Pueblito",
    icon: "🧶",
    badge: "Cultural",
    text: "Piezas hechas a mano que reflejan la cultura y tradición boyacense.",
    horario: "Lunes a Domingo · 9:00 a.m. - 7:00 p.m.",
    ubicacion: "Plazoleta Ráquira, Pueblito Boyacense",
  },
  {
    id: "spa-andino",
    title: "Spa Andino",
    icon: "🌿",
    badge: "Disponible",
    text: "Experiencias de relajación inspiradas en tradiciones andinas.",
    horario: "Lunes a Domingo · 10:00 a.m. - 8:00 p.m.",
    ubicacion: "Plazoleta Sáchica, Pueblito Boyacense",
  },
  {
    id: "capilla-san-francisco",
    title: "Capilla San Francisco",
    icon: "⛪",
    badge: "Cultural",
    text: "Espacio de fe y arquitectura colonial para visitar y contemplar.",
    horario: "Lunes a Domingo · 7:00 a.m. - 6:00 p.m.",
    ubicacion: "Plazoleta central, Pueblito Boyacense",
  },
];

const eventos = [
  {
    id: "bazarte",
    title: "Bazarte",
    text: "Feria de arte y artesanía que reúne a creadores de toda la región.",
    fecha: "15 y 16 de marzo (demo)",
    lugar: "Plazoleta central, Pueblito Boyacense",
  },
  {
    id: "pueblito-brilla",
    title: "Pueblito Brilla",
    text: "Espectáculo de luces e iluminación que transforma el pueblito.",
    fecha: "Del 1 al 24 de diciembre (demo)",
    lugar: "Todas las plazoletas, Pueblito Boyacense",
  },
  {
    id: "semana-santa-cultural",
    title: "Semana Santa Cultural",
    text: "Tradición, fe y cultura en una celebración inolvidable.",
    fecha: "Semana Santa (demo)",
    lugar: "Capilla y plazoletas, Pueblito Boyacense",
  },
];

const plazas = [
  {
    id: "villa-de-leyva",
    title: "Villa de Leyva",
    text: "Inspirada en la histórica villa colonial, con su amplia plaza empedrada y arquitectura blanca tradicional.",
  },
  {
    id: "tibasosa",
    title: "Tibasosa",
    text: "Reconocida por la feijoa y sus tradiciones, refleja el ambiente cálido y dulce de la región.",
  },
  {
    id: "tenza",
    title: "Tenza",
    text: "Tierra de artesanías en fique y tejidos, símbolo del trabajo manual boyacense.",
  },
  {
    id: "sachica",
    title: "Sáchica",
    text: "Conocida por su tradición religiosa y los viñedos del valle, evoca fe y cultura.",
  },
  {
    id: "el-cocuy",
    title: "El Cocuy",
    text: "Inspirada en la majestuosa sierra nevada, representa la naturaleza y la aventura.",
  },
  {
    id: "mongui",
    title: "Monguí",
    text: "Catalogado entre los pueblos más bellos, destaca por su basílica y la elaboración de balones.",
  },
  {
    id: "raquira",
    title: "Ráquira",
    text: "Capital artesanal de Colombia, famosa por su cerámica y colores vibrantes.",
  },
];

const infoUtil = [
  {
    icon: "🕐",
    title: "Horario general",
    text: "Abierto todos los días de 8:00 a.m. a 9:00 p.m.",
  },
  {
    icon: "📍",
    title: "Ubicación",
    text: "Duitama, Boyacá — entrada principal señalizada.",
  },
  {
    icon: "🅿️",
    title: "Parqueadero",
    text: "Zona de parqueo disponible para visitantes.",
  },
];

const navItems = [
  { key: "home", label: "Inicio", icon: "🏠" },
  { key: "services", label: "Servicios", icon: "🍽️" },
  { key: "events", label: "Eventos", icon: "🎉" },
  { key: "plazas", label: "Plazoletas", icon: "🏛️" },
];

function badgeStyle(badge) {
  if (badge === "Destacado") return styles.badgeDestacado;
  if (badge === "Cultural") return styles.badgeCultural;
  return styles.badgeDisponible;
}

export default function MobileDemoPage() {
  const [view, setView] = useState("home");
  const [serviceId, setServiceId] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [plazaId, setPlazaId] = useState(null);

  const selectedService = servicios.find((s) => s.id === serviceId) || null;
  const selectedEvent = eventos.find((e) => e.id === eventId) || null;
  const selectedPlaza = plazas.find((p) => p.id === plazaId) || null;

  const navActive = (key) => {
    if (key === "home") return view === "home";
    if (key === "services")
      return view === "services" || view === "serviceDetail";
    if (key === "events") return view === "events" || view === "eventDetail";
    if (key === "plazas") return view === "plazas" || view === "plazaDetail";
    return false;
  };

  const proximoEvento = eventos[0];

  return (
    <div style={styles.canvas}>
      <div style={styles.app}>
        <header style={styles.header}>
          <div style={styles.headerTop}>
            <div style={styles.headerLogo}>PB</div>
            <div>
              <h1 style={styles.headerTitle}>Pueblito Boyacense</h1>
              <p style={styles.headerSub}>Turismo · Cultura · Gastronomía</p>
            </div>
          </div>
        </header>

        <div style={styles.content}>
          {/* ============ HOME ============ */}
          {view === "home" && (
            <>
              <h2 style={styles.welcome}>¡Bienvenido!</h2>
              <p style={styles.welcomeText}>
                Descubre servicios, eventos y cultura en un solo lugar.
              </p>

              <p style={styles.sectionLabel}>Accesos rápidos</p>
              <div style={styles.quickRow}>
                <div
                  style={styles.quickCard}
                  onClick={() => setView("services")}
                >
                  <span
                    style={{
                      ...styles.quickIcon,
                      backgroundColor: "rgba(166, 75, 42, 0.12)",
                    }}
                  >
                    🍽️
                  </span>
                  <p style={styles.quickLabel}>Servicios</p>
                </div>
                <div style={styles.quickCard} onClick={() => setView("events")}>
                  <span
                    style={{
                      ...styles.quickIcon,
                      backgroundColor: "rgba(27, 94, 32, 0.12)",
                    }}
                  >
                    🎉
                  </span>
                  <p style={styles.quickLabel}>Eventos</p>
                </div>
                <div style={styles.quickCard} onClick={() => setView("plazas")}>
                  <span
                    style={{
                      ...styles.quickIcon,
                      backgroundColor: "rgba(166, 75, 42, 0.12)",
                    }}
                  >
                    🏛️
                  </span>
                  <p style={styles.quickLabel}>Plazoletas</p>
                </div>
              </div>

              <p style={styles.sectionLabel}>Servicios destacados</p>
              {servicios.slice(0, 3).map((s) => (
                <div key={s.id} style={styles.card}>
                  <div style={styles.cardHead}>
                    <h3 style={styles.cardTitle}>
                      {s.icon} {s.title}
                    </h3>
                    <span style={badgeStyle(s.badge)}>{s.badge}</span>
                  </div>
                  <p style={styles.cardText}>{s.text}</p>
                  <button
                    style={styles.btnFull}
                    onClick={() => {
                      setServiceId(s.id);
                      setView("serviceDetail");
                    }}
                  >
                    Ver detalle
                  </button>
                </div>
              ))}

              <p style={styles.sectionLabel}>Próximo evento</p>
              <div
                style={styles.eventBanner}
                onClick={() => {
                  setEventId(proximoEvento.id);
                  setView("eventDetail");
                }}
              >
                <p style={styles.eventBannerLabel}>No te lo pierdas</p>
                <h3 style={styles.eventBannerTitle}>{proximoEvento.title}</h3>
                <p style={styles.eventBannerText}>
                  {proximoEvento.fecha} · {proximoEvento.text}
                </p>
              </div>

              <p style={styles.sectionLabel}>Información útil</p>
              {infoUtil.map((i) => (
                <div key={i.title} style={styles.infoItem}>
                  <span style={styles.infoIcon}>{i.icon}</span>
                  <div style={styles.infoTextWrap}>
                    <p style={styles.infoTitle}>{i.title}</p>
                    <p style={styles.infoText}>{i.text}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ============ SERVICES ============ */}
          {view === "services" && (
            <>
              <h2 style={styles.pageTitle}>Servicios</h2>
              {servicios.map((s) => (
                <div key={s.id} style={styles.card}>
                  <div style={styles.cardHead}>
                    <h3 style={styles.cardTitle}>
                      {s.icon} {s.title}
                    </h3>
                    <span style={badgeStyle(s.badge)}>{s.badge}</span>
                  </div>
                  <p style={styles.cardText}>{s.text}</p>
                  <button
                    style={styles.btnFull}
                    onClick={() => {
                      setServiceId(s.id);
                      setView("serviceDetail");
                    }}
                  >
                    Ver detalle
                  </button>
                </div>
              ))}
            </>
          )}

          {/* ============ SERVICE DETAIL ============ */}
          {view === "serviceDetail" && selectedService && (
            <>
              <button
                style={styles.btnBack}
                onClick={() => setView("services")}
              >
                ← Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <h2 style={styles.detailTitle}>
                    {selectedService.icon} {selectedService.title}
                  </h2>
                  <span style={badgeStyle(selectedService.badge)}>
                    {selectedService.badge}
                  </span>
                </div>
                <p style={styles.detailDesc}>{selectedService.text}</p>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Horario</span>
                  <p style={styles.detailValue}>{selectedService.horario}</p>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Ubicación</span>
                  <p style={styles.detailValue}>{selectedService.ubicacion}</p>
                </div>
                <button style={styles.whatsapp}>Contactar por WhatsApp</button>
              </div>
            </>
          )}

          {/* ============ EVENTS ============ */}
          {view === "events" && (
            <>
              <h2 style={styles.pageTitle}>Eventos</h2>
              {eventos.map((e) => (
                <div key={e.id} style={styles.card}>
                  <div style={styles.cardHead}>
                    <h3 style={styles.cardTitle}>{e.title}</h3>
                    <span style={styles.badgeCultural}>Cultural</span>
                  </div>
                  <p style={styles.cardText}>{e.text}</p>
                  <button
                    style={styles.btnFullGreen}
                    onClick={() => {
                      setEventId(e.id);
                      setView("eventDetail");
                    }}
                  >
                    Ver evento
                  </button>
                </div>
              ))}
            </>
          )}

          {/* ============ EVENT DETAIL ============ */}
          {view === "eventDetail" && selectedEvent && (
            <>
              <button style={styles.btnBack} onClick={() => setView("events")}>
                ← Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <h2 style={styles.detailTitle}>{selectedEvent.title}</h2>
                  <span style={styles.badgeCultural}>Cultural</span>
                </div>
                <p style={styles.detailDesc}>{selectedEvent.text}</p>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Fecha</span>
                  <p style={styles.detailValue}>{selectedEvent.fecha}</p>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Lugar</span>
                  <p style={styles.detailValue}>{selectedEvent.lugar}</p>
                </div>
              </div>
            </>
          )}

          {/* ============ PLAZAS ============ */}
          {view === "plazas" && (
            <>
              <h2 style={styles.pageTitle}>Plazoletas</h2>
              {plazas.map((p) => (
                <div key={p.id} style={styles.card}>
                  <div style={styles.cardHead}>
                    <h3 style={styles.cardTitle}>{p.title}</h3>
                    <span style={styles.badgeCultural}>Cultural</span>
                  </div>
                  <p style={styles.cardText}>{p.text}</p>
                  <button
                    style={styles.btnFull}
                    onClick={() => {
                      setPlazaId(p.id);
                      setView("plazaDetail");
                    }}
                  >
                    Ver plazoleta
                  </button>
                </div>
              ))}
            </>
          )}

          {/* ============ PLAZA DETAIL ============ */}
          {view === "plazaDetail" && selectedPlaza && (
            <>
              <button style={styles.btnBack} onClick={() => setView("plazas")}>
                ← Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <h2 style={styles.detailTitle}>{selectedPlaza.title}</h2>
                  <span style={styles.badgeCultural}>Cultural</span>
                </div>
                <p style={styles.detailDesc}>{selectedPlaza.text}</p>
              </div>
            </>
          )}
        </div>

        {/* FAB WhatsApp solo en Home */}
        {view === "home" && (
          <button style={styles.fab} aria-label="WhatsApp">
            💬
          </button>
        )}

        {/* Bottom nav */}
        <nav style={styles.bottomNav}>
          {navItems.map((item) => {
            const active = navActive(item.key);
            return (
              <button
                key={item.key}
                style={styles.navBtn}
                onClick={() => setView(item.key)}
              >
                <span
                  style={{
                    ...styles.navIcon,
                    filter: active ? "none" : "grayscale(60%)",
                    opacity: active ? 1 : 0.55,
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    ...styles.navLabel,
                    color: active ? colors.terracota : colors.muted,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    ...styles.navIndicator,
                    backgroundColor: active ? colors.terracota : "transparent",
                  }}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
