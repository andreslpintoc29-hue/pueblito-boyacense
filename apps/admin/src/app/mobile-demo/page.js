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

/* ============ ICONOS SVG INLINE (outline minimalistas) ============ */
function Icon({ name, size = 22, color = colors.texto, stroke = 2 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      );
    case "services":
      return (
        <svg {...common}>
          <path d="M4 3v7a3 3 0 0 0 3 3v8" />
          <path d="M4 3v4M7 3v4" />
          <path d="M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" />
        </svg>
      );
    case "events":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9h17" />
          <path d="M8 3v4M16 3v4" />
        </svg>
      );
    case "plazas":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <path d="M9.5 21v-5h5v5" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6L4 20z" />
          <path d="M9 9.5c.3 2 1.5 3.2 3.5 3.8" stroke={color} />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s-6-5-6-10a6 6 0 0 1 12 0c0 5-6 10-6 10z" />
          <circle cx="12" cy="11" r="2.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 4l2.3 4.7 5.2.8-3.8 3.7.9 5.1L12 16.8 7.4 18.1l.9-5.1L4.5 9.5l5.2-.8L12 4z" />
        </svg>
      );
    case "parking":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" />
        </svg>
      );
    case "culture":
      return (
        <svg {...common}>
          <path d="M5 21h14" />
          <path d="M6 21v-9M10 21v-9M14 21v-9M18 21v-9" />
          <path d="M4 12h16" />
          <path d="M12 3l8 4H4l8-4z" />
        </svg>
      );
    case "available":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      );
    case "back":
      return (
        <svg {...common}>
          <path d="M15 5l-7 7 7 7" />
        </svg>
      );
    default:
      return null;
  }
}

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
    fontSize: "16px",
    fontWeight: 900,
    letterSpacing: "0.5px",
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
    padding: "18px 10px",
    boxShadow: "0 10px 24px rgba(43, 33, 24, 0.1)",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  quickIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quickLabel: {
    fontSize: "13px",
    fontWeight: 700,
    color: colors.texto,
    margin: 0,
  },

  pageTitle: {
    fontSize: "24px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "4px 0 18px",
  },

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
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  cardTitleWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
    minWidth: 0,
  },
  cardIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    backgroundColor: "rgba(166, 75, 42, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: "18px",
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

  badgeBase: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: "999px",
    padding: "5px 11px",
    fontSize: "12px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

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
    padding: "11px 18px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: "18px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },

  eventBanner: {
    background: "linear-gradient(135deg, #1B5E20 0%, #0F3D14 100%)",
    color: colors.white,
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 16px 34px rgba(27, 94, 32, 0.32)",
    marginBottom: "8px",
    cursor: "pointer",
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

  infoItem: {
    backgroundColor: colors.white,
    borderRadius: "16px",
    padding: "16px 18px",
    boxShadow: "0 8px 20px rgba(43, 33, 24, 0.08)",
    marginBottom: "12px",
    display: "flex",
    gap: "14px",
    alignItems: "center",
  },
  infoIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: "rgba(27, 94, 32, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
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

  detailTitle: {
    fontSize: "24px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: 0,
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
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
  },
  detailRowIcon: {
    width: "34px",
    height: "34px",
    borderRadius: "10px",
    backgroundColor: "rgba(166, 75, 42, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  detailLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: 800,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    marginBottom: "3px",
  },
  detailValue: {
    fontSize: "15px",
    color: colors.texto,
    margin: 0,
  },
  whatsapp: {
    backgroundColor: "#1B7F43",
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "16px",
    fontSize: "17px",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
    marginTop: "16px",
    boxShadow: "0 10px 24px rgba(27, 127, 67, 0.4)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  fab: {
    position: "fixed",
    bottom: "92px",
    left: "50%",
    transform: "translateX(135px)",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#1B7F43",
    color: colors.white,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 12px 28px rgba(27, 127, 67, 0.5)",
    zIndex: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

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
  navLabel: {
    fontSize: "11px",
    fontWeight: 700,
  },
  navIndicator: {
    width: "20px",
    height: "3px",
    borderRadius: "999px",
    marginTop: "1px",
  },
};

const servicios = [
  {
    id: "restaurante-boyacense",
    title: "Restaurante Boyacense",
    icon: "services",
    badge: "Destacado",
    text: "Cocina tradicional de la región con sabores auténticos del altiplano.",
    horario: "Lunes a Domingo · 8:00 a.m. - 9:00 p.m.",
    ubicacion: "Plazoleta Villa de Leyva, Pueblito Boyacense",
  },
  {
    id: "hospedaje-colonial",
    title: "Hospedaje Colonial",
    icon: "home",
    badge: "Disponible",
    text: "Habitaciones acogedoras con arquitectura colonial y atención cálida.",
    horario: "Recepción 24 horas",
    ubicacion: "Plazoleta Tibasosa, Pueblito Boyacense",
  },
  {
    id: "cafe-colonial",
    title: "Café Colonial",
    icon: "clock",
    badge: "Destacado",
    text: "El mejor café de origen acompañado de repostería artesanal.",
    horario: "Lunes a Domingo · 7:00 a.m. - 8:00 p.m.",
    ubicacion: "Plazoleta Monguí, Pueblito Boyacense",
  },
  {
    id: "artesanias-del-pueblito",
    title: "Artesanías del Pueblito",
    icon: "culture",
    badge: "Cultural",
    text: "Piezas hechas a mano que reflejan la cultura y tradición boyacense.",
    horario: "Lunes a Domingo · 9:00 a.m. - 7:00 p.m.",
    ubicacion: "Plazoleta Ráquira, Pueblito Boyacense",
  },
  {
    id: "spa-andino",
    title: "Spa Andino",
    icon: "available",
    badge: "Disponible",
    text: "Experiencias de relajación inspiradas en tradiciones andinas.",
    horario: "Lunes a Domingo · 10:00 a.m. - 8:00 p.m.",
    ubicacion: "Plazoleta Sáchica, Pueblito Boyacense",
  },
  {
    id: "capilla-san-francisco",
    title: "Capilla San Francisco",
    icon: "plazas",
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
    icon: "clock",
    title: "Horario general",
    text: "Abierto todos los días de 8:00 a.m. a 9:00 p.m.",
  },
  {
    icon: "location",
    title: "Ubicación",
    text: "Duitama, Boyacá — entrada principal señalizada.",
  },
  {
    icon: "parking",
    title: "Parqueadero",
    text: "Zona de parqueo disponible para visitantes.",
  },
];

const navItems = [
  { key: "home", label: "Inicio", icon: "home" },
  { key: "services", label: "Servicios", icon: "services" },
  { key: "events", label: "Eventos", icon: "events" },
  { key: "plazas", label: "Plazoletas", icon: "plazas" },
];

function Badge({ badge }) {
  if (badge === "Destacado") {
    return (
      <span
        style={{
          ...styles.badgeBase,
          backgroundColor: "rgba(166, 75, 42, 0.12)",
          color: colors.terracota,
        }}
      >
        <Icon name="star" size={13} color={colors.terracota} />
        Destacado
      </span>
    );
  }
  if (badge === "Cultural") {
    return (
      <span
        style={{
          ...styles.badgeBase,
          backgroundColor: "rgba(27, 94, 32, 0.12)",
          color: colors.verde,
        }}
      >
        <Icon name="culture" size={13} color={colors.verde} />
        Cultural
      </span>
    );
  }
  return (
    <span
      style={{
        ...styles.badgeBase,
        backgroundColor: "rgba(27, 94, 32, 0.1)",
        color: colors.verde,
      }}
    >
      <Icon name="available" size={13} color={colors.verde} />
      Disponible
    </span>
  );
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
                    <Icon name="services" size={22} color={colors.terracota} />
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
                    <Icon name="events" size={22} color={colors.verde} />
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
                    <Icon name="plazas" size={22} color={colors.terracota} />
                  </span>
                  <p style={styles.quickLabel}>Plazoletas</p>
                </div>
              </div>

              <p style={styles.sectionLabel}>Servicios destacados</p>
              {servicios.slice(0, 3).map((s) => (
                <div key={s.id} style={styles.card}>
                  <div style={styles.cardHead}>
                    <div style={styles.cardTitleWrap}>
                      <span style={styles.cardIcon}>
                        <Icon name={s.icon} size={18} color={colors.terracota} />
                      </span>
                      <h3 style={styles.cardTitle}>{s.title}</h3>
                    </div>
                    <Badge badge={s.badge} />
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
                  <span style={styles.infoIcon}>
                    <Icon name={i.icon} size={20} color={colors.verde} />
                  </span>
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
                    <div style={styles.cardTitleWrap}>
                      <span style={styles.cardIcon}>
                        <Icon name={s.icon} size={18} color={colors.terracota} />
                      </span>
                      <h3 style={styles.cardTitle}>{s.title}</h3>
                    </div>
                    <Badge badge={s.badge} />
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
                <Icon name="back" size={16} color={colors.terracotaDark} />
                Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <div style={styles.cardTitleWrap}>
                    <span style={styles.cardIcon}>
                      <Icon
                        name={selectedService.icon}
                        size={18}
                        color={colors.terracota}
                      />
                    </span>
                    <h2 style={styles.detailTitle}>{selectedService.title}</h2>
                  </div>
                  <Badge badge={selectedService.badge} />
                </div>
                <p style={styles.detailDesc}>{selectedService.text}</p>
                <div style={styles.detailRow}>
                  <span style={styles.detailRowIcon}>
                    <Icon name="clock" size={16} color={colors.terracota} />
                  </span>
                  <div>
                    <span style={styles.detailLabel}>Horario</span>
                    <p style={styles.detailValue}>{selectedService.horario}</p>
                  </div>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailRowIcon}>
                    <Icon name="location" size={16} color={colors.terracota} />
                  </span>
                  <div>
                    <span style={styles.detailLabel}>Ubicación</span>
                    <p style={styles.detailValue}>
                      {selectedService.ubicacion}
                    </p>
                  </div>
                </div>
                <button style={styles.whatsapp}>
                  <Icon name="whatsapp" size={20} color={colors.white} />
                  Contactar por WhatsApp
                </button>
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
                    <div style={styles.cardTitleWrap}>
                      <span
                        style={{
                          ...styles.cardIcon,
                          backgroundColor: "rgba(27, 94, 32, 0.1)",
                        }}
                      >
                        <Icon name="events" size={18} color={colors.verde} />
                      </span>
                      <h3 style={styles.cardTitle}>{e.title}</h3>
                    </div>
                    <Badge badge="Cultural" />
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
                <Icon name="back" size={16} color={colors.terracotaDark} />
                Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <div style={styles.cardTitleWrap}>
                    <span
                      style={{
                        ...styles.cardIcon,
                        backgroundColor: "rgba(27, 94, 32, 0.1)",
                      }}
                    >
                      <Icon name="events" size={18} color={colors.verde} />
                    </span>
                    <h2 style={styles.detailTitle}>{selectedEvent.title}</h2>
                  </div>
                  <Badge badge="Cultural" />
                </div>
                <p style={styles.detailDesc}>{selectedEvent.text}</p>
                <div style={styles.detailRow}>
                  <span style={styles.detailRowIcon}>
                    <Icon name="clock" size={16} color={colors.terracota} />
                  </span>
                  <div>
                    <span style={styles.detailLabel}>Fecha</span>
                    <p style={styles.detailValue}>{selectedEvent.fecha}</p>
                  </div>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailRowIcon}>
                    <Icon name="location" size={16} color={colors.terracota} />
                  </span>
                  <div>
                    <span style={styles.detailLabel}>Lugar</span>
                    <p style={styles.detailValue}>{selectedEvent.lugar}</p>
                  </div>
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
                    <div style={styles.cardTitleWrap}>
                      <span style={styles.cardIcon}>
                        <Icon name="plazas" size={18} color={colors.terracota} />
                      </span>
                      <h3 style={styles.cardTitle}>{p.title}</h3>
                    </div>
                    <Badge badge="Cultural" />
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
                <Icon name="back" size={16} color={colors.terracotaDark} />
                Volver
              </button>
              <div style={styles.card}>
                <div style={styles.cardHead}>
                  <div style={styles.cardTitleWrap}>
                    <span style={styles.cardIcon}>
                      <Icon name="plazas" size={18} color={colors.terracota} />
                    </span>
                    <h2 style={styles.detailTitle}>{selectedPlaza.title}</h2>
                  </div>
                  <Badge badge="Cultural" />
                </div>
                <p style={styles.detailDesc}>{selectedPlaza.text}</p>
              </div>
            </>
          )}
        </div>

        {/* FAB WhatsApp solo en Home */}
        {view === "home" && (
          <button style={styles.fab} aria-label="WhatsApp">
            <Icon name="whatsapp" size={26} color={colors.white} />
          </button>
        )}

        {/* Bottom nav */}
        <nav style={styles.bottomNav}>
          {navItems.map((item) => {
            const active = navActive(item.key);
            const iconColor = active ? colors.terracota : colors.muted;
            return (
              <button
                key={item.key}
                style={styles.navBtn}
                onClick={() => setView(item.key)}
              >
                <Icon
                  name={item.icon}
                  size={22}
                  color={iconColor}
                  stroke={active ? 2.2 : 1.8}
                />
                <span
                  style={{
                    ...styles.navLabel,
                    color: iconColor,
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
