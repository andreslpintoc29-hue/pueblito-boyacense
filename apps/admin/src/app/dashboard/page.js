"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

const MODULES = [
  { href: "/services", icon: "🍽️", title: "Servicios", desc: "Restaurantes, hospedajes, cafeterías, artesanías y servicios turísticos." },
  { href: "/events", icon: "🎭", title: "Eventos", desc: "Actividades culturales y programación especial." },
  { href: "/plazas", icon: "🏛️", title: "Plazoletas", desc: "Información cultural de las siete plazoletas." },
  { href: "/gallery", icon: "🖼️", title: "Galería", desc: "Imágenes y material visual." },
  { href: "/settings", icon: "⚙️", title: "Configuración", desc: "Datos generales, banners, colores y contacto." },
  { href: "/useful-info", icon: "📌", title: "Información útil", desc: "Horarios, normas, tarifas, recomendaciones y preguntas frecuentes." },
];

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

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F7F1E5", color: "#2B2118", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
        <p>Cargando sesión...</p>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F7F1E5", padding: "2rem", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", color: "#2B2118" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", maxWidth: "480px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚠️</div>
          <h1 style={{ fontSize: "1.25rem", margin: 0 }}>Supabase no está configurado. Revisa apps/admin/.env.local</h1>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F7F1E5", padding: "2rem", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", color: "#2B2118" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", maxWidth: "420px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔒</div>
          <h1 style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>No has iniciado sesión</h1>
          <Link href="/login" style={{ display: "inline-block", backgroundColor: "#A64B2A", color: "#FFFFFF", padding: "0.75rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600 }}>Ir a Iniciar Sesión</Link>
        </div>
      </div>
    );
  }

  const kpis = [
    { icon: "🧩", label: "Módulos activos", value: "6" },
    { icon: "📝", label: "Contenido editable", value: "Sí" },
    { icon: "🟢", label: "Estado del panel", value: "Operativo" },
  ];

  const fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, sans-serif";

  return (
    <div style={{ minHeight: "100vh", display: "flex", backgroundColor: "#F7F1E5", color: "#2B2118", fontFamily }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", backgroundColor: "#A64B2A", color: "#FFFFFF", padding: "1.75rem 1.25rem", display: "flex", flexDirection: "column", position: "sticky", top: 0, alignSelf: "flex-start", height: "100vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: "1.75rem" }}>🏘️</span>
          <span style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.2 }}>Pueblito<br />Boyacense</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: 1 }}>
          {MODULES.map((m) => (
            <Link key={m.href} href={m.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#FFFFFF", textDecoration: "none", padding: "0.7rem 0.85rem", borderRadius: "10px", fontWeight: 500, transition: "background 0.2s", backgroundColor: "rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: "1.1rem" }}>{m.icon}</span>
              <span>{m.title}</span>
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: "0.75rem", opacity: 0.85, marginTop: "1.5rem", lineHeight: 1.4 }}>Este panel no está destinado al cliente final.</p>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Header */}
        <header style={{ backgroundColor: "#FFFFFF", padding: "1.25rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.5rem", color: "#2B2118" }}>Panel de Administración</h1>
            <p style={{ margin: "0.25rem 0 0", color: "#A64B2A", fontSize: "0.9rem", fontWeight: 500 }}>Administra contenidos de Pueblito Boyacense</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.9rem", color: "#2B2118" }}>👤 {session.user.email}</span>
            <button onClick={handleSignOut} style={{ backgroundColor: "#1B5E20", color: "#FFFFFF", border: "none", padding: "0.6rem 1.25rem", borderRadius: "10px", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem" }}>Cerrar sesión</button>
          </div>
        </header>

        {/* Content */}
        <main style={{ padding: "2rem", flex: 1 }}>
          <p style={{ marginTop: 0, marginBottom: "1.75rem", color: "#5a4f42", maxWidth: "720px", lineHeight: 1.5 }}>Gestiona servicios, eventos, plazoletas, galería, configuración e información útil desde un solo lugar.</p>

          {/* KPI cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "2.25rem" }}>
            {kpis.map((k) => (
              <div key={k.label} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "1.75rem", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F7F1E5", borderRadius: "12px" }}>{k.icon}</div>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "#8a7d6c" }}>{k.label}</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1B5E20" }}>{k.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Module grid */}
          <h2 style={{ fontSize: "1.2rem", marginBottom: "1.25rem", color: "#2B2118" }}>Módulos del panel</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {MODULES.map((m) => (
              <div key={m.href} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontSize: "2rem", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F7F1E5", borderRadius: "14px" }}>{m.icon}</div>
                <h3 style={{ margin: 0, color: "#A64B2A", fontSize: "1.15rem" }}>{m.title}</h3>
                <p style={{ margin: 0, color: "#5a4f42", lineHeight: 1.5, flex: 1 }}>{m.desc}</p>
                <Link href={m.href} style={{ display: "inline-block", marginTop: "0.5rem", backgroundColor: "#1B5E20", color: "#FFFFFF", padding: "0.65rem 1.25rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, textAlign: "center", fontSize: "0.9rem" }}>Abrir módulo</Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}