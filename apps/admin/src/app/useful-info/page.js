"use client";

export default function UsefulInfoPage() {
  const items = [
    { id: 1, name: "Horarios", status: "Pendiente" },
    { id: 2, name: "Recomendaciones", status: "Pendiente" },
    { id: 3, name: "Normas", status: "Pendiente" },
    { id: 4, name: "Tarifas", status: "Pendiente" },
    { id: 5, name: "Preguntas frecuentes", status: "Pendiente" },
  ];

  return (
    <main className="page" style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>
          Información útil — Pueblito Boyacense
        </h1>
        <p style={{ color: "#555", lineHeight: "1.5" }}>
          Administra horarios, recomendaciones, normas, tarifas y preguntas frecuentes para los visitantes.
        </p>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "16px",
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Nueva información
        </button>
      </div>

      <section className="card" style={{ border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <span style={{ fontWeight: "500" }}>{item.name}</span>
              <span
                style={{
                  fontSize: "13px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                }}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p
        style={{
          marginTop: "20px",
          fontSize: "13px",
          color: "#888",
          fontStyle: "italic",
        }}
      >
        Este módulo será conectado a useful_info y faqs en Supabase.
      </p>
    </main>
  );
}
