"use client";

import React, { useState } from "react";

const colors = {
  bg: "#F7F1E5",
  terracota: "#A64B2A",
  terracotaDark: "#6E2E18",
  verde: "#1B5E20",
  texto: "#2B2118",
  white: "#FFFFFF",
  gris: "#ECE6D8",
  muted: "rgba(43, 33, 24, 0.7)",
};

const styles = {
  page: {
    backgroundColor: colors.bg,
    color: colors.texto,
    minHeight: "100vh",
    width: "100%",
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 32px",
    width: "100%",
    boxSizing: "border-box",
  },

  /* HEADER */
  header: {
    width: "100%",
    backgroundColor: "rgba(43, 33, 24, 0.96)",
    position: "sticky",
    top: 0,
    zIndex: 30,
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    padding: "22px 32px",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "24px",
    fontWeight: 800,
    color: colors.white,
    letterSpacing: "0.3px",
    cursor: "pointer",
  },
  brandDot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: colors.terracota,
    display: "inline-block",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  navLink: {
    fontSize: "17px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
  navPanel: {
    fontSize: "16px",
    fontWeight: 700,
    color: colors.white,
    backgroundColor: colors.verde,
    borderRadius: "12px",
    padding: "12px 22px",
    cursor: "pointer",
    border: "none",
  },

  /* HERO FULL WIDTH */
  hero: {
    width: "100%",
    minHeight: "78vh",
    background:
      "linear-gradient(135deg, #2B2118 0%, #6E2E18 45%, #A64B2A 100%)",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "60px 0",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "56px",
    alignItems: "center",
    width: "100%",
  },
  heroBadge: {
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.14)",
    color: colors.white,
    borderRadius: "999px",
    padding: "10px 20px",
    fontSize: "15px",
    fontWeight: 700,
    marginBottom: "24px",
    letterSpacing: "0.5px",
  },
  heroTitle: {
    fontSize: "60px",
    lineHeight: 1.05,
    fontWeight: 900,
    margin: "0 0 26px",
    color: colors.white,
  },
  heroText: {
    fontSize: "22px",
    lineHeight: 1.6,
    margin: "0 0 40px",
    color: "rgba(255,255,255,0.9)",
    maxWidth: "580px",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: colors.verde,
    color: colors.white,
    border: "none",
    borderRadius: "16px",
    padding: "22px 44px",
    fontSize: "20px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 16px 36px rgba(27, 94, 32, 0.45)",
  },
  btnSecondary: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "16px",
    padding: "22px 44px",
    fontSize: "20px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 16px 36px rgba(166, 75, 42, 0.45)",
  },

  /* MOCKUP GRANDE */
  phoneWrap: {
    display: "flex",
    justifyContent: "center",
  },
  phone: {
    width: "380px",
    maxWidth: "100%",
    backgroundColor: "#0E0B08",
    borderRadius: "52px",
    padding: "20px",
    boxShadow: "0 40px 90px rgba(0, 0, 0, 0.45)",
    boxSizing: "border-box",
  },
  phoneScreen: {
    backgroundColor: colors.white,
    borderRadius: "38px",
    padding: "22px",
    boxSizing: "border-box",
  },
  phoneNotch: {
    width: "140px",
    height: "10px",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: "999px",
    margin: "2px auto 18px",
  },
  phoneHeader: {
    backgroundColor: colors.terracota,
    color: colors.white,
    borderRadius: "22px",
    padding: "22px",
    fontSize: "20px",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "20px",
  },
  phoneLabel: {
    fontSize: "13px",
    fontWeight: 700,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 10px",
  },
  phoneItem: {
    backgroundColor: colors.bg,
    borderRadius: "16px",
    padding: "16px 16px",
    fontSize: "16px",
    fontWeight: 600,
    color: colors.texto,
    marginBottom: "12px",
  },
  phoneEvent: {
    backgroundColor: "rgba(27, 94, 32, 0.1)",
    borderRadius: "16px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: 700,
    color: colors.verde,
    marginBottom: "18px",
  },
  phoneWhatsapp: {
    backgroundColor: "#25D366",
    color: colors.white,
    borderRadius: "16px",
    padding: "18px",
    fontSize: "18px",
    fontWeight: 800,
    textAlign: "center",
  },

  /* SECTIONS */
  sectionLight: {
    backgroundColor: colors.white,
    padding: "90px 0",
  },
  sectionGray: {
    backgroundColor: colors.gris,
    padding: "90px 0",
  },
  sectionBase: {
    backgroundColor: colors.bg,
    padding: "90px 0",
  },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: 900,
    margin: "0 0 16px",
    color: colors.terracotaDark,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: "19px",
    color: colors.muted,
    textAlign: "center",
    margin: "0 auto 56px",
    maxWidth: "680px",
    lineHeight: 1.6,
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "32px",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 24px 60px rgba(43, 33, 24, 0.16)",
    boxSizing: "border-box",
  },
  cardOnWhite: {
    backgroundColor: colors.bg,
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 24px 60px rgba(43, 33, 24, 0.12)",
    boxSizing: "border-box",
  },
  metricNumber: {
    fontSize: "48px",
    fontWeight: 900,
    color: colors.terracota,
    margin: "0 0 10px",
  },
  metricLabel: {
    fontSize: "18px",
    fontWeight: 600,
    color: colors.texto,
    margin: 0,
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: 800,
    margin: "0 0 12px",
    color: colors.verde,
  },
  cardText: {
    fontSize: "17px",
    lineHeight: 1.6,
    margin: "0 0 20px",
    color: colors.texto,
  },
  pill: {
    display: "inline-block",
    backgroundColor: "rgba(166, 75, 42, 0.12)",
    color: colors.terracota,
    borderRadius: "999px",
    padding: "14px 26px",
    fontSize: "17px",
    fontWeight: 700,
    margin: "8px",
  },
  pillWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "6px",
  },

  /* INTERACTIVE BUTTONS */
  btnDetail: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "12px",
    padding: "14px 28px",
    fontSize: "17px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(166, 75, 42, 0.3)",
  },
  btnDetailGreen: {
    backgroundColor: colors.verde,
    color: colors.white,
    border: "none",
    borderRadius: "12px",
    padding: "14px 28px",
    fontSize: "17px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(27, 94, 32, 0.3)",
  },
  btnBack: {
    backgroundColor: "transparent",
    color: colors.terracotaDark,
    border: "2px solid " + colors.terracotaDark,
    borderRadius: "12px",
    padding: "14px 30px",
    fontSize: "17px",
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: "40px",
  },
  detailWrap: {
    maxWidth: "760px",
    margin: "0 auto",
  },
  detailCard: {
    backgroundColor: colors.white,
    borderRadius: "24px",
    padding: "48px",
    boxShadow: "0 28px 64px rgba(43, 33, 24, 0.16)",
    boxSizing: "border-box",
  },
  detailTitle: {
    fontSize: "38px",
    fontWeight: 900,
    color: colors.terracotaDark,
    margin: "0 0 18px",
  },
  detailDesc: {
    fontSize: "19px",
    lineHeight: 1.6,
    color: colors.texto,
    margin: "0 0 28px",
  },
  detailRow: {
    display: "flex",
    gap: "12px",
    alignItems: "baseline",
    marginBottom: "16px",
    fontSize: "18px",
  },
  detailLabel: {
    fontWeight: 800,
    color: colors.verde,
    minWidth: "120px",
  },
  detailValue: {
    color: colors.texto,
  },
  detailWhatsapp: {
    backgroundColor: "#25D366",
    color: colors.white,
    border: "none",
    borderRadius: "16px",
    padding: "20px",
    fontSize: "19px",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
    marginTop: "20px",
    boxShadow: "0 14px 30px rgba(37, 211, 102, 0.4)",
  },

  /* CTA */
  ctaSection: {
    backgroundColor: colors.bg,
    padding: "90px 0",
  },
  cta: {
    background: "linear-gradient(135deg, #A64B2A 0%, #6E2E18 100%)",
    color: colors.white,
    borderRadius: "32px",
    padding: "80px 48px",
    textAlign: "center",
    boxShadow: "0 32px 70px rgba(166, 75, 42, 0.4)",
    boxSizing: "border-box",
  },
  ctaText: {
    fontSize: "38px",
    fontWeight: 900,
    lineHeight: 1.25,
    margin: "0 0 36px",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    backgroundColor: colors.texto,
    padding: "48px 0",
    textAlign: "center",
    fontSize: "16px",
    color: "rgba(255,255,255,0.75)",
  },
};

