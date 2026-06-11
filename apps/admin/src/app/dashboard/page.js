"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
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
      <div>
        <h1>Supabase no está configurado. Revisa apps/admin/.env.local</h1>
      </div>
    );
  }

  if (!session) {
    return (
      <div>
        <h1>No has iniciado sesión</h1>
        <Link href="/login">Ir a Iniciar Sesión</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {session.user.email}</p>
      <button onClick={handleSignOut}>Cerrar sesión</button>
      <nav style={{ marginTop: "1rem" }}>
        <ul>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/events">Eventos</Link>
          </li>
          <li>
            <Link href="/plazas">Plazoletas</Link>
          </li>
          <li>
            <Link href="/gallery">Galería</Link>
          </li>
          <li>
            <Link href="/settings">Configuración</Link>
          </li>
          <li>
            <Link href="/useful-info">Información útil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}