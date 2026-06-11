"use client";

export default function EventsPage() {
  const events = [
    { id: 1, name: "Bazarte", status: "Pendiente" },
    { id: 2, name: "Semana Santa Cultural", status: "Pendiente" },
    { id: 3, name: "Pueblito Brilla", status: "Pendiente" },
  ];

  return (
    <main className="page" style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>
          Eventos — Pueblito Boyacense
        </h1>
        <p style={{ color: "#555", lineHeight: "1.5" }}>
          Administra eventos culturales, turísticos y actividades especiales del Pueblito Boyacense.
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
          Nuevo evento
        </button>
      </div>

      <section className="card" style={{ border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {events.map((event) => (
            <li
              key={event.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <span style={{ fontWeight: "500" }}>{event.name}</span>
              <span
                style={{
                  fontSize: "13px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                }}
              >
                {event.status}
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
        Este módulo será conectado a Supabase en el siguiente paso.
      </p>
    </main>
  );
}
