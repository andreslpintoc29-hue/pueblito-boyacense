"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }

      try {
        const { data: appSettingsData } = await supabase.from("app_settings").select("*");
        const { data: contactInfoData } = await supabase.from("contact_info").select("*");

        setSettings({
          appSettings: appSettingsData || [],
          contactInfo: contactInfoData || []
        });
      } catch (err) {
        console.error(err);
        setError("Error al cargar configuración.");
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  if (loading) return <p>Cargando configuración...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Configuración</h1>
      {settings ? (
        <div>
          <h2>App Settings</h2>
          <ul>
            {settings.appSettings.map((item, idx) => (
              <li key={idx}>{item.key}: {item.value}</li>
            ))}
          </ul>
          <h2>Contact Info</h2>
          <ul>
            {settings.contactInfo.map((item, idx) => (
              <li key={idx}>{item.type}: {item.value}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay configuración registrada aún.</p>
      )}
    </div>
  );
}