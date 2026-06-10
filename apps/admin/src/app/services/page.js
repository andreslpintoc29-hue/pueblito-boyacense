"use client";

const services = [
  "Restaurante de ejemplo",
  "Hospedaje de ejemplo",
  "Artesanía de ejemplo",
];

export default function ServicesPage() {
  return (
    <main className="page" style={{ alignItems: "flex-start" }}>
      <section className="card" style={{ maxWidth: "860px" }}>
        <span className="eyebrow">Pueblito Boyacense</span>
        <h1>Servicios — Pueblito Boyacense</h1>
        <p>
          Administra restaurantes, hospedajes, cafeterías, artesanías, spa,
          capilla y otros servicios turísticos.
        </p>

        <div style={{ marginTop: "16px", textAlign: "left" }}>
          <button
            type="button"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#1B5E20",
              color: "#FFFFFF",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Nuevo servicio
          </button>
        </div>

        <ul
          style={{
            listStyle: "none",
            margin: "24px 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "left",
          }}
        >
          {services.map((name) => (
            <li
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                border: "1px solid #d8cdb8",
                borderLeft: "4px solid #A64B2A",
                borderRadius: "10px",
                padding: "16px 20px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <span style={{ fontWeight: 600, color: "#2B2118" }}>{name}</span>
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#A64B2A",
                  backgroundColor: "#F7F1E5",
                  padding: "4px 10px",
                  borderRadius: "999px",
                }}
              >
                Pendiente
              </span>
            </li>
          ))}
        </ul>

        <p className="note">
          Este módulo será conectado a Supabase en el siguiente paso.
        </p>
      </section>
    </main>
  );
}
