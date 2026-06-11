"use client";

export default function ClientDemo() {
  const categories = [
    { name: "Restaurantes", emoji: "🍽️" },
    { name: "Hospedajes", emoji: "🏨" },
    { name: "Artesanías", emoji: "🧶" },
    { name: "Cafeterías", emoji: "☕" },
    { name: "Spa", emoji: "💆" },
    { name: "Capilla", emoji: "⛪" },
  ];

  const featured = [
    {
      name: "Restaurante Boyacense",
      category: "Restaurantes",
      description:
        "Sabores tradicionales con ingredientes frescos de la región, en un ambiente colonial.",
      schedule: "Lun-Dom 12:00 - 21:00",
      location: "Plazoleta Villa de Leyva",
    },
    {
      name: "Hospedaje Colonial",
      category: "Hospedajes",
      description:
        "Habitaciones acogedoras con detalles en piedra y madera, para una estadía inolvidable.",
      schedule: "Check-in 3:00 PM",
      location: "Plazoleta Monguí",
    },
    {
      name: "Artesanías del Pueblito",
      category: "Artesanías",
      description:
        "Piezas únicas hechas a mano por artesanos locales. Lleva contigo un pedacito de Boyacá.",
      schedule: "Lun-Dom 10:00 - 18:00",
      location: "Plazoleta Ráquira",
    },
    {
      name: "Café Colonial",
      category: "Cafeterías",
      description:
        "Café especial de origen y repostería artesanal en un patio interior lleno de encanto.",
      schedule: "Lun-Dom 8:00 - 20:00",
      location: "Plazoleta Tenza",
    },
  ];

  const events = [
    {
      name: "Bazarte",
      blurb: "Exposición y venta de arte local, música en vivo y muestras gastronómicas.",
    },
    {
      name: "Pueblito Brilla",
      blurb: "Iluminación colonial, recorridos nocturnos y presentaciones culturales.",
    },
    {
      name: "Semana Santa Cultural",
      blurb: "Procesiones, música sacra y muestras de tradición boyacense.",
    },
  ];

  const plazas = [
    "Villa de Leyva",
    "Tibasosa",
    "Tenza",
    "Sáchica",
    "El Cocuy",
    "Monguí",
    "Ráquira",
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brandMark">PB</div>
          <div>
            <h1 className="title">Pueblito Boyacense</h1>
            <p className="subtitle">
              Vive la cultura, arquitectura y tradición de Boyacá en un solo lugar.
            </p>
          </div>
        </div>
        <a href="/services-demo" className="btn btn-primary">Explorar servicios</a>
      </header>

      <main className="container">
        {/* Hero */}
        <section className="hero">
          <div className="heroCard">
            <h2>Descubre un destino único</h2>
            <p>
              Recorre plazoletas inspiradas en los pueblos más emblemáticos de Boyacá. Encuentra
              gastronomía, hospedajes con encanto, arte local y experiencias para todos.
            </p>
            <div className="heroActions">
              <a href="/services-demo" className="btn btn-primary">Explorar servicios</a>
              <a href="#destacados" className="btn btn-ghost">Ver destacados</a>
            </div>
          </div>
        </section>

        {/* Métricas */}
        <section className="metrics" aria-label="Métricas">
          <div className="metric">
            <div className="metricNumber">7</div>
            <div className="metricLabel">plazoletas</div>
          </div>
          <div className="metric">
            <div className="metricNumber">20+</div>
            <div className="metricLabel">servicios turísticos</div>
          </div>
          <div className="metric">
            <div className="metricNumber">∞</div>
            <div className="metricLabel">eventos culturales</div>
          </div>
        </section>

        {/* Categorías */}
        <section className="section" aria-label="Categorías">
          <div className="sectionHeader">
            <h3>Categorías</h3>
            <p>Explora experiencias según tus intereses.</p>
          </div>
          <div className="grid categories">
            {categories.map((c) => (
              <div className="card categoryCard" key={c.name}>
                <div className="categoryIcon" aria-hidden>{c.emoji}</div>
                <div className="categoryName">{c.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Destacados */}
        <section id="destacados" className="section" aria-label="Servicios destacados">
          <div className="sectionHeader">
            <h3>Servicios destacados</h3>
            <p>Una selección con el encanto colonial del Pueblito.</p>
          </div>
          <div className="grid featured">
            {featured.map((s) => (
              <article className="card featuredCard" key={s.name}>
                <div className="chip chip-terra">{s.category}</div>
                <h4 className="cardTitle">{s.name}</h4>
                <p className="cardDesc">{s.description}</p>
                <div className="details">
                  <span className="detail"><span className="detailIcon">⏰</span>{s.schedule}</span>
                  <span className="detail"><span className="detailIcon">📍</span>{s.location}</span>
                </div>
                <div className="cardActions">
                  <button className="btn btn-primary">Ver detalle</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Eventos */}
        <section className="section" aria-label="Eventos">
          <div className="sectionHeader">
            <h3>Eventos</h3>
            <p>Celebra la tradición durante todo el año.</p>
          </div>
          <div className="grid events">
            {events.map((e) => (
              <div className="card eventCard" key={e.name}>
                <div className="chip chip-green">Cultural</div>
                <h4 className="cardTitle">{e.name}</h4>
                <p className="cardDesc">{e.blurb}</p>
                <div className="cardActions">
                  <button className="btn btn-ghost">Más información</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plazoletas */}
        <section className="section" aria-label="Plazoletas">
          <div className="sectionHeader">
            <h3>Plazoletas</h3>
            <p>Arquitectura que rinde homenaje a los pueblos de Boyacá.</p>
          </div>
          <div className="plazas">
            {plazas.map((p) => (
              <span className="plazaChip" key={p}>{p}</span>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="cta">
          <div className="ctaContent">
            <h3>Una app administrada para mantener vivo el turismo del Pueblito Boyacense.</h3>
            <p>
              Gestión sencilla de contenidos, servicios y eventos; diseñada para evolucionar con tu comunidad y visitantes.
            </p>
            <div className="heroActions">
              <a href="/services-demo" className="btn btn-primary">Explorar servicios</a>
              <a href="#" className="btn btn-ghost">Solicitar demo guiada</a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        :root {
          --bg: #F7F1E5;
          --text: #2B2118;
          --terra: #A64B2A;
          --green: #1B5E20;
          --card: #FFFFFF;
          --muted: #6B5F57;
          --shadow: 0 6px 24px rgba(0,0,0,0.08);
          --radius: 12px;
        }
        * { box-sizing: border-box; }
        .page { background: var(--bg); color: var(--text); min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 24px; }

        .header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; position: sticky; top: 0; background: rgba(247,241,229,0.85); backdrop-filter: blur(6px); border-bottom: 1px solid rgba(43,33,24,0.06); z-index: 10; }
        .brand { display: flex; align-items: center; gap: 14px; }
        .brandMark { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--terra), #cc6b4b); color: #fff; display: grid; place-items: center; font-weight: 800; }
        .title { margin: 0; font-size: 20px; line-height: 1.2; }
        .subtitle { margin: 2px 0 0; color: var(--muted); font-size: 14px; }

        .hero { padding: 24px 0 8px; }
        .heroCard { background: var(--card); border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow); border: 1px solid rgba(43,33,24,0.06); }
        .heroCard h2 { margin: 0 0 8px; font-size: 28px; }
        .heroCard p { margin: 0 0 16px; color: var(--muted); }
        .heroActions { display: flex; gap: 12px; flex-wrap: wrap; }

        .metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 8px; }
        .metric { background: var(--card); border-radius: var(--radius); box-shadow: var(--shadow); padding: 20px; border-left: 6px solid var(--terra); display: grid; gap: 4px; }
        .metricNumber { font-size: 28px; font-weight: 800; }
        .metricLabel { color: var(--muted); }

        .section { margin: 28px 0; }
        .sectionHeader h3 { margin: 0; font-size: 20px; }
        .sectionHeader p { margin: 4px 0 16px; color: var(--muted); }

        .grid { display: grid; gap: 16px; }
        .categories { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
        .featured { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        .events { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }

        .card { background: var(--card); border-radius: var(--radius); box-shadow: var(--shadow); padding: 18px; border: 1px solid rgba(43,33,24,0.06); }

        .categoryCard { display: grid; grid-template-columns: 48px 1fr; align-items: center; gap: 12px; border-left: 6px solid var(--green); }
        .categoryIcon { width: 48px; height: 48px; background: #fff7f3; display: grid; place-items: center; border-radius: 10px; font-size: 22px; }
        .categoryName { font-weight: 700; }

        .featuredCard { display: grid; gap: 10px; border-top: 6px solid rgba(166,75,42,0.6); }
        .chip { display: inline-block; padding: 6px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; letter-spacing: 0.2px; }
        .chip-terra { background: rgba(166,75,42,0.12); color: var(--terra); border: 1px solid rgba(166,75,42,0.3); }
        .chip-green { background: rgba(27,94,32,0.12); color: var(--green); border: 1px solid rgba(27,94,32,0.3); }

        .cardTitle { margin: 0; font-size: 18px; }
        .cardDesc { margin: 0; color: var(--muted); }
        .details { display: flex; gap: 10px; flex-wrap: wrap; color: var(--muted); }
        .detail { background: #faf7f2; border: 1px solid rgba(43,33,24,0.06); padding: 6px 10px; border-radius: 999px; font-size: 12px; }
        .detailIcon { margin-right: 6px; }
        .cardActions { margin-top: 6px; }

        .eventCard { border-top: 6px solid rgba(27,94,32,0.6); }

        .plazas { display: flex; flex-wrap: wrap; gap: 10px; }
        .plazaChip { padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(27,94,32,0.35); color: var(--green); background: rgba(27,94,32,0.06); font-weight: 700; }

        .cta { margin: 36px 0 60px; }
        .ctaContent { background: var(--card); border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); border-left: 8px solid var(--terra); }
        .ctaContent h3 { margin: 0 0 6px; }
        .ctaContent p { margin: 0 0 14px; color: var(--muted); }

        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 14px; border-radius: 10px; border: 1px solid transparent; cursor: pointer; font-weight: 700; text-decoration: none; transition: all .2s ease; }
        .btn-primary { background: var(--green); color: #fff; }
        .btn-primary:hover { filter: brightness(0.95); transform: translateY(-1px); }
        .btn-ghost { background: transparent; color: var(--terra); border-color: rgba(166,75,42,0.4); }
        .btn-ghost:hover { background: rgba(166,75,42,0.08); }

        @media (max-width: 720px) {
          .heroCard { padding: 24px; }
          .metrics { grid-template-columns: 1fr; }
          .header { position: static; }
        }
      `}</style>
    </div>
  );
}
