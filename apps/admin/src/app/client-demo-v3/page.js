"use client";

import React from "react";

const colors = {
  bg: "#F7F1E5",
  terracota: "#A64B2A",
  verde: "#1B5E20",
  texto: "#2B2118",
  white: "#FFFFFF",
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
    padding: "0 28px",
    width: "100%",
    boxSizing: "border-box",
  },
  header: {
    width: "100%",
    backgroundColor: "rgba(247, 241, 229, 0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(166, 75, 42, 0.15)",
    position: "sticky",
    top: 0,
    zIndex: 20,
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    padding: "22px 28px",
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
    color: colors.terracota,
    letterSpacing: "0.3px",
  },
  brandDot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: colors.verde,
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
    color: colors.texto,
    textDecoration: "none",
    cursor: "pointer",
  },
  navPanel: {
    fontSize: "16px",
    fontWeight: 700,
    color: colors.white,
    backgroundColor: colors.verde,
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  heroWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "48px",
    alignItems: "center",
    padding: "72px 0 56px",
  },
  heroTitle: {
    fontSize: "52px",
    lineHeight: 1.1,
    fontWeight: 900,
    margin: "0 0 22px",
    color: colors.terracota,
  },
  heroText: {
    fontSize: "20px",
    lineHeight: 1.6,
    margin: "0 0 36px",
    color: colors.texto,
    maxWidth: "560px",
  },
  heroButtons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "18px 34px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 12px 28px rgba(166, 75, 42, 0.32)",
  },
  btnSecondary: {
    backgroundColor: "transparent",
    color: colors.verde,
    border: "2px solid " + colors.verde,
    borderRadius: "14px",
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
  },
  phoneWrap: {
    display: "flex",
    justifyContent: "center",
  },
  phone: {
    width: "320px",
    maxWidth: "100%",
    backgroundColor: colors.white,
    borderRadius: "40px",
    padding: "18px",
    boxShadow: "0 30px 70px rgba(43, 33, 24, 0.25)",
    border: "10px solid #2B2118",
    boxSizing: "border-box",
  },
  phoneNotch: {
    width: "120px",
    height: "8px",
    backgroundColor: "rgba(43, 33, 24, 0.3)",
    borderRadius: "999px",
    margin: "4px auto 16px",
  },
  phoneHeader: {
    backgroundColor: colors.terracota,
    color: colors.white,
    borderRadius: "20px",
    padding: "18px",
    fontSize: "18px",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "16px",
  },
  phoneLabel: {
    fontSize: "13px",
    fontWeight: 700,
    color: colors.verde,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 8px",
  },
  phoneItem: {
    backgroundColor: colors.bg,
    borderRadius: "14px",
    padding: "12px 14px",
    fontSize: "15px",
    fontWeight: 600,
    color: colors.texto,
    marginBottom: "10px",
  },
  phoneEvent: {
    backgroundColor: "rgba(27, 94, 32, 0.1)",
    borderRadius: "14px",
    padding: "14px",
    fontSize: "15px",
    fontWeight: 700,
    color: colors.verde,
    marginBottom: "16px",
  },
  phoneWhatsapp: {
    backgroundColor: "#25D366",
    color: colors.white,
    borderRadius: "14px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: 800,
    textAlign: "center",
  },
  section: {
    padding: "52px 0",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: 800,
    margin: "0 0 14px",
    color: colors.verde,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: "18px",
    color: colors.muted,
    textAlign: "center",
    margin: "0 auto 40px",
    maxWidth: "640px",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "26px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "22px",
    padding: "32px",
    boxShadow: "0 18px 44px rgba(43, 33, 24, 0.1)",
    boxSizing: "border-box",
  },
  metricNumber: {
    fontSize: "42px",
    fontWeight: 900,
    color: colors.terracota,
    margin: "0 0 8px",
  },
  metricLabel: {
    fontSize: "17px",
    fontWeight: 600,
    color: colors.texto,
    margin: 0,
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: 800,
    margin: "0 0 10px",
    color: colors.verde,
  },
  cardText: {
    fontSize: "16px",
    lineHeight: 1.55,
    margin: 0,
    color: colors.texto,
  },
  pill: {
    display: "inline-block",
    backgroundColor: "rgba(166, 75, 42, 0.1)",
    color: colors.terracota,
    borderRadius: "999px",
    padding: "12px 22px",
    fontSize: "16px",
    fontWeight: 700,
    margin: "6px",
  },
  pillWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
  },
  cta: {
    backgroundColor: colors.terracota,
    color: colors.white,
    borderRadius: "28px",
    padding: "60px 44px",
    textAlign: "center",
    boxShadow: "0 24px 56px rgba(166, 75, 42, 0.35)",
    margin: "32px 0",
    boxSizing: "border-box",
  },
  ctaText: {
    fontSize: "32px",
    fontWeight: 800,
    lineHeight: 1.3,
    margin: 0,
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    padding: "40px 0 64px",
    textAlign: "center",
    fontSize: "15px",
    color: colors.muted,
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
    title: "Restaurante Boyacense",
    text: "Cocina tradicional de la región con sabores auténticos del altiplano.",
  },
  {
    title: "Hospedaje Colonial",
    text: "Habitaciones acogedoras con arquitectura colonial y atención cálida.",
  },
  {
    title: "Artesanías del Pueblito",
    text: "Piezas hechas a mano que reflejan la cultura y tradición boyacense.",
  },
  {
    title: "Café Colonial",
    text: "El mejor café de origen acompañado de repostería artesanal.",
  },
];

