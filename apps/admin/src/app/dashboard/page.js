"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function loadSession() {
      if (!supabase) {
        setLoading(false);
        setSession(null);
        return;
      }
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
        setSession(null);
      } else {
        setSession(data.session);
      }
      setLoading(false);
    }
    loadSession();
  }, []);

  async function handleSignOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
  }

  if (loading) return <p>Cargando sesión...</p>;

  if (!supabase) {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#2B2118", background: "#F7F1E5", minHeight: "100vh" }}>
        <h1>Supabase no está configurado. Revisa apps/admin/.env.local</h1>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#2B2118", background: "#F7F1E5", minHeight: "100vh" }}>
        <h1>No has iniciado sesión</h1>
        <Link href="/login" style={{ color: "#A64B2A", fontWeight: "bold" }}>Ir a Iniciar Sesión</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F1E5", color: "#2B2118", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside
          style={{
            flex: "0 0 260px",
            backgroundColor: "#A64B2A",
            color: "#FFFFFF",
            padding: "1.25rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 36, height: 36, background: "#FFFFFF22", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏞️</div>
            <h2 style={{ margin: 0, fontSize: 18 }}>Pueblito Boyacense</h2>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
            <Link href="/services" style={sidebarLinkStyle}>🛎️ Servicios</Link>
            <Link href="/events" style={sidebarLinkStyle}>📅 Eventos</Link>
            <Link href="/plazas" style={sidebarLinkStyle}>🏛️ Plazoletas</Link>
            <Link href="/gallery" style={sidebarLinkStyle}>🖼️ Galería</Link>
            <Link href="/settings" style={sidebarLinkStyle}>⚙️ Configuración</Link>
            <Link href="/useful-info" style={sidebarLinkStyle}>ℹ️ Información útil</Link>
          </nav>
          <div style={{ marginTop: "auto", fontSize: 12, opacity: 0.9 }}>
            <p style={{ margin: 0 }}>Este panel no está destinado al cliente final.</p>
          </div>
        </aside>

        {/* Main area */}
        <section style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {/* Top bar */}
          <div
            style={{
              background: "#fff",
              borderBottom: "1px solid #e6e2da",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: 20 }}>Panel de Administración</h1>
              <p style={{ margin: 0, color: "#6b5f55", fontSize: 13 }}>Administra contenidos de Pueblito Boyacense</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: 14, color: "#2B2118" }}>{session.user.email}</span>
              <button
                onClick={handleSignOut}
                style={{
                  backgroundColor: "#1B5E20",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 0.9rem",
                  borderRadius: 6,
                  cursor: "pointer",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
              >
                Cerrar sesión
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "1.25rem", maxWidth: 1280, width: "100%", margin: "0 auto" }}>
            {/* Summary cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={summaryCardStyle}>
                <div style={summaryIconStyle}>📦</div>
                <div>
                  <div style={summaryTitleStyle}>Módulos activos</div>
                  <div style={summaryValueStyle}>6</div>
                </div>
              </div>
              <div style={summaryCardStyle}>
                <div style={summaryIconStyle}>📝</div>
                <div>
                  <div style={summaryTitleStyle}>Contenido editable</div>
                  <div style={summaryValueStyle}>Lectura y visualización</div>
                </div>
              </div>
              <div style={summaryCardStyle}>
                <div style={summaryIconStyle}>✅</div>
                <div>
                  <div style={summaryTitleStyle}>Estado del panel</div>
                  <div style={summaryValueStyle}>Activo</div>
                </div>
              </div>
            </div>

            {/* Modules grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              <ModuleCard
                emoji="🛎️"
                title="Servicios"
                description="Restaurantes, hospedajes, cafeterías, artesanías y servicios turísticos."
                href="/services"
              />
              <ModuleCard
                emoji="📅"
                title="Eventos"
                description="Actividades culturales y programación especial."
                href="/events"
              />
              <ModuleCard
                emoji="🏛️"
                title="Plazoletas"
                description="Información cultural de las siete plazoletas."
                href="/plazas"
              />
              <ModuleCard
                emoji="🖼️"
                title="Galería"
                description="Imágenes y material visual."
                href="/gallery"
              />
              <ModuleCard
                emoji="⚙️"
                title="Configuración"
                description="Datos generales, banners, colores y contacto."
                href="/settings"
              />
              <ModuleCard
                emoji="ℹ️"
                title="Información útil"
                description="Horarios, normas, tarifas, recomendaciones y preguntas frecuentes."
                href="/useful-info"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Inline styles helpers
const sidebarLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 0.6rem",
  borderRadius: 6,
  display: "block",
  background: "#ffffff12",
};

const cardBase = {
  backgroundColor: "#fff",
  border: "1px solid #E7E2D8",
  borderRadius: 10,
  boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
};

const summaryCardStyle = {
  ...cardBase,
  padding: "0.9rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

const summaryIconStyle = {
  width: 40,
  height: 40,
  borderRadius: 8,
  background: "#1B5E20",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  boxShadow: "0 2px 6px rgba(27,94,32,0.25)",
};

const summaryTitleStyle = { fontSize: 12, color: "#6b5f55" };
const summaryValueStyle = { fontSize: 16, fontWeight: 700 };

function ModuleCard({ emoji, title, description, href }) {
  return (
    <div style={{ ...cardBase, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: "#A64B2A15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{emoji}</div>
        <h3 style={{ margin: 0, color: "#A64B2A" }}>{title}</h3>
      </div>
      <p style={{ margin: 0, color: "#4a3f36" }}>{description}</p>
      <div style={{ marginTop: "0.5rem" }}>
        <Link
          href={href}
          style={{
            background: "#1B5E20",
            color: "#fff",
            textDecoration: "none",
            padding: "0.5rem 0.9rem",
            borderRadius: 6,
            display: "inline-block",
            fontWeight: 600,
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          }}
        >
          Abrir módulo
        </Link>
      </div>
    </div>
  );
}
