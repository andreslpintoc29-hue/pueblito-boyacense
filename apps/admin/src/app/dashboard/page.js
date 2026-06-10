"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const modules = [
  { name: "Servicios", href: "/services" },
  { name: "Eventos", href: null },
  { name: "Plazoletas", href: null },
  { name: "Galería", href: null },
  { name: "Configuración", href: null },
  { name: "Información útil", href: null },
];

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function loadSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session ?? null);
      setLoading(false);
    }
    loadSession();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(null);
  }

  if (loading) {
    return (
      <main className="page">
        <section className="card">
          <span className="eyebrow">Pueblito Boyacense</span>
          <h1>Dashboard — Pueblito Boyacense</h1>
          <p>Cargando sesión...</p>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="page">
        <section className="card">
          <span className="eyebrow">Pueblito Boyacense</span>
          <h1>Dashboard — Pueblito Boyacense</h1>
          <p>No hay sesión activa. Inicia sesión para continuar.</p>
          <p>
            <a href="/login" style={{ color: "#1B5E20", fontWeight: 600 }}>
              Ir a iniciar sesión
            </a>
          </p>
          <p className="note">Este panel no está destinado al cliente final.</p>
        </section>
      </main>
    );
  }

  const userEmail = session?.user?.email;

  return (
    <main className="page" style={{ alignItems: "flex-start" }}>
      <section className="card" style={{ maxWidth: "960px" }}>
        <span className="eyebrow">Pueblito Boyacense</span>
        <h1>Dashboard — Pueblito Boyacense</h1>
        <p>Panel privado para administrar contenidos de la app.</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          {userEmail ? (
            <span style={{ fontWeight: 600, color: "#2B2118" }}>
              Sesión: {userEmail}
            </span>
          ) : (
            <span style={{ fontWeight: 600, color: "#2B2118" }}>
              Sesión activa
            </span>
          )}
          <button
            type="button"
            onClick={handleSignOut}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #A64B2A",
              backgroundColor: "#FFFFFF",
              color: "#A64B2A",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cerrar sesión
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "24px",
            textAlign: "left",
          }}
        >
          {modules.map((module) => (
            <div
              key={module.name}
              style={{
                border: "1px solid #d8cdb8",
                borderTop: "4px solid #A64B2A",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(43, 33, 24, 0.05)",
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#2B2118" }}>
                {module.name}
              </h3>
              {module.href ? (
                <a
                  href={module.href}
                  style={{
                    display: "inline-block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1B5E20",
                  }}
                >
                  Abrir módulo
                </a>
              ) : (
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
              )}
            </div>
          ))}
        </div>

        <p className="note">Este panel no está destinado al cliente final.</p>
      </section>
    </main>
  );
}
