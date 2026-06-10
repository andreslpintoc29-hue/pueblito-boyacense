"use client";

const modules = [
  "Servicios",
  "Eventos",
  "Plazoletas",
  "Galería",
  "Configuración",
  "Información útil",
];

export default function DashboardPage() {
  return (
    <main className="page" style={{ alignItems: "flex-start" }}>
      <section className="card" style={{ maxWidth: "960px" }}>
        <span className="eyebrow">Pueblito Boyacense</span>
        <h1>Dashboard — Pueblito Boyacense</h1>
        <p>Panel privado para administrar contenidos de la app.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "24px",
            textAlign: "left",
          }}
        >
          {modules.map((name) => (
            <div
              key={name}
              style={{
                border: "1px solid #d8cdb8",
                borderTop: "4px solid #A64B2A",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(43, 33, 24, 0.05)",
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#2B2118" }}>{name}</h3>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#A64B2A",
                  backgroundColor: "#F7F1E5",
                  padding: "4px 10px",
                  borderRadius: "999px",
                }}
              >
                Pendiente de implementar
              </span>
            </div>
          ))}
        </div>

        <p className="note">Este panel no está destinado al cliente final.</p>
      </section>
    </main>
  );
}
