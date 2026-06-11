"use client";

import React, { useState } from "react";

const colors = {
  bg: "#F7F1E5",
  terracota: "#A64B2A",
  terracotaDark: "#6E2E18",
  verde: "#1B5E20",
  texto: "#2B2118",
  white: "#FFFFFF",
  muted: "rgba(43, 33, 24, 0.7)",
};

const styles = {
  /* Outer canvas (centra el "celular") */
  canvas: {
    backgroundColor: "#2B2118",
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
    boxShadow: "0 0 60px rgba(0,0,0,0.4)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },

  /* Header compacto */
  header: {
    backgroundColor: colors.terracota,
    color: colors.white,
    padding: "18px 20px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  headerDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: colors.verde,
    display: "inline-block",
  },
  headerTitle: {
    fontSize: "18px",
    fontWeight: 800,
    margin: 0,
    letterSpacing: "0.3px",
  },

  /* Content scroll area */
  content: {
    flex: 1,
    padding: "20px 18px 110px",
    boxSizing: "border-box",
  },

  /* Home */
  homeTitle: {
    fontSize: "28px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "8px 0 10px",
  },
  homeText: {
    fontSize: "16px",
    lineHeight: 1.5,
    color: colors.muted,
    margin: "0 0 24px",
  },
  quickCard: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "24px 22px",
    boxShadow: "0 14px 32px rgba(43, 33, 24, 0.12)",
    marginBottom: "16px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  quickTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: colors.verde,
    margin: 0,
  },
  quickText: {
    fontSize: "15px",
    color: colors.muted,
    margin: 0,
  },

  /* Section title */
  pageTitle: {
    fontSize: "24px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "4px 0 18px",
  },

  /* List cards */
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 14px 32px rgba(43, 33, 24, 0.12)",
    marginBottom: "16px",
    boxSizing: "border-box",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: colors.verde,
    margin: "0 0 8px",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: 1.5,
    color: colors.texto,
    margin: "0 0 18px",
  },

  /* Touch buttons */
  btnFull: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "16px",
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
    padding: "16px",
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

  /* Detail */
  detailTitle: {
    fontSize: "26px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "0 0 14px",
  },
  detailDesc: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: colors.texto,
    margin: "0 0 22px",
  },
  detailRow: {
    marginBottom: "14px",
  },
  detailLabel: {
    display: "block",
    fontSize: "13px",
    fontWeight: 800,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
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
    marginTop: "12px",
    boxShadow: "0 10px 24px rgba(37, 211, 102, 0.4)",
  },

  /* Bottom nav fija */
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "430px",
    backgroundColor: colors.white,
    borderTop: "1px solid rgba(43, 33, 24, 0.1)",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 6px",
    boxShadow: "0 -8px 24px rgba(43, 33, 24, 0.12)",
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
    gap: "4px",
    padding: "6px 8px",
    flex: 1,
  },
  navDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  navLabel: {
    fontSize: "12px",
    fontWeight: 700,
  },
};

const servicios = [
  {
    id: "restaurante-boyacense",
    title: "Restaurante Boyacense",
    text: "Cocina tradicional de la región con sabores auténticos del altiplano.",
    horario: "Lunes a Domingo · 8:00 a.m. - 9:00 p.m.",
    ubicacion: "Plazoleta Villa de Leyva, Pueblito Boyacense",
  },
  {
    id: "hospedaje-colonial",
    title: "Hospedaje Colonial",
    text: "Habitaciones acogedoras con arquitectura colonial y atención cálida.",
    horario: "Recepción 24 horas",
    ubicacion: "Plazoleta Tibasosa, Pueblito Boyacense",
  },
  {
    id: "cafe-colonial",
    title: "Café Colonial",
    text: "El mejor café de origen acompañado de repostería artesanal.",
    horario: "Lunes a Domingo · 7:00 a.m. - 8:00 p.m.",
    ubicacion: "Plazoleta Monguí, Pueblito Boyacense",
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

const navItems = [
  { key: "home", label: "Inicio" },
  { key: "services", label: "Servicios" },
  { key: "events", label: "Eventos" },
  { key: "plazas", label: "Plazoletas" },
];

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

  return (
    <div style={styles.canvas}>
      <div style={styles.app}>
        <header style={styles.header}>
          <span style={styles.headerDot} />
          <h1 style={styles.headerTitle}>Pueblito Boyacense</h1>
        </header>

        <div style={styles.content}>
          {/* ============ HOME ============ */}
          {view === "home" && (
            <>
              <h2 style={styles.homeTitle}>Pueblito Boyacense</h2>
              <p style={styles.homeText}>
                Descubre servicios, eventos y cultura en un solo lugar.
              </p>

              <div
                style={styles.quickCard}
                onClick={() => setView("services")}
              >
                <p style={styles.quickTitle}>Servicios</p>
                <p style={styles.quickText}>
                  Restaurantes, hospedajes y cafeterías.
                </p>
              </div>
              <div style={styles.quickCard} onClick={() => setView("events")}>
                <p style={styles.quickTitle}>Eventos</p>
                <p style={styles.quickText}>
                  Agenda cultural durante todo el año.
                </p>
              </div>
              <div style={styles.quickCard} onClick={() => setView("plazas")}>
                <p style={styles.quickTitle}>Plazoletas</p>
                <p style={styles.quickText}>
                  Siete plazoletas inspiradas en Boyacá.
                </p>
              </div>
            </>
          )}

          {/* ============ SERVICES ============ */}
          {view === "services" && (
            <>
              <h2 style={styles.pageTitle}>Servicios</h2>
              {servicios.map((s) => (
                <div key={s.id} style={styles.card}>
                  <h3 style={styles.cardTitle}>{s.title}</h3>
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
                <h2 style={styles.detailTitle}>{selectedService.title}</h2>
                <p style={styles.detailDesc}>{selectedService.text}</p>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Horario</span>
                  <p style={styles.detailValue}>{selectedService.horario}</p>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Ubicación</span>
                  <p style={styles.detailValue}>{selectedService.ubicacion}</p>
                </div>
                <button style={styles.whatsapp}>WhatsApp</button>
              </div>
            </>
          )}

          {/* ============ EVENTS ============ */}
          {view === "events" && (
            <>
              <h2 style={styles.pageTitle}>Eventos</h2>
              {eventos.map((e) => (
                <div key={e.id} style={styles.card}>
                  <h3 style={styles.cardTitle}>{e.title}</h3>
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
                <h2 style={styles.detailTitle}>{selectedEvent.title}</h2>
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
                  <h3 style={styles.cardTitle}>{p.title}</h3>
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
                <h2 style={styles.detailTitle}>{selectedPlaza.title}</h2>
                <p style={styles.detailDesc}>{selectedPlaza.text}</p>
              </div>
            </>
          )}
        </div>

        {/* ============ BOTTOM NAV ============ */}
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
                    ...styles.navDot,
                    backgroundColor: active ? colors.terracota : "rgba(43,33,24,0.25)",
                  }}
                />
                <span
                  style={{
                    ...styles.navLabel,
                    color: active ? colors.terracota : colors.muted,
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