const eventos = [
  {
    title: "Bazarte",
    text: "Feria de arte y artesanía que reúne a creadores de toda la región.",
  },
  {
    title: "Pueblito Brilla",
    text: "Espectáculo de luces e iluminación que transforma el pueblito.",
  },
  {
    title: "Semana Santa Cultural",
    text: "Tradición, fe y cultura en una celebración inolvidable.",
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
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <span style={styles.brandDot} />
            Pueblito Boyacense
          </div>
          <nav style={styles.nav}>
            <span style={styles.navLink}>Servicios</span>
            <span style={styles.navLink}>Eventos</span>
            <span style={styles.navLink}>Plazoletas</span>
            <span style={styles.navPanel}>Panel</span>
          </nav>
        </div>
      </header>

      <main>
        <section style={styles.container}>
          <div style={styles.heroWrap}>
            <div>
              <h1 style={styles.heroTitle}>
                Una app turística para vivir Pueblito Boyacense
              </h1>
              <p style={styles.heroText}>
                Servicios, eventos, cultura, gastronomía y experiencias locales
                en una plataforma móvil administrada profesionalmente.
              </p>
              <div style={styles.heroButtons}>
                <button style={styles.btnPrimary}>
                  Ver experiencia turística
                </button>
                <button style={styles.btnSecondary}>
                  Ver panel administrado
                </button>
              </div>
            </div>

            <div style={styles.phoneWrap}>
              <div style={styles.phone}>
                <div style={styles.phoneNotch} />
                <div style={styles.phoneHeader}>Pueblito Boyacense</div>
                <p style={styles.phoneLabel}>Servicios destacados</p>
                <div style={styles.phoneItem}>Restaurante Boyacense</div>
                <div style={styles.phoneItem}>Hospedaje Colonial</div>
                <div style={styles.phoneItem}>Café Colonial</div>
                <p style={styles.phoneLabel}>Evento próximo</p>
                <div style={styles.phoneEvent}>Bazarte — Este fin de semana</div>
                <div style={styles.phoneWhatsapp}>WhatsApp</div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>En cifras</h2>
            <div style={styles.metricsGrid}>
              {metricas.map((m) => (
                <div key={m.label} style={styles.card}>
                  <p style={styles.metricNumber}>{m.number}</p>
                  <p style={styles.metricLabel}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
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

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Servicios destacados</h2>
            <div style={styles.grid}>
              {servicios.map((s) => (
                <div key={s.title} style={styles.card}>
                  <h3 style={styles.cardTitle}>{s.title}</h3>
                  <p style={styles.cardText}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Eventos</h2>
            <div style={styles.grid}>
              {eventos.map((e) => (
                <div key={e.title} style={styles.card}>
                  <h3 style={styles.cardTitle}>{e.title}</h3>
                  <p style={styles.cardText}>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Panel administrado</h2>
            <p style={styles.sectionSubtitle}>
              Una plataforma gestionada profesionalmente para mantener todo al
              día.
            </p>
            <div style={styles.grid}>
              {panel.map((p) => (
                <div key={p.title} style={styles.card}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardText}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.cta}>
            <p style={styles.ctaText}>
              Una solución digital administrada para fortalecer el turismo del
              Pueblito Boyacense.
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          Pueblito Boyacense — Demo visual premium v3
        </footer>
      </main>
    </div>
  );
}
