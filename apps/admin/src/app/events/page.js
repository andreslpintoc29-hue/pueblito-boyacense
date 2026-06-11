"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function EventsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("event_date", { ascending: true });

        if (error) {
          console.error(error);
          setError("Error al cargar eventos.");
        } else {
          setEvents(data || []);
        }
      } catch (err) {
        console.error(err);
        setError("Error inesperado al cargar eventos.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Eventos</h1>
      <Link href="#" style={{ display: "inline-block", marginBottom: "1rem", background: "#0070f3", color: "white", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>Nuevo evento</Link>
      {events.length === 0 ? (
        <p>No hay eventos registrados aún.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Fecha: {event.event_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}