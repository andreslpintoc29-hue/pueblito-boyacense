"use client";

import React from "react";

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
  },
  navPanel: {
    fontSize: "16px",
    fontWeight: 700,
    color: colors.white,
    backgroundColor: colors.verde,
    borderRadius: "12px",
    padding: "12px 22px",
    cursor: "pointer",
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
    margin: 0,
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

  /* CTA */
  ctaSection: {
    backgroundColor: colors.bg,
    padding: "90px 0",
  },
  cta: {
    background:
      "linear-gradient(135deg, #A64B2A 0%, #6E2E18 100%)",
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
        {/* HERO FULL WIDTH */}
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

        {/* MÉTRICAS — fondo blanco */}
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

        {/* EXPERIENCIA — fondo gris */}
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

        {/* SERVICIOS — fondo blanco */}
        <section style={styles.sectionLight}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Servicios destacados</h2>
            <p style={styles.sectionSubtitle}>
              Lo mejor del Pueblito, listo para descubrir.
            </p>
            <div style={styles.grid}>
              {servicios.map((s) => (
                <div key={s.title} style={styles.cardOnWhite}>
                  <h3 style={styles.cardTitle}>{s.title}</h3>
                  <p style={styles.cardText}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTOS — fondo gris */}
        <section style={styles.sectionGray}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Eventos</h2>
            <p style={styles.sectionSubtitle}>
              Una agenda cultural viva durante todo el año.
            </p>
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

        {/* PANEL — fondo blanco */}
        <section style={styles.sectionLight}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Panel administrado</h2>
            <p style={styles.sectionSubtitle}>
              Una plataforma gestionada profesionalmente para mantener todo al
              día.
            </p>
            <div style={styles.grid}>
              {panel.map((p) => (
                <div key={p.title} style={styles.cardOnWhite}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardText}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <div style={styles.cta}>
              <p style={styles.ctaText}>
                Una solución digital administrada para fortalecer el turismo del
                Pueblito Boyacense.
              </p>
              <button style={styles.btnPrimary}>Solicitar demo</button>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          Pueblito Boyacense — Demo visual premium v3
        </footer>
      </main>
    </div>
  );
}
