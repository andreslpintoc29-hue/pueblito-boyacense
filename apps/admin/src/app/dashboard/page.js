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
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#2B2118" }}>
        <h1>Supabase no está configurado. Revisa apps/admin/.env.local</h1>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#2B2118" }}>
        <h1>No has iniciado sesión</h1>
        <Link href="/login" style={{ color: "#A64B2A", fontWeight: "bold" }}>Ir a Iniciar Sesión</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F1E5", fontFamily: "Arial, sans-serif", color: "#2B2118" }}>
      <header style={{ backgroundColor: "#A64B2A", color: "white", padding: "1rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Panel de Administración</h1>
        <p>Administra contenidos de Pueblito Boyacense</p>
      </header>
      <main style={{ maxWidth: "1200px", margin: "2rem auto", padding: "1rem" }}>
        <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <p style={{ marginBottom: "1rem" }}>Bienvenido, <strong>{session.user.email}</strong></p>
          <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>Este panel no está destinado al cliente final.</p>
          <p style={{ marginBottom: "1.5rem" }}>Gestiona servicios, eventos, plazoletas, galería, configuración e información útil desde un solo lugar.</p>
          <button onClick={handleSignOut} style={{ backgroundColor: "#1B5E20", color: "white", border: "none", padding: "0.75rem 1.5rem", borderRadius: "6px", cursor: "pointer", marginBottom: "2rem" }}>Cerrar sesión</button>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Servicios</h3>
              <p>Restaurantes, hospedajes, cafeterías, artesanías y servicios turísticos.</p>
              <Link href="/services" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Eventos</h3>
              <p>Actividades culturales y programación especial.</p>
              <Link href="/events" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Plazoletas</h3>
              <p>Información cultural de las siete plazoletas.</p>
              <Link href="/plazas" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Galería</h3>
              <p>Imágenes y material visual.</p>
              <Link href="/gallery" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Configuración</h3>
              <p>Datos generales, banners, colores y contacto.</p>
              <Link href="/settings" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
            <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#A64B2A" }}>Información útil</h3>
              <p>Horarios, normas, tarifas, recomendaciones y preguntas frecuentes.</p>
              <Link href="/useful-info" style={{ color: "#1B5E20", fontWeight: "bold" }}>Abrir módulo</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}