const metricas = [
  { number: "7", label: "Plazoletas" },
  { number: "20+", label: "Servicios" },
  { number: "365", label: "Eventos todo el año" },
  { number: "Mensual", label: "Actualización de contenido" },
];

const experiencia = [
  "Restaurantes",
  "Hospedajes",
  "Eventos",
  "Artesanías",
  "Ubicación",
  "Información útil",
];

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

const panel = [
  {
    title: "Servicios",
    text: "Gestión profesional de los servicios turísticos publicados.",
  },
  {
    title: "Eventos",
    text: "Programación y actualización de la agenda cultural.",
  },
  {
    title: "Fotos",
    text: "Galería visual administrada con imágenes de alta calidad.",
  },
  {
    title: "Contenido mensual",
    text: "Renovación periódica del contenido para mantener todo vigente.",
  },
];

export default function ClientDemoV3Page() {
  const [view, setView] = useState("home");
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedPlazaId, setSelectedPlazaId] = useState(null);

  const selectedService =
    servicios.find((s) => s.id === selectedServiceId) || null;
  const selectedEvent =
    eventos.find((e) => e.id === selectedEventId) || null;
  const selectedPlaza =
    plazas.find((p) => p.id === selectedPlazaId) || null;

  const goHome = () => {
    setView("home");
    setSelectedServiceId(null);
    setSelectedEventId(null);
    setSelectedPlazaId(null);
  };

  const goServices = () => setView("services");
  const goEvents = () => setView("events");
  const goPlazas = () => setView("plazas");

  const openServiceDetail = (id) => {
    setSelectedServiceId(id);
    setView("serviceDetail");
  };
  const openEventDetail = (id) => {
    setSelectedEventId(id);
    setView("eventDetail");
  };
  const openPlazaDetail = (id) => {
    setSelectedPlazaId(id);
    setView("plazaDetail");
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand} onClick={goHome}>
            <span style={styles.brandDot} />
            Pueblito Boyacense
          </div>
          <nav style={styles.nav}>
            <button style={styles.navLink} onClick={goServices}>
              Servicios
            </button>
            <button style={styles.navLink} onClick={goEvents}>
              Eventos
            </button>
            <button style={styles.navLink} onClick={goPlazas}>
              Plazoletas
            </button>
            <button style={styles.navPanel} onClick={goHome}>
              Panel
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* ===================== VISTA HOME ===================== */}
        {view === "home" && (
          <>
            <section style={styles.hero}>
              <div style={styles.container}>
                <div style={styles.heroGrid}>
                  <div>
                    <span style={styles.heroBadge}>
                      Turismo · Cultura · Gastronomía
                    </span>
                    <h1 style={styles.heroTitle}>
                      Una app turística para vivir Pueblito Boyacense
                    </h1>
                    <p style={styles.heroText}>
                      Servicios, eventos, cultura, gastronomía y experiencias
                      locales en una plataforma móvil administrada
                      profesionalmente.
                    </p>
                    <div style={styles.heroButtons}>
                      <button style={styles.btnPrimary} onClick={goServices}>
                        Ver experiencia turística
                      </button>
                      <button style={styles.btnSecondary} onClick={goEvents}>
                        Ver eventos
                      </button>
                    </div>
                  </div>

                  <div style={styles.phoneWrap}>
                    <div style={styles.phone}>
                      <div style={styles.phoneScreen}>
                        <div style={styles.phoneNotch} />
                        <div style={styles.phoneHeader}>Pueblito Boyacense</div>
                        <p style={styles.phoneLabel}>Servicios destacados</p>
                        <div style={styles.phoneItem}>Restaurante Boyacense</div>
                        <div style={styles.phoneItem}>Hospedaje Colonial</div>
                        <div style={styles.phoneItem}>Café Colonial</div>
                        <p style={styles.phoneLabel}>Evento próximo</p>
                        <div style={styles.phoneEvent}>
                          Bazarte — Este fin de semana
                        </div>
                        <div style={styles.phoneWhatsapp}>WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section style={styles.sectionLight}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>En cifras</h2>
                <p style={styles.sectionSubtitle}>
                  Una plataforma con presencia real en todo el Pueblito.
                </p>
                <div style={styles.metricsGrid}>
                  {metricas.map((m) => (
                    <div key={m.label} style={styles.cardOnWhite}>
                      <p style={styles.metricNumber}>{m.number}</p>
                      <p style={styles.metricLabel}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.sectionGray}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Experiencia del visitante</h2>
                <p style={styles.sectionSubtitle}>
                  Todo lo que el turista necesita, en un solo lugar.
                </p>
                <div style={styles.card}>
                  <div style={styles.pillWrap}>
                    {experiencia.map((e) => (
                      <span key={e} style={styles.pill}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section style={styles.sectionLight}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Servicios destacados</h2>
                <p style={styles.sectionSubtitle}>
                  Lo mejor del Pueblito, listo para descubrir.
                </p>
                <div style={styles.grid}>
                  {servicios.map((s) => (
                    <div key={s.id} style={styles.cardOnWhite}>
                      <h3 style={styles.cardTitle}>{s.title}</h3>
                      <p style={styles.cardText}>{s.text}</p>
                      <button
                        style={styles.btnDetail}
                        onClick={() => openServiceDetail(s.id)}
                      >
                        Ver detalle
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.sectionGray}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Eventos</h2>
                <p style={styles.sectionSubtitle}>
                  Una agenda cultural viva durante todo el año.
                </p>
                <div style={styles.grid}>
                  {eventos.map((e) => (
                    <div key={e.id} style={styles.card}>
                      <h3 style={styles.cardTitle}>{e.title}</h3>
                      <p style={styles.cardText}>{e.text}</p>
                      <button
                        style={styles.btnDetailGreen}
                        onClick={() => openEventDetail(e.id)}
                      >
                        Ver evento
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.sectionLight}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Plazoletas</h2>
                <p style={styles.sectionSubtitle}>
                  Siete plazoletas inspiradas en los pueblos más bellos de
                  Boyacá.
                </p>
                <div style={styles.grid}>
                  {plazas.map((p) => (
                    <div key={p.id} style={styles.cardOnWhite}>
                      <h3 style={styles.cardTitle}>{p.title}</h3>
                      <p style={styles.cardText}>{p.text}</p>
                      <button
                        style={styles.btnDetail}
                        onClick={() => openPlazaDetail(p.id)}
                      >
                        Ver plazoleta
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.sectionGray}>
              <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Panel administrado</h2>
                <p style={styles.sectionSubtitle}>
                  Una plataforma gestionada profesionalmente para mantener todo
                  al día.
                </p>
                <div style={styles.grid}>
                  {panel.map((p) => (
                    <div key={p.title} style={styles.card}>
                      <h3 style={styles.cardTitle}>{p.title}</h3>
                      <p style={{ ...styles.cardText, marginBottom: 0 }}>
                        {p.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.ctaSection}>
              <div style={styles.container}>
                <div style={styles.cta}>
                  <p style={styles.ctaText}>
                    Una solución digital administrada para fortalecer el turismo
                    del Pueblito Boyacense.
                  </p>
                  <button style={styles.btnPrimary} onClick={goServices}>
                    Solicitar demo
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ===================== VISTA SERVICES ===================== */}
        {view === "services" && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goHome}>
                ← Volver
              </button>
              <h2 style={styles.sectionTitle}>Servicios turísticos</h2>
              <p style={styles.sectionSubtitle}>
                Explora los servicios disponibles y abre su detalle.
              </p>
              <div style={styles.grid}>
                {servicios.map((s) => (
                  <div key={s.id} style={styles.card}>
                    <h3 style={styles.cardTitle}>{s.title}</h3>
                    <p style={styles.cardText}>{s.text}</p>
                    <button
                      style={styles.btnDetail}
                      onClick={() => openServiceDetail(s.id)}
                    >
                      Ver detalle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== VISTA SERVICE DETAIL ===================== */}
        {view === "serviceDetail" && selectedService && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goServices}>
                ← Volver
              </button>
              <div style={styles.detailWrap}>
                <div style={styles.detailCard}>
                  <h2 style={styles.detailTitle}>{selectedService.title}</h2>
                  <p style={styles.detailDesc}>{selectedService.text}</p>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Horario</span>
                    <span style={styles.detailValue}>
                      {selectedService.horario}
                    </span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Ubicación</span>
                    <span style={styles.detailValue}>
                      {selectedService.ubicacion}
                    </span>
                  </div>
                  <button style={styles.detailWhatsapp}>
                    Contactar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== VISTA EVENTS ===================== */}
        {view === "events" && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goHome}>
                ← Volver
              </button>
              <h2 style={styles.sectionTitle}>Eventos culturales</h2>
              <p style={styles.sectionSubtitle}>
                Descubre la agenda cultural del Pueblito Boyacense.
              </p>
              <div style={styles.grid}>
                {eventos.map((e) => (
                  <div key={e.id} style={styles.card}>
                    <h3 style={styles.cardTitle}>{e.title}</h3>
                    <p style={styles.cardText}>{e.text}</p>
                    <button
                      style={styles.btnDetailGreen}
                      onClick={() => openEventDetail(e.id)}
                    >
                      Ver evento
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== VISTA EVENT DETAIL ===================== */}
        {view === "eventDetail" && selectedEvent && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goEvents}>
                ← Volver
              </button>
              <div style={styles.detailWrap}>
                <div style={styles.detailCard}>
                  <h2 style={styles.detailTitle}>{selectedEvent.title}</h2>
                  <p style={styles.detailDesc}>{selectedEvent.text}</p>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Fecha</span>
                    <span style={styles.detailValue}>
                      {selectedEvent.fecha}
                    </span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Lugar</span>
                    <span style={styles.detailValue}>
                      {selectedEvent.lugar}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== VISTA PLAZAS ===================== */}
        {view === "plazas" && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goHome}>
                ← Volver
              </button>
              <h2 style={styles.sectionTitle}>Plazoletas</h2>
              <p style={styles.sectionSubtitle}>
                Siete plazoletas que recrean los pueblos más bellos de Boyacá.
              </p>
              <div style={styles.grid}>
                {plazas.map((p) => (
                  <div key={p.id} style={styles.card}>
                    <h3 style={styles.cardTitle}>{p.title}</h3>
                    <p style={styles.cardText}>{p.text}</p>
                    <button
                      style={styles.btnDetail}
                      onClick={() => openPlazaDetail(p.id)}
                    >
                      Ver plazoleta
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== VISTA PLAZA DETAIL ===================== */}
        {view === "plazaDetail" && selectedPlaza && (
          <section style={styles.sectionBase}>
            <div style={styles.container}>
              <button style={styles.btnBack} onClick={goPlazas}>
                ← Volver
              </button>
              <div style={styles.detailWrap}>
                <div style={styles.detailCard}>
                  <h2 style={styles.detailTitle}>{selectedPlaza.title}</h2>
                  <p style={styles.detailDesc}>{selectedPlaza.text}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <footer style={styles.footer}>
          Pueblito Boyacense — Demo visual premium v3
        </footer>
      </main>
    </div>
  );
}
