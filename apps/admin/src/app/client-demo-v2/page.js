"use client";

import React from "react";

const colors = {
  bg: "#F7F1E5",
  terracota: "#A64B2A",
  verde: "#1B5E20",
  texto: "#2B2118",
  white: "#FFFFFF",
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
  header: {
    width: "100%",
    backgroundColor: colors.bg,
    borderBottom: "2px solid rgba(166, 75, 42, 0.15)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    padding: "20px 24px",
    maxWidth: "1200px",
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
    gap: "28px",
    flexWrap: "wrap",
  },
  navLink: {
    fontSize: "17px",
    fontWeight: 600,
    color: colors.texto,
    textDecoration: "none",
    cursor: "pointer",
  },
  hero: {
    padding: "80px 0 60px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "56px",
    lineHeight: 1.1,
    fontWeight: 900,
    margin: "0 0 24px",
    color: colors.terracota,
  },
  heroSubtitle: {
    fontSize: "22px",
    lineHeight: 1.5,
    maxWidth: "780px",
    margin: "0 auto 40px",
    color: colors.texto,
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: colors.terracota,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "18px 36px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(166, 75, 42, 0.3)",
  },
  btnSecondary: {
    backgroundColor: colors.verde,
    color: colors.white,
    border: "none",
    borderRadius: "14px",
    padding: "18px 36px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(27, 94, 32, 0.3)",
  },
  section: {
    padding: "48px 0",
  },
  sectionTitle: {
    fontSize: "34px",
    fontWeight: 800,
    margin: "0 0 32px",
    color: colors.verde,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 16px 40px rgba(43, 33, 24, 0.12)",
    boxSizing: "border-box",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },
  metricNumber: {
    fontSize: "44px",
    fontWeight: 900,
    color: colors.terracota,
    margin: "0 0 8px",
  },
  metricLabel: {
    fontSize: "18px",
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
    lineHeight: 1.5,
    margin: 0,
    color: colors.texto,
  },
  pill: {
    display: "inline-block",
    backgroundColor: "rgba(166, 75, 42, 0.1)",
    color: colors.terracota,
    borderRadius: "999px",
    padding: "10px 20px",
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
    borderRadius: "24px",
    padding: "56px 40px",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(166, 75, 42, 0.35)",
    margin: "32px 0",
    boxSizing: "border-box",
  },
  ctaText: {
    fontSize: "30px",
    fontWeight: 800,
    lineHeight: 1.3,
    margin: 0,
    maxWidth: "820px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    padding: "40px 0 60px",
    textAlign: "center",
    fontSize: "15px",
    color: "rgba(43, 33, 24, 0.7)",
  },
};

const categorias = [
  "Restaurantes",
  "Hospedajes",
  "Artesanías",
  "Cafeterías",
  "Spa",
  "Capilla",
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

const plazoletas = [
  "Villa de Leyva",
  "Tibasosa",
  "Tenza",
  "Sáchica",
  "El Cocuy",
  "Monguí",
  "Ráquira",
];

export default function ClientDemoV2Page() {
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
          </nav>
        </div>
      </header>

      <main>
        <section style={styles.container}>
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>Descubre Pueblito Boyacense</h1>
            <p style={styles.heroSubtitle}>
              Una experiencia turística, cultural y gastronómica en el corazón
              de Boyacá.
            </p>
            <div style={styles.heroButtons}>
              <button style={styles.btnPrimary}>Explorar servicios</button>
              <button style={styles.btnSecondary}>Ver eventos</button>
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>En cifras</h2>
            <div style={styles.metricsGrid}>
              <div style={styles.card}>
                <p style={styles.metricNumber}>7</p>
                <p style={styles.metricLabel}>Plazoletas</p>
              </div>
              <div style={styles.card}>
                <p style={styles.metricNumber}>20+</p>
                <p style={styles.metricLabel}>Servicios</p>
              </div>
              <div style={styles.card}>
                <p style={styles.metricNumber}>365</p>
                <p style={styles.metricLabel}>Eventos todo el año</p>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Categorías</h2>
            <div style={styles.card}>
              <div style={styles.pillWrap}>
                {categorias.map((cat) => (
                  <span key={cat} style={styles.pill}>
                    {cat}
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
            <h2 style={styles.sectionTitle}>Plazoletas</h2>
            <div style={styles.card}>
              <div style={styles.pillWrap}>
                {plazoletas.map((p) => (
                  <span key={p} style={styles.pill}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <div style={styles.cta}>
            <p style={styles.ctaText}>
              Una app administrada para mantener vivo el turismo del Pueblito
              Boyacense.
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          Pueblito Boyacense — Demo visual premium
        </footer>
      </main>
    </div>
  );
}
